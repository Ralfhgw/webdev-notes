## Hooks
```javascript
import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useMemo,
  useCallback,
} from "react";
```
### Funktionale Komponente
```javascript
function MyComponent() {
  return <h1>Hello World</h1>;
}
// oder als Arrow Function
const MyComponent = () => <h1>Hello World</h1>;
```
### useState
Zustandsverwaltung
```javascript
const [count, setCount] = useState(0);
// Update:
setCount(count + 1);

// Initialwert als Funktion (nur beim ersten Render)
const [data, setData] = useState(() => expensiveInit());
```
### useEffect
Side Effects
```javascript
// Bei jedem Render
useEffect(() => {
  console.log("Render!");
});

// Nur beim ersten Render
useEffect(() => {
  console.log("Mount!");
}, []);

// Abhängig von count
useEffect(() => {
  console.log("Count geändert!");
}, [count]);

// Cleanup
useEffect(() => {
  const interval = setInterval(() => console.log("tick"), 1000);
  return () => clearInterval(interval);
}, []);
```
### useRef
Referenzen & Mutable Values
```javascript
const inputRef = useRef(null);

// Zugriff auf DOM-Element
<input ref={inputRef} />;
inputRef.current.focus();

// Example:
import React, { useEffect, useRef } from "react";

function FocusInputExample() {
  const inputRef = useRef(null);
  useEffect(() => { 
    inputRef.current.focus();
  }, []);

  return (
      <input  
        ref={inputRef}
        type="text"
        placeholder="Ich bekomme automatisch den Fokus!"
      />
  );
}
export default FocusInputExample;
```
```javascript
// Mutable Value
const renderCount = useRef(0);
renderCount.current++;

// Example:
import React, { useRef, useState, useEffect } from "react";

function RenderCountExample() {
  const [text, setText] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });

  return (
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tippe etwas ein..."
      />
      <p>Render Count: {renderCount.current}</p>
  );
}
export default RenderCountExample;
```
### Props
```javascript
function Greeting({ name }) {
  return <p>Hallo {name}!</p>;
}
<Greeting name="Alex" />
```
### useMemo – Werte merken
```
const result = useMemo(() => heavyComputation(a, b), [a, b]);
// Rechnet nur neu, wenn sich a oder b ändern.
```
### useCallback
Funktionen merken
```javascript
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
// Nützlich, wenn man Funktionen als Props weitergibt.
```

### useContext
Globaler Zustand
```javascript
const ThemeContext = React.createContext("light");
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
function Toolbar() {
  const theme = useContext(ThemeContext);
  return <p>Aktuelles Theme: {theme}</p>;
}
```
### useReducer
komplexer State
```javascript
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    default:
      return state;
  }
};
const [state, dispatch] = useReducer(reducer, { count: 0 });
dispatch({ type: "add" });
```
### useLayoutEffect
Wie useEffect, aber synchron vor dem Render – nützlich für Layout-Messungen
```javascript
useLayoutEffect(() => {
  console.log("Nach DOM-Änderung, vor Paint");
});
```

### useTransition / useDeferredValue
Für Concurrent Rendering – UI bleibt flüssig bei langsamen Updates
```javascript
const [isPending, startTransition] = useTransition();
startTransition(() => {
  setSearch(query);
});

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

const width = useWindowWidth();
```
### Export / Import
```
export default MyComponent;
import MyComponent from "./MyComponent";
export function Helper() {}
import { Helper } from "./utils";
```
### JSX Grundlagen
```
// Bedingungen
{isLoggedIn ? <Dashboard /> : <Login />}

// Listen
{items.map(item => <li key={item.id}>{item.name}</li>)}

// Events
<button onClick={handleClick}>Klick mich</button>
```
### Nützliche Patterns
Conditional Rendering (Kurzform)
```
{isVisible && <Modal />}
```
### Dynamische Klassen
```
<div className={`box ${active ? "active" : ""}`}></div>
```
## React children

In React bezeichnet children alles, was zwischen den JSX-Tags einer Komponente steht.
Mit props.children können Komponenten Inhalte flexibel aufnehmen, ohne vorher zu wissen, was dort steht.

### Eine Komponente, die children empfängt

Eine Komponente kann beliebige Inhalte zwischen ihren Tags entgegennehmen – Texte, andere Komponenten, JSX-Elemente usw.
```javascript
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
```

Hier sorgt \{children\} dafür, dass der Inhalt an genau dieser Stelle angezeigt wird.

### Eine Komponente, die children übergibt

Beim Verwenden der Komponente wird einfach JSX zwischen die öffnenden und schließenden Tags geschrieben:
```javascript
<Card>
  <h2>Überschrift</h2>
  <p>Inhalt</p>
</Card>
// Alles zwischen <Card>…</Card> wird als children an die Card-Komponente übergeben.
```
### Composable UI-Pattern

Das Composable UI-Pattern bedeutet:
Komponenten werden wie „Bausteine“ verwendet und können flexibel kombiniert werden.

Beispiel: Ein Button, der unterschiedliche Inhalte aufnehmen kann:
```javascript
function Button({ children }) {
  return <button className="btn">{children}</button>;
}

// Verwendung
<Button>Speichern</Button>

<Button>
  <Icon /> Speichern
</Button>

<Button>
  <strong>Wichtig!</strong>
</Button>
```

Vorteil:
Der Button definiert das Styling, aber der Inhalt bleibt komplett frei.

### Jedes Child automatisch verändern (z. B. CSS-Klassen vergeben)

Mit React.Children.map() kannst du auf alle Children zugreifen,
und mit React.cloneElement() kannst du jedes Child verändern oder erweitern.

Beispiel:
Jedes Kind soll automatisch eine CSS-Klasse bekommen.
```javascript
function List({ children }) {
  return (
    <>
      {React.Children.map(children, child =>
        React.cloneElement(child, { className: "list-item" })
      )}
    </>
  );
}
```

Verwendung:
```javascript
<List>
  <li>Erster Eintrag</li>
  <li>Zweiter Eintrag</li>
</List>
```

Resultat:
Alle li erhalten automatisch class="list-item".

## Context Provider
Der Context Provider in React ist Teil des Context API-Systems — ein Mechanismus, um Daten global in einer React-Anwendung verfügbar zu machen, ohne Props durch viele Komponenten weiterreichen zu müssen („prop drilling“). Normalerweise werden Daten in React über Props von Elternkomponenten an Kindkomponenten weitergegeben:
```javascript
<App>
  <Header user={user} />
</App>
```
Wenn du aber user auch in einer tiefer verschachtelten Komponente brauchst, musst du es über mehrere Ebenen weiterreichen – das wird schnell unübersichtlich. Context löst dieses Problem: Du kannst Daten „global“ bereitstellen, sodass jede Komponente im Baum darauf zugreifen kann.

### Erstellen des Contexts
```javascript
import { createContext } from "react";
const UserContext = createContext();
```
Damit erzeugst du ein Context-Objekt, das später Daten speichern kann.
### Bereitstellen des Contexts (Provider)
```javascript
import React, { useState } from "react";

export const UserContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Anna", loggedIn: true });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
```
- Der Provider ist eine React-Komponente, die einen Wert (value) bereitstellt.
- Alle Komponenten innerhalb von \<UserContext.Provider\> können auf diesen Wert zugreifen.

### Verwendung in der App
```javascript
import { UserProvider } from "./UserContext";
import Dashboard from "./Dashboard";

function App() {
  return (
    <UserProvider>
      <Dashboard />
    </UserProvider>
  );
}
```
### Verbrauch des Contexts (Consumer oder useContext Hook)
Früher ging das mit einem Consumer, heute meist einfacher mit dem Hook:
```javascript
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Dashboard() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Willkommen, {user.name}!</h1>
      <button onClick={() => setUser({ ...user, loggedIn: false })}>
        Logout
      </button>
    </div>
  );
}
```