// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://compliance-365.github.io',
  base: '/Angelas-Website/',            // <-- IMPORTANT: trailing slash
  integrations: [
    tailwind({ applyBaseStyles: false }), // use your own global.css
    sitemap()
  ],
});
