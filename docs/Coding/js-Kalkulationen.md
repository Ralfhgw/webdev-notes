---
id: js-kalkulationen
title: JavaScript — Mathematik & Berechnungen
---

## Zahlen in JavaScript

JavaScript verwendet den **Number**-Typ für alle Zahlen (Ganzzahlen und Dezimalzahlen).

### Number-Konstanten
```javascript
console.log(Number.MAX_VALUE);        // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);        // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN);              // NaN (Not a Number)
```

### Wichtige Eigenschaften
- JavaScript verwendet **64-bit Floating Point** (IEEE 754)
- Ganze Zahlen sind sicher bis ±2^53 (ca. 9 Billiarden)
- Für größere Zahlen: `BigInt` verwenden

---

## 1. Grundrechenarten

### Basis-Operatoren

| Operator | Bedeutung | Beispiel | Ergebnis |
|----------|-----------|----------|----------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraktion | `5 - 3` | `2` |
| `*` | Multiplikation | `5 * 3` | `15` |
| `/` | Division | `15 / 3` | `5` |
| `%` | Modulo (Rest) | `10 % 3` | `1` |
| `**` | Potenz | `2 ** 3` | `8` |

### Beispiele
```javascript
// Addition
console.log(10 + 5);  // 15

// Subtraktion
console.log(10 - 5);  // 5

// Multiplikation
console.log(10 * 5);  // 50

// Division
console.log(10 / 5);  // 2
console.log(10 / 3);  // 3.3333...

// Modulo (Rest bei Division)
console.log(10 % 3);  // 1
console.log(15 % 4);  // 3
console.log(20 % 5);  // 0

// Potenz
console.log(2 ** 3);   // 8
console.log(5 ** 2);   // 25
console.log(10 ** -2); // 0.01
```

### Operator-Reihenfolge (Punkt vor Strich)
```javascript
console.log(2 + 3 * 4);      // 14 (nicht 20!)
console.log((2 + 3) * 4);    // 20 (mit Klammern)
console.log(10 / 2 + 3);     // 8
console.log(10 / (2 + 3));   // 2
```

---

## 2. Zuweisungsoperatoren

### Kurzschreibweisen
```javascript
let x = 10;

x += 5;  // x = x + 5  → 15
x -= 3;  // x = x - 3  → 12
x *= 2;  // x = x * 2  → 24
x /= 4;  // x = x / 4  → 6
x %= 4;  // x = x % 4  → 2
x **= 3; // x = x ** 3 → 8
```

### Inkrement & Dekrement
```javascript
let count = 5;

count++;  // count = count + 1 → 6 (Post-Inkrement)
count--;  // count = count - 1 → 5 (Post-Dekrement)
++count;  // count = count + 1 → 6 (Pre-Inkrement)
--count;  // count = count - 1 → 5 (Pre-Dekrement)
```

**Unterschied Pre/Post:**
```javascript
let a = 5;
console.log(a++); // 5 (gibt alten Wert zurück, dann +1)
console.log(a);   // 6

let b = 5;
console.log(++b); // 6 (erst +1, dann Wert zurückgeben)
console.log(b);   // 6
```

---

## 3. Math-Objekt

### Grundlegende Funktionen

#### Math.abs() — Betrag (Absolutwert)
```javascript
console.log(Math.abs(-5));    // 5
console.log(Math.abs(5));     // 5
console.log(Math.abs(-3.14)); // 3.14
```

#### Math.round() — Kaufmännisches Runden
```javascript
console.log(Math.round(4.4));  // 4
console.log(Math.round(4.5));  // 5
console.log(Math.round(4.6));  // 5
console.log(Math.round(-4.5)); // -4
```

#### Math.floor() — Abrunden
```javascript
console.log(Math.floor(4.9));  // 4
console.log(Math.floor(4.1));  // 4
console.log(Math.floor(-4.1)); // -5 (zur kleineren Zahl!)
```

#### Math.ceil() — Aufrunden
```javascript
console.log(Math.ceil(4.1));  // 5
console.log(Math.ceil(4.9));  // 5
console.log(Math.ceil(-4.9)); // -4 (zur größeren Zahl!)
```

#### Math.trunc() — Ganzzahlanteil (ohne Runden)
```javascript
console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(-4.9)); // -4
console.log(Math.trunc(0.123)); // 0
```

---

### Vergleich der Rundungsmethoden

```javascript
const zahlen = [4.1, 4.5, 4.9, -4.1, -4.5, -4.9];

zahlen.forEach(num => {
  console.log(`
Zahl: ${num}
  Math.round(): ${Math.round(num)}
  Math.floor(): ${Math.floor(num)}
  Math.ceil():  ${Math.ceil(num)}
  Math.trunc(): ${Math.trunc(num)}
  `);
});
```

---

### Mathematische Operationen

#### Math.pow() — Potenz (Alternative zu **)
```javascript
console.log(Math.pow(2, 3));   // 8
console.log(Math.pow(5, 2));   // 25
console.log(Math.pow(10, -2)); // 0.01

// Moderne Alternative: **
console.log(2 ** 3);  // 8
```

#### Math.sqrt() — Quadratwurzel
```javascript
console.log(Math.sqrt(9));   // 3
console.log(Math.sqrt(16));  // 4
console.log(Math.sqrt(2));   // 1.414...
console.log(Math.sqrt(-1));  // NaN (nicht möglich)
```

#### Math.cbrt() — Kubikwurzel
```javascript
console.log(Math.cbrt(8));   // 2
console.log(Math.cbrt(27));  // 3
console.log(Math.cbrt(-8));  // -2
```

#### Math.hypot() — Hypotenuse (Pythagoras)
```javascript
console.log(Math.hypot(3, 4));     // 5
console.log(Math.hypot(5, 12));    // 13
console.log(Math.hypot(1, 2, 3));  // 3.74... (3D-Distanz)
```

---

### Min, Max & Clamp

#### Math.min() — Minimum
```javascript
console.log(Math.min(1, 2, 3));       // 1
console.log(Math.min(-5, 0, 10));     // -5
console.log(Math.min(...[4, 2, 8]));  // 2 (mit Spread)
```

#### Math.max() — Maximum
```javascript
console.log(Math.max(1, 2, 3));       // 3
console.log(Math.max(-5, 0, 10));     // 10
console.log(Math.max(...[4, 2, 8]));  // 8
```

#### Clamp (Wert begrenzen) — Custom
```javascript
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

console.log(clamp(5, 0, 10));   // 5
console.log(clamp(-5, 0, 10));  // 0
console.log(clamp(15, 0, 10));  // 10
```

---

### Zufallszahlen

#### Math.random() — Zufallszahl zwischen 0 und 1
```javascript
console.log(Math.random()); // z.B. 0.847295...
```

#### Zufallszahl in bestimmtem Bereich
```javascript
// Ganze Zahl zwischen min und max (inklusiv)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(1, 6));   // Würfel (1-6)
console.log(randomInt(0, 100)); // 0-100
```

#### Zufälliges Array-Element
```javascript
const farben = ["rot", "grün", "blau", "gelb"];
const zufällig = farben[Math.floor(Math.random() * farben.length)];
console.log(zufällig);
```

#### Array mischen (Fisher-Yates Shuffle)
```javascript
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(shuffle([1, 2, 3, 4, 5]));
```

---

### Trigonometrie

```javascript
// Winkel in Grad → Radianten
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// Radianten → Grad
function toDegrees(radians) {
  return radians * (180 / Math.PI);
}

// Beispiele
console.log(Math.sin(toRadians(30)));  // 0.5
console.log(Math.cos(toRadians(60)));  // 0.5
console.log(Math.tan(toRadians(45)));  // 1

console.log(toDegrees(Math.PI));       // 180
console.log(toDegrees(Math.PI / 2));   // 90
```

---

## 4. Spezielle Zahlen

### NaN (Not a Number)
```javascript
console.log(0 / 0);           // NaN
console.log(Math.sqrt(-1));   // NaN
console.log(parseInt("abc")); // NaN

// Prüfen auf NaN
console.log(isNaN(NaN));           // true
console.log(Number.isNaN(NaN));    // true (strenger)
console.log(Number.isNaN("abc"));  // false (strenger!)
```

### Infinity
```javascript
console.log(1 / 0);              // Infinity
console.log(-1 / 0);             // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity

// Prüfen auf Infinity
console.log(isFinite(100));      // true
console.log(isFinite(Infinity)); // false
```

---

## 5. Zahlen formatieren

### toFixed() — Nachkommastellen
```javascript
const pi = 3.14159;
console.log(pi.toFixed(2));  // "3.14" (String!)
console.log(pi.toFixed(0));  // "3"
console.log((2.5).toFixed()); // "3"
```

### toPrecision() — Signifikante Stellen
```javascript
console.log((123.456).toPrecision(4)); // "123.5"
console.log((0.00123).toPrecision(2)); // "0.0012"
```

### toExponential() — Wissenschaftliche Notation
```javascript
console.log((123456).toExponential(2)); // "1.23e+5"
```

### toLocaleString() — Lokalisiert
```javascript
const zahl = 1234567.89;

console.log(zahl.toLocaleString("de-DE")); 
// "1.234.567,89"

console.log(zahl.toLocaleString("en-US")); 
// "1,234,567.89"

// Mit Währung
console.log(zahl.toLocaleString("de-DE", {
  style: "currency",
  currency: "EUR"
})); // "1.234.567,89 €"
```

---

## 6. Praktische Beispiele

### Prozentrechnung
```javascript
function prozent(wert, prozentsatz) {
  return (wert * prozentsatz) / 100;
}

console.log(prozent(200, 15)); // 30
console.log(200 + prozent(200, 19)); // MwSt: 238
```

### Durchschnitt berechnen
```javascript
function durchschnitt(...zahlen) {
  return zahlen.reduce((sum, n) => sum + n, 0) / zahlen.length;
}

console.log(durchschnitt(10, 20, 30)); // 20
console.log(durchschnitt(5, 15, 25, 35)); // 20
```

### Distanz zwischen zwei Punkten
```javascript
function distanz(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

console.log(distanz(0, 0, 3, 4)); // 5
console.log(distanz(1, 1, 4, 5)); // 5
```

### Preisberechnung mit Rundung
```javascript
function berechnePreis(netto, mwst = 19) {
  const brutto = netto * (1 + mwst / 100);
  return Math.round(brutto * 100) / 100; // 2 Nachkommastellen
}

console.log(berechnePreis(100)); // 119
console.log(berechnePreis(49.99)); // 59.49
```

---

## 7. Currying-Beispiel

```javascript
// Deine ursprüngliche Notation (sehr fortgeschritten!)
console.log((a => b => a ** b)(2)(3)); // 8

// Erklärung Schritt für Schritt:
const potenz = (a) => (b) => a ** b;
const zweierPotenz = potenz(2);
console.log(zweierPotenz(3)); // 8
console.log(zweierPotenz(4)); // 16

// Praktisches Beispiel: Multiplikation vorbereiten
const mal = (faktor) => (zahl) => zahl * faktor;
const malZwei = mal(2);
const malZehn = mal(10);

console.log(malZwei(5));  // 10
console.log(malZehn(5));  // 50
```

---

## 8. Best Practices

### ✅ Do's
- Verwende `**` statt `Math.pow()` (moderner)
- Nutze `Number.isNaN()` statt `isNaN()` (strenger)
- Runde Geldbeträge mit `Math.round(x * 100) / 100`
- Verwende `toLocaleString()` für Ausgaben
- Prüfe auf `Number.isSafeInteger()` bei großen Zahlen

### ❌ Don'ts
- Vermeide Floating-Point-Vergleiche (`0.1 + 0.2 === 0.3` → `false`)
- Keine Division durch 0 ohne Prüfung
- Keine direkte Verwendung von `Math.random()` für Sicherheit (nutze `crypto.randomUUID()`)
- Vermeide `parseFloat()` ohne Validierung

---

## 9. BigInt für sehr große Zahlen

```javascript
// Normale Numbers sind unsicher ab 2^53
console.log(9007199254740991 + 1); // OK
console.log(9007199254740992 + 1); // 9007199254740992 (falsch!)

// BigInt für große Zahlen
const groß = 9007199254740992n + 1n;
console.log(groß); // 9007199254740993n

// Umwandlung
console.log(BigInt("123456789012345678901234567890"));
```

---

## Weiterführende Ressourcen

- [MDN — Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [MDN — Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [JavaScript.info — Numbers](https://javascript.info/number)
- [Floating Point Guide](https://floating-point-gui.de/)