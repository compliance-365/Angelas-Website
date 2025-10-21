import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// For GitHub Pages project pages, we need a base path (repo name)
const base = process.env.BASE_PATH ?? '/Angelas-Website';
export default defineConfig({ site: 'https://compliance-365.github.io', base, /* ... */ })

export default defineConfig({
  site: 'https://compliance-365.github.io',
  base: '/Angelas-Website/',  // <-- add the trailing slash here
});
