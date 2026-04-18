# Bikersenzameta — Sito ufficiale (restyle)

Restyle completo del sito [bikersenzameta.it](https://www.bikersenzameta.it/). Negozio di abbigliamento e attrezzatura moto a Marostica (VI): mondo strada (Bikersenzameta) e mondo offroad/MTB (Senzameta Offroad).

## Stack

- **Vite** — bundler veloce, HMR istantaneo
- **React 18** — componenti e stato
- **Tailwind CSS 3** — design system utility-first
- **JavaScript (JSX)** — zero config extra, build veloce

## Struttura

```
bikersenzameta/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # menu sticky responsive
│   │   ├── Hero.jsx        # hero "Due mondi, una passione"
│   │   ├── About.jsx       # chi siamo
│   │   ├── TwoWorlds.jsx   # mondo strada + mondo offroad
│   │   ├── Brands.jsx      # griglia marchi con tab
│   │   ├── Services.jsx    # cosa offriamo
│   │   ├── Contact.jsx     # mappa + contatti + orari
│   │   └── Footer.jsx
│   ├── data/
│   │   └── brands.js       # marchi, servizi, contatti
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # tailwind + custom base/components
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Setup

```bash
npm install
npm run dev        # dev server su http://localhost:5173
npm run build      # build produzione in dist/
npm run preview    # preview build locale
```

## Design

- **Palette**: asfalto (nero/grigio scuri) + accenti racing (arancio `#ff5a1f`) e trail (lime `#84cc16`)
- **Font display**: Bebas Neue (titoli impattanti)
- **Font corpo**: Inter
- **Dark-first**, responsive, mobile-optimized

## Contenuti fedeli al negozio

- Indirizzo: Via Montello 80/A, 36063 Marostica (VI)
- Telefono: 0424 1909358
- Orari: lun 15:00-19:30; mar-sab 09:00-12:30 / 15:00-19:30; dom chiuso
- Marchi strada: REV'IT, SPIDI, NOLAN, SHARK, SCORPION, CABERG, AIROH, SIDI, XPD, BERING
- Marchi offroad/MTB: FOX, LEATT, SIDI, AIROH, 5TEN, SCOTT, ZANDONÀ, Troy Lee Designs
- Accessori: MIDLAND, SHAD, OPTILINE, OJ, KEDRA-T, BUFF, LAMPA

## Deploy

Static build → pubblica `dist/` su:
- Netlify (drag&drop)
- Vercel (`vercel` CLI)
- GitHub Pages
- Cloudflare Pages

Nessun backend necessario.

## TODO (consigliato)

- [ ] Foto vere del negozio al posto dei placeholder Unsplash in `Hero.jsx` e `TwoWorlds.jsx`
- [ ] Logo ufficiale al posto della "B" arancione
- [ ] Email ufficiale al posto del placeholder `info@bikersenzameta.it`
- [ ] P.IVA nel Footer
- [ ] Verificare URL social (in `src/data/brands.js`)
- [ ] Eventuale e-commerce Shopify/WooCommerce se serve vendita online
