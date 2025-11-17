Tailwind Online Simulator
https://play.tailwindcss.com/

Installationsanweisung mit Vite:
https://tailwindcss.com/docs/installation/using-vite

Es gibt in VS Code eine Extension, welche Tailwind v4 richtig interpretiert.
Ohne diese Extension gab es eine Fehlermeldung:

##### Hinzufügen der Extension in VS Code:
  - Tailwind CSS IntelliSense
  
  Preferences --> Settings --> in Suchfeld "css.lint.unknown" --> Unknown at-rule --> ignore


##### Installation Vite, React, Tailwind
```
$ npm create vite@latest tailwind -- --template react
$ cd tailwind/
$ npm install
$ npm install npm install tailwindcss @tailwindcss/vite postcss autoprefixer
$ npm install -D @tailwindcss/postcss
$ npm list tailwindcss
```

##### Tailwind CSS - Schreibt/generiert Utility-basiertes CSS
##### PostCSS - Führt CSS-Plugins aus (Framework drumherum)
##### Autoprefixer - Macht CSS browserkompatibel (fügt Präfixe hinzu)


package.json
```
$ cat package.json 
{
  "name": "tailwindnew",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.17",
    "autoprefixer": "^10.4.22",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "tailwindcss": "^4.1.17"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@tailwindcss/postcss": "^4.1.17",
    "@types/react": "^19.2.2",
    "@types/react-dom": "^19.2.2",
    "@vitejs/plugin-react": "^5.1.0",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "vite": "^7.2.2"
  }
}
```
index.css
```
$ cat index.css
@import "tailwindcss";

@theme {
  --color-customcolor: #5f7ee3ff;
}
```
main.jsx
```
$ cat main.jsx 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
App.js
```
$ cat App.jsx 
import './App.css'

function App() {
  return (
    <>
      <h1 className="font-serif">Test</h1>
      <button className="bg-blue-500 rounded-lg">Klick mich</button>
      <div className="bg-red-100 font-sans blur-xs animate-spin">Box1</div>
      <div className="bg-blue-300 font-serif animate-ping">Box2</div>
      <div className="bg-yellow-100 font-mono animate-pulse">Box3</div>
      <div className="bg-green-100 animate-bounce">Box4</div>
    </>
  )
}

export default App
```
