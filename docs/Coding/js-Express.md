---
id: js-express
title: Express.js — Web Framework für Node.js
---

## Was ist Express?

**Express.js** ist das beliebteste minimalistische Web-Framework für Node.js. Es vereinfacht das Erstellen von Web-Servern, APIs und Webanwendungen.

### Vorteile
- ✅ Einfache Routing-API
- ✅ Middleware-System für modulare Funktionalität
- ✅ Große Community & viele Erweiterungen
- ✅ Unterstützung für Template-Engines (EJS, Pug, etc.)

### Offizielle Dokumentation
- [Express 5.x API Reference](https://expressjs.com/en/5x/api.html)
- [Express 4.x API Reference](https://expressjs.com/en/4x/api.html)

---

## Installation & Setup

### 1. Installation
```bash
npm install express
```

### 2. Minimaler Server
```javascript
import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
```

### 3. Starten
```bash
node server.js
```

---

## Request (req) — Eingehende HTTP-Anfrage

Das `req`-Objekt enthält alle Informationen über die eingehende Anfrage.

### Wichtigste Properties

| Property | Beschreibung | Beispiel |
|----------|--------------|----------|
| `req.body` | POST-Daten (JSON/Form) | `{ name: "Max" }` |
| `req.params` | URL-Parameter | `/users/:id` → `req.params.id` |
| `req.query` | Query-Parameter | `?page=2` → `req.query.page` |
| `req.headers` | HTTP-Headers | `req.headers['content-type']` |
| `req.method` | HTTP-Methode | `GET`, `POST`, `PUT`, etc. |
| `req.path` | URL-Pfad | `/api/users` |
| `req.url` | Vollständige URL | `/api/users?page=2` |
| `req.ip` | IP-Adresse des Clients | `192.168.1.1` |
| `req.cookies` | Cookies (mit `cookie-parser`) | `{ token: "abc123" }` |

### Beispiele

#### URL-Parameter (req.params)
```javascript
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ userId });
});

// GET /users/42 → { "userId": "42" }
```

#### Query-Parameter (req.query)
```javascript
app.get("/search", (req, res) => {
  const { q, page = 1 } = req.query;
  res.json({ query: q, page });
});

// GET /search?q=express&page=2 → { "query": "express", "page": "2" }
```

#### POST-Daten (req.body)
```javascript
// Middleware für JSON/Form-Daten
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;
  res.json({ message: "User erstellt", name, email });
});

// POST /api/users mit Body: { "name": "Max", "email": "max@example.com" }
```

#### Headers (req.headers / req.get())
```javascript
app.get("/info", (req, res) => {
  const userAgent = req.get("User-Agent");
  const contentType = req.headers["content-type"];
  
  res.json({ userAgent, contentType });
});
```

---

## Response (res) — Antwort an den Client

Das `res`-Objekt wird verwendet, um HTTP-Antworten zu senden.

### Wichtigste Methoden

| Methode | Beschreibung | Beispiel |
|---------|--------------|----------|
| `res.send()` | Text/HTML senden | `res.send("<h1>Hello</h1>")` |
| `res.json()` | JSON senden | `res.json({ status: "ok" })` |
| `res.status()` | Status-Code setzen | `res.status(404).send("Not Found")` |
| `res.redirect()` | Weiterleitung | `res.redirect("/home")` |
| `res.render()` | Template rendern | `res.render("index", { data })` |
| `res.sendFile()` | Datei senden | `res.sendFile("/path/to/file.pdf")` |
| `res.cookie()` | Cookie setzen | `res.cookie("token", "abc123")` |
| `res.clearCookie()` | Cookie löschen | `res.clearCookie("token")` |

### Beispiele

#### HTML senden
```javascript
app.get("/", (req, res) => {
  res.send("<h1>Willkommen</h1>");
});
```

#### JSON senden
```javascript
app.get("/api/users", (req, res) => {
  const users = [{ id: 1, name: "Max" }, { id: 2, name: "Anna" }];
  res.json(users);
});
```

#### Status-Code setzen
```javascript
app.post("/api/users", (req, res) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json({ error: "Name erforderlich" });
  }
  
  res.status(201).json({ message: "User erstellt", name });
});
```

#### Weiterleitung
```javascript
app.post("/login", (req, res) => {
  // Nach erfolgreichem Login
  res.redirect("/dashboard");
});
```

#### Datei senden
```javascript
import path from "path";

app.get("/download", (req, res) => {
  const filePath = path.join(process.cwd(), "files", "document.pdf");
  res.sendFile(filePath);
});
```

---

## Routing

### HTTP-Methoden

```javascript
app.get("/users", (req, res) => {
  res.json({ message: "Liste aller User" });
});

app.post("/users", (req, res) => {
  res.json({ message: "User erstellt" });
});

app.put("/users/:id", (req, res) => {
  res.json({ message: `User ${req.params.id} aktualisiert` });
});

app.delete("/users/:id", (req, res) => {
  res.json({ message: `User ${req.params.id} gelöscht` });
});
```

### Route-Parameter

```javascript
// Einzelner Parameter
app.get("/users/:id", (req, res) => {
  res.json({ userId: req.params.id });
});

// Mehrere Parameter
app.get("/posts/:postId/comments/:commentId", (req, res) => {
  const { postId, commentId } = req.params;
  res.json({ postId, commentId });
});
```

### Router-Module (für größere Apps)

```javascript
// routes/users.js
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Alle User" });
});

router.get("/:id", (req, res) => {
  res.json({ userId: req.params.id });
});

export default router;
```

```javascript
// server.js
import userRoutes from "./routes/users.js";

app.use("/api/users", userRoutes);
// → GET /api/users
// → GET /api/users/:id
```

---

## Middleware

Middleware sind Funktionen, die Zugriff auf `req`, `res` und `next()` haben.

### Built-in Middleware

```javascript
// JSON-Daten parsen
app.use(express.json());

// URL-encoded Daten parsen (Formulare)
app.use(express.urlencoded({ extended: true }));

// Statische Dateien bereitstellen
app.use(express.static("public"));
```

### Custom Middleware

```javascript
// Logger-Middleware
function logger(req, res, next) {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next(); // Weiter zur nächsten Middleware/Route
}

app.use(logger);
```

### Authentifizierungs-Middleware

```javascript
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  
  if (!token) {
    return res.status(401).json({ error: "Kein Token" });
  }
  
  // Token validieren...
  req.userId = "user123";
  next();
}

// Nur auf geschützte Routen anwenden
app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "Dashboard", userId: req.userId });
});
```

---

## Praktisches Beispiel: Namen-API

### Server
```javascript
import express from "express";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Daten (In Production: Datenbank verwenden)
const names = [];

// GET / → HTML-Formular
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <title>Namen-Verwaltung</title>
    </head>
    <body>
      <h1>Namen-Verwaltung</h1>
      <form action="/api/names" method="POST">
        <input name="name" type="text" placeholder="Name eingeben" required />
        <button type="submit">Hinzufügen</button>
      </form>
      <h2>Alle Namen:</h2>
      <ul>
        ${names.map(name => `<li>${name}</li>`).join("")}
      </ul>
    </body>
    </html>
  `);
});

// POST /api/names → Name hinzufügen
app.post("/api/names", (req, res) => {
  const { name } = req.body;
  
  if (!name || !name.trim()) {
    return res.status(400).json({ error: "Name erforderlich" });
  }
  
  names.push(name.trim());
  res.redirect("/");
});

// GET /api/names → JSON-API
app.get("/api/names", (req, res) => {
  res.json(names);
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
```

### Testen mit curl

```bash
# GET-Request
curl http://localhost:3000/api/names

# POST-Request (JSON)
curl -X POST http://localhost:3000/api/names \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice"}'

# POST-Request (Form)
curl -X POST http://localhost:3000/api/names \
  -d "name=Bob"
```

---

## Request-Debugging

Hilfreiche Debugging-Funktion für Entwicklung:

```javascript
function debugRequest(req, res, next) {
  console.log("\n=== Request Debug ===");
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Path:", req.path);
  console.log("Query:", req.query);
  console.log("Params:", req.params);
  console.log("Body:", req.body);
  console.log("Headers:", req.headers);
  console.log("IP:", req.ip);
  console.log("Protocol:", req.protocol);
  console.log("Hostname:", req.hostname);
  console.log("User-Agent:", req.get("User-Agent"));
  console.log("Timestamp:", new Date().toISOString());
  console.log("====================\n");
  next();
}

// Nur in Entwicklung verwenden
if (process.env.NODE_ENV === "development") {
  app.use(debugRequest);
}
```

---

## Error Handling

### 404-Handler (muss am Ende stehen)
```javascript
app.use((req, res) => {
  res.status(404).json({ error: "Route nicht gefunden" });
});
```

### Error-Middleware
```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Interner Serverfehler" });
});
```

### Async Error Handling
```javascript
// Wrapper-Funktion für async Routen
function asyncHandler(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

app.get("/users/:id", asyncHandler(async (req, res) => {
  const user = await getUserById(req.params.id);
  
  if (!user) {
    return res.status(404).json({ error: "User nicht gefunden" });
  }
  
  res.json(user);
}));
```

---

## Wichtige HTTP-Status-Codes

| Code | Bedeutung | Verwendung |
|------|-----------|------------|
| 200 | OK | Erfolgreiche GET/PUT-Anfrage |
| 201 | Created | Erfolgreich erstellt (POST) |
| 204 | No Content | Erfolgreich, keine Antwort |
| 400 | Bad Request | Ungültige Anfrage |
| 401 | Unauthorized | Nicht authentifiziert |
| 403 | Forbidden | Keine Berechtigung |
| 404 | Not Found | Ressource nicht gefunden |
| 500 | Internal Server Error | Serverfehler |

---

## Best Practices

✅ Verwende Middleware für wiederverwendbare Logik  
✅ Nutze Router-Module für größere Apps  
✅ Validiere & sanitize alle Eingaben  
✅ Implementiere Error Handling  
✅ Verwende async/await statt Callbacks  
✅ Setze Security-Header (Helmet.js)  
✅ Rate Limiting für APIs  
✅ Verwende Umgebungsvariablen (.env)  
✅ CORS korrekt konfigurieren  
✅ Logge Requests & Errors (Winston, Morgan)  

---

## Nützliche Packages

```bash
# Security
npm install helmet cors express-rate-limit

# Validation
npm install joi express-validator

# Logging
npm install morgan winston

# Auth
npm install jsonwebtoken bcrypt cookie-parser

# Environment
npm install dotenv
```

---

## Weiterführende Ressourcen

- [Express Dokumentation](https://expressjs.com/)
- [MDN HTTP-Methoden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [REST API Best Practices](https://restfulapi.net/)
- [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)