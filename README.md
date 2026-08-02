# 2Ways Consultancy — Astro Scaffold

This scaffold includes:
- Services: RAP, RAP Dashboard (SharePoint), Cultural Competency Training
- Pages: Home, About, Case Studies, Contact, Privacy, Terms
- Tailwind CSS, SEO meta (title/description/canonical/OG/Twitter/JSON-LD) via `BaseLayout`
- GitHub Pages workflow for project pages

## Dev
```bash
npm ci
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages
- Push to `main`. Workflow in `.github/workflows/deploy.yml` builds and deploys.
- The deployed subpath is controlled by one place only: the `BASE_PATH` env var
  in `.github/workflows/deploy.yml`, currently `/Angelas-Website`. `astro.config.mjs`
  reads it to set `base`, and `src/config/site.ts` derives `SITE.url` (used for
  canonical tags, Open Graph, JSON-LD, and `robots.txt`) from that same `base` —
  so there's nothing else to keep in sync.

Resulting URL:
```
https://compliance-365.github.io/Angelas-Website
```

If your GitHub username or repo name differs, or you move to a custom domain, update:
- the `BASE_PATH` env in the GitHub Action (or `""` for a custom domain at the root)
- `site` (the domain) in `astro.config.mjs`
- `ORIGIN` in `src/config/site.ts`