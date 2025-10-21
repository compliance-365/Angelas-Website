/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        accent: ['"Source Sans Pro"', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        brand: { DEFAULT: '#003D4D', light: '#00A3AF', contrast: '#FFFFFF' }
      }
    }
  },
  plugins: []
};