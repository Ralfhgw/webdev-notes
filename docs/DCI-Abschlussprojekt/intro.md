---
id: Abschlussprojekt
title: Abschlussprojekt
slug: /DCI-Abschlussprojekt
sidebar_position: 7
---

## Ein Web-basiertes Live-Video-Analyse-Dashboard (Full-Stack)
### Projektidee: „Smart Vision Dashboard“

Ein System, das einen Kamerastream in Echtzeit im Browser anzeigt, Analysen darstellt (z. B. Bewegungserkennung, Objektanzahl, Statusmeldungen) und ein interaktives UI bietet.

Warum gerade dieses Projekt?

Weil du damit alle Kernfähigkeiten eines modernen Webentwicklers zeigen kannst:

Frontend:
React / Vue / Svelte oder Vanilla
Live-Videoanzeige
Realtime-UI mit WebSockets
Charts & Statistiken (z. B. Chart.js, Recharts)
UI/UX (Dark Mode, Dashboard-Layout, Notifications)

Backend:
Node.js (Express/Nest) oder Python (FastAPI)
Upload und Relay des Videostreams
Bildanalyse in einem Microservice
WebSocket-Server für Echtzeit-Events

API-Design:
REST API für Konfiguration
WebSocket API für Live-Events
Optional Token-Auth / JWT / OAuth
DevOps / Deployment:
Docker Container
Nginx Reverse Proxy
Production Build
Optional Cloud Deployment (Render, Fly.io, AWS)

Konkrete Features (leicht + stark demonstrierbar)

Du kannst diese flexibel kombinieren:
Grundfeatures (zeigen Webkompetenz):
- Live-Video im Browser
- Dashboard mit Echtzeit-Updates
- Benutzeroberfläche zum Aktivieren/Deaktivieren der Analyse
- Live-Events (Bewegung erkannt / Linie überschritten / Person gezählt)
- Logging und Historie der Events
- Responsive Design

Bonus-Features (optional, aber eindrucksvoll):

Plugin-System für zusätzliche Analysen

Rollbasierte Benutzerverwaltung

Unit Tests + E2E Tests (z. B. Jest, Playwright)

Analytics-Seite mit historischen Graphen

Beispiel-Use-Cases, die du wählen kannst

— du brauchst nur einen, aber sie alle nutzen das gleiche Websystem:

1. Bewegungserkennung & Live-Alarm

Kamera erkennt Bewegung → WebSocket push → UI zeigt Alarm.

2. Besucherzähler (Privacy-Friendly)

Analyse erkennt Anzahl von „Objekten“ → Dashboard zeigt live:
👥 3 Personen im Raum.

3. Parkplatz Monitoring Dashboard

Frontend zeigt:
🟩 frei / 🟥 belegt pro Parkplatz.

4. Smart Security Dashboard

Wenn Kamera z. B. Rauch oder eine blockierte Tür erkennt, erscheint eine Meldung + Screenshot.

🧱 Tech-Stack-Empfehlung

Damit punktest du bei jedem Prüfer:

Frontend:

React + Vite

WebSocket API

TailwindCSS

Recharts für Diagramme

Backend:

Node.js + NestJS (Clean Architecture)
alternativ:

Python + FastAPI (wenn du ML-Modelle nutzen möchtest)

Videostream-Verarbeitung (Microservice):

Python mit OpenCV

Kommuniziert mit Backend per WebSocket oder REST

Deployment:

Docker Compose

nginx

Optional Cloud Deployment

🎓 Warum beeindruckt dieses Projekt Prüfer?

Weil es zeigt, dass du:

moderne Webarchitektur verstehst

ein vollständiges Full-Stack-System bauen kannst

Realtime-Kommunikation beherrschst

zusätzliche Technologien sinnvoll integrierst

einen klaren praktischen Nutzen erreichst

Es ist deutlich anspruchsvoller als eine normale Website, aber absolut machbar als Abschlussprojekt.

👉 Wenn du möchtest

Ich kann dir ausarbeiten:

eine vollständige Architektur

ER-Diagramm

API-Dokumentation

Featureliste für dein Projektheft

Tech-Stack begründet auswählen

Beispiel-UI-Design

Roadmap für die Umsetzung

Sag mir nur Bescheid, welchen Use-Case du bevorzugst!