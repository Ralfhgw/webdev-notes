#### Installation node.js:
```bash
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt install -y nodejs
```

#### BUN Installation
```bash
sudo apt install unzip
curl -fsSL https://bun.sh/install | bash
export PATH="$HOME/.bun/bin:$PATH"
bun init
bun add express
bun add -d @types/express

// in package.json
   "scripts": {
    "dev": "bun --watch index.ts"
  },

bun dev
```

#### Vite Installation
```bash
npm create vite@latest
// npm create vite@latest Tailwind -- --template react
npm run build
npm run dev

npm install --production (Installation der Module unter "dependencies" und nicht in "devDependencies".)
```

#### Installation von readlineSync 
```bash
npm install readline-sync
(oder 
npm i readline-sync
)

readlineSync importieren: 

import readlineSync from 'readline-sync'; 
const name = readlineSync.question('Was ist dein Name?'); 
console.log(`Dein Name ist ${name}`);
```
##### Installation i18next
```bash
npm install i18next
```
```bash
npm install dotenv - Dieses Module liest die Werte in der .env ein und stellt diese zur Verfügung
```
##### Installation bcrypt
```bash
npm install bcrypt - zum Hashen von Strings
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

// Store hash in your password DB.
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

// Load hash from your password DB.
bcrypt.compareSync(myPlaintextPassword, hash); // true
bcrypt.compareSync(someOtherPlaintextPassword, hash); // false
```bash

### Installation von node.js in Testumgebung
### Empfehlung: nvm für Entwicklung
#### Installiere nvm (einmalig)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
#### neue Shell starten oder:
source ~/.bashrc

#### Node-Version installieren und als default setzen
nvm install 23
nvm alias default 23

#### prüfen
node -v
npm -v

### Alternative: systemweite Installation (Server)
#### z.B. Node 18 LTS über NodeSource
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

#### Bun (wenn gewünscht)
curl -fsSL https://bun.sh/install | bash
export PATH="$HOME/.bun/bin:$PATH"
bun -v