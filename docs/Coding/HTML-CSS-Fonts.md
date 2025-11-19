### 1.Einbinden einer lokalen Schrift in die Webseite

- Es gibt für Webseiten optimierte Schriften (WOFF/WOFF2)
- Coole Fonts "vollkorn", "merriweather", "system-ui"
- mono schriften - gleicher abstand
- serif - Buchstaben haben Zacken an den Spitzen
- Bei Schriften schwankt die Dicke zwischen 100 und 950 z.B. Light 300
#### Schriften immer lokal installieren, da bei der Bereitstellung der google Links der User darauf zugreift und google kontaktiert, ohne dass ein Einverständnis dafür vorliegt.

#### 1.Schrift herunterladen
Gehe in den Ordner fonts/ oder fonts/ttf/ – je nach Projektstruktur.
Du findest z. B. Average-Regular.ttf.

#### 2. Schrift ins Web-kompatibles Format konvertieren
Browser benötigen spezielle Formate wie .woff oder .woff2. Tools zur Konvertierung:
Online-Konverter:

[rnsfonter-Modern and simple css @font-face generator](https://transfonter.org/)

Dieses Tool konvertiert in .woff, .woff2 (für moderne Browser) und erstellt @font-face CSS-Code (optional)

#### 3. Schriftdateien in dein Projekt kopieren
Lege z. B. einen Ordner fonts/ in deinem Projekt an und kopiere die .woff-Dateien dorthin.

#### 4. CSS einfügen:
```
 @font-face-Regel
// In deiner CSS-Datei (style.css oder <style>-Tag in HTML):

@font-face {
  font-family: 'Average';
  src: url('fonts/Average-Regular.woff2') format('woff2'),
       url('fonts/Average-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

// Dann kannst du sie so benutzen:
body {
  font-family: 'Average', sans-serif;
}
```
##### 5. In HTML verknüpfen
Falls du die CSS extern hast, nicht vergessen:
```
<link rel="stylesheet" href="style.css">
```

### 2.Einbinden einer externen Schrift in die Webseite

```
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" rel="stylesheet">
// Einfügen der Fonts
 <i class="fa-windows"></i>
```

Einfügen von Fonts in CSS
(einfügen am Anfang der CSS Datei)

```
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
```
Einfügen im head mit link
#### (kürzere Ladezeit als @import)
```
<head>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</head>

body {
  font-family: 'Roboto', sans-serif;
}
```

[Pictogrammers-Iconify](https://pictogrammers.com/docs/guides/iconify/)

[Pictogrammers-Material Design Icons](https://pictogrammers.com/library/mdi/)
```
<script src="//code.iconify.design/1/1.0.6/iconify.min.js"></script>
<span class="iconify" data-icon="mdi-instagram"></span><a href="#">Instagram</a>
```

### 3.Useful Fonts WebLinks
[Schriftart Proxima-Nova](https://fonts.adobe.com/fonts/proxima-nova)

[codepen](https://codepen.io/)

[Google Fonts](https://fonts.google.com/)

[font-awesome - The iconic SVG, font, and CSS toolkit](https://fontawesome.com/)

[Font Awesome 7](https://cdnjs.com/libraries/font-awesome)

[HeroIcons-Beautiful hand-crafted SVG icons](https://heroicons.com/)

[Lucide-Beautiful & consistent icons](https://lucide.dev/)

[Tabler-One Icon Set for Every Project](https://tabler.io/icons)

[FeatherIcons-Simply beautiful open source icons](https://feathericons.com/)

[Bootstrap Icons](https://icons.getbootstrap.com/)

[Google Fonts](https://fonts.google.com/icons)

[Find any font from any image](https://www.whatfontis.com/)

[ICONO-Pure css icons, with only one element](https://saeedalipoor.github.io/icono/)

[glyphsapp- Anleitung zum Font-Erstellen](https://vimeo.com/glyphsapp)

[forntforge.org-kostenloser und quelloffener Schrifteditor](http://fontforge.org)

[Tool für Fonts- erstellt CSS](https://wakamaifondue.com/)

[Font Database for Download](https://fonts.bunny.net)