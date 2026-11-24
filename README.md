# Sozo Izakaya \u2013 Versova

A premium, fully responsive **front-end-only** restaurant website for **Sozo Izakaya**, a
Japanese izakaya in Versova, Andheri West, Mumbai. Built as a concept demo with React,
Vite, Tailwind CSS v4, React Router, Framer Motion and Lucide icons.

> **Honesty note** \u2014 this is a demonstration website. All dishes, prices, opening
> hours and individual reviews are **illustrative sample data**, clearly labelled in
> the UI. The reservation form is a front-end demo: it validates input and shows a
> sample confirmation, but **no real booking or payment is made**. The supplied
> facts (name, address, phone, Google rating of 4.2/5 \u00b7 473 reviews, price range
> \u20b9400\u2013\u20b91,600 per person) are used as provided.

## Pages

| Route           | Content                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| `/`             | Full-screen hero, intro, signature bento grid, menu categories, gallery strip, ambience, reviews, location |
| `/about`        | Restaurant intro, the izakaya concept (\u5c45\u9152\u5c4b), service pillars, an evening's flow, CTA band         |
| `/menu`         | Interactive menu: 8 categories, 48 sample dishes, category filters, live search, veg/non-veg marks         |
| `/gallery`      | Filterable photo grid with an accessible lightbox (keyboard navigation)                                    |
| `/reservations` | Validated reservation form with animated demo confirmation                                                 |
| `/contact`      | Address, tap-to-call, hours with verify note, embedded Google Map, social links                            |
| `*`             | Styled 404 page                                                                                            |

## Tech stack

- **React 19 + TypeScript** (a typed superset of JavaScript ES6+)
- **Vite 7** \u2014 dev server and production build
- **Tailwind CSS v4** \u2014 theme tokens and utilities declared in `src/styles/index.css`
- **React Router 7** \u2014 client-side routing (`vercel.json` adds SPA rewrites)
- **Framer Motion 12** \u2014 scroll reveals, page interactions, lightbox, mobile menu
- **Lucide React** \u2014 icon set
- Fonts: Cormorant Garamond (display), Manrope (body), Noto Serif JP (Japanese accents)

## Project structure

```
├── index.html                  \u2014 meta, fonts, favicon
├── vercel.json                 \u2014 SPA rewrite rules
├── public/
│   ├── favicon.svg             \u2014 ens\u014d brand mark
│   └── images/                 \u2014 licensed stock + AI-generated demo photography (optimised)
└── src/
    ├── main.tsx                 \u2014 entry point
    ├── App.tsx                  \u2014 router definition
    ├── assets/enso.svg          \u2014 brand asset
    ├── styles/index.css         \u2014 Tailwind v4 theme, base styles, custom utilities
    ├── lib/motion.ts            \u2014 shared animation easing
    ├── hooks/useScrolled.ts     \u2014 scroll-position hook
    ├── data/                    \u2014 site config, menu, reviews, gallery (sample data)
    ├── components/              \u2014 Navbar, Footer, Button, DishCard, Lightbox, \u2026
    ├── sections/                \u2014 homepage sections (Hero, Intro, Signature, \u2026)
    ├── layouts/SiteLayout.tsx   \u2014 shared chrome (navbar / outlet / footer)
    └── pages/                   \u2014 Home, About, MenuPage, Reservations, GalleryPage, Contact, NotFound
```

## Getting started

```bash
npm install        # install dependencies
npm run dev        # start the dev server
npm run build      # type-check + production build
npm run preview    # preview the production build locally
```

## Accessibility & performance

- Semantic landmarks (`header`, `nav`, `main`, `footer`, `address`), labelled controls
- Keyboard-navigable lightbox (Esc / arrow keys) and focus-visible outlines
- `prefers-reduced-motion` respected (marquee + reveals)
- Lazy-loaded images, descriptive alt text, optimised photography (~2.8 MB total)
- No backend, database, authentication or payment logic \u2014 100% static front end
