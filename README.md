# Tebrox Development Wiki

Central documentation site for Tebrox Development plugins.

The site is built with Astro and Starlight.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Documentation structure

Published documentation lives in `src/content/docs/`.

Shared writing and structure rules are documented in `docs/CONTENT_GUIDE.md`.

## Deployment

GitHub Actions builds the site and deploys it to GitHub Pages on pushes to `main`.

The current Astro configuration targets the project Pages URL. When a custom wiki domain is enabled, update `site` and remove `base: '/Wiki'` in `astro.config.mjs`.
