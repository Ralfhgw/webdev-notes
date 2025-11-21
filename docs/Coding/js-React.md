### useState – Zustand verwalten
```
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Aktueller Wert: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```
### useEffect – Side Effects (API, Timer, DOM-Updates)
#### Beispiel 1: API Call
```
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // nur beim Mount

  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```
#### Beispiel 2: Timer
```
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick...");
  }, 1000);

  return () => clearInterval(timer); // Cleanup
}, []);
```
### useContext – globale Daten
#### Kontext erstellen
```
import { createContext } from "react";
export const ThemeContext = createContext();
```
### Provider-Komponente
```
function App() {
  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      <Navbar />
    </ThemeContext.Provider>
  );
}
```
#### Nutzung in Kind-Komponente
```
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  return <div>Aktuelles Theme: {theme}</div>;
}
```
### useRef – persistente Werte & DOM Referenzen
#### Beispiel 1: DOM-Element referenzieren
```
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Fokus setzen</button>
    </>
  );
}
```
#### Beispiel 2: Persistente Werte ohne Re-Render
```
function Timer() {
  const count = useRef(0);

  const increment = () => {
    count.current += 1;
    console.log("Count (ohne re-render):", count.current);
  };

  return <button onClick={increment}>Zähler erhöhen</button>;
}
```
### useMemo – Memoisierte Werte
#### Nutzen, wenn eine teure Berechnung nur bei bestimmten Änderungen laufen soll.
```
import { useState, useMemo } from "react";

function ExpensiveCalculation() {
  const [num, setNum] = useState(1);

  const squared = useMemo(() => {
    console.log("Berechnung läuft...");
    return num * num;
  }, [num]);

  return (
    <>
      <p>Zahl: {num}</p>
      <p>Quadrat: {squared}</p>
      <button onClick={() => setNum(num + 1)}>+1</button>
    </>
  );
}
```
### useCallback – memoisierte Funktionen
Verhindert unnötige Neu-Erstellung von Funktionen (wichtig bei Props + großen Kindkomponenten).
```
import { useState, useCallback } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Click!");
  }, []); // wird nur einmal erstellt

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Child onClick={handleClick} />
    </>
  );
}

function Child({ onClick }) {
  console.log("Child render");
  return <button onClick={onClick}>Child Btn</button>;
}
```
## children
### 1. Component, die children empfängt
```
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
```
### 2. Component, die children übergibt
```
<Card>
  <h2>Überschrift</h2>
  <p>Inhalt</p>
</Card>
```
### Composable UI-Pattern
```
function Button({ children }) {
  return <button className="btn">{children}</button>;
}

<Button>Speichern</Button>
<Button><Icon /> Speichern</Button>
<Button><strong>Wichtig!</strong></Button>
```
### jedes Child bekommt automatisch eine CSS-Klasse
```
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
