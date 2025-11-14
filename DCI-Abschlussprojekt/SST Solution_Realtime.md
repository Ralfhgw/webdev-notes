Node Backend — WebSocket Proxy (Skelett)

Dieses Beispiel ist ein robustes, framework-freies Skeleton. Ergänze Provider-spezifische Handshakes, Header und gewünschtes Audioformat/Resampling.
```
// server-realtime-proxy.js
import http from "http";
import { WebSocketServer } from "ws";
import { spawn } from "child_process";

/*
Env:
  STT_WS_URL   -> WebSocket-URL des STT-Anbieters (z. B. wss://api.some-stt/stream)
  STT_API_KEY  -> API Key
  PORT         -> Port für diesen Node-WS-Server (z. B. 3001)
*/

const PORT = process.env.PORT || 3001;
const STT_WS_URL = process.env.STT_WS_URL;
const STT_API_KEY = process.env.STT_API_KEY;

const server = http.createServer();
const wss = new WebSocketServer({ server });

// Clients: Asterisk connects as an audio-sender client
// Browsers connect as "ui" clients to receive transcripts
const audioSenders = new Set();
const uiClients = new Set();

wss.on("connection", (ws, req) => {
  // Simple protocol: first message identifies role: {type:"sender"} or {type:"ui"}
  ws.once("message", (msg) => {
    let obj;
    try { obj = JSON.parse(msg.toString()); } catch(e) { ws.close(); return; }

    if (obj.type === "sender") {
      audioSenders.add(ws);
      console.log("Audio sender connected (Asterisk).");

      // For each new sender connection, open a STT streaming WS
      setupSenderProxy(ws).catch(err => {
        console.error("Proxy error:", err);
        try { ws.send(JSON.stringify({type:"error", message: String(err)})); } catch {}
      });

      ws.on("close", () => {
        audioSenders.delete(ws);
        console.log("Audio sender disconnected");
      });

    } else if (obj.type === "ui") {
      uiClients.add(ws);
      console.log("UI client connected");
      ws.on("close", () => uiClients.delete(ws));
    } else {
      ws.close();
    }
  });
});

server.listen(PORT, () => console.log(`WS-Proxy läuft auf ws://localhost:${PORT}`));

/**
 * Proxyt einen einzelnen Audio-Sender zu einem STT-Streaming-Endpunkt und broadcastet
 * Transkript-Events an uiClients.
 */
async function setupSenderProxy(senderWs) {
  // Build STT WebSocket connection here (anbieterspezifisch)
  // Pseudocode: we create a ws connection to STT, forward binary audio frames we receive from senderWs,
  // and forward text events from STT back to uiClients.
  //
  // Many STT-APIs benötigen einen initialen "start" JSON message. Passe das an.
  //
  const WebSocket = (await import("ws")).default;
  const sttWs = new WebSocket(STT_WS_URL, {
    headers: { Authorization: `Bearer ${STT_API_KEY}` }
  });

  sttWs.on("open", () => {
    console.log("STT-WebSocket geöffnet");

    // Beispiel: falls STT einen start-Befehl benötigt, sende ihn:
    // sttWs.send(JSON.stringify({ type: "start", encoding: "pcm16", sample_rate: 16000 }));
  });

  sttWs.on("message", (msg) => {
    // STT sendet Events (JSON) mit Transcript/partial/final
    let data;
    try { data = JSON.parse(msg.toString()); } catch(e) { return; }

    // Broadcast an alle UI Clients
    for (const ui of uiClients) {
      if (ui.readyState === ui.OPEN) ui.send(JSON.stringify({ type: "transcript", payload: data }));
    }
  });

  sttWs.on("close", () => console.log("STT connection closed"));

  senderWs.on("message", (msg) => {
    // Erwartung: Asterisk sendet base64-encoded audio frames oder raw binary.
    // Falls base64:
    //   const decoded = Buffer.from(msg.toString(), "base64");
    // Falls raw binary, forward direkt.
    //
    // Achtung: STT-WebSocket oft erwartet raw binary audio frames (PCM). Prüfe Provider.
    try {
      // Erkennung heuristisch: ist msg is Buffer?
      if (typeof msg === "string") {
        // assume it's base64
        const decoded = Buffer.from(msg, "base64");
        if (sttWs.readyState === sttWs.OPEN) sttWs.send(decoded);
      } else {
        // binary buffer
        if (sttWs.readyState === sttWs.OPEN) sttWs.send(msg);
      }
    } catch (err) {
      console.error("Fehler beim Weiterleiten des Audio-Frames:", err);
    }
  });

  // Clean up when sender disconnects
  senderWs.on("close", () => {
    if (sttWs && sttWs.readyState === sttWs.OPEN) sttWs.close();
  });
}
```
Wie Asterisk sich verbindet

Asterisk ExternalMedia / ARI kann so konfiguriert werden, dass es WebSocket zu deinem Node proxy öffnet und Audioframes als base64 sendet.

In ARI-App konfigurierst du die Stasis-App für ExternalMedia und gibst die WS-URL deines Node-Proxys an. (Wenn deine Asterisk-Version das nicht bietet, siehe Variante B.)

2) React Frontend — empfangen der Transkript-Events
```
// src/RealtimeTranskript.jsx
import { useEffect, useState } from "react";

export default function RealtimeTranskript() {
  const [status, setStatus] = useState("Verbinde...");
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001");
    ws.onopen = () => {
      setStatus("Verbunden");
      // Tell server this is a UI client:
      ws.send(JSON.stringify({ type: "ui" }));
    };
    ws.onmessage = (ev) => {
      try {
        const msg = JSON.parse(ev.data);
        if (msg.type === "transcript") {
          // msg.payload = provider-event, passe je nach Provider an
          // Beispiel: provider sendet { text: "...", is_final: true }
          const payload = msg.payload;
          // heuristik:
          const text = payload.text || payload.transcript || JSON.stringify(payload);
          setLines((s) => [...s, text]);
        } else if (msg.type === "info") {
          setStatus(msg.message);
        }
      } catch (e) {
        console.error("WS parse error", e);
      }
    };
    ws.onclose = () => setStatus("Verbindung getrennt");
    ws.onerror = (e) => console.error("WS error", e);
    return () => ws.close();
  }, []);

  return (
    <div>
      <h2>{status}</h2>
      <div style={{ whiteSpace: "pre-wrap", background: "#f3f3f3", padding: 12, height: 400, overflow: "auto" }}>
        {lines.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </div>
  );
}
```