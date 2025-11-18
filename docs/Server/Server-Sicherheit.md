# Web Server Security

## I. Infrastruktur & Backend

### 1. Hoster & Rechtliches

- AVV (Auftragsverarbeitungsvertrag) mit dem Hoster abgeschlossen.
- Serverstandort geprüft (EU bevorzugt).
- Unternehmenssitz des Hosters geprüft (US-Anbieter → Data Privacy Framework / `DPF` oder `SCC` checken).
- Subdienstleister des Hosters geprüft und im AVV aufgeführt.
- Physische Sicherheit des Rechenzentrums dokumentiert (Zutrittskontrolle, Brandschutz etc. – meist durch Hoster-Zertifizierungen wie `ISO 27001` nachgewiesen).

### 2. Server-Härtung (TOMs)

- Firewall im `Default-Deny-Modus` (z. B. `ufw` / `nftables`).
- SSH-Zugang:
    - Ausschließlich `Key-Login` erlaubt.
    - Passwort-Login deaktiviert.
    - `Root-Login` deaktiviert.
    - Eigener `sudo-User` eingerichtet.
    - **Neu:** SSH-Port auf einen nicht standardmäßigen Port geändert.
- `Fail2ban` oder ein anderes Rate-Limiting-Tool ist aktiviert und konfiguriert.
- Automatische Sicherheitsupdates sind eingerichtet (z. B. `unattended-upgrades`).
- Dienste und offene Ports sind auf das absolute Minimum reduziert.
- Strikte Benutzertrennung:
    - Kein `root`-User für Applikationen.
    - Eigener System-User pro Applikation.
- `ModSecurity` mit dem OWASP Core Rule Set (`CRS`) ist aktiviert (falls ein Web Application Firewall (`WAF`) genutzt wird).
- `Deployment-User` sind von System-Usern getrennt.
- Zwei-Faktor-Authentifizierung (`2FA`) für alle administrativen Zugänge (Server, Hoster-Login) ist aktiviert.

### 3. Logging

- Webserver-Logs (`access.log`, `error.log`):
    - IP-Anonymisierung ist standardmäßig aktiv.
    - Vollständige IPs werden nur bei berechtigtem Interesse (z. B. Fehleranalyse, Sicherheit) und für eine kurze, definierte Frist gespeichert.
    - Eine `Logrotation` ist konfiguriert.
- System-Logs (`syslog`, `auth.log`):
    - Speicherung voller IPs ist für Sicherheitszwecke erlaubt (Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO).
    - Der Zugriff auf diese Logs ist streng beschränkt.
    - Ein Rotations- und Löschkonzept ist definiert.
- `Fail2ban`-Logs:
    - Logs werden regelmäßig rotiert.
    - Sperrzeiten sind verhältnismäßig und begrenzt.

### 4. E-Mail-Infrastruktur

- Transportverschlüsselung (`TLS`/`STARTTLS`) wird erzwungen.
- `SPF`, `DKIM` und `DMARC` sind korrekt konfiguriert, um E-Mail-Spoofing zu verhindern.
- Der eingesetzte Spamfilter ist als technische Maßnahme dokumentiert (Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO).
- Mail-Logs sind streng gesichert und unterliegen einem Löschkonzept.
- Alternative: Nutzung eines externen Maildienstes (erfordert einen eigenen AVV).

### 5. Datenbanken

- Jede Applikation nutzt einen eigenen Datenbank-User mit minimalen Rechten.
- Anwendungen haben keinen `root`-Zugang zur Datenbank.
- Verschlüsselung ist sichergestellt:
    - `at-rest` (Verschlüsselung der Festplatten/Volumes durch den Hoster).
    - `in-transit` (Verbindungen zur Datenbank, auch interne, sind `TLS`-verschlüsselt).
- Datenbank-Software ist aktuell und wird regelmäßig gewartet.

### 6. Backups

- Ein Backup-Konzept ist dokumentiert, das Folgendes enthält:
    - Umfang der Backups (Dateien, Datenbanken).
    - Häufigkeit der Backups.
    - Speicherort (getrennt vom Produktivsystem).
    - Dauer der Aufbewahrung.
- Backups werden verschlüsselt gespeichert.
- Der Zugriffsschutz auf Backups ist klar definiert.
- Die Wiederherstellung von Backups wird regelmäßig getestet.
- Ein Rotationsplan für Backups ist umgesetzt.
- Der Umgang mit Löschverlangen von Betroffenen im Kontext von Backups ist definiert.

### 7. Mandantentrennung

- Wenn mehrere Projekte auf einem Server laufen, ist eine strikte Trennung gewährleistet durch:
    - Eigene System-User.
    - Getrennte Verzeichnisse im Dateisystem.
    - Separate Datenbank-Zugänge.
    - Getrenntes Logging.
- Optional zur weiteren Kapselung: Containerisierung (z.B. mit `Docker` oder `Podman`).

### 8. Monitoring & Alerting

- `Uptime-Monitoring` zur Überwachung der Erreichbarkeit ist aktiv.
- Ressourcenüberwachung (CPU, RAM, Speicherplatz) ist eingerichtet.
- Automatische Alarmierung bei kritischen Ereignissen ist konfiguriert.
- Sicherheitsüberwachung (z. B. anomale Logins, verdächtiger Traffic) ist implementiert.

### 9. CI/CD, Deployments & Entwicklung

- Versionskontrolle (z. B. `Git`) wird verwendet.
- Die `CI/CD-Pipeline` ist dokumentiert:
    - Wo laufen die `Builds`?
    - Wohin gehen die `Logs` des Build-Prozesses?
- Staging- und Test-Umgebungen verwenden keine echten Nutzerdaten.
- Ein `Rollback`-Prozess für fehlerhafte Deployments ist dokumentiert und erprobt.

## II. Applikation & Frontend

### 1. Transport-Verschlüsselung

- HTTPS wird für die gesamte Webseite erzwungen.
- Ein `HTTP` → `HTTPS` Redirect ist serverseitig konfiguriert.
- Der `HSTS`-Header (HTTP Strict Transport Security) ist gesetzt.

### 2. Sicherheitsheader

- Eine `Content-Security-Policy` (`CSP`) ist definiert und so restriktiv wie möglich.
- `X-Content-Type-Options: nosniff` ist gesetzt.
- `Referrer-Policy: strict-origin-when-cross-origin` oder restriktiver ist gesetzt.
- `Permissions-Policy` wird genutzt, um unnötige Browser-Features zu blockieren.
- `X-Frame-Options: DENY` oder `SAMEORIGIN` bzw. `CSP frame-ancestors` ist gesetzt, um Clickjacking zu verhindern.
- (Optional) `X-XSS-Protection` ist gesetzt (obwohl durch `CSP` meist obsolet).

### 3. Cookies & Consent Management

- Die Einwilligung des Nutzers wird eingeholt, bevor nicht-essenzielle Skripte geladen und Cookies gesetzt werden.
- Ein "Ablehnen"-Button ist gleichwertig und leicht erreichbar wie der "Akzeptieren"-Button.
- Das Setzen von Cookies ist technisch strikt an den erteilten `Consent` geknüpft.
- Der `Consent`-Status wird serverseitig verarbeitet (idealerweise anonym).

### 4. Kontaktformulare

- Grundsatz der Datensparsamkeit wird beachtet (z. B. E-Mail als Pflichtfeld, Name optional).
- Ein direkter Hinweis auf die Datenschutzerklärung befindet sich am Formular.
- Serverseitige Validierung von Eingaben ist implementiert.
- `Rate-Limiting` zum Schutz vor Spam und Missbrauch ist aktiv.
- Löschfristen für die übermittelten Daten sind definiert und werden umgesetzt.

### 5. Tracking & Analytics

- Cookie-basierte Tracking-Tools erfordern immer eine vorherige, aktive Einwilligung.
- Bei Nutzung von `Matomo` (self-hosted) ohne Cookies:
    - IP-Adressen werden anonymisiert.
    - Es findet kein Drittlandtransfer statt.
    - Eine Opt-out-Möglichkeit wird bereitgestellt.
    - Die Verarbeitung kann auf berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) gestützt werden.

### 6. Externe Ressourcen

- Schriftarten (z. B. Google Fonts) werden lokal auf dem eigenen Server gehostet.
- Videos (YouTube, Vimeo) werden über eine 2-Klick-Lösung oder datenschutzfreundliche Alternativen eingebunden.
- Social-Media-Plugins werden über datenschutzfreundliche Lösungen wie `Shariff` eingebunden, um eine Datenübertragung beim Laden der Seite zu verhindern.
- CDNs (Content Delivery Networks) werden auf IP-Leaks und Drittlandtransfer geprüft und ggf. nur nach Einwilligung genutzt.

### 7. App-Sicherheit

- Passwörter werden mit einem modernen Hashing-Algorithmus wie `Argon2id` oder `bcrypt` gespeichert.
- Session-Cookies haben die Attribute `HttpOnly`, `Secure` und `SameSite=Lax` oder `Strict`.
- Ein `CSRF`-Schutz (Cross-Site Request Forgery) ist aktiv.
- Alle Benutzereingaben werden validiert (`Input-Validierung`) und bei der Ausgabe im Kontext kodiert (`Output-Encoding`).
- `Rate-Limits` sind auf Logins, Passwort-Reset-Funktionen und API-Endpunkte implementiert.
- Fehlermeldungen geben keine sensitiven Informationen über das System preis (`verbose error messages`).

### 8. Drittanbieter-Software & Dependencies

- Plugins, Themes und Bibliotheken werden sorgfältig geprüft auf:
    - Herkunft und Vertrauenswürdigkeit.
    - Update-Frequenz und Sicherheitspatches.
- Die Anzahl der `Dependencies` wird auf ein Minimum reduziert.
- Das `Supply-Chain`-Risiko (Abhängigkeiten von Drittanbietern) ist dokumentiert.
- **Neu:** Software (CMS, Frameworks, Libraries) wird regelmäßig und zeitnah aktualisiert.

## III. Organisatorische Compliance

### 1. Verzeichnis von Verarbeitungstätigkeiten (VVT)

- Das VVT ist vollständig und enthält unter anderem:
    - Verarbeitung von Webserver-Logs.
    - Verarbeitung von System-Logs.
    - Anfragen über Kontaktformulare.
    - Erstellung und Speicherung von Backups.
    - E-Mail-Versand und -Archivierung.
    - Datenverarbeitung durch den Hoster.
    - Ggf. Web-Analytics.

### 2. Dokumentation der Technischen und Organisatorischen Maßnahmen (TOMs)

- Die getroffenen Maßnahmen sind dokumentiert, darunter:
    - Firewall-Konzept.
    - Verschlüsselungsmaßnahmen.
    - Zugangs- und Zugriffskontrollkonzept.
    - Backup-Konzept.
    - Monitoring- und Alerting-Prozesse.
    - Update- und Patch-Management-Prozess.
    - Nachweis der physischen Sicherheit durch den Hoster.

### 3. Löschkonzept

- Löschfristen sind für alle Datenarten klar definiert (basierend auf dem VVT).
- Die technische Umsetzung der Löschung ist beschrieben:
    - Automatisierung durch `logrotate`.
    - `Cronjobs` für die Bereinigung von Datenbanken.
    - Regeln für die Rotation von Backups.

### 4. Umgang mit Betroffenenrechten (Art. 12–22 DSGVO)

- Ein interner Prozess zur Bearbeitung von Anfragen (Auskunft, Löschung, etc.) ist dokumentiert.
- Ein Verfahren zur sicheren Identitätsprüfung des Antragstellers ist definiert.
- Die gesetzliche Frist von einem Monat zur Beantwortung wird eingehalten.

### 5. Incident Response / Notfallplan

- Ein Plan für den Umgang mit Sicherheitsvorfällen ist vorhanden und beschreibt das Vorgehen bei:
    - Hackerangriffen.
    - Datenverlust.
    - Ransomware-Befall.
    - DDoS-Angriffen.
- Der Prozess zur Meldung einer Datenpanne an die Aufsichtsbehörde (binnen 72 Stunden) ist klar definiert.
- Kriterien und Prozess für die Information der betroffenen Personen sind festgelegt.

### 6. Support & Kommunikation

- Eingesetzte Ticket- oder Support-Systeme sind datenschutzrechtlich bewertet (ggf. AVV erforderlich).
- Die Verarbeitung personenbezogener Daten im Rahmen von Support-Anfragen ist im VVT dokumentiert.