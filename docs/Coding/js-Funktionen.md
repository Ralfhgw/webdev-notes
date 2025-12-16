---
id: js-funktionen
title: JavaScript — Funktionen
---

## Was sind Funktionen?

Funktionen sind wiederverwendbare Code-Blöcke, die eine bestimmte Aufgabe ausführen. Sie sind eines der wichtigsten Konzepte in JavaScript.

### Vorteile
- ✅ Code-Wiederverwendung
- ✅ Modularität & Struktur
- ✅ Einfachere Wartung
- ✅ Abstraktionsmöglichkeit

---

## 1. Funktionsdeklarationen

### Klassische Funktionsdeklaration
```javascript
function begruessen(name) {
  console.log("Hallo " + name + "!");
}

begruessen("Max"); // "Hallo Max!"
```

**Eigenschaften:**
- Wird **gehoisted** (kann vor Definition aufgerufen werden)
- Hat eigenes `this`
- Kann als Constructor verwendet werden

```javascript
// Hoisting-Beispiel
sagHallo(); // funktioniert!

function sagHallo() {
  console.log("Hallo");
}
```

---

### Funktionsausdruck (Function Expression)
```javascript
const begruessen = function(name) {
  console.log("Hallo " + name + "!");
};

begruessen("Anna"); // "Hallo Anna!"
```

**Eigenschaften:**
- Wird **nicht gehoisted** (nur Variable wird gehoisted)
- Hat eigenes `this`
- Kann anonym sein

```javascript
// Fehler: begruessen ist noch nicht definiert
begruessen("Max"); // ReferenceError

const begruessen = function(name) {
  console.log("Hallo " + name);
};
```

---

### Pfeilfunktion (Arrow Function)
```javascript
const begruessen = (name) => {
  console.log("Hallo " + name + "!");
};

begruessen("Lisa"); // "Hallo Lisa!"
```

**Kurzschreibweisen:**
```javascript
// Ein Parameter → Klammern optional
const quadrat = x => x * x;

// Kein Parameter → leere Klammern
const sagHallo = () => console.log("Hallo");

// Mehrere Parameter → Klammern erforderlich
const addiere = (a, b) => a + b;

// Impliziter Return (ohne {})
const verdopple = x => x * 2;

// Expliziter Return (mit {})
const verdopple2 = x => {
  return x * 2;
};

// Objekt zurückgeben → Klammern um {}
const erstelleUser = (name) => ({ name, erstellt: new Date() });
```

**Wichtiger Unterschied: kein eigenes `this`**
```javascript
const person = {
  name: "Max",
  
  // Normale Funktion: eigenes this
  sagHallo: function() {
    console.log("Hallo, ich bin " + this.name);
  },
  
  // Arrow Function: this vom äußeren Scope
  sagTschuess: () => {
    console.log("Tschüss von " + this.name); // undefined!
  }
};

person.sagHallo(); // "Hallo, ich bin Max"
person.sagTschuess(); // "Tschüss von undefined"
```

---

## 2. Spezielle Funktionstypen

### Anonyme Funktion
Funktion ohne Namen, oft als Callback verwendet.

```javascript
// In setTimeout
setTimeout(function() {
  console.log("Nach 1 Sekunde");
}, 1000);

// In Event-Listener
document.querySelector("button")?.addEventListener("click", function() {
  console.log("Button geklickt");
});

// In Array-Methoden
[1, 2, 3].forEach(function(zahl) {
  console.log(zahl * 2);
});
```

---

### IIFE (Immediately Invoked Function Expression)
Funktion, die sofort nach Definition ausgeführt wird.

```javascript
(function() {
  console.log("Ich starte sofort!");
})();

// Mit Parametern
(function(name) {
  console.log("Hallo " + name);
})("Max");

// Arrow-Function IIFE
(() => {
  console.log("IIFE mit Arrow Function");
})();
```

**Verwendungszweck:**
- Private Scope erstellen
- Vermeidung von globalen Variablen
- Einmalige Initialisierung

```javascript
const modul = (function() {
  // Privat
  let counter = 0;
  
  // Öffentlich
  return {
    increment() {
      counter++;
    },
    getCount() {
      return counter;
    }
  };
})();

modul.increment();
console.log(modul.getCount()); // 1
console.log(modul.counter); // undefined (privat)
```

---

## 3. Parameter & Argumente

### Default-Parameter
```javascript
function begruessen(name = "Gast", sprache = "de") {
  if (sprache === "de") {
    return "Hallo " + name;
  } else {
    return "Hello " + name;
  }
}

console.log(begruessen()); // "Hallo Gast"
console.log(begruessen("Max")); // "Hallo Max"
console.log(begruessen("Max", "en")); // "Hello Max"
```

---

### Rest-Parameter (...args)
Sammelt beliebig viele Argumente in einem Array.

```javascript
function summe(...zahlen) {
  return zahlen.reduce((total, zahl) => total + zahl, 0);
}

console.log(summe(1, 2, 3)); // 6
console.log(summe(1, 2, 3, 4, 5)); // 15
console.log(summe()); // 0
```

**Kombiniert mit normalen Parametern:**
```javascript
function loggen(nachricht, ...details) {
  console.log(nachricht, details);
}

loggen("Fehler:", "Code 404", "Datei nicht gefunden");
// "Fehler:" ["Code 404", "Datei nicht gefunden"]
```

---

### Spread-Operator (...)
Verteilt Array-Elemente als einzelne Argumente.

```javascript
function addiere(a, b, c) {
  return a + b + c;
}

const zahlen = [1, 2, 3];
console.log(addiere(...zahlen)); // 6

// Arrays kombinieren
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const kombiniert = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Objekte kombinieren
const user = { name: "Max" };
const details = { alter: 30, stadt: "Berlin" };
const vollstaendig = { ...user, ...details };
// { name: "Max", alter: 30, stadt: "Berlin" }
```

---

## 4. Higher-Order Functions

Funktionen, die andere Funktionen als Parameter nehmen oder zurückgeben.

### Funktion als Parameter (Callback)
```javascript
function verarbeite(daten, callback) {
  console.log("Verarbeite Daten...");
  const ergebnis = daten * 2;
  callback(ergebnis);
}

verarbeite(5, (ergebnis) => {
  console.log("Ergebnis:", ergebnis); // 10
});
```

**Praktisches Beispiel:**
```javascript
function laden(url, onSuccess, onError) {
  fetch(url)
    .then(response => response.json())
    .then(onSuccess)
    .catch(onError);
}

laden(
  "https://api.example.com/users",
  (users) => console.log("User:", users),
  (error) => console.error("Fehler:", error)
);
```

---

### Funktion zurückgeben
```javascript
function multiplizieren(faktor) {
  return function(zahl) {
    return zahl * faktor;
  };
}

const malZwei = multiplizieren(2);
const malZehn = multiplizieren(10);

console.log(malZwei(5)); // 10
console.log(malZehn(5)); // 50
```

**Praktisches Beispiel: Konfiguration**
```javascript
function erstelleLogger(prefix) {
  return function(nachricht) {
    console.log(`[${prefix}] ${nachricht}`);
  };
}

const errorLog = erstelleLogger("ERROR");
const infoLog = erstelleLogger("INFO");

errorLog("Datei nicht gefunden"); // [ERROR] Datei nicht gefunden
infoLog("Server gestartet"); // [INFO] Server gestartet
```

---

## 5. Closures

Innere Funktion hat Zugriff auf Variablen der äußeren Funktion, auch nachdem die äußere Funktion beendet ist.

### Einfaches Beispiel
```javascript
function zaehler() {
  let count = 0; // Privat
  
  return function() {
    count++;
    return count;
  };
}

const hochzaehlen = zaehler();
console.log(hochzaehlen()); // 1
console.log(hochzaehlen()); // 2
console.log(hochzaehlen()); // 3

// Neuer Counter
const neuerCounter = zaehler();
console.log(neuerCounter()); // 1
```

### Praktisches Beispiel: Private Variablen
```javascript
function bankKonto(startGuthaben) {
  let guthaben = startGuthaben;
  
  return {
    einzahlen(betrag) {
      if (betrag > 0) {
        guthaben += betrag;
        return `Eingezahlt: ${betrag}€`;
      }
      return "Ungültiger Betrag";
    },
    
    abheben(betrag) {
      if (betrag > 0 && betrag <= guthaben) {
        guthaben -= betrag;
        return `Abgehoben: ${betrag}€`;
      }
      return "Ungültiger Betrag oder nicht genug Guthaben";
    },
    
    kontostand() {
      return `${guthaben}€`;
    }
  };
}

const meinKonto = bankKonto(1000);
console.log(meinKonto.einzahlen(500)); // "Eingezahlt: 500€"
console.log(meinKonto.abheben(200)); // "Abgehoben: 200€"
console.log(meinKonto.kontostand()); // "1300€"
console.log(meinKonto.guthaben); // undefined (privat!)
```

---

## 6. Rekursive Funktionen

Funktion, die sich selbst aufruft.

### Fakultät berechnen
```javascript
function fakultaet(n) {
  // Abbruchbedingung (wichtig!)
  if (n <= 1) {
    return 1;
  }
  
  // Rekursiver Aufruf
  return n * fakultaet(n - 1);
}

console.log(fakultaet(5)); // 120
// 5 * 4 * 3 * 2 * 1 = 120
```

### Digital Root (Quersumme bis einstellig)
```javascript
function digitalRoot(n) {
  // Abbruchbedingung
  if (n < 10) {
    return n;
  }
  
  // Ziffern summieren
  const summe = n
    .toString()
    .split("")
    .reduce((sum, ziffer) => sum + Number(ziffer), 0);
  
  // Rekursiver Aufruf
  return digitalRoot(summe);
}

console.log(digitalRoot(493525)); // 1
// 4+9+3+5+2+5 = 28
// 2+8 = 10
// 1+0 = 1
```

**Vereinfachte Alternative:**
```javascript
function digitalRoot(n) {
  return n < 10 ? n : digitalRoot(
    [...String(n)].reduce((sum, d) => sum + +d, 0)
  );
}
```

### Fibonacci-Folge
```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7)); // 13
// 0, 1, 1, 2, 3, 5, 8, 13
```

**Optimiert mit Memoization:**
```javascript
function fibonacci(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(50)); // Schnell!
```

---

## 7. Array-Methoden mit Funktionen

### map() — Transformiert jedes Element
```javascript
const zahlen = [1, 2, 3, 4];
const verdoppelt = zahlen.map(x => x * 2);
console.log(verdoppelt); // [2, 4, 6, 8]
```

### filter() — Filtert Elemente
```javascript
const zahlen = [1, 2, 3, 4, 5, 6];
const gerade = zahlen.filter(x => x % 2 === 0);
console.log(gerade); // [2, 4, 6]
```

### reduce() — Reduziert zu einem Wert
```javascript
const zahlen = [1, 2, 3, 4];
const summe = zahlen.reduce((total, zahl) => total + zahl, 0);
console.log(summe); // 10
```

### forEach() — Führt Aktion für jedes Element aus
```javascript
const namen = ["Max", "Anna", "Lisa"];
namen.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});
// 1. Max
// 2. Anna
// 3. Lisa
```

---

## 8. Async Functions

### Async/Await
```javascript
async function ladeUser(id) {
  try {
    const response = await fetch(`https://api.example.com/users/${id}`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Fehler beim Laden:", error);
    throw error;
  }
}

// Verwendung
ladeUser(1)
  .then(user => console.log(user))
  .catch(error => console.error(error));
```

---

## 9. Best Practices

### ✅ Do's
- Verwende aussagekräftige Funktionsnamen (Verben)
- Halte Funktionen klein & fokussiert (Single Responsibility)
- Vermeide zu viele Parameter (max. 3-4)
- Verwende Arrow Functions für Callbacks
- Nutze Default-Parameter
- Dokumentiere komplexe Funktionen

### ❌ Don'ts
- Vermeide zu lange Funktionen (> 20 Zeilen)
- Keine Seiteneffekte in Funktionen ohne klaren Namen
- Keine globalen Variablen modifizieren
- Keine tief verschachtelten Funktionen
- Vermeide `arguments` (nutze Rest-Parameter)

---

## 10. Häufige Patterns

### Currying
```javascript
const addiere = a => b => a + b;

const addFuenf = addiere(5);
console.log(addFuenf(10)); // 15
```

### Partial Application
```javascript
function multipliziere(a, b, c) {
  return a * b * c;
}

const malZwei = multipliziere.bind(null, 2);
console.log(malZwei(3, 4)); // 24
```

### Memoization (Caching)
```javascript
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const langsameFunktion = (n) => {
  // Simuliere langsame Berechnung
  return n * 2;
};

const schnell = memoize(langsameFunktion);
console.log(schnell(5)); // Berechnet
console.log(schnell(5)); // Aus Cache
```

---

## Weiterführende Ressourcen

- [MDN — Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript.info — Functions](https://javascript.info/function-basics)
- [Eloquent JavaScript — Functions](https://eloquentjavascript.net/03_functions.html)