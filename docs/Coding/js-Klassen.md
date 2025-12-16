#### Constructor
Er sorgt dafür, dass jedes neue Objekt bestimmte Startwerte bekommt.
```js
class Animal {
    private name: string;
    private age: number;
    constructor(_name: string, _age: number) {
        this.name = _name;
        this.age = _age;
    }
}
class Dog extends Animal {
    private _rasse: string = "";
    constructor(_name: string, _age: number) {
        super(_name, _age);
    }
    set rasse(value: string) {
        this._rasse = value
    }
    get rasse() {
        return this._rasse;
    }
}
const tier: Dog = new Dog("Raudi", 15);
console.log(tier);
tier.rasse = "Pudel";
console.log(tier.rasse);
```

```#name;``` - Damit wird ein privates Element definiert, dies funktioniert in js. 
In ts wird "private" oder "protected" verwendet.

|TS-Syntax|	JS-Syntax	|Sichtbarkeit|
|-|-|-|
|public	   |    default	 |      überall zugänglich|
|private   	|#feld	      | nur innerhalb der Klasse|
|protected	|_feld	       |Konvention; technisch öffentlich, aber für Unterklassen gedacht|

```super.method()``` - zum Aufruf von Methoden der Elternklasse, z.B. um sie zu erweitern
```super()``` - Ruft Konstruktor der Elternklasse auf. Muss in Unterklasse vor this stehen.

```js
/* Class Error */ // Definiert eine Fehlerklasse
class Error { // Fehlerklasse
    setMessageAndPrint(msg) { // Methode zum Ausgeben einer Fehlermeldung
        console.log("ERROR:", msg); // Gibt die Fehlermeldung auf der Konsole aus
    }
}
/* Class Utilities */ // Hilfsklasse für Validierungen
class Utilities { // Hilfsklasse
    #error = new Error(); // Privates Fehlerobjekt
    isNumber(value) { // Prüft, ob der Wert eine Zahl ist
        const valueNum = Number(value); // Wandelt Wert in Zahl um
        if (isNaN(valueNum)) { // Prüft, ob die Umwandlung fehlgeschlagen ist
            this.#error.setMessageAndPrint(`ERR-01: Die Eingabe ist keine Nummer. Bitte eine Nummer eingeben! (${value})`); // Gibt Fehlermeldung aus
            return false; // Gibt false zurück, wenn keine Zahl
        } else {
            return true; // Gibt true zurück, wenn Zahl
        }
    }
    hasLength(value, length) { // Prüft die Länge eines Wertes
        const lengthValue = String(value).length; // Wandelt Wert in String und misst Länge
        if (lengthValue != length) { // Prüft, ob Länge stimmt
            this.#error.setMessageAndPrint(`ERR-02: Die Eingabe muss exakt 8 Stellen lang sein YYYMMDD. (${value})`); // Gibt Fehlermeldung aus
            return false; // Gibt false zurück, wenn Länge falsch
        } else { 
            return true; // Gibt true zurück, wenn Länge korrekt
        }
    }
    isValueSet(value) { // Prüft, ob Wert gesetzt ist
        if (value === undefined || value === null) { // Prüft auf undefined oder null
            this.#error.setMessageAndPrint(`ERR-03: Kein Wert gesetzt! Bitte einen Wert eingeben.`); // Gibt Fehlermeldung aus
        }
    }
}
/* Class Bird */ // Basisklasse für Vögel
class Bird { // Vogelklasse
    #utils = new Utilities(); // Privates Utilities-Objekt
    #name; // Privates Feld für Name
    set name(value) { this.#name = value; } // Setter für Name
    get name() { return this.#name; } // Getter für Name
    #speed; // Privates Feld für Geschwindigkeit
    set speed(value) { // Setter für Geschwindigkeit
        this.#utils.hasLength(value);
        this.#utils.isValueSet(value);
        if (this.#utils.isNumber(value)) // Prüft, ob Wert eine Zahl ist
            this.#speed = value; // Setzt Geschwindigkeit
        else
            this.#speed = undefined; // Setzt Geschwindigkeit auf undefined bei Fehler
    }
    get speed() { return this.#speed; } // Getter für Geschwindigkeit
    toString() { return `Bird: ${this.name}, Speed: ${this.speed}`; } // Gibt Vogel als String aus
}
/* Class FlyingBird */ // Spezialisierte Vogelklasse mit Flugfähigkeit
class FlyingBird extends Bird { // Erbt von Bird
    fly() { // Methode zum Fliegen
        console.log(`${this.name} fliegt!`) // Gibt aus, dass der Vogel fliegt
    } 
}
/* Use Classes */ // Anwendung der Klassen
const bird = new FlyingBird(); // Erstellt ein neues FlyingBird-Objekt
bird.name = "Emil"; // Setzt den Namen des Vogels
bird.speed = 10; // Setzt die Geschwindigkeit (hier ungültig)
console.log("Speed:", bird.speed); // Gibt die Geschwindigkeit aus
/* bird.fly(); */ // Ruft die Flug-Methode auf
console.log( `${bird}` ); // Gibt das Vogel-Objekt als String aus

class Car {
    constructor(speed) {
    this.spped}

}
```