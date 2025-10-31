
```
import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useMemo,
  useCallback,
} from "react";
```

### **Komponenten**
**Funktionale Komponente**
```
function MyComponent() {
  return <h1>Hello World</h1>;
}
// oder als Arrow Function
const MyComponent = () => <h1>Hello World</h1>;
```
**useState – Zustandsverwaltung**
```
const [count, setCount] = useState(0);
// Update:
setCount(count + 1);

// Initialwert als Funktion (nur beim ersten Render)
const [data, setData] = useState(() => expensiveInit());
```
**useEffect – Side Effects**
```
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
**useRef – Referenzen & Mutable Values**
```
const inputRef = useRef(null);
// Zugriff auf DOM-Element
<input ref={inputRef} />;
inputRef.current.focus();
// Mutable Value
const renderCount = useRef(0);
renderCount.current++;
```
**Props**
```
function Greeting({ name }) {
  return <p>Hallo {name}!</p>;
}
<Greeting name="Alex" />
```
**useMemo – Werte merken**
```
const result = useMemo(() => heavyComputation(a, b), [a, b]);
// Rechnet nur neu, wenn sich a oder b ändern.
```
**useCallback – Funktionen merken**
```
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
// Nützlich, wenn man Funktionen als Props weitergibt.
```


**useContext – Globaler Zustand**
```
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
**useReducer – komplexer State**
```
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
**useLayoutEffect**
<small>Wie useEffect, aber synchron vor dem Render – nützlich für Layout-Messungen:</small>
```
useLayoutEffect(() => {
  console.log("Nach DOM-Änderung, vor Paint");
});
```

**useTransition / useDeferredValue**
<small>Für Concurrent Rendering – UI bleibt flüssig bei langsamen Updates:</small>
```
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

**Export / Import**
```
export default MyComponent;
import MyComponent from "./MyComponent";
export function Helper() {}
import { Helper } from "./utils";
```
**JSX Grundlagen**
```
// Bedingungen
{isLoggedIn ? <Dashboard /> : <Login />}

// Listen
{items.map(item => <li key={item.id}>{item.name}</li>)}

// Events
<button onClick={handleClick}>Klick mich</button>
```
**Nützliche Patterns**
<small>Conditional Rendering (Kurzform)</small>
```
{isVisible && <Modal />}
```
**Dynamische Klassen**
```
<div className={`box ${active ? "active" : ""}`}></div>
```