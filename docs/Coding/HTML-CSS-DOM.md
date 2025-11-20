Immer auf target im Browser Console klicken um die Eigeneschaften eines Elements zu erhalten.

### document.getElementById(id)
```javascript
const el = document.getElementById("header");
```
### document.QuerySelector(cssSelector)
```javascript
const el = document.querySelector(".nav > li.active");
```
### document.getElementsByClassName(className)
```javascript
const items = document.getElementsByClassName("item");
```
### document.getElementsByTagName(tag)
```javascript
const divs = document.getElementsByTagName("div");
```
### document.getElementsByName(name)
```javascript
const inputs = document.getElementsByName("email");
```
### document.querySelectorAll(cssSelector)
```javascript
const allLinks = document.querySelectorAll("nav a");
```
### Selektoren am Element selbst (scoped)
```javascript
const section = document.querySelector("section");
section.querySelector(".title");        // sucht nur in der section
section.querySelectorAll("p");          // nur p-Tags in der section
```
### Beispiel 01
```javascript
<style>:
svg {
   position: absolute;
   top: 100px;
   left: 100px;
}

<body>:
<svg><circle cx="100" cy="100" r="50" fill="red" /></svg>
<button class="btnUp">Hoch</button>
<button class="btnDown">Runter</button>

<script>:
    const ball = document.querySelector("svg")
    const btnUp = document.querySelector(".btnUp")
    const btnDown = document.querySelector(".btnDown")

    let x = 100
    let y = 100

    function handleClickUp() {
        y = y - 10
        ball.style.top = y + "px"
    }
    btnUp.addEventListener("click",  handleClickUp)

    function handleClickDown() {
        y = y + 10
        ball.style.top = y + "px"
    }
    btnDown.addEventListener("click",  handleClickDown)
```
### Beispiel 02
```javascript
// Einfügen von HTML Code in ein <ul> Element

<h1></h1>
<p></p>
<ul></ul>
<button>Click</button>
<input>

<script>
document.querySelector('h1').innerHTML = 'Etaoin shrdlu';

let s = [];
for (let i = 1; i <= 100; i++) s.push(i);
document.querySelector('p').innerHTML = s.join(', ');

document.querySelector('ul').innerHTML =
  "<li>red</li><li>green</li><li>blue</li><li>yellow</li><li>purple</li>";

const btn = document.querySelector('button');
btn.outerHTML += btn.outerHTML;

document.querySelector('input').outerHTML = '<textarea></textarea>';
</script>
```
### Beispiel 03
```javascript
// 
<button id="btn1">Click</button>
<button id="btn4">Scale</button>
<div id="box">Box</div>

<script>
const btn1 = document.querySelector("#btn1");
const btn4 = document.querySelector("#btn4");
const box  = document.querySelector("#box");
let scale = 1;

btn1.onclick = () => btn1.classList.toggle("green");
btn4.onclick = () => box.style.transform = `scale(${scale += 0.2})`;
</script>
```
### Beispiel 04
```javascript
<h1>Element Ereignisprotokollierungsübung</h1>
<button>Klick mich</button>
<button id="toggleBtn">Hintergrund umschalten</button>
<textarea class="output"></textarea>

<script>
const out = document.querySelector('.output'),
      btn = document.querySelector('button'),
      tgl = document.querySelector('#toggleBtn');

const log = m => (out.value += m + '\n', out.scrollTop = out.scrollHeight);

btn.onclick = () => (btn.classList.toggle('green'), log('Button wurde geklickt'));
btn.onmouseover = () => log('Maus ist über dem Button');
btn.onmouseleave = () => log('Ich fühle mich so einsam');

tgl.onclick = () => (out.classList.toggle('highlight'), log('Hintergrund des Textfeldes umgeschaltet.'));

document.onkeydown = e => log(`Taste wurde gedrückt: ${e.key}`);
window.onresize = () => log(`Fenstergröße geändert: ${innerWidth} x ${innerHeight}`);
</script>
```

### DOM Events Overview
```javascript
console.log(this);                 // top-level in non-module Scripts: window, in Modules: undefined
console.log(window.screen);        // zeigt Bildschirm-Informationen (width/height usw.)
console.log(this === window);      // true nur in non-module globalem Script-Kontext
```
Kurz‑Hinweis: In ES‑Modulen ist this auf oberster Ebene undefined. Verwende globalThis oder window, wenn du sicher das globale Objekt ansprechen willst:
```javascript
console.log(globalThis === window); // verlässlichere Prüfung
```
### Event-Typen
#### Maus-Events:
```javascript
'click'         // Mausklick
'dblclick'      // Doppelklick
'mousedown'     // Maustaste gedrückt
'mouseup'       // Maustaste losgelassen
'mouseover'     // Maus über Element
'mouseout'      // Maus verlässt Element
'mousemove'     // Mausbewegung
'contextmenu'   // Rechtsklick-Menü
```
#### Tastatur-Events:
```javascript
'keydown'       // Taste gedrückt
'keyup'         // Taste losgelassen
'keypress'      // Taste gedrückt (veraltet)
```
#### Formular-Events:
```javascript
'submit'        // Formular abgesendet
'change'        // Wert geändert
'input'         // Eingabe verändert
'focus'         // Element fokussiert
'blur'          // Fokus verloren
```
#### Fenster-Events:
```javascript
'load'          // Seite geladen
'resize'        // Fenstergröße geändert
'scroll'        // Gescrollt
```
#### Event-Parameter:
#### Allgemeine Properties:
```javascript
button.addEventListener('click', event => {
    console.log(event.type);           // Event-Typ: "click"
    console.log(event.target);         // Geklicktes Element
    console.log(event.currentTarget);  // Element mit Event Listener
    console.log(event.timeStamp);      // Zeitstempel
    console.log(event.bubbles);        // Ob Event nach oben bubbled
});
```
#### Maus-spezifische Properties:
```javascript
button.addEventListener('click', event => {
    console.log(event.clientX);        // X-Position im Viewport
    console.log(event.clientY);        // Y-Position im Viewport
    console.log(event.pageX);          // X-Position auf der Seite
    console.log(event.pageY);          // Y-Position auf der Seite
    console.log(event.screenX);        // X-Position auf dem Bildschirm
    console.log(event.screenY);        // Y-Position auf dem Bildschirm
    console.log(event.button);         // Welche Maustaste (0=links, 1=mitte, 2=rechts)
    console.log(event.ctrlKey);        // Ctrl-Taste gedrückt?
    console.log(event.shiftKey);       // Shift-Taste gedrückt?
    console.log(event.altKey);         // Alt-Taste gedrückt?
});
```
#### Tastatur-spezifische Properties:
```javascript
document.addEventListener('keydown', event => {
    console.log(event.key);            // Taste: "a", "Enter", "ArrowUp"
    console.log(event.code);           // Physische Taste: "KeyA", "Enter"
    console.log(event.keyCode);        // Numerischer Code (veraltet)
    console.log(event.ctrlKey);        // Ctrl gedrückt?
    console.log(event.shiftKey);       // Shift gedrückt?
    console.log(event.altKey);         // Alt gedrückt?
});
```
#### Praktische Beispiele:
```javascript
// Rechtsklick verhindern
button.addEventListener('contextmenu', event => {
    event.preventDefault();
});
// Tastenkombination abfangen
document.addEventListener('keydown', event => {
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        console.log('Ctrl+S gedrückt!');
    }
});
// Mausposition beim Hover
button.addEventListener('mousemove', event => {
    console.log(`Maus bei: ${event.clientX}, ${event.clientY}`);
});
```