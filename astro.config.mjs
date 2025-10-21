import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// For GitHub Pages project pages, we need a base path (repo name)
const base = process.env.BASE_PATH ?? '/2ways-consultancy';

export default defineConfig({
  site: 'https://compliance-365.github.io',
  base,
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: true }), sitemap()],
  vite: { build: { sourcemap: true } },
  server: { port: 4321 }
});