// Domain lives here; the subpath comes from `base` in astro.config.mjs so the
// two can never drift out of sync again (see the note in astro.config.mjs).
// Live at the custom domain root now — this used to be the compliance-365
// GitHub Pages staging URL.
const ORIGIN = 'https://www.2waysconsultancy.com.au';
const BASE_URL = import.meta.env.BASE_URL; // '/' at the domain root

// Real business details, ported from the live site (2waysconsultancy.com.au)
// rather than invented — see the migration PR description for sources.
export const SITE = {
  name: '2Ways Consultancy',
  title: 'Reconciliation Action Plan (RAP) Consultants | 2Ways Consultancy',
  description:
    '2Ways Consultancy helps Australian organisations plan, deliver and measure Reconciliation Action Plans (RAP), Indigenous engagement and cultural capability training. Supply Nation registered. Brisbane-based, serving Australia-wide.',
  url: `${ORIGIN}${BASE_URL}`.replace(/\/$/, ''),
  locale: 'en_AU',
  ogImage: '/og-hero.jpg',
  email: 'twowaysconsultancy@outlook.com',
  abn: '62 988 303 719',
  address: 'Brisbane, QLD 4000',
  supplyNationUrl: 'https://www.supplynation.org.au/',
  sameAs: ['https://www.supplynation.org.au/']
};