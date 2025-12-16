---
id: html-css-bildformate
title: CSS — Bildformate
---

### Useful Weblinks
[Bellingcat ist ein internationales Recherchekollektiv](https://de.bellingcat.com/)

[Unsplash - Die zentrale Adresse für Bildmaterial im Internet.](https://unsplash.com/de)

### META Daten
[Online EXIF data viewer](https://jimpl.com/)

**doxxing - ist das internetbasierte Zusammentragen und anschließende Veröffentlichen personenbezogener Daten, typischerweise mit bösartigen Absichten**

#### SVG Vectorbilder sind HTML Code Dateien und sind anfällig für Malicious Code.
```html
<svg xmlns="http://www.w3.org/2000/svg" onload="alert('XSS from SVG onload!')"> <circle cx="50" cy="50" r="40" fill="red" /> <script> // This script will execute if allowed by the context alert('XSS from SVG script tag!'); // Malicious code could try to steal cookies, manipulate the DOM, etc. // console.log('Cookies:', document.cookie); </script> </svg>
```

### Rasterbildformate (Pixelbasiert)
| Format | Einsatzzweck | Transparenz | Animation | Kompression | Besonderheiten |
|-|-|-|-|-|-|
| JPG / JPEG | Fotos, Webbilder mit vielen Farben | ❌ Nein | ❌ Nein | ✅ Verlustbehaftet | Kleine Dateigröße, keine Transparenz |
| PNG | Webgrafiken, Screenshots, Logos | ✅ Ja (auch Alpha-Kanal) | ❌ Nein | ✅ Verlustfrei | Hohe Qualität, größere Dateigröße als JPG |
| GIF | Einfache Animationen, Icons | ✅ Ja (1-Bit, keine Halbtransparenz) | ✅ Ja | ✅ Verlustbehaftet | 256 Farben, alt aber beliebt für einfache Animationen| 
| WebP | Moderne Webbilder (Google) | ✅ Ja | ✅ Ja | ✅ Verlustfrei + verlustbehaftet | Besser als JPG/PNG/GIF in vielen Fällen |
| AVIF | Modernstes Webformat | ✅ Ja (inkl. Alpha-Kanal) | ✅ Ja | ✅ Sehr effizient | Noch nicht überall vollständig unterstützt
| BMP | Windows-Standard | ❌ Nein | ❌ Nein | ❌ Unkomprimiert | Veraltet, große Dateien |
| TIFF | Druck, Archivierung | ✅ Ja | ✅ Teilweise | ✅ Verlustfrei / optional verlustbehaftet | Sehr hochwertig, groß, eher für Profis |

### Vektorbildformate (Pfadbasiert)
| Format | Einsatzzweck | Transparenz | Animation | Kompression | Besonderheiten
|-|-|-|-|-|-|
| SVG | Web-Icons, Logos, Illustrationen | ✅ Ja | ✅ (per CSS/JS) | ✅ Verlustfrei (Textbasiert) | Skalierbar ohne Qualitätsverlust
| PDF | Druck, Layouts | ✅ Ja | ✅ (eingeschränkt) | ✅ Verlustfrei / Komprimiert | Komplexe Inhalte, interaktive Elemente möglich
| EPS | Druck, Vektorgrafiken | ✅ Ja | ❌ Nein | ✅ Verlustfrei | Vektor für Druck, Illustrator-kompatibel

### Empfehlungen je nach Einsatzzweck:
| Einsatzzweck | Empfohlenes Format |
|-|-|
| Fotos im Web | JPG oder WebP |
| Transparente Grafiken / Logos im Web | PNG oder SVG |
| Animationen im Web | WebP, GIF (einfach), SVG (für Vektoranimation) |
| Drucksachen (Flyer, Plakate, Broschüren) | PDF, TIFF, EPS |
| Icons / UI-Grafiken | SVG |
| Archivierung verlustfrei | PNG, TIFF, WebP (lossless), AVIF (lossless) |
