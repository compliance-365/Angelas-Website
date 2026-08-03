// ILLUSTRATIVE COMPOSITES — NOT REAL CLIENT WORK.
//
// These describe what a typical engagement of each shape involves. They are
// composites built from common patterns in RAP delivery, not accounts of
// specific client engagements, and they deliberately contain:
//   - no organisation names
//   - no quotes attributed to any person
//   - no outcome figures presented as measured results
//
// Every surface that renders these MUST show DISCLAIMER prominently. When real
// client case studies become available (with written permission), replace
// these entries wholesale rather than mixing real and illustrative — a page
// that blends both is the one that misleads.

export const DISCLAIMER =
  'Illustrative example. This describes what an engagement of this type typically involves, drawn from common patterns in RAP delivery. It is not an account of a specific client engagement, and no figures shown are measured client results.';

export type CaseStudy = {
  slug: string;
  /** Sector-level descriptor used in place of an organisation name. */
  client: string;
  size: string;
  title: string;
  summary: string;
  metaDescription: string;
  scenario: string;
  situation: string[];
  approach: { phase: string; body: string }[];
  outcomes: string[];
  lessons: string[];
  relatedService: { label: string; href: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'first-reflect-rap-government-agency',
    client: 'State government agency',
    size: '600+ staff',
    title: 'Starting from nothing: a first Reflect RAP',
    summary:
      'Leadership had committed publicly to a RAP, but nobody internally had run one before and no relationships existed with local Aboriginal organisations. The work was mostly about slowing down.',
    metaDescription:
      'An illustrative example of developing a first Reflect RAP for a state government agency with no prior reconciliation work — scoping, first relationships, and building governance that survives.',
    scenario: 'No prior RAP · Reflect',
    situation: [
      'An executive commitment had been made publicly, creating a deadline before any groundwork existed',
      'No existing relationships with Traditional Owner groups or Aboriginal and Torres Strait Islander organisations in the regions of operation',
      'An internal assumption that an Innovate RAP was achievable because a peer agency had one',
      'Cultural awareness training had reached a small pilot group only',
      'No baseline data on Indigenous employment or supplier spend'
    ],
    approach: [
      {
        phase: 'Readiness',
        body: 'The readiness assessment did not support an Innovate RAP. The recommendation was Reflect, with the reasoning documented so it could be taken to the executive as evidence rather than opinion. This conversation is often the hardest part of the engagement.'
      },
      {
        phase: 'Foundation',
        body: 'A RAP Working Group was established with terms of reference, a named executive sponsor and a standing meeting in the governance calendar. Baseline workforce and procurement data was collected — which itself surfaced that Indigenous supplier spend had never been separately tracked.'
      },
      {
        phase: 'Engagement',
        body: 'Traditional Owner groups and Aboriginal community organisations were identified for each region of operation and approached at a pace the relationships set, rather than to fit the drafting schedule. Several early conversations were introductory only, with no organisational ask attached.'
      },
      {
        phase: 'Design',
        body: 'The draft was deliberately short. Around fifteen actions, each with a named owner and a defined measure, replaced an initial internal wish list of more than forty. Actions that nobody could explain how to deliver were removed rather than softened.'
      },
      {
        phase: 'Endorsement',
        body: 'A pre-submission review against Reconciliation Australia’s expectations identified gaps in the governance section, which were closed before submitting rather than in response to feedback.'
      }
    ],
    outcomes: [
      'A Reflect RAP developed and submitted, with a working group operating on a standing cadence',
      'Baseline data established for Indigenous employment and supplier spend where none previously existed',
      'Continuing relationships with named Aboriginal organisations, each with an agreed next contact',
      'A realistic path mapped toward an Innovate RAP at the end of the term'
    ],
    lessons: [
      'A public commitment made before any groundwork exists creates schedule pressure that pushes organisations toward the wrong RAP type.',
      'Fifteen deliverable actions are worth more than forty aspirational ones, and are considerably easier to report on.',
      'Baseline data collection is unglamorous and frequently deferred, but without it no future RAP can demonstrate progress.'
    ],
    relatedService: { label: 'Reflect RAP', href: 'services/rap/reflect/' }
  },
  {
    slug: 'stalled-innovate-rap-recovery',
    client: 'Utilities provider',
    size: '1,200+ staff',
    title: 'Recovering a stalled Innovate RAP',
    summary:
      'Eighteen months into a two-year Innovate RAP, the working group had stopped meeting and nobody could say what had been delivered. The first task was establishing what was actually true.',
    metaDescription:
      'An illustrative example of recovering a stalled Innovate RAP — reconstructing evidence, re-establishing governance, and deciding honestly whether to progress or repeat the RAP type.',
    scenario: 'Stalled RAP · Innovate',
    situation: [
      'The RAP had launched with strong visibility, then received no executive attention for over a year',
      'The working group had lost its executive sponsor to a restructure and quietly stopped meeting',
      'Some commitments had genuinely been delivered, but nothing had been recorded at the time',
      'Renewal was approaching with no clear picture of what could be reported',
      'Internal appetite to progress to a Stretch RAP, driven by reputational rather than delivery considerations'
    ],
    approach: [
      {
        phase: 'Assessment',
        body: 'The engagement started with a RAP health check rather than planning: going action by action to establish what had been delivered, what could still be evidenced, and what had quietly lapsed. Roughly a third of commitments had been delivered without documentation.'
      },
      {
        phase: 'Evidence reconstruction',
        body: 'Where delivery had genuinely occurred, evidence was reconstructed from calendars, invoices, HR records and email — possible, but far more expensive than capturing it at the time would have been.'
      },
      {
        phase: 'Governance reset',
        body: 'A new executive sponsor was appointed with the role written into their performance measures rather than added informally. Terms of reference were rewritten to specify decision rights, and RAP accountability was distributed into business unit position descriptions.'
      },
      {
        phase: 'Honest reassessment',
        body: 'The recommendation was to repeat Innovate rather than progress to Stretch. The delivery track record did not support a Stretch submission, and committing to three years of measurable targets on an unstable foundation would have repeated the same failure at greater cost.'
      },
      {
        phase: 'Evidence system',
        body: 'An evidence capture method was designed against each commitment before the next term began, so that reporting would draw on an existing record rather than another reconstruction.'
      }
    ],
    outcomes: [
      'A defensible account of what the previous RAP term actually delivered',
      'Governance re-established with accountability embedded in performance measures rather than goodwill',
      'A second Innovate RAP pursued deliberately, rather than an over-reaching Stretch submission',
      'Evidence capture designed in advance for the new term'
    ],
    lessons: [
      'A RAP surviving a restructure depends on accountability sitting in position descriptions, not in the enthusiasm of particular individuals.',
      'Reconstructing evidence after the fact is possible and expensive; capturing it as you go costs almost nothing.',
      'Repeating a RAP type is permitted and is frequently the more credible choice — the framework is not a ladder you are penalised for climbing slowly.'
    ],
    relatedService: { label: 'RAP Health Check', href: 'services/rap-health-check/' }
  },
  {
    slug: 'procurement-led-stretch-rap',
    client: 'Professional services firm',
    size: '300+ staff',
    title: 'Building a procurement-led Stretch RAP',
    summary:
      'A firm with a well-delivered Innovate RAP needed to progress to Stretch, with Indigenous procurement as the centre of gravity ahead of the 2026 IPP threshold change.',
    metaDescription:
      'An illustrative example of progressing from an Innovate to a Stretch RAP with Indigenous procurement at its centre, including preparation for the 1 July 2026 ownership threshold change.',
    scenario: 'Progressing · Innovate to Stretch',
    situation: [
      'A genuinely well-delivered Innovate RAP with evidence captured throughout the term',
      'Government client contracts increasingly asking for demonstrable Indigenous procurement performance',
      'The 1 July 2026 change to a 51% First Nations ownership threshold approaching, with existing suppliers verified under the previous threshold',
      'Supplier spend tracked as a single annual figure, not by category or business unit',
      'No Aboriginal or Torres Strait Islander representation in senior leadership'
    ],
    approach: [
      {
        phase: 'Readiness',
        body: 'The Innovate outcomes did support a Stretch submission — an assessment that is not always favourable, and is worth doing honestly either way. Procurement was identified as the area of greatest genuine leverage given the firm’s spend profile and client base.'
      },
      {
        phase: 'Supplier re-verification',
        body: 'The existing Indigenous supplier list was re-verified against the incoming 51% ownership threshold rather than assuming prior verification would carry forward. A process was established for periodic re-verification rather than one-off checking.'
      },
      {
        phase: 'Measurement design',
        body: 'Spend tracking was rebuilt to report by category and business unit, not as a single annual number. A single figure cannot show whether performance is on track against a target that rises each year, and cannot identify which parts of the business are contributing.'
      },
      {
        phase: 'Design',
        body: 'Three-year targets were set across procurement spend, employment and leadership representation — each one tested against whether the pipeline work to achieve it actually existed, rather than being set at a level that read well.'
      },
      {
        phase: 'Embedding',
        body: 'Procurement targets were written into category manager objectives, and Indigenous supplier consideration was built into the standard tender process rather than run as a parallel initiative.'
      }
    ],
    outcomes: [
      'A Stretch RAP with procurement as its centre of gravity, aligned to the firm’s actual sphere of influence',
      'Supplier base re-verified ahead of the 2026 threshold change rather than after it',
      'Spend reporting able to answer client and tender questions by category and business unit',
      'Procurement accountability embedded in category manager objectives'
    ],
    lessons: [
      'A single annual spend figure is not sufficient reporting once targets rise year on year.',
      'Supplier verification is a recurring obligation, not a one-off task — particularly across the 2026 threshold change.',
      'The strongest Stretch RAPs concentrate on the pillar where the organisation has genuine leverage, rather than spreading evenly across all four.'
    ],
    relatedService: { label: 'Stretch RAP', href: 'services/rap/stretch/' }
  }
];

export const CASE_STUDY_BY_SLUG = Object.fromEntries(CASE_STUDIES.map((c) => [c.slug, c]));
