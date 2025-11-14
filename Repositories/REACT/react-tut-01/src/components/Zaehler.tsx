import { useState } from 'react';

function Zaehler() {
    const [anzahl, setAnzahl] = useState<number>(0);

    return (
        <div>
            <p>Du hast {anzahl} Mal geklickt.</p>
            <button onClick={() => setAnzahl(anzahl+1)}>Klick mich</button>
        </div>
    );
}

export default Zaehler;