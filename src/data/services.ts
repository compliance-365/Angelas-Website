// Single source of truth for the service list, so the header menu, footer and
// homepage grid cannot drift apart as services are added or repositioned.
//
// `icon` values must exist in components/Icon.astro.

export type Service = {
  name: string;
  /** Shorter label for dense contexts like nav menus. */
  navLabel: string;
  href: string;
  icon: string;
  blurb: string;
  /** RAP-adjacent services are grouped separately in the nav. */
  group: 'rap' | 'related';
  featured?: boolean;
};

export const SERVICES: Service[] = [
  {
    name: 'Reconciliation Action Plans',
    navLabel: 'RAP consulting overview',
    href: 'services/rap/',
    icon: 'doc',
    blurb:
      'End-to-end RAP development across all four types, from scoping through Reconciliation Australia submission and implementation support.',
    group: 'rap',
    featured: true
  },
  {
    name: 'RAP Health Check',
    navLabel: 'RAP Health Check',
    href: 'services/rap-health-check/',
    icon: 'compass',
    blurb:
      'A two to three week independent review of an existing RAP — what has been delivered, what can be evidenced, and whether you are ready to renew.',
    group: 'rap'
  },
  {
    name: 'Cultural Awareness Training',
    navLabel: 'Cultural Awareness Training',
    href: 'services/cultural-awareness-training/',
    icon: 'users',
    blurb:
      'Cultural awareness, capability and safety training delivered by Indigenous facilitators, in person and online across Australia.',
    group: 'related'
  },
  {
    name: 'Indigenous Procurement',
    navLabel: 'Indigenous Procurement',
    href: 'services/indigenous-procurement/',
    icon: 'scale',
    blurb:
      'Procurement strategy, supplier verification and spend reporting — including readiness for the 2026 ownership threshold change.',
    group: 'related'
  },
  {
    name: 'Employment & Workplace',
    navLabel: 'Employment & Workplace',
    href: 'services/employment-workplace/',
    icon: 'handshake',
    blurb:
      'Building culturally safe workplaces that attract, support and retain Aboriginal and Torres Strait Islander staff.',
    group: 'related'
  },
  {
    name: 'Monitoring & Evaluation',
    navLabel: 'Monitoring & Evaluation',
    href: 'services/monitoring-evaluation/',
    icon: 'chart',
    blurb:
      'Evidence frameworks that show whether your commitments are actually delivering measurable change.',
    group: 'related'
  },
  {
    name: 'Indigenous Engagement Strategy',
    navLabel: 'Indigenous Engagement Strategy',
    href: 'services/business-strategic/',
    icon: 'target',
    blurb:
      'Engagement strategy, cultural policy review and pre-RAP groundwork for organisations not yet using the formal framework.',
    group: 'related'
  },
  {
    name: 'Inclusive Practice & Community Programs',
    navLabel: 'Inclusive Practice & Community',
    href: 'services/diversity-inclusion/',
    icon: 'spark',
    blurb:
      'Culturally safe service delivery and community program design, for organisations serving Aboriginal and Torres Strait Islander clients.',
    group: 'related'
  }
];

export const RAP_SERVICES = SERVICES.filter((s) => s.group === 'rap');
export const RELATED_SERVICES = SERVICES.filter((s) => s.group === 'related');
