### Express-csv
index.js
```javascript
import express from 'express';
import { readFile } from 'fs/promises';
import path from 'path';

const app = express();
const port = 3000;

// statische Dateien aus public/ liefern (index.html dort ablegen)
app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/table', async (req, res) => {
  try {
    const content = await readFile(path.join(process.cwd(), 'scratch', 'data.csv'), 'utf8');
    const rows = content.trim().split('\n');
    const data = rows.map(r => r.split(','));
    const tableRows = data
      .map(row => `<tr>${row.map(cell => `<td>${cell.toUpperCase()}</td>`).join('')}</tr>`)
      .join('');
    const htmlTable = `<table><thead><tr><td>Number</td><td>First Name</td><td>Last Name</td><td>eMail</td></tr></thead><tbody>${tableRows}</tbody></table>`;
    res.type('html').send(htmlTable);
  } catch (err) {
    res.status(500).send('Fehler beim Lesen der CSV');
  }
});

app.listen(port, () => console.log(`Server läuft auf http://localhost:${port}`));
```
/public/index.html
```html
<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <title>Data-server</title>
  <style> table{border:2px solid #000;border-collapse:collapse;} td,th{border:1px solid #888;padding:4px;} </style>
</head>
<body>
  <h1>CSV-Tabelle</h1>
  <div id="table-container">Lade Tabelle...</div>
  <script>
    fetch('/table')
      .then(r => r.text())
      .then(html => { document.getElementById('table-container').innerHTML = html; })
      .catch(() => { document.getElementById('table-container').textContent = 'Fehler beim Laden'; });
  </script>
</body>
</html>
```
### Speicherung-localStorage-Browser
```html
<input class="inFilter" type="text" size="30" name="inFilter" placeholder="search" />
<div id="results"></div>

<script>
  const inputFilter = document.querySelector('input.inFilter');
  const resultsDiv = document.getElementById('results');

  // Beispiel‑Daten (durch echte Daten ersetzen)
  const list = [
    { id: 1, firstName: 'Alice', lastName: 'Muster', email: 'alice@example.com' },
    { id: 2, firstName: 'Bob', lastName: 'Beispiel', email: 'bob@example.com' },
  ];

  // LocalStorage schreiben
  function saveFilter(value) {
    localStorage.setItem('filter', value);
  }

  // LocalStorage lesen
  function loadFilter() {
    return localStorage.getItem('filter') || '';
  }

  function render(data, filterTerm) {
    const term = (filterTerm || '').trim().toLowerCase();
    const filtered = data.filter(item =>
      Object.values(item).some(v => String(v).toLowerCase().includes(term))
    );
    resultsDiv.innerHTML = '<pre>' + JSON.stringify(filtered, null, 2) + '</pre>';
  }

  // Initialisierung
  if (inputFilter) {
    inputFilter.value = loadFilter();
    inputFilter.addEventListener('input', (e) => {
      const val = (e.target.value || '').trim();
      saveFilter(val);
      render(list, val);
    });
  }

  // Erstes Rendern mit geladenem Filter
  render(list, inputFilter?.value);
</script>
```
### Speicherung-localStorage-Server
#### localStorage wird normalerweise nur in Browsern verwendet. Um es auch im node verwenden zu können, kann node-localstorage  installiert werden.
```javascript
import { LocalStorage } from 'node-localstorage';

// Speicherordner anlegen (falls nicht vorhanden)
const localStorage = new LocalStorage('./scratch');

// Wert speichern
localStorage.setItem('username', 'Alice');

// Wert wieder auslesen
const user = localStorage.getItem('username');
console.log('Gespeicherter Wert:', user);

// Vorhandenen Schlüssel prüfen
if (localStorage.getItem('username')) {
  console.log('Der Key "username" existiert.');
}

// Wert löschen
localStorage.removeItem('username');
console.log('Nach removeItem:', localStorage.getItem('username')); // => null

// Kompletten Speicher löschen
localStorage.clear();
```
### Express-json
index.js - Lesen der Datei data.json mit app.get("/api/data") und senden des Inhalts mit app.res
```javascript
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;
// Statische Dateien (z.B. index.html) bereitstellen
app.use(express.static(path.join(__dirname)));

// Endpoint: JSON-Daten ausliefern
app.get("/api/data", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Datei konnte nicht gelesen werden" });
      return;
    }
    res.json(JSON.parse(data));
  });
});
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
```
index.html - 
```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>JSON Demo</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    h1 { color: #2c3e50; }
    ul { list-style: none; padding: 0; }
    li { margin: 5px 0; background: #ecf0f1; padding: 8px; border-radius: 5px; }
  </style>
</head>
<body>
  <h1>JSON Daten</h1>
  <p id="titel"></p>
  <ul id="personen"></ul>

  <script>
    fetch("/api/data")
      .then(response => response.json())
      .then(data => {
        document.getElementById("titel").textContent = data.titel;
        const list = document.getElementById("personen");
        data.personen.forEach(p => {
          const li = document.createElement("li");
          li.textContent = `${p.name} (${p.alter} Jahre)`;
          list.appendChild(li);
        });
      })
      .catch(err => console.error("Fehler beim Laden der Daten:", err));
  </script>
</body>
</html>
```
data.js
```json
{
  "titel": "Meine kleine JSON-Demo",
  "personen": [
    { "name": "Anna", "alter": 25 },
    { "name": "Ben", "alter": 30 },
    { "name": "Clara", "alter": 28 }
  ]
}
```
### Speicherung-Cookie-Browser
```javascript
import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

// Cookie setzen
app.get("/set", (req, res) => {
  res.cookie("username", "Alice", {
    maxAge: 3600000, // 1 Stunde
    httpOnly: true, // nicht im Browser-JS lesbar
  });
  res.send("Cookie gesetzt!");
});

// Cookie auslesen
app.get("/get", (req, res) => {
  res.send("Cookies: " + JSON.stringify(req.cookies));
});

// Cookie löschen
app.get("/delete", (req, res) => {
  res.clearCookie("username");
  res.send("Cookie gelöscht!");
});

app.listen(3000, () => console.log("Server läuft auf http://localhost:3000"));
```