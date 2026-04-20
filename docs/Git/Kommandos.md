### Ausgangssituation: Neues Projekt
#### Neues Repository anlegen
```
// Git erstellt den main-Branch.
git init

// Erste Datei erstellen
echo "Hallo Welt" > app.txt

// Datei zum Commit vormerken
git add app.txt

// Erster Commit auf main - Jetzt haben wir einen stabilen main-Stand.
git commit -m "Initialer Commit"

// Feature-Branch erstellen (-b = erstellen + wechseln)
// Neuen Feature-Branch anlegen & wechseln
git checkout -b feature-login

// Änderung im Feature-Branch
echo "Login-Funktion" >> app.txt

// Commit im Feature-Branch - feature-login ist jetzt weiter als main.
git add app.txt
git commit -m "Login-Funktion hinzugefügt"

// Parallel: main entwickelt sich weiter
// Zurück zu main
git checkout main

// Änderung auf main
echo "Footer hinzugefügt" >> app.txt

// Commit auf main - Jetzt sind main und feature-login auseinander gelaufen.
git add app.txt
git commit -m "Footer hinzugefügt"
```
##### VARIANTE A: git merge
```
// Auf main wechseln
git checkout main

// Feature-Branch mergen - Git erstellt einen Merge-Commit.
git merge feature-login

// Historie (vereinfacht)
*   Merge branch 'feature-login'
|\
| * Login-Funktion hinzugefügt
* | Footer hinzugefügt
|/
* Initialer Commit

// Ergebnis:
// Beide Änderungen sind drin
// Historie zeigt echten Verlauf
// Sehr teamfreundlich
```
##### VARIANTE B: git rebase

Wir tun jetzt so, als wäre das Merge nie passiert
```
// Feature-Branch auschecken
git checkout feature-login

// Feature auf main rebasen - Git „kopiert“ deine Feature-Commits oben auf main.
git rebase main

// Zurück zu main
git checkout main

// Fast-Forward-Merge
git merge feature-login

// Historie (linear!)
* Login-Funktion hinzugefügt
* Footer hinzugefügt
* Initialer Commit

// Ergebnis:
// Keine Verzweigung sichtbar
// Super saubere Historie
// Ideal für Feature-Branches
```

##### Wenn beide Branches dieselbe Zeile ändern:
```
git rebase main

// Git stoppt
// Datei öffnen
// Konflikt lösen

git add app.txt
git rebase --continue
```