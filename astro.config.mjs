// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// BASE_PATH is the single source of truth for the deployed subpath — set by
// .github/workflows/deploy.yml. src/config/site.ts derives SITE.url from the
// resulting `base` via import.meta.env.BASE_URL, so this is the only place
// the path needs to change (e.g. when moving to a custom domain, set
// BASE_PATH="" and update `site` below).
const BASE_PATH = process.env.BASE_PATH || '/Angelas-Website';

export default defineConfig({
  site: 'https://compliance-365.github.io',
  base: `${BASE_PATH}/`,
  integrations: [
    tailwind({ applyBaseStyles: false }), // use your own global.css
    sitemap()
  ],
});
