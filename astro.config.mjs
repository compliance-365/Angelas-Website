// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// BASE_PATH is the single source of truth for the deployed subpath — set by
// .github/workflows/deploy.yml. src/config/site.ts derives SITE.url from the
// resulting `base` via import.meta.env.BASE_URL, so this is the only place
// the path needs to change. Now serving from the custom domain root rather
// than the compliance-365.github.io/Angelas-Website/ subpath — see the
// migration PR for the DNS/Pages settings side of that move.
const BASE_PATH = process.env.BASE_PATH ?? '';

export default defineConfig({
  site: 'https://www.2waysconsultancy.com.au',
  base: `${BASE_PATH}/`,
  integrations: [
    tailwind({ applyBaseStyles: false }), // use your own global.css
    sitemap()
  ],
});
