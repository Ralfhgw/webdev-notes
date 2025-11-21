### CSS Grid Tools and Guides
- [CSS-Tricks - CSS Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS-Tricks - CSS Grid auto-fill](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)
- [CSS Grid Generator](https://cssgrid-generator.netlify.app/)
- [CSS Grid Generator](https://cssgridgenerator.io/?utm_source=chatgpt.com)
- [CSS Grid Garden - Grid Spiel](https://cssgridgarden.com/)
- [CSS Grid Codingfanatasy - Grid Spiel](https://codingfantasy.com/games/css-grid-attack/play)

**Lines sind die Begrenzungen der einzelnen Blöcke und Tracks sind die Abstände zwischen den Blöcken.**

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* drei Spalten: links/rechts 1x, Mitte 2x */
  grid-template-rows: auto 200px;    /* zwei Zeilen: Höhe automatisch, dann 200px */
  gap: 10px;                         /* Abstand zwischen den Zellen */
}

.item1 {
  grid-column: 1 / 3; /* von Spalte 1 bis vor Spalte 3 */
  grid-row: 1 / 2;    /* von Zeile 1 bis vor Zeile 2 */
}

grid-template-columns: repeat(3, minmax(100px, 1fr));
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

// Nützliche Features
grid-area //  Bereiche benennen für einfachere Positionierung
align-items, justify-items, align-content, justify-content // vertikale und horizontale Ausrichtung
place-items //  Kurzform für align-items + justify-items
grid-template-areas // visuelles Layout durch Namensblöcke

------------------------------------------------------------------------------------------------------------

#container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr 200px;
  grid-template-rows: 80px auto 100px;
  grid-template-areas:
    "nav nav nav nav"
    "side main main main"
    "side main main main"
    "footer footer footer footer";
}
#nav    { grid-area: nav; }
#side   { grid-area: side; }
#main   { grid-area: main; }
#footer { grid-area: footer; }
#nav {
  background-color: burlywood;
  border: 3px solid red;
  text-align: center;
  display:flex;
  justify-content: center;
  align-items: center
}
#side {
  background-color: rgb(99, 136, 185);
  border: 3px solid red;
  display:flex;
  justify-content: center;
  align-items: center
}
#main {
  background-color: rgb(120, 182, 78);
  border: 3px solid red;
  display:flex;
  justify-content: center;
  align-items: center
}
#footer {
  background-color: rgb(138, 65, 99);
  border: 3px solid red;
  display:flex;
  justify-content: center;
  align-items: center
}
</style>
  
<div id="container">
<div id="nav">nav</div>
<div id="side">side</div>
<div id="main">main</div>
<div id="footer">footer</div>
```
**grid-auto-rows legt die Höhe von automatisch erzeugten Zeilen im CSS Grid fest, also für Zeilen, die nicht explizit mit grid-template-rows definiert wurden.**
