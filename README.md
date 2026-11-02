# Web personal · José da Silva
Visualitzar Web currículum  'https://josedaaaasilva-code.github.io/Curriculum-jose-web/'

Web de presentació professional amb **currículum** i **carta de presentació**, en **català, castellà i anglès**. Cada document té la seva pàgina, amb mode clar i fosc, i es publica a **GitHub Pages**.

## Pàgines

| | Català | Castellà | Anglès |
|---|---|---|---|
| Portada | `/` | `/es/` | `/en/` |
| Currículum | `/cv/` | `/es/cv/` | `/en/cv/` |
| Carta de presentació | `/carta/` | `/es/carta/` | `/en/carta/` |


## On es canvia el contingut

Tots els textos són en tres fitxers, un per idioma:

```
src/content/ca.ts   # català (idioma principal)
src/content/es.ts   # castellà
src/content/en.ts   # anglès
```

Cada fitxer segueix el mateix model, definit a `src/content/types.ts`. Els blocs principals són:

- `site`: dades personals (nom, correu, telèfon, GitHub, ubicació i disponibilitat).
- `hero`: text de la portada i fitxa de dades.
- `home`: textos de la portada, targetes de documents i punts forts.
- `meta`, `profile`, `experience`, `education`, `skills`, `projects`, `languages`, `contact`: el currículum.
- `letter`: la carta de presentació (salutació, paràgrafs, comiat i signatura).



## Descarregar el CV en PDF

El botó «Descarrega el CV (PDF)» obre el diàleg d'impressió del navegador. Trieu **Desa com a PDF**. Els fulls d'estil d'impressió són a la part final de `src/styles/global.css`.

## Estructura

```
src/
  components/     capçalera, peu, seccions, portada, currículum i carta
  content/        contingut en català, castellà i anglès + tipus
  layouts/        plantilla HTML comuna (SEO, tema, accessibilitat)
  lib/paths.ts    rutes que respecten el base de GitHub Pages
  pages/          /, /cv/, /carta/ i les versions /[lang]/...
  styles/         full d'estil únic
public/           favicon
```

- **Privadesa**: el telèfon s'afegeix al DOM només quan es prem el botó, per evitar recol·lectors automàtics.
- **Sense dependències de tercers** més enllà d'Astro i dels tipus de lletra de Google Fonts.
