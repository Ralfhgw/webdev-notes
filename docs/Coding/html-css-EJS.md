---
id: js-ejs
title: EJS — Template Engine
---

## EJS Syntax

| Syntax | Bedeutung | Beispiel |
| --- | --- | --- |
| `<%= expression %>` | Gibt Wert aus (HTML‑escaped) | `<h1><%= title %></h1>` |
| `<%- html %>` | Gibt HTML aus (nicht escaped) | `<%- include('nav') %>` |
| `<% code %>` | JS‑Code (kein Output) | `<% if(show) { %>` |
| `<%# comment %>` | Kommentar | `<%# TODO: fix %>` |

## Express + EJS Setup

### 1. Installation
```bash
npm install express ejs
```

### 2. Server konfigurieren
```javascript
// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// EJS konfigurieren
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Statische Dateien
app.use(express.static(path.join(__dirname, "public")));

// Beispieldaten
const posts = [
  { id: 1, title: "Was ist der Sinn des Lebens?", text: "42" },
  { id: 2, title: "Warum ist die Banane krumm?", text: "Weil sie sich krümmt." },
];

// Routes
app.get("/", (_, res) => {
  res.render("index", {
    documentTitle: "EJS Demo",
    copyRightText: "© 2025 DCI",
  });
});

app.get("/posts", (_, res) => {
  res.render("posts", {
    documentTitle: "Posts",
    subtitle: "Alle Posts",
    posts,
    highlight: true,
    copyRightText: "© 2025 DCI",
  });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
```

### 3. Verzeichnisstruktur
```
project/
├── server.js
├── views/
│   ├── index.ejs
│   ├── posts.ejs
│   └── partials/
│       ├── navigation.ejs
│       └── footer.ejs
└── public/
    └── css/styles.css
```

### 4. Templates

#### views/index.ejs
```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><%= documentTitle %></title>
  <link rel="stylesheet" href="/css/styles.css" />
</head>
<body>
  <%- include("partials/navigation") %>
  
  <main>
    <h1>Willkommen zur EJS Demo</h1>
    <p>Dies ist die Startseite.</p>
  </main>

  <%- include("partials/footer") %>
</body>
</html>
```

#### views/posts.ejs
```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><%= documentTitle %></title>
  <link rel="stylesheet" href="/css/styles.css" />
</head>
<body>
  <%- include("partials/navigation") %>
  
  <main>
    <h1 style="color: <%= highlight ? 'red' : 'green' %>;">
      <%= subtitle %>
    </h1>

    <% if(highlight) { %>
      <p style="background-color: yellow; padding: 10px;">
        ⭐ Dies ist ein Highlight!
      </p>
    <% } %>

    <ul>
      <% posts.forEach((post) => { %>
        <li>
          <h2><%= post.title %></h2>
          <p><%= post.text %></p>
        </li>
      <% }) %>
    </ul>
  </main>

  <%- include("partials/footer") %>
</body>
</html>
```

#### views/partials/navigation.ejs
```html
<nav style="background-color: #333; padding: 10px;">
  <ul style="list-style: none; margin: 0; display: flex; gap: 20px;">
    <li><a href="/" style="color: white; text-decoration: none;">Home</a></li>
    <li><a href="/posts" style="color: white; text-decoration: none;">Posts</a></li>
  </ul>
</nav>
```

#### views/partials/footer.ejs
```html
<footer style="background-color: #f0f0f0; padding: 10px; text-align: center; margin-top: 40px;">
  <p><%= copyRightText %></p>
</footer>
```

## Wichtige Punkte

- **`<%= ... %>`** — Ausgabe mit HTML‑Escaping (sicher für Benutzereingaben).
- **`<%- ... %>`** — Ausgabe ohne Escaping (für HTML/Includes).
- **`<% ... %>`** — JS‑Code (Schleifen, Bedingungen, keine Ausgabe).
- **`include()`** — lädt Partial‑Templates für Navigation, Footer, etc.
- **Server‑Daten** — werden via `res.render(view, data)` an Templates übergeben.

## Starten

```bash
npm install
node server.js
# Öffne http://localhost:3000
```