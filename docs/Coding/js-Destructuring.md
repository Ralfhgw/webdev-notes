---
id: js-destructuring
title: JavaScript — Destructuring
---

## Was ist Destructuring?

**Destructuring** ist eine elegante Syntax zum Extrahieren von Werten aus Arrays oder Objekten in separate Variablen. Es macht Code kürzer und lesbarer.

### Vorteile
- ✅ Kürzer und lesbarer
- ✅ Weniger Wiederholungen
- ✅ Funktioniert mit verschachtelten Strukturen
- ✅ Arbeitet mit Default-Werten

---

## 1. Array Destructuring

### 1a. Grundlegendes Array Destructuring
```javascript
// Alt (verbose)
const colors = ["red", "green", "blue"];
const firstColor = colors[0];
const secondColor = colors[1];
console.log(firstColor, secondColor); // "red" "green"

// Neu (Destructuring)
const [first, second, third] = ["red", "green", "blue"];
console.log(first, second, third); // "red" "green" "blue"
```

### 1b. Werte überspringen
```javascript
const numbers = [10, 20, 30, 40, 50];

// Nur 1. und 3. Element
const [a, , b] = numbers;
console.log(a, b); // 10 30

// Nur erstes Element
const [first, ...rest] = numbers;
console.log(first); // 10
console.log(rest);  // [20, 30, 40, 50]
```

### 1c. Default-Werte bei Arrays
```javascript
const [x = 0, y = 0, z = 0] = [5, 10];
console.log(x, y, z); // 5 10 0

// Praktisches Beispiel
const [width = 800, height = 600] = [1024];
console.log(width, height); // 1024 600
```

### 1d. Verschachtelte Array-Destructuring
```javascript
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];

const [[a, b], [c, d]] = matrix;
console.log(a, b, c, d); // 1 2 3 4
```

---

## 2. Object Destructuring

### 2a. Grundlegendes Object Destructuring
```javascript
// Alt
const person = { name: "Alice", age: 25, city: "Berlin" };
const name = person.name;
const city = person.city;

// Neu (Destructuring)
const { name, city } = person;
console.log(name, city); // "Alice" "Berlin"

// Wichtig: Variablennamen müssen Property-Namen entsprechen!
const { age } = person;
console.log(age); // 25
```

### 2b. Umbennen von Properties
```javascript
const car = { brand: "Tesla", model: "3", year: 2024 };

// Umbenennen mit :
const { brand: manufacturer, model: carModel } = car;
console.log(manufacturer); // "Tesla"
console.log(carModel);     // "3"

// Ursprüngliche Variablennamen funktionieren nicht mehr
// console.log(brand); // ReferenceError
```

### 2c. Default-Werte bei Objekten
```javascript
const settings = { theme: "dark" };

// Mit Default-Werten
const { theme, language = "en", notifications = true } = settings;
console.log(theme);         // "dark"
console.log(language);      // "en" (Default)
console.log(notifications); // true (Default)
```

### 2d. Rest-Properties (...rest)
```javascript
const user = { id: 42, username: "bob42", email: "bob@example.com", age: 30 };

// Extrahiere id, rest geht in details
const { id, ...details } = user;
console.log(id);      // 42
console.log(details); // { username: "bob42", email: "bob@example.com", age: 30 }
```

### 2e. Verschachtelte Object-Destructuring
```javascript
const company = {
  name: "TechCorp",
  address: {
    street: "Main St",
    city: "Berlin",
    zip: "10115"
  },
  employees: 500
};

// Verschachteltes Destructuring
const { name, address: { city, zip } } = company;
console.log(name, city, zip); // "TechCorp" "Berlin" "10115"

// Mit Umbenennung
const { address: { city: homeCity } } = company;
console.log(homeCity); // "Berlin"
```

---

## 3. Spread Operator (...)

### 3a. Spread mit Arrays
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

// Spread zum Kombinieren
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5]

// Mit zusätzlichen Elementen
const withExtra = [0, ...arr1, 3.5, ...arr2, 6];
console.log(withExtra); // [0, 1, 2, 3, 3.5, 4, 5, 6]

// Array kopieren
const copy = [...arr1];
console.log(copy); // [1, 2, 3]
```

### 3b. Spread mit Objekten
```javascript
const defaults = { darkMode: false, showSidebar: true };
const userSettings = { darkMode: true };

// Merge (userSettings überschreibt defaults)
const finalSettings = { ...defaults, ...userSettings };
console.log(finalSettings);
// { darkMode: true, showSidebar: true }

// Mit zusätzlichen Properties
const extended = {
  ...defaults,
  fontSize: 16,
  ...userSettings,
  language: "de"
};
console.log(extended);
// { darkMode: true, showSidebar: true, fontSize: 16, language: "de" }
```

### 3c. Object immutable updaten
```javascript
const user = { name: "Alice", age: 25, city: "Berlin" };

// Immutabel: neues Objekt, original unverändert
const updatedUser = { ...user, age: 26 };
console.log(user);        // { name: "Alice", age: 25, ... }
console.log(updatedUser); // { name: "Alice", age: 26, ... }
```

---

## 4. Praktische Anwendungen

### 4a. Funktions-Parameter mit Destructuring
```javascript
// Alt
function printUser(user) {
  console.log(user.name, user.age, user.city);
}

// Neu
function printUser({ name, age, city }) {
  console.log(`${name} (${age}) from ${city}`);
}

printUser({ name: "Lisa", age: 20, city: "Paris" });
// "Lisa (20) from Paris"
```

**Mit Default-Werten:**
```javascript
function greet({ name = "Guest", greeting = "Hello" } = {}) {
  console.log(`${greeting}, ${name}!`);
}

greet({ name: "Alice" });  // "Hello, Alice!"
greet({});                 // "Hello, Guest!"
greet();                   // "Hello, Guest!"
```

### 4b. API-Response verarbeiten
```javascript
// Typische API-Response
const apiResponse = {
  success: true,
  data: {
    user: {
      id: 123,
      name: "Max",
      email: "max@example.com"
    },
    posts: 5
  }
};

// Destructure das, was wir brauchen
const { data: { user: { name, email } } } = apiResponse;
console.log(name, email); // "Max" "max@example.com"
```

### 4c. Array aus Funktion
```javascript
function getCoordinates() {
  return [10, 20];
}

// Destructure die Return-Werte
const [x, y] = getCoordinates();
console.log(x, y); // 10 20

// Oder mit Rest
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]
```

### 4d. Werte tauschen
```javascript
let a = 5;
let b = 10;

// Einfacher Austausch mit Destructuring
[a, b] = [b, a];
console.log(a, b); // 10 5
```

---

## 5. Tieferes Destructuring

### 5a. Deep Destructuring von verschachtelten Strukturen
```javascript
const team = {
  name: "FC Munich",
  coach: "Marta",
  players: [
    { name: "Anna", position: "forward", number: 7 },
    { name: "Sophie", position: "goalkeeper", number: 1 },
    { name: "Lisa", position: "defender", number: 4 }
  ]
};

// Extrahiere Coach und Namen des Torwarts (2. Spieler)
const {
  coach,
  players: [, { name: goalkeeperName }]
} = team;

console.log(coach, goalkeeperName); // "Marta" "Sophie"

// Oder mit allen Spielern
const { players: [forward, goalkeeper, defender] } = team;
console.log(forward.name, goalkeeper.name); // "Anna" "Sophie"
```

### 5b. Kombiniere Rest + Spread
```javascript
const numbers = [1, 2, 3, 4, 5];

// Destructure first zwei, rest in Array, dann wieder spreaden
const [first, second, ...rest] = numbers;
const newArray = [first, second, ...rest, 99];
console.log(newArray); // [1, 2, 3, 4, 5, 99]

// Praktisch: Array-Manipulation
const [head, ...tail] = [10, 20, 30, 40];
const modified = [head * 2, ...tail]; // [20, 20, 30, 40]
```

---

## 6. For-Loops mit Destructuring

### 6a. Array von Objekten
```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

// Destructuring im for-loop
for (const { id, name } of users) {
  console.log(`${id}: ${name}`);
}
// 1: Alice
// 2: Bob
// 3: Charlie
```

### 6b. Array von Arrays
```javascript
const coordinates = [
  [10, 20],
  [30, 40],
  [50, 60]
];

for (const [x, y] of coordinates) {
  console.log(`(${x}, ${y})`);
}
// (10, 20)
// (30, 40)
// (50, 60)
```

---

## 7. Mit Array-Methoden

### 7a. map() mit Destructuring
```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

const names = users.map(({ name }) => name);
console.log(names); // ["Alice", "Bob"]

const adults = users.filter(({ age }) => age >= 18);
console.log(adults); // Alle Users (alle >= 18)
```

### 7b. Destructuring mit find()
```javascript
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 }
];

const { price } = products.find(({ name }) => name === "Phone");
console.log(price); // 500
```

---

## 8. Best Practices

### ✅ Do's
- Verwende Destructuring für lesbare Code
- Nutze Default-Werte bei optionalen Properties
- Nutze Rest-Operator für nicht benötigte Werte
- Verwende Spread für immutable Updates
- Combine mit Funktions-Parametern

### ❌ Don'ts
- Vermeide zu tiefe Verschachtelung (schwer lesbar)
- Denke an unterschiedliche Variablennamen bei Umbennung
- Nutze nicht beide: Destructuring + direkte Zugriffe (verwirrend)
- Vergesse nicht: Arrays/Objekte mit Spread sind Shallow Copies

---

## 9. Häufige Fehler

### Fehler 1: Falsche Syntax
```javascript
// Falsch
const [x, y] = { x: 1, y: 2 }; // Objekt, nicht Array!

// Richtig
const { x, y } = { x: 1, y: 2 };
```

### Fehler 2: Variable bereits definiert
```javascript
// Falsch
let x = 5;
{ x, y } = { x: 10, y: 20 }; // SyntaxError

// Richtig
let x = 5;
({ x, y } = { x: 10, y: 20 }); // Klammern!
```

### Fehler 3: Rest muss am Ende sein
```javascript
// Falsch
const [first, ...rest, last] = [1, 2, 3, 4]; // SyntaxError

// Richtig
const [first, ...middle] = [1, 2, 3, 4];
```

---

## 10. Vergleich: Alt vs. Neu

```javascript
// ===== ALT (verbose) =====
const data = {
  user: { name: "Alice", age: 25 },
  settings: { theme: "dark" }
};

const userName = data.user.name;
const userAge = data.user.age;
const theme = data.settings.theme;

// ===== NEU (Destructuring) =====
const {
  user: { name, age },
  settings: { theme }
} = data;

console.log(name, age, theme); // "Alice" 25 "dark"
```

---

## Weiterführende Ressourcen

- [MDN — Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [JavaScript.info — Destructuring](https://javascript.info/destructuring-assignment)
- [ES6 Features — Destructuring](https://es6-features.org/#destructuring)