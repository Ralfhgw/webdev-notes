Tailwind setzt die Standardeinstellungen der Browser automatisch zurück.
```css
/* Sinnvoll ist das umranden aller Elemente zur Fehlersuche. */
/* * {outline: 1px solid red !important;} */

html {
    -webkit-text-size-adjust: 100%; /* iOS Fix */
        box-sizing: border-box;
    
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

body {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
    min-width: 360px;
}

img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
}

input, button, textarea, select {
    font: inherit; /* verhindert unterschiedliche Schriften */
}

button {
    background: none;
    border: none;
    padding: 0;
}

ul, ol {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
    color: inherit;
}
```