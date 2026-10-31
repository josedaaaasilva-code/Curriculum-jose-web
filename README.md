# Web personal · José da Silva
Visualitzar Web currículum  'https://josedaaaasilva-code.github.io/Curriculum-jose-web/'

Web de presentació professional amb **currículum** i **carta de presentació**, en **català, castellà i anglès**. Cada document té la seva pàgina, amb mode clar i fosc, i es publica a **GitHub Pages**.

## Pàgines

| | Català | Castellà | Anglès |
|---|---|---|---|
| Portada | `/` | `/es/` | `/en/` |
| Currículum | `/cv/` | `/es/cv/` | `/en/cv/` |
| Carta de presentació | `/carta/` | `/es/carta/` | `/en/carta/` |

## Posar-lo en marxa

Cal Node 20 o superior.

```bash
npm install
npm run dev      # http://localhost:3000
```

Per generar la versió publicable:

```bash
npm run build    # deixa el resultat a dist/
npm run preview  # comprova dist/ en local
```

## Publicar a GitHub Pages

1. Crea un repositori a GitHub (per exemple `web-personal`) i puja-hi aquest projecte a la branca `main`.
2. Al repositori, ves a **Settings → Pages** i tria **GitHub Actions** com a font.
3. El workflow `.github/workflows/deploy.yml` ja està preparat: a cada `push` a `main` instal·la, compila i publica el lloc.

No cal tocar la configuració de rutes: `astro.config.mjs` calcula el `base` a partir de `GITHUB_REPOSITORY`. Si el repositori es diu `elteuusuari.github.io`, el lloc es publica a l'arrel; si no, a `/nom-del-repo/`.

Si algun dia poses un domini propi, canvia `site` a `astro.config.mjs`, deixa `base` com a `/`, i afegeix un fitxer `public/CNAME` amb el domini.

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

Si canvies una dada, fes-ho als tres fitxers perquè les versions coincideixin.

Punts que val la pena revisar abans de publicar:

- **Usuari de GitHub**: `site.github` apunta a `https://github.com/josedaaaasilva-code` als tres fitxers.
- **Correu i telèfon**: surten a `site.email`, `site.phoneDisplay` i `site.phoneHref`. El telèfon no s'escriu a l'HTML fins que algú prem el botó.
- **Carta**: el text és una versió polida de la carta original, adaptada a cada idioma.

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

## Detalls tècnics

- **Astro** amb sortida estàtica: no hi ha servidor ni base de dades.
- **Idiomes**: una ruta per idioma, `lang` correcte a l'HTML i enllaços `hreflang` entre versions equivalents.
- **Tema**: clar per defecte, fosc si el sistema ho demana; la tria es desa a `localStorage`.
- **Moviment**: aparicions suaus en fer scroll, barra de progrés de lectura i un punt de disponibilitat animat. Tot es desactiva amb `prefers-reduced-motion`.
- **Accessibilitat**: enllaç per saltar al contingut, navegació amb teclat, `aria-current` a la pàgina i a l'idioma actius, taules i llistes amb estructura correcta i text alternatiu als elements decoratius.
- **Privadesa**: el telèfon s'afegeix al DOM només quan es prem el botó, per evitar recol·lectors automàtics.
- **Sense dependències de tercers** més enllà d'Astro i dels tipus de lletra de Google Fonts.
