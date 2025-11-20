Immer auf target im Browser Console klicken um die Eigeneschaften eines Elements zu erhalten.

### document.getElementById(id)
```
const el = document.getElementById("header");
```
### document.QuerySelector(cssSelector)
```
const el = document.querySelector(".nav > li.active");
```
### document.getElementsByClassName(className)
```
const items = document.getElementsByClassName("item");
```
### document.getElementsByTagName(tag)
```
const divs = document.getElementsByTagName("div");
```
### document.getElementsByName(name)
```
const inputs = document.getElementsByName("email");
```
### document.querySelectorAll(cssSelector)
```
const allLinks = document.querySelectorAll("nav a");
```
### Selektoren am Element selbst (scoped)
```
const section = document.querySelector("section");
section.querySelector(".title");        // sucht nur in der section
section.querySelectorAll("p");          // nur p-Tags in der section
```
### Beispiel 01
```
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
```
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
```
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
```
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