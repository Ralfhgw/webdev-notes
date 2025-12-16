#### TLS entschlüsseln
```bash
@echo off
REM Speicherort der SSL-Schlüsseldatei
set "SSLKEYLOGFILE=%USERPROFILE%\ssl-keys.log"

echo.
echo  Starte Firefox mit TLS-Log-Unterstützung...
echo  Beende ggf. laufende Firefox-Prozesse...

REM Firefox beenden, damit die neue Umgebungsvariable verwendet wird
taskkill /IM firefox.exe /F >nul 2>&1

REM Kurz warten
timeout /t 2 >nul

REM Firefox starten
start "" "C:\Program Files\Mozilla Firefox\firefox.exe"
echo  Firefox wurde mit aktivierter SSL-Schlüssellogdatei gestartet.
echo  Log-Datei: %SSLKEYLOGFILE%
echo.
pause
```

Diese Datei im Windows Terminalfenster starten.
Du gibst Wireshark unter:

Einstellungen → Protokolle → TLS → (Pre)-Master-Secret logdatei
den Pfad zur ssl-keys.log Datei. 

Der Anzeigefilter im Wireshark ist http bzw. http2.

Der Test wurde mit diesen Adressen gemacht:
http://example.com
https://example.com
