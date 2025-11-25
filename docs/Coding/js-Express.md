https://expressjs.com/en/5x/api.html#app.methods

#### req (Request) - Enthält alle Daten der eingehenden HTTP-Anfrage
- req.body - Daten aus POST-Request (JSON, Form-Daten)
- req.params - URL-Parameter (/users/:id)
- req.query - Query-Parameter (?name=john)
- req.headers - HTTP-Headers
- req.method - HTTP Methode
- req.path - Requested Path

#### res (Response) - Objekt zum Senden der Antwort zurück zum Client
- res.send() - Text/HTML senden
- res.json() - JSON senden
- res.status() - HTTP-Status-Code setzen ```return res.status(400).json({ msg: "name required" })```

```bash
$ curl -X POST http://localhost:3000/api/names   -H "Content-Type: application/json"   -d '{"name": "Alice"}'
```
```javascript
app.get("/api/names", (_, res) => {
    res.send(`
    <form action="/api/names" method="POST">
        <input name="name" type="text" required>
        <button type="submit">Name senden</button>
    </form>`);
});

app.post('/api/names', (req, res) => {
    array.push(req.body.name);
    res.send(`
        <p><strong>Names:</strong> ${array}</p>
        <a href="/api/names">Zurück</a>
    `);
});

//Alle statischen Dateien werden in diesem Verzeichnis gesucht.
app.use(express.static("./frontend"));
```
#### Parameter zum Anzeigen der Request Daten mit console.log
```javascript
console.log('Method:', req.method);  console.log('URL:', req.url);
  console.log('Original URL:', req.originalUrl);
  console.log('Base URL:', req.baseUrl);
  console.log('Path:', req.path);
  console.log('Query Parameters:', req.query);
  console.log('Route Parameters:', req.params);
  console.log('Fresh:', req.fresh);
  console.log('Stale:', req.stale);
  console.log('Secure:', req.secure);
  console.log('XHR (AJAX):', req.xhr);
  console.log('IP Address:', req.ip);
  console.log('IPs (if behind proxy):', req.ips);
  console.log('Protocol:', req.protocol);
  console.log('Hostname:', req.hostname);
  console.log('Subdomains:', req.subdomains);
  console.log('User-Agent:', req.get('User-Agent'));
  console.log('Referer:', req.get('Referer'));
  console.log('Accept:', req.get('Accept'));
  console.log('Accept-Language:', req.get('Accept-Language'));
  console.log('Cookie:', req.get('Cookie'));
  console.log('Cache-Control:', req.get('Cache-Control'));
  console.log('If-None-Match (ETag):', req.get('If-None-Match'));
  console.log('If-Modified-Since:', req.get('If-Modified-Since'));
  console.log('Connection:', req.get('Connection'));
  console.log('Request Start Time:', new Date().toISOString());
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Original URL:', req.originalUrl);
  console.log('Path:', req.path);
  console.log('Query Parameters:', req.query);
  console.log('Headers:', req.headers);
  console.log('User-Agent:', req.get('User-Agent'));
  console.log('IP Address:', req.ip);
  console.log('Protocol:', req.protocol);
  console.log('Hostname:', req.hostname);
  console.log('Timestamp:', new Date().toISOString());
  console.log('Accept-Encoding:', req.get('Accept-Encoding'));
```