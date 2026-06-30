# Hero-sfeerbeeld (homepage)

De homepage opent met een **filmisch fotosfeerbeeld**: de hero toont
`assets/img/facade.jpg` met een langzame inzoom (Ken Burns), met de grote
titel **LEYEN Lofts.** en de call-to-action eroverheen.

## Het hero-beeld wijzigen
Vervang het bestand `assets/img/facade.jpg` door je gewenste sfeerfoto
(liggend, minimaal 1920px breed). Geen code-aanpassing nodig.

## (Optioneel) later toch een video gebruiken
Een achtergrondvideo kan, maar comprimeer hem dan eerst goed
(< 6 MB, MP4/H.264, 1920×1080). Plaats het bestand als
`assets/video/leyen-denhaag.mp4` en zet in `index.html` boven
`.hero-cine-veil` weer een video-element terug:

```html
<video class="hero-cine-video" autoplay muted loop playsinline preload="auto" aria-hidden="true">
  <source src="assets/video/leyen-denhaag.mp4" type="video/mp4">
</video>
```

De bijbehorende styling (`.hero-cine-video`) staat al klaar in `assets/style.css`.
