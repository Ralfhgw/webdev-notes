---
id: js-filesystem
title: Node.js — Filesystem (fs)
---

## File System API

Node.js bietet mit dem `fs`-Modul umfangreiche Funktionen zum Lesen und Schreiben von Dateien. Es gibt **synchrone** und **asynchrone** Varianten.

### Wichtigste Unterschiede

| Methode | Blockiert Event Loop? | Verwendung | Performance |
|---------|----------------------|------------|-------------|
| **Synchron** (`fs.readFileSync`) | ✅ Ja | Nur beim App-Start, Scripts | Langsamer bei vielen Requests |
| **Async (Callbacks)** (`fs.readFile`) | ❌ Nein | Legacy-Code | Callback Hell |
| **Async (Promises)** (`fs/promises`) | ❌ Nein | **Empfohlen** | Modern, await-Support |

**Best Practice:** Verwende `fs/promises` (async/await) in Server-Anwendungen, um den Event Loop nicht zu blockieren.

---

## Installation & Import

### Import (ESM)
```javascript
// Asynchron (Promises) — EMPFOHLEN
import { readFile, writeFile, appendFile, unlink, mkdir } from "fs/promises";

// Synchron (nur für Scripts/Startup)
import { readFileSync, writeFileSync } from "fs";

// Path-Handling
import path from "path";
```

### Import (CommonJS)
```javascript
const { readFile, writeFile } = require("fs/promises");
const { readFileSync, writeFileSync } = require("fs");
```

---

## 1. Datei lesen

### Asynchron (empfohlen)
```javascript
import { readFile } from "fs/promises";

async function loadUsers() {
  try {
    const data = await readFile("users.json", "utf-8");
    const users = JSON.parse(data);
    console.log("User geladen:", users);
    return users;
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("Datei nicht gefunden, gebe leeres Array zurück");
      return [];
    }
    console.error("Fehler beim Lesen:", error);
    throw error;
  }
}

// Verwendung
const users = await loadUsers();
```

### Synchron (nur für Scripts)
```javascript
import { readFileSync } from "fs";

try {
  const data = readFileSync("users.json", "utf-8");
  const users = JSON.parse(data);
  console.log("User geladen (sync):", users);
} catch (error) {
  if (error.code === "ENOENT") {
    console.log("Datei nicht gefunden");
  } else {
    console.error("Fehler beim Lesen:", error);
  }
}
```

---

## 2. Datei schreiben

### Asynchron (überschreibt Datei)
```javascript
import { writeFile } from "fs/promises";

async function saveUsers(users) {
  try {
    await writeFile(
      "users.json",
      JSON.stringify(users, null, 2), // Pretty Print mit 2 Spaces
      "utf-8"
    );
    console.log("Datei erfolgreich gespeichert");
  } catch (error) {
    console.error("Fehler beim Schreiben:", error);
    throw error;
  }
}

// Verwendung
const users = [
  { id: 1, name: "Max", email: "max@example.com" },
  { id: 2, name: "Anna", email: "anna@example.com" },
];

await saveUsers(users);
```

### Synchron
```javascript
import { writeFileSync } from "fs";

const users = [{ id: 1, name: "Max" }];

try {
  writeFileSync("users.json", JSON.stringify(users, null, 2), "utf-8");
  console.log("Datei gespeichert (sync)");
} catch (error) {
  console.error("Fehler:", error);
}
```

---

## 3. Daten anhängen (nicht überschreiben)

### Asynchron: Lesen → Ändern → Schreiben
```javascript
import { readFile, writeFile } from "fs/promises";

async function addUser(newUser) {
  try {
    // 1. Bestehende Daten laden
    let users = [];
    try {
      const data = await readFile("users.json", "utf-8");
      users = JSON.parse(data);
      
      // Sicherstellen, dass es ein Array ist
      if (!Array.isArray(users)) {
        users = [users];
      }
    } catch (err) {
      // Datei existiert nicht → leeres Array
      if (err.code === "ENOENT") {
        users = [];
      } else {
        throw err;
      }
    }

    // 2. Neuen User hinzufügen
    users.push(newUser);

    // 3. Zurückschreiben
    await writeFile("users.json", JSON.stringify(users, null, 2), "utf-8");
    console.log("User hinzugefügt:", newUser.name);
    return users;
  } catch (error) {
    console.error("Fehler beim Hinzufügen:", error);
    throw error;
  }
}

// Verwendung
await addUser({ id: 3, name: "Lisa", email: "lisa@example.com" });
```

### Synchron
```javascript
import { readFileSync, writeFileSync } from "fs";

function addUserSync(newUser) {
  try {
    let users = [];
    
    try {
      const data = readFileSync("users.json", "utf-8");
      users = JSON.parse(data);
      if (!Array.isArray(users)) users = [users];
    } catch (err) {
      if (err.code === "ENOENT") {
        users = [];
      } else {
        throw err;
      }
    }

    users.push(newUser);
    writeFileSync("users.json", JSON.stringify(users, null, 2), "utf-8");
    console.log("User hinzugefügt (sync):", newUser.name);
  } catch (error) {
    console.error("Fehler:", error);
    throw error;
  }
}

addUserSync({ id: 4, name: "Tom", email: "tom@example.com" });
```

---

## 4. Weitere nützliche Operationen

### Datei löschen
```javascript
import { unlink } from "fs/promises";

async function deleteFile(filePath) {
  try {
    await unlink(filePath);
    console.log("Datei gelöscht:", filePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("Datei existiert nicht");
    } else {
      console.error("Fehler beim Löschen:", error);
      throw error;
    }
  }
}

await deleteFile("users.json");
```

### Datei umbenennen/verschieben
```javascript
import { rename } from "fs/promises";

await rename("users.json", "users_backup.json");
console.log("Datei umbenannt");
```

### Ordner erstellen
```javascript
import { mkdir } from "fs/promises";

try {
  await mkdir("data", { recursive: true }); // recursive: true verhindert Fehler wenn Ordner existiert
  console.log("Ordner erstellt");
} catch (error) {
  console.error("Fehler:", error);
}
```

### Prüfen, ob Datei existiert
```javascript
import { access } from "fs/promises";
import { constants } from "fs";

async function fileExists(filePath) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

const exists = await fileExists("users.json");
console.log("Datei existiert:", exists);
```

### Datei-Informationen abrufen
```javascript
import { stat } from "fs/promises";

const stats = await stat("users.json");
console.log("Größe:", stats.size, "Bytes");
console.log("Erstellt:", stats.birthtime);
console.log("Geändert:", stats.mtime);
console.log("Ist Datei:", stats.isFile());
console.log("Ist Ordner:", stats.isDirectory());
```

---

## 5. Sichere Pfade mit path

Verwende immer `path.join()` für plattformunabhängige Pfade.

```javascript
import path from "path";
import { fileURLToPath } from "url";

// ESM: __dirname ermitteln
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pfad zur Datei
const filePath = path.join(__dirname, "data", "users.json");

console.log("Absoluter Pfad:", filePath);
// /home/user/project/data/users.json
```

---

## 6. Best Practices

### ✅ Do's
- Verwende `fs/promises` (async/await) in Servern
- Nutze `path.join()` für Pfade
- Handle `ENOENT`-Fehler (Datei nicht gefunden)
- Validiere/sanitize Dateinamen (keine User-Eingaben direkt verwenden)
- Verwende `JSON.stringify(data, null, 2)` für lesbare JSON-Dateien
- Implementiere Error Handling

### ❌ Don'ts
- Verwende **keine** Sync-Methoden in Express-Routen (blockiert Event Loop)
- Speichere **keine** sensiblen Daten unverschlüsselt
- Verwende **keine** User-Eingaben direkt als Dateinamen (Path Traversal)
- Verlasse dich nicht auf fs für produktive Datenbanken → nutze MongoDB, PostgreSQL, etc.

---

## 7. Vollständiges Beispiel: User-Verwaltung

```javascript
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const USER_FILE = path.join(__dirname, "data", "users.json");

// Hilfsfunktion: User laden
async function loadUsers() {
  try {
    const data = await readFile(USER_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      return []; // Datei existiert nicht → leeres Array
    }
    throw error;
  }
}

// Hilfsfunktion: User speichern
async function saveUsers(users) {
  await writeFile(USER_FILE, JSON.stringify(users, null, 2), "utf-8");
}

// User hinzufügen
export async function addUser(user) {
  const users = await loadUsers();
  users.push({ ...user, id: Date.now() }); // Auto-ID
  await saveUsers(users);
  return user;
}

// User suchen
export async function getUserById(id) {
  const users = await loadUsers();
  return users.find((u) => u.id === id);
}

// User löschen
export async function deleteUser(id) {
  let users = await loadUsers();
  users = users.filter((u) => u.id !== id);
  await saveUsers(users);
}

// Alle User
export async function getAllUsers() {
  return await loadUsers();
}

// Verwendung
const newUser = await addUser({ name: "Max", email: "max@example.com" });
console.log("User erstellt:", newUser);

const allUsers = await getAllUsers();
console.log("Alle User:", allUsers);

await deleteUser(newUser.id);
console.log("User gelöscht");
```

---

## 8. Error-Codes

| Code | Bedeutung | Lösung |
|------|-----------|--------|
| `ENOENT` | Datei/Ordner nicht gefunden | Prüfen oder Datei erstellen |
| `EACCES` | Keine Berechtigung | Dateiberechtigungen prüfen |
| `EEXIST` | Datei existiert bereits | Überschreiben oder umbenennen |
| `EISDIR` | Pfad ist ein Ordner | Pfad korrigieren |
| `ENOTDIR` | Pfad ist keine Ordner | Pfad korrigieren |

---

## 9. Alternativen für Production

Für produktive Anwendungen solltest du **keine** JSON-Dateien als Datenbank verwenden:

- ✅ **PostgreSQL / MySQL** — Relationale Datenbanken
- ✅ **MongoDB** — NoSQL (JSON-ähnlich)
- ✅ **SQLite** — Leichte embedded DB
- ✅ **Redis** — In-Memory Key-Value Store

---

## Weiterführende Ressourcen

- [Node.js fs/promises Dokumentation](https://nodejs.org/api/fs.html#promises-api)
- [MDN File System](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)
- [Path Module](https://nodejs.org/api/path.html)