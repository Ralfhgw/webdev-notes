---
id: Git-intro
title: Git
slug: /Git
sidebar_position: 12
---

### Anleitung: Passwort/Secret versehentlich committed – GitHub blockt Push

Wenn man versehentlich einen API-Key oder ein Passwort in ein Repository committet hat, blockt GitHub den Push (Push Protection). Dann reicht es nicht, die Datei einfach zu ändern oder zu löschen:

→ Man muss die komplette Repository-History umschreiben, damit der Secret-BLOB wirklich verschwindet.

Diese Anleitung zeigt den vollständigen Prozess.

### 1. git-filter-repo installieren (falls noch nicht installiert)

Unter Debian/Ubuntu/WSL:
```bash
sudo apt update
sudo apt install git-filter-repo
```

Testen:
```bash
git filter-repo --version
```
### 2. Datei secrets.txt anlegen (oder bestehende verwenden)

Die Datei enthält die Strings, die ersetzt werden sollen, z. B.:

OLD_SECRET_1==>REPLACED
OLD_SECRET_2==>REPLACED

Hinweis: Eine Zeile pro Secret.

### 3. History umschreiben und Secrets entfernen
```bash
git filter-repo --replace-text secrets.txt --force
```

Falls das Repo nicht „frisch“ ist, sind weitere Parameter nötig (z. B. --force, wie oben).

### 4. Git aufräumen, alte References löschen

Damit kein alter Commit mehr erreichbar bleibt:
```bash
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```
### 5. Remotes prüfen oder neu setzen

Falls kein origin gesetzt ist:
```bash
git remote -v
git remote add origin git@github.com:<USER>/<REPO>.git
git remote -v
```
### 6. Force-Push der neu geschriebenen History

Dieser Schritt überschreibt die komplette entfernte Historie:
```bash
git push -u origin main --force
```
### 7. Prüfen, ob GitHub immer noch Secrets findet

GitHub zeigt blockierte Pushes inklusive BLOB-ID an.
Diese findest du lokal mit:
```bash
git rev-list --objects --all | grep <BLOB-ID>
```

Dadurch erhältst du die Datei, in der der Secret noch existiert.

### 8. Falls eine einzelne Datei weiterhin das Secret enthält

Diese Datei kannst du gezielt aus der Historie entfernen:
```bash
git filter-repo --path <pfad/zur/datei> --invert-paths --force
```

Die Datei wird entfernt.
Danach fügst du sie sauber erneut hinzu:
```bash
git add <pfad/zur/datei>
git commit -m "Re-add file without secrets"
```

Und wieder:
```bash
git push --force
```