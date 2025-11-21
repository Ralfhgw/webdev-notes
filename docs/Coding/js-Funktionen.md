### Rekursive Funktion
```javascript
function fakultaet(n) {
  if (n === 0) {
    return 1; // Abbruchbedingung
  }
  return n * fakultaet(n - 1); // rekursiver Aufruf
}
console.log(fakultaet(5)); // 120
```
```javascript
function digitalRoot(n) {
    const numArray = n.toString().split("");
    if (numArray.length === 1) {
        return Number(numArray[0]);
    } else {
        let numCalc = 0;
        for (let i = 0; i <= numArray.length - 1; i++) {
            numCalc += Number(numArray[i])
        }
        return digitalRoot(numCalc);
    }
}
console.log(digitalRoot(493525)); 
```
### Klassische Funktionsdeklaration
```javascript
function hallo() {
  console.log("Hallo Welt!");
}
hallo(); // "Hallo Welt!"
```
### Funktionsausdruck (Function Expression)
```javascript
const hallo = function() {
  console.log("Hallo Welt!");
};
hallo();
```
### Pfeilfunktion (Arrow Function)
```javascript
const hallo = () => {
  console.log("Hallo Welt!");
};
hallo();
```
### Anonyme Funktion
```javascript
(ohne Namen, z. B. in setTimeout)
setTimeout(function() {
  console.log("Anonyme Funktion nach 1s");
}, 1000);
```
### Selbstaufrufende Funktion (IIFE – Immediately Invoked Function Expression)
```javascript
(function() {
  console.log("Ich starte sofort!");
})();
```
### Parameter & Default-Werte
```javascript
function begruessen(name = "Gast") {
  return "Hallo " + name;
}
console.log(begruessen("Max")); // "Hallo Max"
console.log(begruessen());      // "Hallo Gast"
```
### Rest-Parameter (...args)
```javascript
function summe(...zahlen) {
  return zahlen.reduce((a, b) => a + b, 0);
}
console.log(summe(1, 2, 3, 4)); // 10
```
### Funktion in Funktion
```javascript
function außen() {
  function innen() {
    console.log("Innere Funktion");
  }
  innen();
}
außen();
```
### Closures (innere Funktion merkt sich äußeren Scope)
```javascript
function zaehler() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const hochzählen = zaehler();
console.log(hochzählen()); // 1
console.log(hochzählen()); // 2
```
### Callback-Funktion
```javascript
(Funktion wird an eine andere übergeben)
function verarbeite(callback) {
  console.log("Starte Verarbeitung...");
  callback();
}
verarbeite(() => console.log("Callback ausgeführt!"));
```
### Higher-Order Function (nimmt Funktion entgegen oder gibt eine zurück)
```javascript
function multiplizieren(faktor) {
  return function(x) {
    return x * faktor;
  };
}
const malZwei = multiplizieren(2);
console.log(malZwei(5)); // 10
```
### Rekursive Funktion
```javascript
function fakultaet(n) {
  if (n <= 1) return 1;
  return n * fakultaet(n - 1);
}
console.log(fakultaet(5)); // 120
```