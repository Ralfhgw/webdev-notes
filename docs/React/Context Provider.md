Der Context Provider in React ist Teil des Context API-Systems — ein Mechanismus, um Daten global in einer React-Anwendung verfügbar zu machen, ohne Props durch viele Komponenten weiterreichen zu müssen („prop drilling“). Normalerweise werden Daten in React über Props von Elternkomponenten an Kindkomponenten weitergegeben:
```
<App>
  <Header user={user} />
</App>
```
Wenn du aber user auch in einer tiefer verschachtelten Komponente brauchst, musst du es über mehrere Ebenen weiterreichen – das wird schnell unübersichtlich.
Context löst dieses Problem: Du kannst Daten „global“ bereitstellen, sodass jede Komponente im Baum darauf zugreifen kann.

Erstellen des Contexts
```
import { createContext } from "react";
const UserContext = createContext();
```

Damit erzeugst du ein Context-Objekt, das später Daten speichern kann.
Bereitstellen des Contexts (Provider)
```
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
```
🔹 Der Provider ist eine React-Komponente, die einen Wert (value) bereitstellt.
🔹 Alle Komponenten innerhalb von <UserContext.Provider> können auf diesen Wert zugreifen.
```
Verwendung in der App
```
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
Verbrauch des Contexts (Consumer oder useContext Hook)
Früher ging das mit einem Consumer, heute meist einfacher mit dem Hook:
```
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