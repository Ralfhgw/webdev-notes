---
id: Abschlussprojekt
title: Abschlussprojekt
slug: /DCI-Abschlussprojekt
sidebar_position: 7
---
#### Weather Page
API: https://api.open-meteo.com/v1/forecast?latitude=54.08&longitude=13.38&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&hourly=temperature_2m,precipitation&timezone=Europe/Berlin

https://dwd.api.bund.dev/
https://openweathermap.org/appid
https://www.weatherbit.io/api/weather-current  (API Key)


https://wiki.ubuntuusers.de/Internet-TV/Stationen/
ZDF HD: https://zdf-hls-15.akamaized.net/hls/live/2016498/de/high/master.m3u8
Schlager Deluxe: https://sdn-global-live-streaming-packager-cache-aka.3qsdn.com/26658/26658_264_live.m3u8

NASA Live
https://www.youtube.com/watch?v=iYmvCUonukw
https://www.youtube.com/watch?v=kPKXjSpfSo4
https://www.youtube.com/watch?v=QviXe8xvA50
https://www.youtube.com/nasa/live


So sollte eine gute Wetter-App m.W. über folgende Funktionen verfügen:
aktuelles Wetter
aktuelle Temperatur
gefühlte Temperatur
Bewölkungsstatus
Regenwahrscheinlickeit
Luftdruck
Luftfeuchtigkeit
Windrichtung und Windgeschwindigkeit
UV-Index
Wettervorhersage
Stündliche Vorhersage für die nächsten 24 Stunden
Tagesvorhersage für mindestens 7 Tage
Wetterwarnungen (Unwetter usw.) per Push-Mitteilung
Radar bzw. Wetterkarten, z.B.:
Temperatur
Regenradar
Bewölkungsstatus
Niederschlagsmenge
Windgeschwindigkeiten
Wetter-Widgets
ggf. zusätzliche Funktionen wie Pollenflug, Luftqualität, Webcam-Bilder


#####################################################################################
VLC Link mit IMOU Kamera
rtsp://admin:L2202183@192.168.2.91:554/cam/realmonitor?channel=1&subtype=0
Codec Video:
MPEG-H Part2/HEVC (H.265) (hevc)
Videoauflösung: 2560x1440
Pufferabmessungen: 2560x1440
Bildwiederholrate:25
Farbraum: ITU-R BT.709

Codec Audio: MPEG AAC Audio (mp4a)

rtsp://admin:L2202183@192.168.2.91:554/cam/realmonitor?channel=1&subtype=1
Codec Video:
H264 - MPEG-4 AVC (part 10) (h264)
Videoauflösung: 640x480
Pufferabmessungen: 640x480
Bildwiederholrate:25
Farbraum: ITU-R BT.709

Codec Audio: MPEG AAC Audio (mp4a)

Verwendung von ffplay
ffplay -rtsp_transport tcp -fflags +genpts "rtsp://admin:L2202183@192.168.2.91:554/cam/realmonitor?channel=1&subtype=1"


```
nc -vz 192.168.2.62 4554

$ ffmpeg -rtsp_transport tcp -i rtsp://user:greifswald@192.168.2.62:4554 -an -c:v libx264 -preset veryfast -tune zerolatency -fflags +genpts -use_wallclock_as_timestamps 1 -movflags frag_keyframe+empty_moov+default_base_moof -f mp4 -fps_mode cfr pipe:1

ffmpeg -rtsp_transport tcp -i "rtsp://admin:admin@192.168.2.62:554/stream" -fflags +genpts+discardcorrupt -use_wallclock_as_timestamps 1 -reset_timestamps 1 -avoid_negative_ts make_zero -c:v copy -an -f mp4 -movflags frag_keyframe+empty_moov+default_base_moof out.mp4

ffmpeg -rtsp_transport tcp -i "rtsp://admin:admin@192.168.2.62:1935/stream" -fflags +genpts+discardcorrupt -use_wallclock_as_timestamps 1 -reset_timestamps 1 -avoid_negative_ts make_zero -an -c:v libx264 -preset veryfast -tune zerolatency -g 50 -vsync 0 -fps_mode passthrough -movflags frag_keyframe+empty_moov+default_base_moof+separate_moof -t 10 out.mp4

ffmpeg -rtsp_transport tcp -i "rtsp://admin:admin@192.168.2.62:1935/stream" -vcodec copy -acodec copy -t 10 out.h264

ffplay -rtsp_transport tcp "rtsp://admin:admin@192.168.2.62:1935/stream"
```


## Ein Web-basiertes Live-Video-Analyse-Dashboard (Full-Stack)
### Projektidee: „Smart Vision Dashboard“

Ein System, das einen Kamerastream in Echtzeit im Browser anzeigt, Analysen darstellt (z. B. Bewegungserkennung, Objektanzahl, Statusmeldungen) und ein interaktives UI bietet.

#### Frontend:
- React / Vue / Svelte oder Vanilla
- Live-Videoanzeige
- Realtime-UI mit WebSockets
- Charts & Statistiken (z. B. Chart.js, Recharts)
- UI/UX (Dark Mode, Dashboard-Layout, Notifications)

#### Backend:
- Node.js (Express/Nest) oder Python (FastAPI)
- Upload und Relay des Videostreams
- Bildanalyse in einem Microservice
- WebSocket-Server für Echtzeit-Events

#### API-Design:
- REST API für Konfiguration
- WebSocket API für Live-Events
- Optional Token-Auth / JWT / OAuth

#### DevOps / Deployment:
- Docker Container
- Nginx Reverse Proxy
- Production Build
- Optional Cloud Deployment (Render, Fly.io, AWS)

#### Grundfeatures:
- Live-Video im Browser
- Dashboard mit Echtzeit-Updates
- Benutzeroberfläche zum Aktivieren/Deaktivieren der Analyse
- Live-Events (Bewegung erkannt / Linie überschritten / Person gezählt)
- Logging und Historie der Events
- Responsive Design

#### Bonus-Features:
- Plugin-System für zusätzliche Analysen
- Rollbasierte Benutzerverwaltung
- Unit Tests + E2E Tests (z. B. Jest, Playwright)
- Analytics-Seite mit historischen Graphen
- Beispiel-Use-Cases, die du wählen kannst

#### 1. Bewegungserkennung & Live-Alarm
Kamera erkennt Bewegung → WebSocket push → UI zeigt Alarm.

#### 2. Besucherzähler (Privacy-Friendly)
Analyse erkennt Anzahl von „Objekten“ → Dashboard zeigt live:
3 Personen im Raum.

#### 3. Parkplatz Monitoring Dashboard
Frontend zeigt:
frei / belegt pro Parkplatz.

#### 4. Smart Security Dashboard
Wenn Kamera z. B. Rauch oder eine blockierte Tür erkennt, erscheint eine Meldung + Screenshot.

### Tech-Stack
#### Frontend
React + Vite
WebSocket API
TailwindCSS
Recharts für Diagramme

#### Backend
Node.js + NestJS (Clean Architecture)

#### alternativ
Python + FastAPI (wenn du ML-Modelle nutzen möchtest)
Videostream-Verarbeitung (Microservice):
Python mit OpenCV

Kommuniziert mit Backend per WebSocket oder REST

Deployment:
- Docker Compose
- nginx

KI Hilfe mit:
- eine vollständige Architektur
- ER-Diagramm
- API-Dokumentation
- Featureliste für dein Projektheft
- Tech-Stack begründet auswählen
- Beispiel-UI-Design
- Roadmap für die Umsetzung

### Ordnerstruktur
```
smart-vision-dashboard/
│
├── public/                          // Statische Dateien, die Vite unverändert kopiert.
│   └── favicon.ico
│
├── src/
│   ├── assets/                      // Logos, Icons, Bilder – alles, was nicht dynamisch ist.
│   │   └── images/
│   │       └── logo.svg
│   │
│   ├── components/                 // Alle wiederverwendbaren Komponenten, logisch in Ordner unterteilt:
│   │   ├── layout/                 // Navigation, Header, Layout
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Header.tsx
│   │   │   └── MainLayout.tsx
│   │   │
│   │   ├── video/                 // alles rund um Videostreaming (Canvas Player etc.)
│   │   │   ├── VideoCanvas.tsx    // JSMpeg Canvas Player
│   │   │   └── StreamStatus.tsx   // Live/Offline Indikator
│   │   │
│   │   ├── charts/
│   │   │   └── EventChart.tsx     // Diagramm-Komponenten
│   │   │
│   │   └── ui/                    // Buttons, Cards, Spinner
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── SettingItem.tsx
│   │       └── Spinner.tsx
│   │
│   ├── hooks/                     // Custom Hooks für wiederverwendbare Logik
│   │   ├── useWebSocket.ss        // WebSocket-Verbindung
│   │   ├── useStreamStatus.js     // Stream-Status
│   │   └── useEventLog.js         // Event-Handling
│   │
│   ├── pages/                     // Alle Navigationseinheiten / Routen
│   │   ├── Dashboard.tsx
│   │   ├── LiveView.tsx
│   │   ├── Events.tsx
│   │   └── Settings.tsx
│   │
│   ├── services/                  // Hier liegt die externe Kommunikation
│   │   ├── api.js                 // REST API Client
│   │   └── stream.js              // Verbindung zum Video-WebSocket
│   │
│   ├── store/
│   │   └── eventStore.js          // Projektlogik Eventliste, Status, etc.
│   │
│   ├── styles/
│   │   └── globals.css            // Tailwind-Setup und globale Styles
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── router.tsx                 // React Router Setup
│
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```