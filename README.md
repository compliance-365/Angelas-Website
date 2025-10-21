# 2Ways Consultancy — Astro Scaffold

This scaffold includes:
- Services: RAP, RAP Dashboard (SharePoint), Cultural Competency Training
- Pages: Home, About, Case Studies, Contact, Privacy, Terms
- Tailwind CSS, SEO component, Open Graph defaults
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
- `astro.config.mjs` expects `BASE_PATH="/2ways-consultancy"` (set in workflow).

Resulting URL:
```
https://compliance-365.github.io/2ways-consultancy
```

If your GitHub username or repo name differs, update:
- the `BASE_PATH` env in the GitHub Action
- `SITE.url` in `src/config/site.ts`