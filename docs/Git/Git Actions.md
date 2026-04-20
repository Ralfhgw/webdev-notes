Node >=v.25 nessesary
Action Script in project folder .github/workflows/

actions-test.yml
```
name: Check Branch Name
on: push

jobs:
  branch_name:
    if: github.ref_name == 'main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install dependencies
        run: npm ci
      - name: Run Build
        run: | 
          echo "ref: ${{ github.ref }}"
          echo "ref_name: ${{ github.ref_name }}"
          echo "event: ${{ github.event_name }}"
          npm run build
          ls
  deploy:
    needs: branch_name
    runs-on: ubuntu-latest
    steps:
      - name: Deploying to Prod
        run: echo 'Deploying...'
```

Command "npm run build" create an temporary folder "dist".

```
3s
Run echo "ref: refs/heads/main"
ref: refs/heads/main
ref_name: main
event: push

> github-lession@0.0.0 build
> tsc -b && vite build

vite v7.3.1 building client environment for production...
transforming...
✓ 32 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-COcDBgFa.css    1.38 kB │ gzip:  0.70 kB
dist/assets/index-DWyDJMmB.js   193.91 kB │ gzip: 60.94 kB
✓ built in 1.04s
README.md
dist
eslint.config.js
index.html
node_modules
package-lock.json
package.json
public
src
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```
Beispiel für next.js
```
name: Deploy main

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    env: 
        POSTGRES_URL: ${{ secrets.POSTGRES_URL }}
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "24"

      - name: Install Dependencies
        run: npm ci
        working-directory: frontend/

      - name: Run Vitest
        run: npx vitest run
        working-directory: frontend/
        

      - name: Build
        run: npm run build
        working-directory: frontend/
```
Deploy to Webserver
```
      - name: Deploy to Server
        if: success()
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
        run: |
          mkdir -p ~/.ssh
          echo "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan -H code-collective.dci-web-dev.com >> ~/.ssh/known_hosts
          rsync -avz --delete --no-times --no-perms ./server/dist/ ralf@code-collective.dci-web-dev.com:/var/www/students/ralf
```