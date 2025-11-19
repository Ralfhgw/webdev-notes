##### TypeScript kann keine CSS Dateien importieren und es kommt diese Fehlermeldung:
```
Error:
Cannot find module '../css/style.css' or its corresponding type declarations.ts(2307)

Lösung:
src/css/style.css.d.ts mit:
declare module '*.css';
```


```
Error:
'clickMeButton' is possibly 'null'.ts(18047)
const clickMeButton: Element | null

Lösung:
TypeScript möchte, dass du prüfst, ob wirklich gefunden wurde, bevor du darauf zugreifst.

const clickMeButton = document.querySelector("#btn-start");
if (clickMeButton) {
    clickMeButton.addEventListener('click', function () {
        homeSection.style.display = "none";
        gameSection.style.display = "grid";
    });
}
```
```
Error:
Property 'style' does not exist on type 'Element'.ts(2339)

Lösung:
kommt, weil standardmäßig ein Element | null zurückgibt, aber nicht garantiert ein HTMLElement.
Nur HTMLElement hat die Eigenschaft.

const homeSection = document.querySelector("#home") as HTMLElement;
```
```
import type { HTMLAttributes, ReactNode } from "react";

HTMLAttributes<HTMLHeadingElement>

Erweitert die Props um alle gültigen HTML‑Attribute für ein <h2> (z. B. id, style, onClick, title, aria-*).
Sorgt dafür, dass {...props} nur gültige Attribute für eine Heading‑Element erlaubt und Autocomplete/Fehlerprüfung in der IDE funktioniert.
ReactNode

Typ für die children: deckt alles ab, was React rendern kann (string, number, ReactElement, Fragment, Array von Nodes, null, boolean).
Besser als any; gibt klare Erwartung, dass children renderbare Inhalte sind.
```