##### Autostart über die Windows-Aufgabenplanung
Öffne eine Eingabeaufforderung (CMD) oder PowerShell.

```
VBoxManage list vms
```

Merke dir den Namen deiner VM, z. B. "UbuntuServer".

##### Konfiguration der Aufgabenplanung:
Drücke Win + R, tippe taskschd.msc und drücke Enter.

Neue Aufgabe erstellen:
Klicke auf „Aufgabe erstellen…“ (nicht „Einfache Aufgabe“).

Reiter Allgemein:
Name: z. B. Start VirtualBox VM
Wähle „Mit höchsten Privilegien ausführen“
Benutzer: dein aktueller Benutzer

Trigger einstellen:
Reiter Trigger → Neu…
„Beim Anmelden“ (oder „Beim Start“ wenn systemweit gewünscht)
Bestätigen.

Aktion hinzufügen:
Reiter Aktionen → Neu…
Aktion: Programm starten

Programm/Skript:
```
"C:\Program Files\Oracle\VirtualBox\VBoxManage.exe"
```

Argumente hinzufügen (ersetze DeineVM mit deinem VM-Namen):
```
startvm "DeineVM" --type headless
```

(„--type headless“ startet sie ohne GUI. Für sichtbaren Start → „--type gui“.)

Bedingungen & Einstellungen anpassen (optional):
Deaktiviere z. B. „Nur starten, wenn Computer im Netzbetrieb ist“.
Aktiviere „Aufgabe so bald wie möglich nach einem verpassten Start ausführen“.

Speichern und testen:
Rechtsklick auf die neue Aufgabe → „Ausführen“
Prüfe, ob die VM startet.