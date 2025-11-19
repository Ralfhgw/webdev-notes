Installation node.js:
```
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt install -y nodejs
```

BUN Installation
```
$ sudo apt install unzip
$ curl -fsSL https://bun.sh/install | bash
$ export PATH="$HOME/.bun/bin:$PATH"
$ bun
```

Vite Installation
```
npm create vite@latest
$ npm create vite@latest Tailwind -- --template react
npm run build
npm run dev

$ npm install --production (Installation der Module unter "dependencies" und nicht in "devDependencies".)
```

Installation von readlineSync 
```
npm install readline-sync
(oder 
npm i readline-sync
)

readlineSync importieren: 

import readlineSync from 'readline-sync'; 
const name = readlineSync.question('Was ist dein Name?'); 
console.log(`Dein Name ist ${name}`);
```
Installation i18next
```
$ npm install i18next
```
```
$ npm install dotenv - Dieses Module liest die Werte in der .env ein und stellt diese zur Verfügung
```
Installation bcrypt
```
$ npm install bcrypt - zum Hashen von Strings
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

// Store hash in your password DB.
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

// Load hash from your password DB.
bcrypt.compareSync(myPlaintextPassword, hash); // true
bcrypt.compareSync(someOtherPlaintextPassword, hash); // false
```