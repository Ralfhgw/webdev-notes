##### FritzBox bleibt Provider-Gateway (Asterisk = internes SIP-Telefon)

##### Einfachste Lösung, kein Telekom-Trunk nötig.

Die FritzBox registriert sich weiter bei der Telekom (so wie jetzt).
Der Asterisk meldet sich dann einfach als SIP-Client (Nebenstelle) an der FritzBox an.

So kannst du über den Asterisk:

- interne SIP-Telefone verwalten
- IVRs, Sprachmenüs, Aufzeichnung oder STT hinzufügen
- und trotzdem über die FritzBox raus telefonieren

Netzwerk-Setup:
[Telekom]
   │
   ▼
[FritzBox]  ← Registriert sich bei Telekom
   │
   ▼
[Asterisk PBX]  ← Registriert sich als SIP-Telefon an FritzBox
   │
   ├─ lokale Telefone
   └─ VPN Telefone

Vorteile:

✅ kein Ärger mit Zertifikaten / TLS
✅ FritzBox erledigt NAT & SIP-ALG
✅ funktioniert sofort im Heimnetz
✅ alle 3 Rufnummern der Telekom nutzbar
✅ ideal zum Einstieg

Nachteile:

❌ Asterisk hängt „hinter“ der FritzBox → kein CLIP No Screening
❌ FritzBox limitiert gleichzeitige Anrufe (meist 2–3)
❌ keine volle Kontrolle über die Telekom-Leitung

##### So richtest du das ein:

In der FritzBox
Menü: Telefonie → Telefoniegeräte → Neues Gerät → Telefon (LAN/WLAN)
Typ: „Telefon (anderes Gerät)“
Benutzername: asterisk
Passwort: geheimespasswort
Hake an: „Anmeldedaten für Internet-Telefonie verwenden“
Eingehende Rufnummern zuordnen (z. B. alle drei Rufnummern)

Notiere dir:
SIP-Server (meist fritz.box)
Benutzername & Passwort
In Asterisk (PJSIP):

```
; /etc/asterisk/pjsip.conf
[fritzbox]
type=registration
outbound_auth=fritz-auth
server_uri=sip:fritz.box
client_uri=sip:asterisk@fritz.box
contact_user=asterisk

[fritz-auth]
type=auth
auth_type=userpass
username=asterisk
password=geheimespasswort

[fritzbox-endpoint]
type=endpoint
context=from-fritz
disallow=all
allow=alaw,ulaw,g722
outbound_auth=fritz-auth
aors=fritz-aor
from_user=asterisk
rtp_symmetric=yes
force_rport=yes
direct_media=no

[fritz-aor]
type=aor
contact=sip:fritz.box
```

Dialplan
```
[from-fritz]
exten => _X.,1,NoOp(Eingehender Anruf von FritzBox)
 same => n,Dial(PJSIP/${EXTEN}@intern)

[outgoing]
exten => _X.,1,NoOp(Ausgehender Anruf über FritzBox)
 same => n,Dial(PJSIP/${EXTEN}@fritzbox-endpoint)
```

Jetzt ruft Asterisk über die FritzBox ins Festnetz, und die FritzBox holt Gespräche von der Telekom.