```javascript
import clsx from 'clsx';

// einfache Nutzung
clsx('btn', 'btn-primary'); // "btn btn-primary"

// bedingt
clsx('btn', isActive && 'btn--active'); // "btn btn--active" oder "btn"

// mit Object
clsx('btn', { 'btn--large': large, 'btn--disabled': disabled });

// mit Array
clsx(['a', condition ? 'b' : null, ['c', 'd']]); // "a b c d"

// in React
function GuessLetter({ letter }) {
  return (
    <div className={clsx('letter-box', letter.evaluation)}>
      {letter.letter}
    </div>
  );
```
- Typen/Imports
import clsx: Utility zum sauberen Zusammenfügen von CSS‑Klassen.
PropsWithChildren / LetterInfo: TypeScript‑Typen für Props.

- Props‑Interface
GuessLetterProps erwartet ein Objekt mit dem Feld letter vom Typ LetterInfo (und optional children).

- Komponente
Exportiert eine funktionale React‑Komponente GuessLetter. Baut das className mit clsx("letter-box", letter.evaluation) — z. B. ergibt das "letter-box correct" wenn letter.evaluation === "correct". Wenn letter.evaluation falsy/undefined ist, bleibt className nur "letter-box". Rendert den Buchstaben: letter.letter.

#### Anmerkungen / Tipps:
**clsx ignoriert null/false/undefined, deshalb ist diese Nutzung sicher für optionale evaluation‑Werte. Falls du andere Klassennamen brauchst, mappe evaluation auf spezifische Klassennamen (z. B.  correct: 'is-correct' ) statt die Rohwerte zu verwenden.**
```javascript
import clsx from "clsx";
import type { PropsWithChildren } from "react";
import type { LetterInfo } from "../types";

interface GuessLetterProps extends PropsWithChildren {
  letter: LetterInfo;
}
export default function GuessLetter({ letter }: GuessLetterProps) {
  return (
    <div className={clsx("letter-box", letter.evaluation)}>{letter.letter}</div>
  );
}
```