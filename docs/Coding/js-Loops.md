### Klassische For-Loop
    - Eine festgelegte Anzahl an Wiederholungen
    - Durch Arrays iterieren
    - Durch Strings iterieren
    - Wenn wir bei der Iteration eine Index-Position brauchen (z.B. bei Arrays oder Strings)
```javascript    
    // Durch Arrays iterieren
    const colors = ['rot', 'blau', 'gelb'];
    
    for (let i=0; i<colors.length; i++) {
        const color = colors[i];
        console.log(color);
    }
    
    /*
    'rot'
    'blau'
    'gelb'
    */
```

| for...of | for...in |
| --- | --- |
| Iteriert über Werte | Iteriert über Schlüssel/Indices |
| item ist das Element | index ist der Index (String!) |
| Für Arrays empfohlen | Für Objekte empfohlen |
| ES6+ | Älterer Standard |
    
### For-Of-Loop
-  Durch Arrays iterieren
-  Durch Strings iterieren
```javascript
// Durch Arrays iterieren
    
const colors = ['rot', 'blau', 'gelb'];
    
for (const color of colors) {
    console.log(color);
}
    
/*
'rot'
'blau'
'gelb'
*/
```
```javascript
// Durch Strings iterieren
   
let string = 'hallo';
    
for (const letter of string) {
    console.log(letter);
}
    
/*
h
a
l
l
o
*/
```

### While-Loop
```javascript
// Unbestimmte Anzahl an Wiederholungen (solange die Kondition true ist)
let isGameOver = false;
    
while (!isGameOver) {
    console.log('Das Spiel läuft');
}
``` 
``` javascript
// Eine festgelegte Anzahl an Wiederholungen ist auch möglich:
// Beispiel While-Loop soll 5 mal ausgeführt werden:
    
let number = 1;
   
while (number <= 5) {
    console.log(number);
    number++;
}
    
/* Ausgabe:
1
2
3
4
5
*/
``` 
### Do-While-Loop
- Unbestimmte Anzahl an Wiederholungen (solange die Kondition true ist)
- Falls der Loop mindestens einmal ausgeführt werden soll (auch wenn die Kondition false ist)

```javascript
// Unbestimmte Anzahl an Wiederholungen (solange die Kondition true ist)
let isGameOver = false;
    
do {
    console.log('Das Spiel läuft');
} while (!isGameOver)
``` 
