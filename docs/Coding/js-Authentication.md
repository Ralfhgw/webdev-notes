---
id: js-authentication
title: JavaScript — Authentication & Authorization
---

## Authentifizierung mit Token, Cookie, Hash & UUID

### Wichtige Tools & Services

- [Clerk — Complete User Management](https://clerk.com)  
- [JWT.io — JSON Web Token Debugger](https://jwt.io)

---

## Setup & Dependencies

### Installation
```bash
npm install express jsonwebtoken bcrypt cookie-parser uuid
```

### Imports
```javascript
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import { randomUUID } from "crypto";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
```

### Environment Variables (.env)
```bash
PORT=3000
JWT_SECRET=mein_sicheres_geheimnis_mindestens_32_zeichen_lang
```

**Wichtig:** Verwende ein starkes, zufälliges Secret (min. 32 Zeichen). Niemals .env ins Git committen (→ .gitignore).

---

## 1. JWT Token (Stateless Authentication)

### Token erstellen und als JSON senden
```javascript
const token = jwt.sign(
  { sub: user.id, name: user.name, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: "2h" }
);

return res.json({ token });
```

**Verwendung durch den Client:**
- Token im `localStorage` oder `sessionStorage` speichern.
- Bei späteren Requests im `Authorization`-Header senden:
  ```
  Authorization: Bearer <token>
  ```

**Sicherheit:**
- ✅ Kein CSRF-Risiko (Token nicht automatisch gesendet).
- ⚠️ Anfällig für XSS (clientseitiges JS kann Token auslesen).

### Token validieren
```javascript
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1]; // "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: "Kein Token vorhanden" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // { sub, name, email }
    next();
  } catch (err) {
    return res.status(401).json({ error: "Ungültiges Token" });
  }
}

// Geschützte Route
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "Willkommen", user: req.user });
});
```

---

## 2. JWT Cookie (Cookie-basierte Authentication)

### Token im Cookie setzen
```javascript
const token = jwt.sign(
  { sub: user.id, name: user.name, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: "2h" }
);

res.cookie("token", token, {
  httpOnly: true,       // nicht per JS lesbar → XSS-Schutz
  secure: process.env.NODE_ENV === "production", // nur HTTPS
  sameSite: "lax",      // CSRF-Schutz
  maxAge: 2 * 60 * 60 * 1000, // 2 Stunden
});

return res.redirect("/dashboard");
```

**Sicherheit:**
- ✅ `httpOnly` schützt vor XSS.
- ⚠️ Anfälliger für CSRF (Cookie wird automatisch gesendet) → nutze CSRF-Token oder `sameSite: strict/lax`.

### Cookie-Token validieren
```javascript
function cookieAuthMiddleware(req, res, next) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).send("Nicht authentifiziert");
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    res.clearCookie("token");
    return res.status(401).send("Token ungültig");
  }
}

app.get("/dashboard", cookieAuthMiddleware, (req, res) => {
  res.send(`Hallo ${req.user.name}`);
});
```

---

## 3. Passwort-Hashing mit bcrypt

### Hash erstellen (async, empfohlen)
```javascript
const SALT_ROUNDS = 10; // 10-12 für Production

async function registerUser(name, email, password) {
  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  
  // In DB speichern
  await addUser({ id: randomUUID(), name, email, passwordHash: hash });
}
```

### Passwort prüfen
```javascript
async function loginUser(email, password) {
  const user = await getUserByEmail(email);
  
  if (!user) {
    return res.status(401).json({ error: "Ungültige Credentials" });
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);
  
  if (!isValid) {
    return res.status(401).json({ error: "Falsches Passwort" });
  }

  // Token erstellen...
  const token = jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });

  return res.json({ token });
}
```

**Wichtig:**
- Verwende `bcrypt.hash()` / `bcrypt.compare()` (async), nicht die Sync-Varianten.
- Logge niemals Klartextpasswörter.

---

## 4. Session-basierte Authentifizierung mit UUID

### Session-ID erstellen und Cookie setzen
```javascript
import { randomUUID } from "crypto";

const sessions = []; // In Production: Redis/Datenbank verwenden

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ error: "Ungültige Credentials" });
  }

  // UUID v4 Session-ID generieren
  const sessionId = randomUUID(); // z.B. "a3d8f02b-9c7e-4a1f-8d6e-c4b2a9f8e3d1"

  sessions.push({
    id: sessionId,
    userId: user.id,
    createdAt: Date.now(),
    expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24h
  });

  res.cookie("session", sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.json({ message: "Login erfolgreich" });
});
```

### Session validieren
```javascript
function sessionMiddleware(req, res, next) {
  const sessionId = req.cookies?.session;

  if (!sessionId) {
    return res.status(401).send("Nicht eingeloggt");
  }

  const session = sessions.find(
    (s) => s.id === sessionId && s.expiresAt > Date.now()
  );

  if (!session) {
    res.clearCookie("session");
    return res.status(401).send("Session abgelaufen");
  }

  req.userId = session.userId;
  next();
}

app.get("/profile", sessionMiddleware, async (req, res) => {
  const user = await getUserById(req.userId);
  res.json(user);
});
```

### Logout (Session löschen)
```javascript
app.post("/logout", (req, res) => {
  const sessionId = req.cookies?.session;

  if (sessionId) {
    const index = sessions.findIndex((s) => s.id === sessionId);
    if (index !== -1) sessions.splice(index, 1);
  }

  res.clearCookie("session");
  return res.json({ message: "Ausgeloggt" });
});
```

---

## 5. UUID für User-IDs verwenden

### User mit UUID erstellen
```javascript
import { randomUUID } from "crypto";

async function createUser(name, email, password) {
  const user = {
    id: randomUUID(), // z.B. "f47ac10b-58cc-4372-a567-0e02b2c3d479"
    name,
    email,
    passwordHash: await bcrypt.hash(password, 10),
    createdAt: new Date().toISOString(),
  };

  await saveUser(user); // In DB speichern
  return user;
}
```

**Vorteile von UUID:**
- ✅ Global eindeutig (keine Kollisionen).
- ✅ Nicht errtatbar (vs. auto-increment IDs).
- ✅ Gut für verteilte Systeme / Microservices.

---

## Vergleich: Token vs. Cookie vs. Session

| Methode | Speicherort | XSS-Risiko | CSRF-Risiko | Zustand |
|---------|-------------|------------|-------------|---------|
| **JWT im Body** | localStorage/sessionStorage | ⚠️ Hoch | ✅ Niedrig | Stateless |
| **JWT im Cookie** | Cookie (httpOnly) | ✅ Niedrig | ⚠️ Mittel | Stateless |
| **Session-ID (UUID)** | Cookie (httpOnly) | ✅ Niedrig | ⚠️ Mittel | Stateful |

**Empfehlung:**
- Für einfache Apps: JWT im httpOnly-Cookie.
- Für größere Apps mit Logout/Revocation: Session-basiert (Redis/DB).
- Für APIs: JWT im Authorization-Header.

---

## Sicherheits-Checkliste

✅ Verwende HTTPS in Produktion  
✅ Setze `httpOnly`, `secure`, `sameSite` für Cookies  
✅ Verwende starke JWT-Secrets (min. 32 Zeichen)  
✅ Setze angemessene Token-Expiration (z. B. 15 min Access, 7d Refresh)  
✅ Implementiere Rate Limiting für Login-Routen  
✅ Hash Passwörter mit bcrypt (min. 10 Rounds)  
✅ Validiere/sanitize alle Eingaben  
✅ Implementiere CSRF-Schutz bei Cookie-Auth  
✅ Verwende UUIDs für nicht-sequenzielle IDs  
✅ Speichere Sessions in Redis/DB, nicht im Memory

---

## Weitere Ressourcen

- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [JWT Best Practices](https://datatracker.ietf.org/doc/html/rfc8725)
- [bcrypt npm](https://www.npmjs.com/package/bcrypt)
- [UUID RFC](https://datatracker.ietf.org/doc/html/rfc4122)