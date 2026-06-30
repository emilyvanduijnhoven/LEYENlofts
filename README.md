# LEYEN Lofts — website

Editorial vastgoed-website voor **LEYEN Lofts** — een gecureerde collectie van veertig
woningen in Leyenburg, Den Haag-Zuid, vrijgegeven *drop voor drop*.

Statische site (HTML + CSS + een beetje vanilla JavaScript). Geen build-stap nodig:
open `index.html` in de browser of host de map op elke statische webserver.

## Structuur

```
index.html              Home
omgeving.html           Omgeving — de buurt Leyenburg
aanbod.html             Aanbod — beschikbare woningen (Drop 01)
woningzoeker.html       Woningzoeker — interactief filter (type, slaapkamers, status, prijs)
verkoopinformatie.html  Verkoopinformatie — proces, prijzen, documenten, FAQ
community.html          Community — bewoners, gedeelde ruimtes, LEYEN PAPER
nieuws.html             Nieuws — LEYEN PAPER feed
interesse.html          Interesse — inschrijven / "kom op de lijst"
inloggen.html           Inloggen — bewonersportaal (nog zonder backend)
assets/
  style.css             Volledige huisstijl / design system
  script.js             Menu, woningzoeker-filter, FAQ-accordion, formulieren
  img/                  Foto's
```

## Huisstijl

- **Kleur:** zand `#EEE9DD` / bone `#E6DFD0` (achtergrond), ink `#1F1F1D` (tekst),
  roest `#D9A05C` (accent), groen `#6F7D49` (diepte). Alles in `:root` in `style.css`.
- **Type:** Archivo (display, 900 voor koppen) + Instrument Serif *italic* voor accenten
  zoals "Lofts." en cursieve woorden.
- **Toon:** Bold, Editorial, International, Scarce, Collected.

## Foto's vervangen

Afbeeldingen worden via semantische CSS-klassen geplaatst en centraal bepaald in
`assets/style.css` (`--p-living`, `--p-kitchen`, enz.). Om een echte foto te plaatsen:
zet het bestand onder de bijbehorende naam in `assets/img/` — de site pakt het meteen op.

| Bestand | Gebruikt voor |
|---|---|
| `living.jpg`, `living2.jpg` | woonkamers |
| `kitchen.jpg` | keuken |
| `bed.jpg` | slaapkamer |
| `studio.jpg` | studio |
| `bathroom.jpg` | badkamer |
| `gym.jpg` | fitness |
| `rooftop.jpg` | dakterras |
| `facade.jpg` | gevel / gebouw |

> Let op: `living.jpg`, `kitchen.jpg`, `bed.jpg` en `gym.jpg` komen uit de oorspronkelijke
> demo. De overige zijn voorlopige kopieën (placeholders) en worden vervangen zodra de
> echte foto's als bestand zijn aangeleverd.

## Nog te doen / mogelijke vervolgstappen

- Echte foto's plaatsen (gevel, dakterras, badkamer, studio).
- Formulieren koppelen aan een backend / e-mailservice (nu demo, geen verzending).
- Echte authenticatie voor het bewonersportaal.
- EN-vertaling achter de NL/EN-schakelaar.
