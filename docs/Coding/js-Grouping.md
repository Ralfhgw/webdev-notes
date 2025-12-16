---
id: js-grouping
title: JavaScript — Data Grouping & Aggregation
---

## Was ist Data Grouping?

**Data Grouping** ist das Zusammenfassen und Aggregieren von Daten nach bestimmten Kriterien. In JavaScript nutzen wir dafür häufig `Array.reduce()`, `Object.groupBy()` (ES2024) oder einfache Schleifen.

### Häufige Anwendungsfälle
- Umsätze pro Region summieren
- Produkte nach Kategorie gruppieren
- Statistiken berechnen (Durchschnitt, Anzahl, Summe)
- Daten für Diagramme aufbereiten

---

## Beispieldaten

Wir arbeiten mit einem Sales-Datensatz:

```javascript
const sales = [
  {
    id: 1,
    customer: { name: "Alice", state: "CA" },
    items: [
      { product: "Book", price: 15, quantity: 2 },
      { product: "Pen", price: 2, quantity: 5 },
    ],
  },
  {
    id: 2,
    customer: { name: "Bob", state: "NY" },
    items: [
      { product: "Book", price: 15, quantity: 1 },
      { product: "Laptop", price: 900, quantity: 1 },
    ],
  },
  {
    id: 3,
    customer: { name: "Charlie", state: "CA" },
    items: [{ product: "Pen", price: 2, quantity: 10 }],
  },
  {
    id: 4,
    customer: { name: "Diana", state: "TX" },
    items: [
      { product: "Book", price: 15, quantity: 3 },
      { product: "Pen", price: 2, quantity: 1 },
    ],
  },
];
```

---

## 1. Grundlagen — Nested Data Access

### 1a. Zugriff auf verschachtelte Objekte
```javascript
// Name des ersten Kunden
console.log(sales[0].customer.name); // "Alice"

// State des zweiten Kunden
console.log(sales[1].customer.state); // "NY"

// Preis des ersten Items vom ersten Sale
console.log(sales[0].items[0].price); // 15
```

### 1b. Zugriff auf verschachtelte Arrays
```javascript
// Produkt des zweiten Items im zweiten Sale
console.log(sales[1].items[0].product); // "Book"

// Menge des ersten Items im dritten Sale
console.log(sales[2].items[0].quantity); // 10
```

### 1c. Optional Chaining (sicher bei undefined)
```javascript
// Sicher, auch wenn items leer ist
console.log(sales[0]?.items?.[0]?.product); // "Book"

// Vermeidet Fehler bei undefined
console.log(sales[10]?.customer?.name); // undefined (kein Fehler)
```

---

## 2. Einfache Berechnungen

### 2a. Gesamtpreis eines Sales (for loop)
```javascript
let total = 0;
for (const item of sales[0].items) {
  total += item.price * item.quantity;
}
console.log("Sale Total:", total); // 40 (15*2 + 2*5)
```

### 2b. Gesamtpreis eines Sales (reduce)
```javascript
const total = sales[0].items.reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);

console.log("Sale Total:", total); // 40
```

### 2c. Hilfsfunktion für Sale-Total
```javascript
function calculateSaleTotal(sale) {
  return sale.items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
}

// Verwendung
sales.forEach((sale, index) => {
  console.log(`Sale ${index + 1}:`, calculateSaleTotal(sale));
});
// Sale 1: 40
// Sale 2: 915
// Sale 3: 20
// Sale 4: 47
```

---

## 3. Gruppierung mit for-Loops

### 3a. Umsatz pro Bundesstaat (for loop)
```javascript
const salesByState = {};

for (const sale of sales) {
  const state = sale.customer.state;
  
  // Berechne Total für diesen Sale
  let saleTotal = 0;
  for (const item of sale.items) {
    saleTotal += item.price * item.quantity;
  }
  
  // Addiere zum State
  if (salesByState[state]) {
    salesByState[state] += saleTotal;
  } else {
    salesByState[state] = saleTotal;
  }
}

console.log(salesByState);
// { CA: 60, NY: 915, TX: 47 }
```

### 3b. Alternative: Logische OR-Operator
```javascript
const salesByState = {};

for (const sale of sales) {
  const state = sale.customer.state;
  const saleTotal = calculateSaleTotal(sale);
  
  salesByState[state] = (salesByState[state] || 0) + saleTotal;
}

console.log(salesByState);
// { CA: 60, NY: 915, TX: 47 }
```

---

## 4. Gruppierung mit reduce()

### 4a. Umsatz pro Bundesstaat (reduce)
```javascript
const salesByState = sales.reduce((acc, sale) => {
  const state = sale.customer.state;
  
  // Berechne Sale Total
  const saleTotal = sale.items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
  
  // Addiere zum Akkumulator
  acc[state] = (acc[state] || 0) + saleTotal;
  
  return acc; // Wichtig: Akkumulator zurückgeben!
}, {});

console.log(salesByState);
// { CA: 60, NY: 915, TX: 47 }
```

**Erklärung:**
- `reduce()` iteriert über das Array
- `acc` ist der Akkumulator (startet als `{}`)
- `(acc[state] || 0)` gibt 0 zurück, wenn State noch nicht existiert
- `return acc` gibt den aktualisierten Akkumulator zurück

---

## 5. Erweiterte Gruppierungen

### 5a. Anzahl verkaufter Items pro Bundesstaat
```javascript
const itemCountByState = sales.reduce((acc, sale) => {
  const state = sale.customer.state;
  
  // Summiere alle Quantities
  const itemCount = sale.items.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
  
  acc[state] = (acc[state] || 0) + itemCount;
  
  return acc;
}, {});

console.log(itemCountByState);
// { CA: 17, NY: 2, TX: 4 }
```

### 5b. Umsatz pro Produkt (über alle States)
```javascript
const revenueByProduct = sales.reduce((acc, sale) => {
  sale.items.forEach((item) => {
    const product = item.product;
    const revenue = item.price * item.quantity;
    
    acc[product] = (acc[product] || 0) + revenue;
  });
  
  return acc;
}, {});

console.log(revenueByProduct);
// { Book: 90, Pen: 32, Laptop: 900 }
```

### 5c. Kunden pro Bundesstaat
```javascript
const customersByState = sales.reduce((acc, sale) => {
  const state = sale.customer.state;
  const customerName = sale.customer.name;
  
  if (!acc[state]) {
    acc[state] = [];
  }
  
  acc[state].push(customerName);
  
  return acc;
}, {});

console.log(customersByState);
// { CA: ["Alice", "Charlie"], NY: ["Bob"], TX: ["Diana"] }
```

---

## 6. Multiple Aggregationen

### 6a. Mehrere Statistiken pro Bundesstaat
```javascript
const statsByState = sales.reduce((acc, sale) => {
  const state = sale.customer.state;
  
  // Berechne Sale Total
  const saleTotal = sale.items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
  
  // Initialisiere State-Objekt falls nicht vorhanden
  if (!acc[state]) {
    acc[state] = {
      revenue: 0,
      transactionCount: 0,
      averageTransaction: 0,
    };
  }
  
  // Aktualisiere Werte
  acc[state].revenue += saleTotal;
  acc[state].transactionCount += 1;
  acc[state].averageTransaction = 
    acc[state].revenue / acc[state].transactionCount;
  
  return acc;
}, {});

console.log(statsByState);
// {
//   CA: { revenue: 60, transactionCount: 2, averageTransaction: 30 },
//   NY: { revenue: 915, transactionCount: 1, averageTransaction: 915 },
//   TX: { revenue: 47, transactionCount: 1, averageTransaction: 47 }
// }
```

### 6b. Ausgabe formatiert
```javascript
Object.entries(statsByState).forEach(([state, stats]) => {
  console.log(`
${state}:
  Umsatz: $${stats.revenue}
  Transaktionen: ${stats.transactionCount}
  Durchschnitt: $${stats.averageTransaction.toFixed(2)}
  `);
});
```

---

## 7. Object.groupBy() — ES2024

Moderne Alternative zu reduce für einfaches Gruppieren.

```javascript
// Gruppiere Sales nach Bundesstaat
const groupedByState = Object.groupBy(sales, (sale) => sale.customer.state);

console.log(groupedByState);
// {
//   CA: [ {sale1}, {sale3} ],
//   NY: [ {sale2} ],
//   TX: [ {sale4} ]
// }

// Danach Aggregationen pro Gruppe
const totals = Object.entries(groupedByState).reduce((acc, [state, salesArr]) => {
  acc[state] = salesArr.reduce((sum, sale) => {
    return sum + calculateSaleTotal(sale);
  }, 0);
  return acc;
}, {});

console.log(totals);
// { CA: 60, NY: 915, TX: 47 }
```

**Achtung:** `Object.groupBy()` ist noch nicht in allen Browsern verfügbar (Stand 2025). Prüfe Kompatibilität oder nutze Polyfill.

---

## 8. Praktische Helfer-Funktionen

### 8a. Universelle Gruppierungs-Funktion
```javascript
function groupBy(array, keyFn) {
  return array.reduce((acc, item) => {
    const key = keyFn(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
}

// Verwendung
const byState = groupBy(sales, (sale) => sale.customer.state);
console.log(byState);
```

### 8b. Count-Funktion
```javascript
function countBy(array, keyFn) {
  return array.reduce((acc, item) => {
    const key = keyFn(item);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

// Anzahl Transaktionen pro State
const transactionCount = countBy(sales, (sale) => sale.customer.state);
console.log(transactionCount);
// { CA: 2, NY: 1, TX: 1 }
```

### 8c. Sum-by-Funktion
```javascript
function sumBy(array, valueFn) {
  return array.reduce((sum, item) => {
    return sum + valueFn(item);
  }, 0);
}

// Gesamt-Umsatz
const totalRevenue = sumBy(sales, calculateSaleTotal);
console.log(totalRevenue); // 1022
```

---

## 9. Performance-Tipps

### ✅ Do's
- Verwende `reduce()` für komplexe Aggregationen
- Nutze `Object.groupBy()` wenn verfügbar (einfacher)
- Cache berechnete Werte wenn möglich
- Verwende Hilfsfunktionen für Wiederverwendbarkeit

### ❌ Don'ts
- Vermeide mehrere Schleifen über dieselben Daten
- Keine verschachtelten `reduce()` ohne Grund
- Mutiere den Akkumulator nicht direkt (return `acc`)
- Vergiss nicht den Initial-Wert bei `reduce()`

---

## 10. Zusammenfassung

| Aufgabe | Methode | Best Practice |
|---------|---------|---------------|
| Einfaches Gruppieren | `for` loop oder `Object.groupBy()` | `Object.groupBy()` wenn verfügbar |
| Aggregation | `reduce()` | Mit Hilfsfunktionen |
| Zählen | `reduce()` oder `countBy()` | Custom Helper |
| Summe | `reduce()` oder `sumBy()` | Custom Helper |
| Multiple Statistiken | `reduce()` mit Objekt-Akkumulator | State-Objekt initialisieren |

---

## Übungsaufgaben

### Aufgabe 1: Produkte mit höchstem Umsatz
Finde die Top 3 Produkte nach Umsatz.

### Aufgabe 2: Kunden mit meisten Transaktionen
Gruppiere nach Kunde und zähle Transaktionen.

### Aufgabe 3: Durchschnittlicher Warenkorbwert
Berechne den durchschnittlichen Bestellwert pro Kunde.

### Aufgabe 4: Items pro Kategorie
Gruppiere Items nach Produkt und summiere Mengen.

---

## Weiterführende Ressourcen

- [MDN — Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MDN — Object.groupBy()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)
- [JavaScript.info — Array Methods](https://javascript.info/array-methods)
- [Lodash — groupBy](https://lodash.com/docs/#groupBy)