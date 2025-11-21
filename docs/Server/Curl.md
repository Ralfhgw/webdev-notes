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