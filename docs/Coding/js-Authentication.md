#### Authentifizierung mit Verwendung von Token / Cookie / Hash
### Additional Website for creating User Interfaces
- [More than authentication, Complete User Management](clerk.com) 
- [JSON Web Token (JWT) Debugger / Decoder](jwt.io)

```javascript
import express from "express";
import jwt from "jsonwebtoken";
import { readFile, writeFile } from "fs/promises";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import "bun:dotenv";
```
#### Import des Passworts aus der .env
```javascript
PORT=3000
JWT_SECRET=das_ist_mein_passwort
```
#### Create Token for Client 
```javascript
const token = jwt.sign({ sub: user.id, name: user.name }, JWT_SECRET, {
expiresIn: "2h",
});
return res.json({ token });
```
Schickt das Token im Response-Body als JSON. Der Client (Browser / JS) muss das Token selbst speichern (localStorage, sessionStorage oder Cookie) und bei späteren Requests z.B. im Authorization-Header senden. Sichtbar für clientseitiges JS → anfälliger für XSS, aber nicht automatisch für CSRF (weil nicht in Cookie).

#### Create Cookie for Client
```javascript
const token = jwt.sign({ sub: user.id, name: user.email }, JWT_SECRET, {
expiresIn: "2h",
});
res.cookie("token", token, { httpOnly: true, sameSite: "lax" });
return res.redirect("/gallery");
```
Setzt ein Cookie im Browser automatisch (wird bei folgenden Requests an deine Domain gesendet). Mit httpOnly: true ist das Cookie für clientseitiges JS nicht zugänglich (schützt vor XSS). Gut, wenn du Sitzungs- oder Auth-Cookie serverseitig setzen willst — der Browser übernimmt das Speichern.

#### Prüfe Token
```javascript
const payload = jwt.verify(token, JWT_SECRET);
console.log(payload);
```
#### Create Password Hash
```javascript
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(password, salt);
addUser({ name, password: hash });
```
#### Compare Hash with Password
```javascript
if (!bcrypt.compareSync(password, user.password)) {
console.log("wrong password!", password);
return res.sendStatus(401);
};
```
#### Create Session-ID and set cookie
```javascript
const crypto = require('crypto');

const sessionId = crypto.randomBytes(32).toString('hex'); // 256 bit entropy
sessions.push({ id: sessionId, userId: user.id, expires: Date.now() + 24*60*60*1000 });

res.cookie('session', sessionId, {
  httpOnly: true,
  secure: true,        // nur über HTTPS in Produktion
  sameSite: 'lax',
  maxAge: 24 * 60 * 60 * 1000
});
res.redirect('/protected');
```

#### Prüfe Cookie und Existenz in sessions
```javascript
const sid = req.cookies?.session;
const session = sessions.find(s => s.id === sid && s.expires > Date.now());
if (!session) {
  return res.status(401).send('Nicht eingeloggt');
}
```