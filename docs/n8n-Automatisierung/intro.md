---
id: n8n-Automatisierung-intro
title: n8n-Automatisierung
slug: /n8n-Automatisierung
sidebar_position: 10
---
[Webseite von Thomas Krenn zur Installation von n8n](https://www.thomas-krenn.com/de/wiki/N8n_installieren)

### Allgemeine Voraussetzungen (für alle Methoden)
**Server:** Ein physischer Server oder eine Virtuelle Maschine.

**Ressourcen:** Mindestens 1 vCPU und 2 GB RAM. Für den produktiven Einsatz werden 2+ vCPUs und 4+ GB RAM empfohlen.

**Benutzerrechte:** Sie benötigen einen Benutzer mit sudo-Rechten.

**System-Aktualität:** Es wird empfohlen, das System vorab auf den neuesten Stand zu bringen:

[console.cloud.google.com](https://console.cloud.google.com/)

## n8n unter Debian mit Docker & Docker Compose installieren

Diese Anleitung basiert auf deinen tatsächlich ausgeführten Befehlen.

### 1. System aktualisieren
```bash
sudo apt update && sudo apt upgrade -y
```
### 2. Docker für Debian korrekt installieren
#### 2.1. Abhängigkeiten installieren
```bash
sudo apt-get install -y ca-certificates curl gnupg
```
#### 2.2. Docker GPG-Key einrichten
```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```
#### 2.3. Docker-Repository hinzufügen

(du hast „bookworm“ verwendet – korrekt für Debian 12)
```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian bookworm stable" \
| sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
#### 2.4. Repository aktualisieren & Docker installieren
```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
#### 2.5. Benutzer in die Docker-Gruppe aufnehmen
```bash
sudo usermod -aG docker $USER
newgrp docker
```
### 3. Installieren von Node.js (nur erforderlich, wenn n8n über npm installiert wird)

Für n8n via Docker eigentlich nicht erforderlich, aber du hast es benutzt:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```
### 4. n8n-Verzeichnis erstellen
```bash
mkdir ~/n8n
cd ~/n8n
```
### 5. docker-compose.yml erstellen

Beispiel:
```bash
vboxuser@n8n:~/n8n$ cat docker-compose.yml
version: "3.8"

services:
  n8n:
    image: n8nio/n8n:latest
    restart: always
    ports:
      - "5678:5678"
    environment:
    - N8N_SECURE_COOKIE=false
    - N8N_BASIC_AUTH_ACTIVE=true
    - N8N_ENCRYPTION_KEY=<dein_key>
    - N8N_HOST=0.0.0.0
    - N8N_PORT=5678
    - N8N_PROTOCOL=http
    volumes:
      - ./n8n_data:/home/node/.n8n
```
### 6. Dateiberechtigungen setzen (wichtig, um Fehler zu vermeiden)
```bash
sudo chown -R 1000:1000 ~/n8n/n8n_data
sudo chmod -R 775 ~/n8n/n8n_data
```
### 7. n8n starten
```bash
docker compose up -d
```
### 8. Status prüfen
Docker Container anzeigen
```bash
docker ps
docker logs -f n8n-n8n-1
```
(Der Containername kann variieren → mit docker ps prüfen)

Prüfen, ob Port 5678 offen ist
```bash
sudo ss -tulpn | grep 5678
```
### 9. n8n aufrufen

Im Browser:
```bash
http://<SERVER-IP>:5678
```

## Projektkonfiguration in der Google Console

Erstelle ein neues Projekt und wähle es aus z.B. "n8n Test"

![n8n](/img/n8n-01.png)

Im Navigationsmenü wähle -- APIs und Dienste -- Bibliothek

![n8n](/img/n8n-02.png)

Suche nach "Google Sheets API" -- Klicke darauf, aktiviere die API
und wiederhole es für "Google Drive API" und "GMail API"

![n8n](/img/n8n-03.png)

Im Navigationsmenü wähle -- APIs und Dienste -- Anmeldedaten

![n8n](/img/n8n-04.png)

Wähle "Zustimmungsbildschirm konfigurieren" aus

![n8n](/img/n8n-05.png)

Fülle das Formular "App Information" aus

![n8n](/img/n8n-06.png)

Fülle das Formular "Zielgruppe" aus

![n8n](/img/n8n-07.png)

Fülle das Formular "Kontaktdaten" aus

![n8n](/img/n8n-08.png)

Aktzeptiere die Nutzerbedingungen und klicke auf "Erstellen"

![n8n](/img/n8n-09.png)

### Create new workflow
Klick and add "Trigger manually" Icon

Filter for Google Drive and choose "Download file"
Setze die Parameter für "Download file"

![n8n](/img/n8n-10.png)
![n8n](/img/n8n-11.png)
![n8n](/img/n8n-12.png)
![n8n](/img/n8n-13.png)
![n8n](/img/n8n-14.png)


