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
```bash
sudo apt update && sudo apt upgrade -y
```
Spezifische Software (je nach Pfad)
Für Pfad 1 & 2 (Docker / Docker Compose): Installieren Sie die Docker Engine und das Compose Plugin über die offiziellen Docker-Repositories.
#### 1. Alte Versionen entfernen
```bash
sudo apt-get remove docker docker-engine docker.io containerd runc && sudo apt-get autoremove -y
```
#### 2. Repository einrichten und Docker installieren
```bash
sudo apt-get update && sudo apt-get install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
#### 3. Berechtigungen setzen (Entscheidend!)
```bash
sudo usermod -aG docker $USER
```
Wichtig: Damit die Docker-Berechtigung wirksam wird, müssen Sie sich einmal vom Server ab- und wieder anmelden oder den Befehl newgrp docker in Ihrer aktuellen Shell ausführen.

#### Für Pfad 3 (npm): Installieren Sie Node.js (v18+) und den Paketmanager npm.
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```
#### Pfad 4 (Proxmox): Eine funktionierende Proxmox VE Installation wird vorausgesetzt.
Installations-Pfade

#### Pfad 1: Docker (Schnell & Einfach für Tests)
Diese Methode ist ideal, um n8n schnell und unkompliziert zu testen.

#### Schritt 1: Datenverzeichnis erstellen
Dieser Schritt verhindert Berechtigungsprobleme im Container.
```bash
mkdir -p ~/.n8n
sudo chown -R $USER:$USER ~/.n8n
```

Schritt 2: Container starten
```bash
docker run -d --rm --name n8n -p 5678:5678 -v ~/.n8n:/home/node/.n8n n8nio/n8n:latest
```
n8n ist nun unter ```http://<Ihre-Server-IP>:5678``` erreichbar. Sie werden eine Sicherheitswarnung bezüglich "secure cookie" sehen.

Schritt 3: Zugriffsproblem lösen Sie haben zwei Möglichkeiten:

A) Schneller Workaround (unsicher): Stoppen Sie den alten Container (docker stop n8n) und starten Sie ihn mit einer zusätzlichen Umgebungsvariable neu.
Nur für reine Localhost-Tests geeignet!
```bash
docker run -d --rm --name n8n -p 5678:5678 -v ~/.n8n:/home/node/.n8n -e "N8N_SECURE_COOKIE=false" n8nio/n8n:latest
```
B) Sicherer Weg mit Reverse Proxy (empfohlen): Richten Sie einen Reverse Proxy ein, um n8n über eine Domain mit HTTPS zu betreiben.
Detaillierte Anleitung: Reverse Proxy für n8n mit Nginx Proxy Manager einrichten
---

Pfad 2: Docker Compose (Empfohlen für Produktivbetrieb)
Diese Methode ist robust und ideal für den dauerhaften Einsatz, da sie die Datenbank und n8n sauber trennt.

Schritt 1: Projektverzeichnis und Konfigurationsdatei anlegen
```bash
mkdir -p ~/n8n-produktiv
cd ~/n8n-produktiv
nano docker-compose.yml
```
Schritt 2: Inhalt für docker-compose.yml einfügen Ersetzen Sie die Platzhalter für die Passwörter.
```bash
services:
  n8n:
    image: n8nio/n8n:latest
    ports:
      - "5678:5678"
    restart: always
    environment:
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_DATABASE=n8n
      - DB_POSTGRESDB_USER=n8n
      - DB_POSTGRESDB_PASSWORD=IHR_N8N_DB_PASSWORT
      - GENERIC_TIMEZONE=Europe/Berlin
    volumes:
      - n8n_data:/home/node/.n8n
    depends_on:
      - postgres
  postgres:
    image: postgres:14
    restart: always
    environment:
      - POSTGRES_USER=n8n
      - POSTGRES_PASSWORD=IHR_N8N_DB_PASSWORT
      - POSTGRES_DB=n8n
    volumes:
      - postgres_data:/var/lib/postgresql/data
volumes:
  n8n_data:
  postgres_data:
```
Schritt 3: Container starten
```bash
docker compose up -d
```
Da der Port nur an 127.0.0.1 gebunden ist, ist n8n nicht direkt von außen erreichbar. Dies ist beabsichtigt.

Schritt 4: Zugriff ermöglichen Sie haben zwei Möglichkeiten:

A) Schneller Workaround (unsicher): Ändern Sie die Port-Zuweisung in der docker-compose.yml auf "5678:5678" und fügen Sie im environment-Block von n8n die Zeile - N8N_SECURE_COOKIE=false hinzu. Starten Sie neu mit docker compose up -d.
Nur für reine LAN-Tests ohne externe Erreichbarkeit geeignet!

B) Sicherer Weg mit Reverse Proxy (empfohlen): Richten Sie einen Reverse Proxy ein, der den Traffic an 127.0.0.1:5678 weiterleitet.
Detaillierte Anleitung: Reverse Proxy für n8n mit Nginx Proxy Manager einrichten
---

Pfad 3: npm (Für Entwickler)
Diese Methode installiert n8n direkt auf dem Host-System.

Schritt 1: n8n global installieren Die globale Installation erfordert Administratorrechte.
```bash
sudo npm install -g n8n
```
Schritt 2: n8n starten Führen Sie diesen Befehl als normaler Benutzer aus.

n8n
n8n ist nun unter ```http://<Ihre-Server-IP>:5678``` erreichbar und zeigt die Sicherheitswarnung. Beenden Sie den Prozess mit Strg+C.