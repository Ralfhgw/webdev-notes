## JavaScript String Methoden

### .length
gibt die Länge des Strings zurück
```javascript
let text = "Hallo Welt";
console.log(text.length); // 10
```
### .repeat(num)
Wiederholt den String num-mal und gibt das Ergebnis zurück.
```
let text = "Hi";
console.log(text.repeat(3)); // "HiHiHi"
```
### ..charAt(index)
Gibt das Zeichen an der angegebenen Position (Index) zurück.
```javascript
charAt(index) – gibt Zeichen an Position zurück
"Test".charAt(1); // "e"
```
### .charCodeAt(index)
Gibt Unicode-Wert zurück
```javascript
"A".charCodeAt(0); // 65
```
### .codePointAt(index)
Unicode-Codepunkt (z. B. Emojis)
```javascript
"😊".codePointAt(0); // 128522
```
### [index]
moderne Kurzschreibweise
```javascript
"Test"[2]; // "s"
```
### .toUpperCase()
Alles in Großbuchstaben
```javascript
"hallo".toUpperCase(); // "HALLO"
```
### .toLowerCase()
Alles in Kleinbuchstaben
```javascript
"HALLO".toLowerCase(); // "hallo"
```
### .toLocaleUpperCase(locale)
sprachabhängig großschreiben
```javascript
"i".toLocaleUpperCase("tr"); // "İ" (Türkisch)
```
### .toLocaleLowerCase(locale)
sprachabhängig kleinschreiben
```javascript
"İ".toLocaleLowerCase("tr"); // "i"
```
### .indexOf(substring)
erste Position finden
```javascript
"Banane".indexOf("na"); // 2
```
### .lastIndexOf(substring)
letzte Position finden
```javascript
"Banane".lastIndexOf("na"); // 4
```
### .includes(substring)
prüft auf Teilstring
```javascript
"JavaScript".includes("Script"); // true
```
### .startsWith(substring)
prüft, ob String damit beginnt
```javascript
"OpenAI".startsWith("Open"); // true
```
### .endsWith(substring)
prüft, ob String damit endet
```javascript
"OpenAI".endsWith("AI"); // true
```
### .match(regex)
findet Vorkommen mit Regex
```javascript
"abc123".match(/\d+/); // ["123"]
```
### .matchAll(regex)
Iterator für alle Treffer (Regex mit g)
```javascript
[... "abc123abc456".matchAll(/\d+/g)]; // [["123"], ["456"]]
```
### .search(regex)
Position des ersten Treffers
```javascript
"abc123".search(/\d/); // 3
```
### .slice(start, end)
Teilstring ausschneiden
```javascript
"JavaScript".slice(0, 4); // "Java"
```
### .substring(start, end)
ähnlich wie slice (keine negativen Indizes)
```javascript
"JavaScript".substring(4, 10); // "Script"
```
### .substr(start, length)
(veraltet, aber noch da)
```javascript
"JavaScript".substr(4, 6); // "Script"
```
### .replace(such, neu)
erstes Vorkommen ersetzen
```javascript
"Apfel, Apfel".replace("Apfel", "Birne"); // "Birne, Apfel"
```
### .replaceAll(such, neu)
alle Vorkommen ersetzen
```javascript
"Apfel, Apfel".replaceAll("Apfel", "Birne"); // "Birne, Birne"
```
### .trim()
entfernt Leerzeichen am Anfang & Ende
```javascript
"  Hallo  ".trim(); // "Hallo"
```
### .trimStart() / trimLeft()
nur vorne
```javascript
"  Hallo".trimStart(); // "Hallo"
```
### .trimEnd() / trimRight()
nur hinten
```javascript
"Hallo  ".trimEnd(); // "Hallo"
```
### .padStart(length, filler)
links auffüllen
```javascript
"5".padStart(3, "0"); // "005"
```
### .padEnd(length, filler)
rechts auffüllen
```javascript
"5".padEnd(3, "0"); // "500"
```
### .repeat(count)
String wiederholen
```javascript
"Hi!".repeat(3); // "Hi!Hi!Hi!"
```
### .concat(str1, str2, …)
Strings verketten
```javascript
"Hallo".concat(" ", "Welt"); // "Hallo Welt"
```
### .split(trenner)
String in Array zerlegen
```javascript
"a,b,c".split(","); // ["a", "b", "c"]
const numArray = num.toString().split("");
```
### .localeCompare()
sprachabhängiger Vergleich
```javascript
"ä".localeCompare("z", "de"); // -1 (kommt vor "z")
```
### .normalize()
Unicode-Normalisierung
```javascript
"é".normalize("NFD"); // "e" + "´"
```
### .toString()
In String konvertieren
```javascript
123..toString(); // "123"
const numArray = num.toString().split("");
Number(element) - von String in Nummer umwandeln
```
### .valueOf()
primitiven Wert zurückgeben
```javascript
new String("Hallo").valueOf(); // "Hallo"
```
## Array Methoden
### Prüfen ob ein Array ein Array ist.
```javascript
console.log(Array.isArray([1, 2, 3]));  // true
console.log(typeof obj);

switch
 switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
}
```
### Anlegen einer virtuellen Kopie
```javascript
map[element.id] = { ...element, children: [] };
console.log(map[element.id]);
```
### Anzeigen des Inhalts
```javascript
console.log(JSON.stringify(tree, null, 2));
console.dir(tree, { depth: null });
```
### length
```javascript
let arr = [1, 2, 3];
console.log(arr.length); // 3
```
### for (let element in elements)
```javascript
const arr = ["a", "b", "c"];

for (let i in arr) {
  console.log(i);        // 0, 1, 2  (Indizes)
  console.log(arr[i]);   // a, b, c  (Zugriff auf Werte über Index)
}
```
### for (let element of elements)
```javascript
const arr = ["a", "b", "c"];

for (let value of arr) {
  console.log(value);  // a, b, c
}
```
### push(element)
am Ende hinzufügen
```javascript
let arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]
```
### pop()
letztes Element entfernen
```javascript
let arr = [1, 2, 3];
arr.pop();
console.log(arr); // [1, 2]
```
### unshift(element)
am Anfang hinzufügen
```javascript
let arr = [2, 3];
arr.unshift(1);
console.log(arr); // [1, 2, 3]
```
### shift()
erstes Element entfernen
```javascript
let arr = [1, 2, 3];
arr.shift();
console.log(arr); // [2, 3]
```
### splice(start, deleteCount, ...items)
Elemente löschen/ersetzen/hinzufügen
```javascript
let arr = [1, 2, 3, 4];
arr.splice(1, 2, "a", "b");
console.log(arr); // [1, "a", "b", 4]
```
### slice(start, end)
Teilarray kopieren
```javascript
let arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3)); // [2, 3]
```
### indexOf(value)
erste Position eines Werts
```javascript
[1, 2, 3, 2].indexOf(2); // 1
```
### lastIndexOf(value)
letzte Position
```javascript
[1, 2, 3, 2].lastIndexOf(2); // 3
```
### includes(value)
enthält Wert?
```javascript
[1, 2, 3].includes(2); // true
```
### find(callback)
erstes Element, das Bedingung erfüllt
```javascript
[1, 5, 10].find(x => x > 4); // 5
```
### findIndex(callback)
Index des Elements
```javascript
[1, 5, 10].findIndex(x => x > 4); // 1
```
### forEach(callback)
führt Funktion für jedes Element aus (erstellt kein neues Array)
```javascript
[1, 2, 3].forEach(x => console.log(x * 2));
// 2, 4, 6
```
### map(callback)
neues Array durch Transformation
```javascript
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
```
### filter(callback)
Elemente nach Bedingung filtern
```javascript
[1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4]
```
### reduce(callback, init)
Werte auf einen Wert reduzieren
```javascript
[1, 2, 3, 4].reduce((sum, x) => sum + x, 0); // 10
```
### reduceRight(callback, init)
von rechts reduzieren
```javascript
["a", "b", "c"].reduceRight((a, b) => a + b); // "cba"
```
### some(callback)
gibt true, wenn mind. 1 Element Bedingung erfüllt
```javascript
[1, 2, 3].some(x => x > 2); // true
```
### every(callback)
gibt true, wenn alle Elemente Bedingung erfüllen
```javascript
[1, 2, 3].every(x => x > 0); // true
```
### sort(compareFn)
sortiert Array
```javascript
[3, 1, 2].sort();       // [1, 2, 3] (als Strings!)
[3, 1, 2].sort((a, b) => a - b); // numerisch korrekt
const names = ["Zoe", "anna", "Mike", "bob"];
names.sort((a, b) => a.localeCompare(b));
```
### reverse()
Reihenfolge umkehren
```javascript
[1, 2, 3].reverse(); // [3, 2, 1]
```
### concat(array)
Arrays verbinden
```javascript
[1, 2].concat([3, 4]); // [1, 2, 3, 4]
```
### join(separator)
Array → String
```javascript
["a", "b", "c"].join("-"); // "a-b-c"
```
### toString()
Array → String
```javascript
[1, 2, 3].toString(); // "1,2,3"
```
### flat(depth)
verschachtelte Arrays "ausrollen"
```javascript
[1, [2, [3]]].flat(2); // [1, 2, 3]
```
### flatMap(callback)
map + flat kombiniert
```javascript
[1, 2, 3].flatMap(x => [x, x * 2]);
// [1, 2, 2, 4, 3, 6]
```
### Array.of(...elements)
erstellt Array aus Argumenten
```javascript
Array.of(1, 2, 3); // [1, 2, 3]
```
### Array.from(obj, mapFn?)
erstellt Array aus Array-ähnlichem Objekt oder Iterable
```javascript
Array.from("abc"); // ["a", "b", "c"]
Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]
```
### entries()
Iterator für [index, value]
```javascript
for (let [i, v] of ["a", "b"].entries()) {
  console.log(i, v);
}
// 0 "a"
// 1 "b"
```
### keys()
Iterator für Indizes
```javascript
[10, 20].keys(); // [0, 1]
```
### values()
Iterator für Werte
```javascript
[10, 20].values(); // [10, 20]
```
### fill(value, start, end)
mit Wert füllen
```javascript
[1, 2, 3].fill(0, 1, 3); // [1, 0, 0]
```
### copyWithin(target, start, end) 
kopiert Teilarray innerhalb desselben Arrays
```javascript
[1, 2, 3, 4, 5].copyWithin(0, 3); // [4, 5, 3, 4, 5]
```
## Object Methoden
### Objekt erstellen
```
let person = {
  name: "Anna",
  alter: 25,
  beruf: "Entwicklerin"
};
```
### for (let element in elements)
```javascript
const obj = { name: "Alice", age: 30 };

for (let key in obj) {
  console.log(key);        // name, age
  console.log(obj[key]);   // Alice, 30
}
```
### Punktnotation
```javascript
console.log(person.name); // "Anna"
```
### Klammernotation
(nützlich bei dynamischen Keys)
```javascript
let key = "alter";
console.log(person[key]); // 25
```
### Eigenschaften bearbeiten
```javascript
person.alter = 26;      // ändern
person.land = "DE";     // hinzufügen
delete person.beruf;    // löschen
```
### Object.keys(obj)
alle Schlüssel als Array
```javascript
Object.keys(person); // ["name", "alter", "land"]
```
### Object.values(obj)
alle Werte als Array
```javascript
Object.values(person); // ["Anna", 26, "DE"]
```
### Object.entries(obj)
Schlüssel-Wert-Paare
```javascript
Object.entries(person);
// [["name", "Anna"], ["alter", 26], ["land", "DE"]]
```
### Object.fromEntries()
Array → Objekt
```javascript
let arr = [["x", 10], ["y", 20]];
Object.fromEntries(arr); // { x: 10, y: 20 }
```
### Object.assign()
Objekte zusammenführen / kopieren
```javascript
let ziel = { a: 1 };
let quelle = { b: 2 };
Object.assign(ziel, quelle); // { a: 1, b: 2 }
```
### Spread-Syntax (...)
moderne Kurzform
```javascript
let kopie = { ...person, stadt: "Berlin" };
```
### Object.freeze(obj)
macht Objekt unveränderlich
```javascript
let auto = { marke: "VW" };
Object.freeze(auto);
auto.marke = "BMW"; // ignoriert
```
### Object.seal(obj)
erlaubt Änderungen, aber keine neuen/löschen
```javascript
let haus = { zimmer: 3 };
Object.seal(haus);
haus.zimmer = 4;    // erlaubt
delete haus.zimmer; // verboten
```
### Object.isFrozen(obj)
prüfen ob gefroren
### Object.isSealed(obj)
prüfen ob versiegelt

### Object.create(proto)
erstellt neues Objekt mit Prototypen
```javascript
let tier = { lebt: true };
let hund = Object.create(tier);
hund.bellt = true;
console.log(hund.lebt); // true (vom Prototyp geerbt)
```
### Object.getPrototypeOf(obj)
Prototyp abfragen
### Object.setPrototypeOf(obj, proto)
Prototyp setzen

### Object.hasOwn(obj, key)
prüft, ob Property direkt vorhanden ist
```javascript
let user = { name: "Tom" };
Object.hasOwn(user, "name"); // true
Object.hasOwn(user, "alter"); // false
```
### Object.is(a, b)
strikter Vergleich (unterscheidet +0 und -0, behandelt NaN richtig)
```javascript
Object.is(NaN, NaN); // true
Object.is(+0, -0);   // false
```
### Object.defineProperty(obj, key, descriptor)
Eigenschaft fein konfigurieren
```javascript
let obj = {};
Object.defineProperty(obj, "x", {
  value: 42,
  writable: false
});
console.log(obj.x); // 42
obj.x = 99;         // Änderung ignoriert
```
### JSON.stringify(obj)
Objekt → JSON-String
```javascript
let daten = { name: "Anna", alter: 25 };
JSON.stringify(daten); // '{"name":"Anna","alter":25}'
```
### JSON.parse(str)
JSON-String → Objekt
```javascript
let str = '{"name":"Anna","alter":25}';
JSON.parse(str); // { name: "Anna", alter: 25 }
```