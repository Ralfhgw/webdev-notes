- Asterisk → speichert call-12345.wav
- Node.js Backend → erkennt neue Datei, sendet sie an STT
- STT (z. B. AssemblyAI) → liefert Text zurück
- Node.js → schickt Transkript live an React per WebSocket
- React → zeigt Text in Echtzeit an

```
npm install express ws node-fetch
```

server.js
```
import fs from "fs";
import express from "express";
import fetch from "node-fetch";
import { WebSocketServer } from "ws";

const app = express();
const port = 3001;
const API_KEY = process.env.ASSEMBLYAI_API_KEY;

// WebSocket Server starten
const wss = new WebSocketServer({ noServer: true });
const clients = new Set();

// HTTP + WS kombinieren
const server = app.listen(port, () => {
  console.log(`✅ Backend läuft auf http://localhost:${port}`);
});

server.on("upgrade", (req, socket, head) => {
  wss.handleUpgrade(req, socket, head, (ws) => {
    clients.add(ws);
    ws.on("close", () => clients.delete(ws));
  });
});

function broadcast(message) {
  for (const ws of clients) {
    if (ws.readyState === ws.OPEN) ws.send(JSON.stringify(message));
  }
}

// Watch /tmp
fs.watch("/tmp", async (eventType, filename) => {
  if (filename?.endsWith(".wav")) {
    console.log("🎧 Neue Aufnahme erkannt:", filename);
    const filePath = `/tmp/${filename}`;
    const audioData = fs.readFileSync(filePath);

    // Upload zur STT API
    const uploadRes = await fetch("https://api.assemblyai.com/v2/upload", {
      method: "POST",
      headers: { authorization: API_KEY },
      body: audioData,
    });
    const { upload_url } = await uploadRes.json();

    // Transkription starten
    const transRes = await fetch("https://api.assemblyai.com/v2/transcript", {
      method: "POST",
      headers: {
        authorization: API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({ audio_url: upload_url }),
    });
    const transcript = await transRes.json();

    broadcast({ status: "started", id: transcript.id });

    // Warten bis Transkription fertig ist
    let completed = false;
    while (!completed) {
      await new Promise((r) => setTimeout(r, 5000));
      const poll = await fetch(
        `https://api.assemblyai.com/v2/transcript/${transcript.id}`,
        { headers: { authorization: API_KEY } }
      );
      const data = await poll.json();

      if (data.status === "completed") {
        completed = true;
        broadcast({ status: "done", text: data.text });
        console.log("📝 Transkript fertig:", data.text);
      } else if (data.status === "error") {
        completed = true;
        broadcast({ status: "error", error: data.error });
        console.error("❌ Transkript-Fehler:", data.error);
      }
    }
  }
});
```

React-Projekt (src/TranskriptViewer.jsx):
```
import { useEffect, useState } from "react";

export default function TranskriptViewer() {
  const [status, setStatus] = useState("Verbunden wird...");
  const [text, setText] = useState("");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001");

    ws.onopen = () => setStatus("🟢 Verbunden mit Server");
    ws.onclose = () => setStatus("🔴 Verbindung geschlossen");
    ws.onerror = (err) => console.error("WebSocket-Fehler:", err);

    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.status === "started") {
        setStatus("⏳ Transkription läuft...");
      } else if (data.status === "done") {
        setStatus("✅ Fertig");
        setText(data.text);
      } else if (data.status === "error") {
        setStatus("❌ Fehler bei Transkription");
      }
    };

    return () => ws.close();
  }, []);

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-3">🎙️ Live-Transkript</h1>
      <p className="mb-2 text-gray-700">{status}</p>
      <pre className="bg-gray-100 p-3 rounded h-64 overflow-auto">{text}</pre>
    </div>
  );
}
```

Starte deinen Asterisk (der in /tmp WAV-Dateien speichert)
Starte Backend:
```
node server.js
```
Starte React-App:
```
npm run dev
```