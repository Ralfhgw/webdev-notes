### Wesentliche Trigger, die 200 statt 304 auslösen:

#### ETag unterschiedlich
Client sendet If-None-Match mit altem ETag → Server vergleicht und gibt 200, wenn ETag nicht mehr passt.

#### Last-Modified/If-Modified-Since
Client sendet If-Modified-Since; wenn Ressource nach diesem Datum geändert wurde, antwortet der Server 200.

#### max-age abgelaufen + Revalidation
ergibt 200: nach Ablauf von max-age (oder ohne max-age) revalidiert der Cache beim Server; der Server kann 304 (unchanged) oder 200 (changed) zurückgeben.

#### Cache-Eviction
Browser/Proxy hat die gecachte Kopie entfernt (Speicherlimit, manueller Clear) → nächster Request fordert Body → 200.

#### Client erzwingt kompletten Reload
Cache-Control: no-store oder hard reload (Shift+Reload/DevTools Disable Cache) → üblicherweise 200.

#### Server‑Logik/Headers ändern sich 
z. B. kein ETag/Last-Modified mehr → kein Conditional-Response möglich → 200.

#### Keep-Alive server.keepAliveTimeout erreicht
Server beendet die Session mit "Server socket timeout ::1"

Hol Header + Body (initial):
```bash
curl -i http://localhost:3000/number
```

Revalidate mit ETag → erwartetes 304 (sofern unverändert):
```bash
curl -i -H 'If-None-Match: "der-etag-aus-step-1"' http://localhost:3000/number
```

Revalidate mit Last-Modified → 304 wenn unverändert:
```bash
curl -i -H 'If-Modified-Since: "<Last-Modified-Wert>"' http://localhost:3000/number
```

Erzwinge kompletten Reload (keine Nutzung von Cache):
```bash
curl -i -H 'Cache-Control: no-store' http://localhost:3000/number
```

Frage nur Header ab:
```bash
curl -I http://localhost:3000/number
```

Sieh Request/Response Details:
```bash
curl -v http://localhost:3000/number
```

Der Browser sendet einen GET Request und bekommt den ETag mitgeliefert.

```bash
[ralf@DESKTOP-0C6CU08 ~ CPU: 0%]$ curl -i http://localhost:3000/number
HTTP/1.1 200 OK
X-Powered-By: Express
Cache-Control: public, max-age=60
X-Cached-At: 2025-11-27T16:53:54.051Z
ETag: "216-1764262434051"
Last-Modified: Thu, 27 Nov 2025 16:53:54 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 14
Date: Thu, 27 Nov 2025 16:54:18 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```
Wird dieser ETag mitgeliefert, dann sendet der Server ein 304.
```bash
[ralf@DESKTOP-0C6CU08 ~ CPU: 0%]$ curl -i -H 'If-None-Match: "216-1764262434051"' -i http://localhost:3000/number
HTTP/1.1 304 Not Modified
X-Powered-By: Express
Cache-Control: public, max-age=60
X-Cached-At: 2025-11-27T16:53:54.051Z
ETag: "216-1764262434051"
Last-Modified: Thu, 27 Nov 2025 16:53:54 GMT
Date: Thu, 27 Nov 2025 16:54:50 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```
Wir ein anderer ETag im GET Request verwendet, dann wird die Seite neu geladen.
```bash
[ralf@DESKTOP-0C6CU08 ~ CPU: 0%]$ curl -i -H 'If-None-Match: "216-1764262434052"' -i http://localhost:3000/number
HTTP/1.1 200 OK
X-Powered-By: Express
Cache-Control: public, max-age=60
X-Cached-At: 2025-11-27T16:54:57.323Z
ETag: "172-1764262497323"
Last-Modified: Thu, 27 Nov 2025 16:54:57 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 14
Date: Thu, 27 Nov 2025 16:54:57 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```
index.js zum Testen
```javascript
import express from "express";
const app = express();

console.log("index.js loaded");

let cachedNumber = null;
let cachedAt = 0;
const SERVER_TTL_MS = 60000;

function getCachedNumber() {
  const now = Date.now();
  if (cachedNumber === null || now - cachedAt > SERVER_TTL_MS) {
    cachedNumber = Math.floor(Math.random() * 1000);
    cachedAt = now;
  }
  return { number: cachedNumber, cachedAt };
}

app.get("/number", (req, res) => {
  console.log("/number handler called");
  const { number, cachedAt: at } = getCachedNumber();
  const etag = `"${number}-${at}"`;
  console.log("ETAG:", etag);
  res.set("Cache-Control", "public, max-age=30"); // Browser darf 30sec cachen
/* 
Nach dem Ablauf von max-age passiert beim nächsten GET Request folgendes:
A) Ohne ETag / Last-Modified
Browser sendet einfach eine neue Anfrage an den Server.
Der Server liefert die aktuelle Zahl (entweder die alte, falls TTL noch gilt, oder eine neue Zahl).

B) Mit ETag / Last-Modified (wie in deinem Code)
Browser sendet conditional request:
If-None-Match: "<letzter ETag>"
If-Modified-Since: <Zeit der letzten Antwort></Zeit> */

  res.set("X-Cached-At", new Date(at).toISOString());
  res.set("ETag", etag);
  res.set("Last-Modified", new Date(at).toUTCString());

  const ifNoneMatch = req.get("If-None-Match");
  if (ifNoneMatch && ifNoneMatch === etag) {
    console.log("/number -> 304 (If-None-Match matched)");
    res.status(304).end();
    return;
  }

  const ifModifiedSince = req.get("If-Modified-Since");
  if (ifModifiedSince) {
    const sinceMs = Date.parse(ifModifiedSince);
    if (!Number.isNaN(sinceMs) && at <= sinceMs) {
      console.log("/number -> 304 (If-Modified-Since matched)");
      res.status(304).end();
      return;
    }
  }

  res.json({ number });
});

app.get("/number/cookie", (req, res) => {
  const rawCookie = req.headers.cookie || "";
  let incomingCookie = null;

  rawCookie.split(";").forEach((pair) => {
    const [key, value] = pair.trim().split("=");
    if (key === "server_cached_number") {
      incomingCookie = value;
    }
  });

  if (incomingCookie) {
    console.log("Incoming HttpOnly cookie:", incomingCookie);
  } else {
    console.log("No incoming cookie");
  }

  const { number } = getCachedNumber();

  res.setHeader(
    "Set-Cookie",
    `server_cached_number=${number}; Max-Age=30; Path=/; HttpOnly; SameSite=Lax`
  );

  console.log("Set HttpOnly cookie:", number);

  res.set("Cache-Control", "public, max-age=60");
  res.json({ number, incomingCookie });
});

let fakeLocalStorage = {};

app.get("/number/local", (req, res) => {
  const { number } = getCachedNumber();

  res.send(`
    <script>
      localStorage.setItem("server_cached_number", ${number});
      document.body.innerText = "localStorage updated: ${number}";
    </script>
  `);
});

app.get("/number/session", (req, res) => {
  const { number } = getCachedNumber();

  res.send(`
    <script>
      sessionStorage.setItem("server_cached_number", ${number});
      document.body.innerText = "localStorage updated: ${number}";
    </script>
  `);
});

const server = app.listen(3001, () => console.log("Server läuft auf http://localhost:3001"));

server.headersTimeout = 60_000;  
server.keepAliveTimeout = 240_000;  
server.setTimeout(240_000);  

server.on("timeout", (socket) => {
  try {
    console.warn("Server socket timeout", socket.remoteAddress);
  } catch (e) {}
});
server.on("clientError", (err, socket) => {
  console.warn("Client error:", err && err.message);
});
```

### Useful Commands

#### mit Authentifizierung und Body
```bash
$ curl -X POST http://localhost:3000   -H "Host: localhost:3000"   -H "User-Agent: curl/8.0"   -H "Accept: application/json"   -H "Accept-Language: de-DE,de;q=0.9,en;q=0.8"   -H "Accept-Encoding: gzip, deflate, br"   -H "Content-Type: application/json"   -H "Content-Length: 27"   -H "Authorization: Bearer 123456"   -H "Cookie: sessionid=abc123; theme=dark"   -H "X-Requested-With: XMLHttpRequest"   -H "X-Custom-Header: HalloWelt"   -d '{"nachricht":"Hallo Welt"}'
```
#### mit Authentifizierung
```bash
$ curl -X POST http://localhost:3000/api/hell   -H "Host: localhost:3000"   -H "User-Agent: curl/8.0"   -H "Accept: application/json"   -H "Accept-Language: de-DE,de;q=0.9,en;q=0.8"   -H "Accept-Encoding: gzip, deflate, br"   -H "Content-Type: application/json"   -H "Authorization: abc123"   -H "Cookie: sessionid=abc123; theme=dark"   -H "X-Reque
sted-With: XMLHttpRequest"   -H "X-Custom-Header: HalloWelt"
```
#### ohne Authentifizierung
```bash
$ curl -X POST http://localhost:3000/api/hello   -H "Host: localhost:3000"   -H "User-Agent: curl/8.0"   -H "Accept: application/json"   -H "Accept-Language: de-DE,de;q=0.9,en;q=0.8"   -H "Accept-Encoding: gzip, deflate, br"   -H "Content-Type: application/json"      -H "Cookie: sessionid=abc123; theme=dark"   -H "X-Requested-With: XMLHttpRequest"   -H "X-Custom-Header: HalloWelt" -d '{"nachricht":"Hallo Welt"}'

```
#### Senden eines speziellen ETag's (um einen Renew auf der Serverseite auszulösen)
```bash
$ curl -v -i -H "If-None-Match: \"651-1764340423684\"" http://localhost:3001/number
```

#### Cookie senden
```javascript
curl -v -b "server_cached_number=564" http://localhost:3001/number/cookie
```

![Exalidraw](/img/exalidraw-01.png)