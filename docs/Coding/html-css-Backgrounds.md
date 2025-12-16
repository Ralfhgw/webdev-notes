---
id: html-css-backgrounds
title: CSS — Backgrounds & Gradients
---

## CSS Background Properties

CSS bietet vielfältige Möglichkeiten, Hintergründe zu gestalten — von einfachen Farben über Bilder bis hin zu komplexen Gradienten.

---

## 1. Grundlegende Background-Properties

### background-color
```css
.box {
  background-color: #3498db;
  background-color: rgb(52, 152, 219);
  background-color: rgba(52, 152, 219, 0.5); /* Mit Transparenz */
  background-color: hsl(204, 70%, 53%);
}
```

### background-image
```css
.box {
  background-image: url("bild.jpg");
  
  /* Mehrere Bilder (erstes oben) */
  background-image: url("overlay.png"), url("bild.jpg");
}
```

### background-size
```css
.box {
  background-size: cover;        /* Füllt Container, behält Seitenverhältnis */
  background-size: contain;      /* Passt komplett hinein */
  background-size: 200px 100px;  /* Feste Größe */
  background-size: 50% auto;     /* Prozentual */
}
```

### background-position
```css
.box {
  background-position: center;
  background-position: top right;
  background-position: 50% 50%;
  background-position: 20px 40px;
}
```

### background-repeat
```css
.box {
  background-repeat: no-repeat;   /* Einmal */
  background-repeat: repeat;      /* Kacheln (Standard) */
  background-repeat: repeat-x;    /* Nur horizontal */
  background-repeat: repeat-y;    /* Nur vertikal */
}
```

### background-attachment
```css
.box {
  background-attachment: fixed;   /* Bleibt beim Scrollen fixiert */
  background-attachment: scroll;  /* Scrollt mit (Standard) */
  background-attachment: local;   /* Scrollt mit Inhalt */
}
```

### Kurzschreibweise (background)
```css
.box {
  background: #3498db url("bild.jpg") center/cover no-repeat fixed;
  /*          Farbe  URL              Position/Size Repeat  Attach */
}
```

---

## 2. Linear Gradients

Farbübergang in eine Richtung.

### Einfacher horizontaler Gradient
```css
.gradient-01 {
  background: linear-gradient(to right, red, yellow);
  /* Alternative: */
  background: linear-gradient(90deg, red, yellow);
}
```

### Richtungen
```css
/* Nach unten (Standard) */
background: linear-gradient(red, yellow);

/* Nach rechts */
background: linear-gradient(to right, red, yellow);

/* Diagonal */
background: linear-gradient(to bottom right, red, yellow);

/* Mit Winkel */
background: linear-gradient(45deg, red, yellow);
background: linear-gradient(135deg, red, yellow);
```

### Mehrere Farben mit Positionen
```css
.gradient-02 {
  background: linear-gradient(
    90deg,
    red 0%,
    yellow 25%,
    green 50%,
    blue 75%,
    purple 100%
  );
}
```

### Mit Transparenz
```css
.gradient-03 {
  background: linear-gradient(
    90deg,
    rgba(255, 0, 0, 0.8),
    rgba(0, 0, 255, 0.2)
  );
}
```

### Kombiniert mit Bild
```css
.gradient-04 {
  background: 
    linear-gradient(45deg, rgba(246, 246, 247, 0.8), rgba(1, 19, 1, 0.5)),
    url("swirl.png") center/cover no-repeat;
}
```

---

## 3. Radial Gradients

Kreisförmiger oder elliptischer Farbverlauf.

### Einfacher radialer Gradient
```css
.radial-01 {
  background: radial-gradient(circle, red, yellow, green);
}
```

### Ellipse (Standard)
```css
.radial-02 {
  background: radial-gradient(ellipse, red, yellow, green);
}
```

### Position & Größe steuern
```css
.radial-03 {
  /* Ellipse, am weitesten entfernte Ecke, Position bei 20% 40% */
  background: radial-gradient(
    ellipse farthest-corner at 20% 40%,
    red,
    yellow,
    green
  );
}
```

**Größen-Keywords:**
- `closest-side` — Zum nächsten Rand
- `farthest-side` — Zum weitesten Rand
- `closest-corner` — Zur nächsten Ecke
- `farthest-corner` — Zur weitesten Ecke (Standard)

```css
.radial-04 {
  background: radial-gradient(
    circle closest-side at 30% 50%,
    yellow,
    orange,
    red
  );
}
```

---

## 4. Conic Gradients

Gradient entlang eines Kreises (wie Tortendiagramm).

### Einfacher konischer Gradient
```css
.conic-01 {
  background: conic-gradient(red, yellow, green, blue, red);
}
```

### Mit Winkelangaben
```css
.conic-02 {
  background: conic-gradient(
    red 0deg 120deg,
    yellow 120deg 180deg,
    lime 180deg 270deg,
    cyan 270deg 360deg
  );
}
```

### Startposition verschieben
```css
.conic-03 {
  background: conic-gradient(from 45deg, red, yellow, green, blue, red);
}
```

### Farbrad
```css
.color-wheel {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: conic-gradient(
    red, yellow, lime, cyan, blue, magenta, red
  );
}
```

---

## 5. Repeating Gradients

Wiederholende Muster.

### Repeating Linear Gradient
```css
.stripes {
  background: repeating-linear-gradient(
    45deg,
    red,
    red 10px,
    yellow 10px,
    yellow 20px
  );
}
```

**Anwendungsbeispiele:**
```css
/* Diagonale Streifen */
.diagonal-stripes {
  background: repeating-linear-gradient(
    45deg,
    #606dbc,
    #606dbc 10px,
    #465298 10px,
    #465298 20px
  );
}

/* Vertikale Linien */
.vertical-lines {
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 10px,
    rgba(0, 0, 0, 0.1) 10px,
    rgba(0, 0, 0, 0.1) 11px
  );
}
```

### Repeating Radial Gradient
```css
.concentric-circles {
  background: repeating-radial-gradient(
    circle,
    red,
    red 20px,
    yellow 20px,
    yellow 40px
  );
}
```

### Repeating Conic Gradient
```css
.spinning-pattern {
  background: repeating-conic-gradient(
    #00ff00 0deg 15deg,
    #0000ff 15deg 30deg
  );
  border-radius: 50%;
}
```

---

## 6. Vollständiges Beispiel mit Animationen

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CSS Background Showcase</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      padding: 2rem;
      background: #f5f5f5;
    }

    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .box {
      width: 200px;
      height: 200px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    h3 {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      color: #666;
    }

    /* 1. Linear Gradient */
    .gradient-linear {
      background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    }

    /* 2. Linear mit Bild */
    .gradient-image {
      background: 
        linear-gradient(45deg, rgba(246, 246, 247, 0.8), rgba(1, 19, 1, 0.5)),
        url("https://picsum.photos/200") center/cover no-repeat;
    }

    /* 3. Radial Gradient */
    .gradient-radial {
      background: radial-gradient(circle, #ff6b6b, #feca57, #48dbfb);
    }

    /* 4. Radial positioniert */
    .gradient-radial-positioned {
      background: radial-gradient(
        ellipse farthest-corner at 20% 40%,
        #ee0979,
        #ff6a00
      );
    }

    /* 5. Conic Gradient */
    .gradient-conic {
      background: conic-gradient(
        #ff6b6b 0deg 90deg,
        #feca57 90deg 180deg,
        #48dbfb 180deg 270deg,
        #5f27cd 270deg 360deg
      );
    }

    /* 6. Repeating Linear */
    .gradient-repeating-linear {
      background: repeating-linear-gradient(
        45deg,
        #667eea,
        #667eea 10px,
        #764ba2 10px,
        #764ba2 20px
      );
    }

    /* 7. Animierter Spinning Conic */
    .gradient-spinning {
      height: 200px;
      border-radius: 50%;
      background: repeating-conic-gradient(
        #00d2ff 0deg 15deg,
        #3a47d5 15deg 30deg
      );
      mask-image: radial-gradient(
        circle,
        black 30%,
        transparent 100%
      );
      animation: spin 5s linear infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg) scale(0.8);
      }
      to {
        transform: rotate(360deg) scale(1);
      }
    }

    /* 8. Rotierendes Bild */
    .image-rotating {
      height: 200px;
      background: url("https://picsum.photos/200") center/cover no-repeat;
      animation: rotate 10s linear infinite;
      border-radius: 50%;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    /* 9. Animierter Gradient */
    .gradient-animated {
      background: linear-gradient(
        45deg,
        #667eea,
        #764ba2,
        #f093fb,
        #4facfe
      );
      background-size: 400% 400%;
      animation: gradient-shift 8s ease infinite;
    }

    @keyframes gradient-shift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    /* 10. Mesh Gradient */
    .gradient-mesh {
      background: 
        radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
        radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
        radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
        radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
        radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
        radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
        radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
    }
  </style>
</head>
<body>
  <h1>CSS Background Showcase</h1>

  <div class="container">
    <div>
      <div class="box gradient-linear"></div>
      <h3>Linear Gradient</h3>
    </div>

    <div>
      <div class="box gradient-image"></div>
      <h3>Gradient + Image</h3>
    </div>

    <div>
      <div class="box gradient-radial"></div>
      <h3>Radial Gradient</h3>
    </div>

    <div>
      <div class="box gradient-radial-positioned"></div>
      <h3>Radial Positioned</h3>
    </div>

    <div>
      <div class="box gradient-conic"></div>
      <h3>Conic Gradient</h3>
    </div>

    <div>
      <div class="box gradient-repeating-linear"></div>
      <h3>Repeating Linear</h3>
    </div>

    <div>
      <div class="box gradient-spinning"></div>
      <h3>Spinning Conic</h3>
    </div>

    <div>
      <div class="box image-rotating"></div>
      <h3>Rotating Image</h3>
    </div>

    <div>
      <div class="box gradient-animated"></div>
      <h3>Animated Gradient</h3>
    </div>

    <div>
      <div class="box gradient-mesh"></div>
      <h3>Mesh Gradient</h3>
    </div>
  </div>
</body>
</html>
```

---

## 7. Praktische Anwendungen

### Glassmorphism-Effekt
```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

### Text-Gradient
```css
.gradient-text {
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 3rem;
  font-weight: bold;
}
```

### Button mit Hover-Gradient
```css
.gradient-button {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.gradient-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
}
```

### Loading Skeleton
```css
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
```

---

## 8. Browser-Kompatibilität & Prefixes

Moderne Gradients werden von allen aktuellen Browsern unterstützt. Für ältere Browser:

```css
.box {
  background: #667eea; /* Fallback */
  background: -webkit-linear-gradient(45deg, #667eea, #764ba2); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(45deg, #667eea, #764ba2); /* Standard */
}
```

---

## 9. Tools & Generatoren

- [CSS Gradient Generator](https://cssgradient.io/)
- [uiGradients](https://uigradients.com/)
- [Gradient Hunt](https://gradienthunt.com/)
- [Mesh Gradient Generator](https://meshgradient.com/)
- [Coolors Gradient Maker](https://coolors.co/gradient-maker)

---

## Weiterführende Ressourcen

- [MDN — CSS Backgrounds](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders)
- [MDN — CSS Gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- [CSS-Tricks — CSS Gradients](https://css-tricks.com/css3-gradients/)