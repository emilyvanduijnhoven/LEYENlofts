# Hero-video — sfeerbeeld Den Haag

De homepage heeft een filmische hero die een **achtergrondvideo** afspeelt.

## Video toevoegen
Plaats hier één bestand met exact deze naam:

```
assets/video/leyen-denhaag.mp4
```

De video start dan automatisch, zonder geluid, en herhaalt zich (loop).
De grote titel **LEYEN Lofts.** en de call-to-action blijven er overheen staan.

## Aanbevelingen
- **Inhoud:** rustig sfeerbeeld van Den Haag / Leyenburg (skyline, straatbeeld,
  Zuiderpark, het complex). Cinematisch, niet druk.
- **Duur:** 10–25 sec, naadloze loop.
- **Formaat:** MP4 (H.264), liggend 16:9, 1920×1080.
- **Bestandsgrootte:** comprimeer tot < 6 MB voor snelle laadtijd
  (bijv. via HandBrake of `ffmpeg -vf scale=1920:-2 -b:v 2500k`).

## Zolang er nog geen video staat
Dan toont de hero automatisch een langzaam inzoomend foto-sfeerbeeld
(`assets/img/facade.jpg`). Er hoeft dus niets te breken — je kunt de video
later toevoegen zonder de code aan te passen.
