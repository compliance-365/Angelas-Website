/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        heading: ['Raleway', 'system-ui', 'sans-serif'],
        nav: ['Poppins', 'system-ui', 'sans-serif']
      },
      colors: {
        // Matches the live site's palette (assets/css/main.css) so this is a
        // platform migration, not a re-brand.
        brand: { DEFAULT: '#0D1B2A', light: '#FFC451', contrast: '#FFFFFF' },
        surface: '#1B263B',
        ink: '#EDEDED'
      }
    }
  },
  plugins: []
};