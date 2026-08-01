// Domain lives here; the subpath comes from `base` in astro.config.mjs so the
// two can never drift out of sync again (see the note in astro.config.mjs).
const ORIGIN = 'https://compliance-365.github.io';
const BASE_URL = import.meta.env.BASE_URL; // e.g. '/Angelas-Website/'

export const SITE = {
  name: '2Ways Consultancy',
  title: 'Reconciliation Action Plan (RAP) Consultants | 2Ways Consultancy',
  description:
    'Supply Nation registered consultancy helping Australian organisations plan, deliver and measure RAPs, Indigenous engagement and cultural capability training. Brisbane-based, serving Australia-wide.',
  url: `${ORIGIN}${BASE_URL}`.replace(/\/$/, ''),
  locale: 'en_AU',
  ogImage: '/og-hero.jpg',
  email: 'hello@2waysconsultancy.com.au'
};