### JavaScript Error Handling – Übersicht
#### 1. try / catch / finally
```javascript
try {
  // Code, der Fehler werfen kann
} catch (err) {
  // Fehler behandeln
} finally {
  // Wird immer ausgeführt
}
```
- try: Bereich mit potenziellen Fehlern
- catch: fängt Fehler ab (err.name, err.message)
- finally: wird immer ausgeführt, egal ob Fehler oder nicht

#### 2. Eigene Fehler mit throw
```javascript
throw new Error("Fehlermeldung");

// Beispiel:
function divide(a, b) {
  if (b === 0) throw new Error("Division durch 0 nicht erlaubt");
  return a / b;
}
```

#### 3. Error-Klassen & eigene Fehlerklassen
JavaScript bietet eingebaute Klassen wie Error, TypeError, RangeError.
```javascript
class ValidationError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "ValidationError";
  }
}
```
- Eigene Klasse:
- Fehlerarten klar unterscheidbar
- gut kombinierbar mit instanceof

#### 4. Promises mit .catch()
```javascript
new Promise((_, reject) =>
  reject(new Error("Asynchroner Fehler"))
)
.catch(err => console.log(err.message));
```

Hinweis:
Ein Promise-Fehler muss mit .catch() abgefangen werden – sonst entsteht eine unhandled promise rejection.

#### 5. async / await + HTTP-Status prüfen
```javascript
try {
  const res = await fetch('/api/x');

  if (!res.ok) throw new Error("HTTP Fehler " + res.status);

  const data = await res.json();
} catch (err) {
  console.log("async/await:", err.message);
}
```
- fetch() wirft keine HTTP-Fehler, sondern nur Netzwerkfehler
- HTTP-Status manuell mit res.ok prüfen

#### 6. Callback-Style (Node.js Muster)
```javascript
function doWorkCallback(cb) {
  setTimeout(() => {
    const err = new Error("Fehler");
    const data = null;
    cb(err, data); // error-first
  }, 250);
}
```
cb(err, data) – zuerst Fehler, danach Ergebnis.

#### 7. Globale Fehlerbehandlung (Browser)
##### Synchronous Errors
```javascript
window.onerror = (msg, src, line, col, error) => {
  console.warn("window.onerror →", msg);
};
```
##### Unhandled Promises
```javascript
window.onunhandledrejection = event => {
  console.warn("unhandledrejection →", event.reason);
};
```
#### 8. Globale Fehler absichtlich auslösen
##### Ohne try/catch
```javascript
nonexistentFunctionCall(); 
// → wandert zu window.onerror
```
##### Promise ohne catch
```javascript
Promise.reject(new Error("Promise-Fehler"));
// → geht zu onunhandledrejection
```

### Besonderheiten beim Error Handling in React
#### 1. Error Boundaries (nur für Render-, Lifecycle- und Constructor-Fehler)

React bietet ein eigenes Konzept: Error Boundaries.
Sie funktionieren ähnlich wie try/catch, fangen aber nur UI-bezogene Fehler ab:
- Fehler im Rendern
- Fehler in Lifecycle Methods
- Fehler im Constructor von Komponenten
- Fehler in Kind-Komponenten

#### Beispiel:
```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("React Fehler:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Etwas ist schiefgelaufen.</h2>;
    }
    return this.props.children;
  }
}
```

#### Verwendung:
```javascript
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```
⚠️ Error Boundaries fangen NICHT folgende Fehler ab:
- Fehler in Event-Handlern
- Fehler in async/await oder Promises
- Fehler im Server-Side Rendering
- Fehler im Fetching außerhalb des Renderings
- Fehler beim setTimeout, setInterval

#### 2. Event-Handler müssen weiterhin try/catch verwenden

React fängt Fehler in Eventhandlern absichtlich nicht ab.
```javascript
function handleClick() {
  try {
    doSomething();
  } catch (err) {
    console.error(err);
  }
}
```
#### 3. Error Boundaries funktionieren nicht bei async/await

Fehler in asynchronem Code landen nicht in Error Boundaries:
```javascript
async function load() {
  throw new Error("Boom");
}

useEffect(() => {
  load(); // fängt der Error Boundary NICHT ab
}, []);
```
Diese Fehler müssen mit try/catch oder .catch() behandelt werden.

#### 4. React 18: Verbesserte Fehlerpropagation in Strict Mode

Im Dev-Mode werden bestimmte Fehler zweimal ausgelöst, um Nebenwirkungen zu finden.
Das beeinflusst Debugging – nicht aber dein Error Handling.

#### 5. React bietet eine neue Alternative: useErrorBoundary() (React Router / TanStack Query)

Moderne Ökosystem-Libraries integrieren Error Boundaries vollständig:
```javascript
const { showBoundary } = useErrorBoundary();

try {
  await somethingFailing();
} catch (err) {
  showBoundary(err);
}
```
Damit kannst du asynchrone Fehler in Error Boundaries hochwerfen.

#### 6. React Router: Fehlerseiten / errorElement

Beim Routing können Fehler automatisch auf spezielle Fehlerseiten geleitet werden:
```javascript
{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />
}
```
7. Suspense + Error Boundaries (für Data Fetching)

Mit Suspense kann React Error Boundaries automatisch für Lade- und Fehlerzustände verwenden.

### Beispiel-Code für Error Simulation
```javascript
<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>JavaScript Error-Handling – Alle Varianten im Überblick</title>
  <style>
    :root { --bg:#0f172a; --card:#111827; --muted:#94a3b8; --ok:#10b981; --warn:#f59e0b; --err:#ef4444; }
    *{box-sizing:border-box}
    body{margin:0;font:16px/1.5 system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Helvetica,Arial,sans-serif;background:linear-gradient(180deg,#0b1220,#0f172a 20%);color:#e5e7eb;}
    header{padding:28px 20px 10px; text-align:center}
    h1{margin:0 0 8px;font-size:clamp(20px,3vw,32px)}
    p.subtitle{margin:0;color:var(--muted)}
    main{max-width:1100px;margin:24px auto;padding:0 20px;display:grid;grid-template-columns:1fr;gap:16px}
    @media (min-width:900px){ main{grid-template-columns: 360px 1fr} }
    .card{background:rgba(17,24,39,.8);border:1px solid rgba(148,163,184,.15);border-radius:16px;padding:14px 14px 16px;box-shadow:0 10px 30px rgba(0,0,0,.25);}
    .card h2{margin:4px 6px 10px;font-size:18px;color:#f8fafc}
    .btns{display:grid;grid-template-columns:1fr;gap:8px}
    .btn{appearance:none;border:1px solid rgba(148,163,184,.25);background:#0b1220;color:#e5e7eb;padding:10px 12px;border-radius:12px;cursor:pointer;transition:.2s;font-weight:600}
    .btn:hover{transform:translateY(-1px);border-color:#64748b}
    .btn:active{transform:translateY(0)}
    .btn.ok{border-color:rgba(16,185,129,.35)}
    .btn.warn{border-color:rgba(245,158,11,.35)}
    .btn.err{border-color:rgba(239,68,68,.35)}
    .note{font-size:13px;color:var(--muted);margin:8px 6px 0}
    .log{min-height:280px;background:radial-gradient(1200px 400px at 10% -10%,rgba(2,132,199,.12),transparent 40%), #0b1020;border:1px solid rgba(148,163,184,.2);border-radius:14px;padding:10px;overflow:auto}
    .row{display:flex;gap:10px;align-items:flex-start;padding:6px 6px 6px 10px;border-bottom:1px dashed rgba(148,163,184,.15)}
    .row:last-child{border-bottom:0}
    .tag{font:600 12px/18px ui-monospace,Menlo,Consolas,monospace;border-radius:8px;padding:1px 6px;margin-top:2px;white-space:nowrap}
    .tag.ok{background:rgba(16,185,129,.15);color:#a7f3d0;border:1px solid rgba(16,185,129,.3)}
    .tag.warn{background:rgba(245,158,11,.12);color:#fde68a;border:1px solid rgba(245,158,11,.3)}
    .tag.err{background:rgba(239,68,68,.12);color:#fecaca;border:1px solid rgba(239,68,68,.3)}
    .msg{flex:1;word-break:break-word}
    .code{font:600 12px/1.6 ui-monospace,Menlo,Consolas,monospace;color:#e2e8f0}
    footer{max-width:1100px;margin:8px auto 30px;color:var(--muted);padding:0 20px}
    kbd{font:600 12px ui-monospace,Menlo,Consolas;padding:2px 6px;border:1px solid rgba(148,163,184,.35);border-bottom-width:2px;border-radius:6px;background:#0b1220;color:#e5e7eb}
  </style>
</head>
<body>
  <header>
    <h1>JavaScript Error-Handling – interaktive Demo</h1>
    <p class="subtitle">Zeigt <em>try/catch/finally</em>, <em>throw</em> & benutzerdefinierte Fehler, Promise-<em>.catch</em>, <em>async/await</em> sowie globale Browser-Handler (<code>window.onerror</code>, <code>unhandledrejection</code>).</p>
  </header>
  <main>
    <section class="card">
      <h2>Aktionen</h2>
      <div class="btns">
        <button class="btn" onclick="demoTryCatch()">try / catch / finally</button>
        <button class="btn" onclick="demoThrowCustom()">Eigener Fehler mit throw</button>
        <button class="btn" onclick="demoErrorClasses()">Error-Klassen (TypeError & Custom)</button>
        <button class="btn" onclick="demoPromiseCatch()">Promise mit .catch()</button>
        <button class="btn" onclick="demoAsyncAwait()">async / await + HTTP-Check</button>
        <button class="btn" onclick="demoCallbackStyle()">Callback-Style (Node-Pattern)</button>
        <button class="btn warn" onclick="triggerUnhandledError()">(Global) Unbehandelter Fehler</button>
        <button class="btn warn" onclick="triggerUnhandledRejection()">(Global) Unbehandelte Promise</button>
        <button class="btn ok" onclick="clearLog()">Log leeren</button>
      </div>
      <p class="note">Hinweis: In Node.js würden globale Handler <code>process.on('uncaughtException')</code> & <code>process.on('unhandledRejection')</code> heißen. Im Browser nutzen wir <code>window.onerror</code> & <code>window.onunhandledrejection</code>.</p>
    </section>
    <section class="card">
      <h2>Konsole</h2>
      <div id="log" class="log" aria-live="polite"></div>
    </section>
  </main>
  <footer>
    Tipp: Öffne zusätzlich die Entwicklerkonsole (<kbd>F12</kbd> bzw. <kbd>⌥⌘I</kbd> / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd>), um native Fehlermeldungen zu sehen.
  </footer>


  <script>
    // -------- Hilfsfunktionen für Ausgabe --------
    const $log = () => document.getElementById('log');
    function line(kind, text){
      const row = document.createElement('div');
      row.className = 'row';
      const tag = document.createElement('span');
      tag.className = 'tag ' + (kind==='ok'?'ok': kind==='warn'?'warn':'err');
      tag.textContent = kind.toUpperCase();
      const msg = document.createElement('div');
      msg.className = 'msg code';
      msg.textContent = text;
      row.append(tag,msg);
      $log().append(row);
      $log().scrollTop = $log().scrollHeight;
    }
    function clearLog(){ $log().innerHTML=''; }

    // -------- Globale Browser-Handler --------
    window.onerror = function (message, source, lineno, colno, error) {
      line('warn', `window.onerror → ${message} @ ${source}:${lineno}:${colno}`);
    };
    window.onunhandledrejection = function (event) {
      const reason = event.reason instanceof Error ? (event.reason.name + ': ' + event.reason.message) : String(event.reason);
      line('warn', `unhandledrejection → ${reason}`);
    };

    // -------- 1) try / catch / finally --------
    function demoTryCatch(){
      try {
        line('ok', 'Parsing startet …');
        JSON.parse('{ "unvollständig": true'); // absichtlich kaputt
        line('ok', 'Dieser Log erscheint nie, da oben ein Fehler geworfen wird');
      } catch (err) {
        line('err', `catch: ${err.name} – ${err.message}`);
      } finally {
        line('ok', 'finally: Cleanup wird immer ausgeführt');
      }
    }

    // -------- 2) Eigener Fehler mit throw --------
    function divide(a,b){
      if (b === 0) throw new Error('Division durch 0 nicht erlaubt');
      return a/b;
    }
    function demoThrowCustom(){
      try {
        const r = divide(10, 0);
        line('ok', 'Ergebnis: ' + r);
      } catch (err) {
        line('err', `Eigenes throw → ${err.message}`);
      }
    }

    // -------- 3) Error-Klassen --------
    class ValidationError extends Error{ constructor(msg){ super(msg); this.name = 'ValidationError'; } }
    function expectNumber(x){ if (typeof x !== 'number') throw new TypeError('Erwarte Zahl, bekam ' + typeof x); }
    function mustBePositive(n){ if (n <= 0) throw new ValidationError('Zahl muss > 0 sein'); }
    function demoErrorClasses(){
      try { expectNumber('42'); }
      catch(e){ line('err', `${e.name}: ${e.message}`); }
      try { mustBePositive(0); }
      catch(e){ line('err', `${e.name}: ${e.message}`); }
      line('ok', 'Eigene Klassen erlauben gezieltes Unterscheiden per instanceof / name');
    }

    // -------- 4) Promise mit .catch() --------
    function demoPromiseCatch(){
      new Promise((_, reject)=> setTimeout(()=> reject(new Error('Asynchroner Fehler in Promise')), 300))
        .then(()=> line('ok','(wird nicht aufgerufen)'))
        .catch(err => line('err', `.catch(): ${err.name} – ${err.message}`));
    }

    // -------- 5) async/await + HTTP-Status prüfen --------
    async function demoAsyncAwait(){
      try {
        const res = await fetch('/api/does-not-exist'); // absichtlich 404
        if (!res.ok) throw new Error('HTTP Fehler ' + res.status);
        const data = await res.json();
        line('ok', 'Daten: ' + JSON.stringify(data));
      } catch (err) {
        line('err', `async/await: ${err.message}`);
      }
    }

    // -------- 6) Callback-Style (Node-Pattern) --------

    function doWorkCallback(cb){
      setTimeout(()=>{
        // Wir simulieren einen Fehler
        const err = Math.random() < 0.99 ? new Error('Simulierter Callback-Fehler') : null;
        const data = err ? null : { ok:true };
        cb(err, data);
      }, 250);
    }

    function demoCallbackStyle(){
      doWorkCallback((err, data)=>{
        if (err) { line('err', 'Callback-Fehler: ' + err.message); return; }
        line('ok', 'Callback-Daten: ' + JSON.stringify(data));
      });
    }

    // -------- 7) Globale unbehandelte Fälle auslösen --------
    function triggerUnhandledError(){
      // Kein try/catch → geht zu window.onerror
      nonexistentFunctionCall();
    }

    function triggerUnhandledRejection(){
      // Promise ohne .catch → geht zu onunhandledrejection
      Promise.reject(new Error('Unbehandelte Promise-Rejection'));
    }

  </script>
</body>
</html>
```