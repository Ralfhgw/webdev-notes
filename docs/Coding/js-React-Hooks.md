Custom Hooks unterscheiden sich danach, ob sie State verwalten, Side Effects kapseln, Events beobachten, UI-Steuerung vereinfachen, Performance verbessern oder externe APIs integrieren.
Uusehooks.com)

### 1. State-Management Hooks

Diese Hooks kapseln komplexe oder wiederholte Logik rund um useState, useReducer oder eine Kombination daraus.

#### Beispiele:
- useToggle → boolean an/aus
- useCounter → Zähler verwalten
- useForm → Formulareingaben + Validation
- useList → Arrays verwalten (push, remove, clear …)

Typisch:
Sie vereinfachen das Arbeiten mit lokalen React-States.

### 2. Side-Effect Hooks

Diese kombinieren useEffect mit Zusatzlogik oder externen APIs.

#### Beispiele:
- useFetch(url) → Daten laden
- useLocalStorage(key) → State in localStorage synchronisieren
- useDebounce(value) → Werte verzögert aktualisieren
- useInterval(fn, delay) → wiederholte Funktionen (setInterval)

Typisch:
Alles, was externe Wirkungen („Side Effects“) hat.

### 3. Event- und Listener-Hooks

Diese hängen Event Listener an Window, Document oder DOM-Elemente.

#### Beispiele:
- useWindowSize
- useScrollPosition
- useKeyPress("Escape")
- useMousePosition

Typisch:
Sie beobachten die Umwelt (Browser-Events) und liefern React-State zurück.

### 4. UI-/Komfort-Hooks

Hooks, die UI-Verhalten oder Animationen vereinfachen.

#### Beispiele:
- useDarkMode
- useDisclosure (geöffnet/geschlossen für Modals/Accordions)
- useHover(ref)
- useCopyToClipboard

Typisch:
UI Interaktionen kapseln.

### 5. Performance-/Optimierungs-Hooks

Diese helfen bei der Optimierung von häufigen Updates.

#### Beispiele:
- useDebouncedValue
- useThrottledValue
- usePrevious(value)
- useDeepCompareEffect (statt normalem useEffect für tiefe Vergleiche)

Typisch:
Sie lösen Updates nur aus, wenn wirklich nötig.

### 6. Daten-/API Hooks

Diese abstrahieren das Laden, Cachen oder Mutieren von Daten.

#### Beispiele:
- useQuery / useMutation (vergleichbar mit React Query)
- useApi für REST APIs
- useWebSocket(url)

Typisch:
Sie kapseln Networking & API-Aufrufe.

### 7. Integrations-Hooks

Um externe Systeme und APIs in React einzubinden.

#### Beispiele:
- useFirebaseAuth
- useGeolocation
- useSpeechRecognition
- useMediaRecorder

Typisch:
Ein JavaScript- oder Browser-API wird in React-State verwandelt.

### 8. Ref-/DOM-Hooks

Diese arbeiten viel mit useRef und direkten DOM-Elementen.

#### Beispiele:
- useMeasure(ref) → Größe eines Elements messen
- useClickOutside(ref, handler)
- useFocusTrap(ref) → modale Dialoge

### BeispielCode

App.tsx
```javascript
import { useState } from "react";
import { useToggle } from "./hooks/useToggle";           // State-Management
import { useFetch } from "./hooks/useFetch";             // Side-Effect
import { useWindowSize } from "./hooks/useWindowSize";   // Event/Listener
import { useHover } from "./hooks/useHover";             // UI-Komfort
import { useDebounce } from "./hooks/useDebounce";       // Performance
import { useWebSocket } from "./hooks/useWebSocket";     // Daten/API
import { useGeolocation } from "./hooks/useGeolocation"; // Integrations
/* import { useClickOutside } from "./hooks/useClickOutside"; */ // DOM/Ref

export default function App() {
  const [on, toggle] = useToggle();                           // 1. State Management
  const fetched = useFetch("/api/hello");                     // 2. Side Effect
  const size = useWindowSize();                               // 3. Event Listener
  const [hoverRef, hover] = useHover();                       // 4. UI Komfort
  const [text, setText] = useState("");                       // 5. Performance
  const debounced = useDebounce(text, 400);
  const wsMessage = useWebSocket("wss://echo.websocket.org"); // 6. WebSocket
  const pos = useGeolocation();   // 7. Geolocation
/*   const boxRef = useClickOutside(() => alert("You clicked OUTSIDE the box!"));  */ // 8. Click Outside
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Alle Beispiel-Hooks</h1>

      <section>
        <h2>1. useToggle</h2>
        <button onClick={toggle}>Status: {on ? "AN" : "AUS"}</button>
      </section>

      <section>
        <h2>2. useFetch</h2>
        <pre>{JSON.stringify(fetched, null, 2)}</pre>
      </section>

      <section>
        <h2>3. useWindowSize</h2>
        <p>{size.w} × {size.h}</p>
      </section>

      <section>
        <h2>4. useHover</h2>
        <div
          ref={hoverRef}
          style={{
            padding: "10px",
            border: "1px solid black",
            width: "120px",
            background: hover ? "#d1ffd1" : "#fff"
          }}
        >
          {hover ? "Hover!" : "Nicht hover"}
        </div>
      </section>

      <section>
        <h2>5. useDebounce</h2>
        <input
          placeholder="Tippe etwas…"
          onChange={(e) => setText(e.target.value)}
        />
        <p>Debounced: {debounced}</p>
      </section>

      <section>
        <h2>6. useWebSocket</h2>
        <p>Letzte Nachricht: {wsMessage}</p>
      </section>

      <section>
        <h2>7. useGeolocation</h2>
        <pre>{JSON.stringify(pos, null, 2)}</pre>
      </section>

{/*       <section>
        <h2>8. useClickOutside</h2>
        <div
          ref={boxRef}
          style={{
            marginTop: "10px",
            padding: "15px",
            border: "2px dashed blue",
            width: "200px"
          }}
        >
          Klick mich – Klicks außerhalb lösen ein Alert aus
        </div>
      </section> */}

    </div>
  );
}
```

useClickOutside.ts
```javascript
import { useEffect, useRef } from "react";
export function useClickOutside(cb: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const f = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && cb();
    addEventListener("mousedown", f);
    return () => removeEventListener("mousedown", f);
  }, []);
  return ref;
}
```
useCounter.ts
```javascript
import { useState } from "react";

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  return {
    count,
    inc: () => setCount(c => c + 1),
    dec: () => setCount(c => c - 1)
  };
}
```
useDebounce.ts
```javascript
import { useEffect, useState } from "react";
export function useDebounce<T>(v: T, delay = 300) {
  const [d, set] = useState(v);
  useEffect(() => { const t = setTimeout(() => set(v), delay); return () => clearTimeout(t); }, [v]);
  return d;
}
```
useFetch.ts
```javascript
import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json as T));
  }, [url]);

  return data;
}
```
useGeolocation.ts
```javascript
import { useState, useEffect } from "react";
export function useGeolocation() {
  const [pos, set] = useState<GeolocationPosition | null>(null);
  useEffect(() => navigator.geolocation.getCurrentPosition(set), []);
  return pos;
}
```
useHover.ts
```javascript
import { useState, useRef, useEffect } from "react";
export function useHover() {
  const ref = useRef<HTMLDivElement>(null);
  const [h, set] = useState(false);
  useEffect(() => {
    const el = ref.current!;
    el.onmouseenter = () => set(true);
    el.onmouseleave = () => set(false);
  }, []);
  return [ref, h] as const;
}
```
useToggle.ts
```javascript
import { useState } from "react";

export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue(v => !v);
  return [value, toggle] as const;
}
```
useWebSocket.ts
```javascript
import { useEffect, useState } from "react";
export function useWebSocket(url: string) {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    const ws = new WebSocket(url);
    ws.onmessage = e => setMsg(e.data);
    return () => ws.close();
  }, [url]);
  return msg;
}
```
useWindowSize.ts
```javascript
import { useEffect, useState } from "react";
export function useWindowSize() {
  const [s, set] = useState({ w: innerWidth, h: innerHeight });
  useEffect(() => {
    const f = () => set({ w: innerWidth, h: innerHeight });
    addEventListener("resize", f);
    return () => removeEventListener("resize", f);
  }, []);
  return s;
}
```