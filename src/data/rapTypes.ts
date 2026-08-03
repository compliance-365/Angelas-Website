// Single source of truth for RAP type content, shared by the homepage,
// the /services/rap/ pillar page and the four type detail pages.
//
// Factual grounding (durations, purpose, Elevate's independent-assessment and
// prior-Stretch requirements) comes from Reconciliation Australia's published
// RAP framework guidance. Reconciliation Australia administers the framework
// and endorses RAPs — nothing here should be phrased as if 2Ways awards or
// approves a RAP type.

export type RapType = {
  slug: string;
  name: string;
  duration: string;
  stage: string;
  /** One-line summary used in card grids. */
  shortFor: string;
  /** Longer positioning paragraph for the detail page hero. */
  intro: string;
  metaDescription: string;
  bestFor: string[];
  focus: { title: string; body: string }[];
  pitfalls: string[];
  howWeHelp: string[];
  next: string | null;
};

export const RAP_TYPES: RapType[] = [
  {
    slug: 'reflect',
    name: 'Reflect RAP',
    duration: '~12 months',
    stage: 'Starting out',
    shortFor:
      'For organisations beginning their reconciliation journey. Builds the relationships, understanding and internal governance to act credibly.',
    intro:
      'A Reflect RAP is where most organisations begin. It runs for around twelve months and is deliberately about preparation rather than large-scale delivery — scoping your sphere of influence, building genuine relationships, and putting the internal governance in place so that the commitments in your next RAP are ones you can actually keep.',
    metaDescription:
      'A Reflect RAP is the entry point to the Reconciliation Action Plan framework, running around 12 months. Learn what a Reflect RAP involves, who it suits, and how 2Ways Consultancy can help you develop one.',
    bestFor: [
      'Organisations that have never had a RAP before',
      'Organisations where leadership has committed but internal understanding is still developing',
      'Organisations that need to identify who their Aboriginal and Torres Strait Islander stakeholders actually are',
      'Organisations returning to the framework after a lapsed or stalled RAP'
    ],
    focus: [
      {
        title: 'Scope your sphere of influence',
        body: 'Work out where your organisation genuinely can make a difference — through your workforce, your supply chain, your clients and your community presence — rather than committing to actions disconnected from how you operate.'
      },
      {
        title: 'Build the first genuine relationships',
        body: 'Identify and begin respectful, ongoing engagement with the Traditional Owners and Aboriginal and Torres Strait Islander organisations relevant to where you work. This is relationship-building, not a single consultation meeting.'
      },
      {
        title: 'Establish internal governance',
        body: 'Form a RAP Working Group with real authority, clear terms of reference and Aboriginal and Torres Strait Islander representation or advice, plus an executive sponsor who will keep it resourced.'
      },
      {
        title: 'Raise baseline cultural understanding',
        body: 'Introduce cultural awareness learning and everyday protocols such as Acknowledgement of Country, so the organisation has shared language before it makes public commitments.'
      }
    ],
    pitfalls: [
      'Writing aspirational actions with no named owner, deliverable or timeframe',
      'Treating stakeholder engagement as a one-off consultation rather than the beginning of a relationship',
      'Forming a working group with no decision-making authority or executive sponsor',
      'Over-committing at Reflect stage and then failing to deliver, which makes the next RAP harder'
    ],
    howWeHelp: [
      'Facilitate the scoping work to identify a realistic, honest sphere of influence',
      'Support respectful first engagement with Traditional Owners and community organisations',
      'Set up your RAP Working Group with terms of reference and clear accountability',
      'Draft the plan itself, with actions specific enough to be delivered and evidenced',
      'Prepare and review your submission before it goes to Reconciliation Australia'
    ],
    next: 'innovate'
  },
  {
    slug: 'innovate',
    name: 'Innovate RAP',
    duration: '2 years',
    stage: 'Implementing',
    shortFor:
      'For organisations ready to move from preparation to delivery — piloting and implementing initiatives, and learning what works.',
    intro:
      'An Innovate RAP runs over two years and is where an organisation moves from preparing to actually doing. It is the stage for implementing and testing initiatives across employment, procurement, cultural learning and community partnership — and, importantly, for building the systems that capture whether those initiatives are working.',
    metaDescription:
      'An Innovate RAP runs over two years and focuses on implementing and piloting reconciliation initiatives. Learn what an Innovate RAP requires and how 2Ways Consultancy supports delivery.',
    bestFor: [
      'Organisations that have completed a Reflect RAP and built foundational relationships',
      'Organisations with established Aboriginal and Torres Strait Islander relationships and internal capability already in place',
      'Organisations ready to set genuine employment and procurement commitments',
      'Organisations that need to demonstrate delivery, not just intent, to clients or funders'
    ],
    focus: [
      {
        title: 'Implement and pilot real initiatives',
        body: 'Move from planning to delivery across employment pathways, Indigenous procurement, cultural learning and community partnership — accepting that piloting means some approaches will need to be adjusted.'
      },
      {
        title: 'Set measurable commitments',
        body: 'Replace general intentions with specific targets that have owners, deadlines and a defined way of being measured, so progress can be assessed rather than asserted.'
      },
      {
        title: 'Build the evidence system',
        body: 'Put in place the tracking that lets you report against commitments throughout the two years, rather than reconstructing what happened in the weeks before reporting is due.'
      },
      {
        title: 'Deepen and formalise relationships',
        body: 'Move beyond initial contacts toward formalised, reciprocal partnerships, and bring Aboriginal and Torres Strait Islander perspectives into decisions beyond the RAP itself.'
      }
    ],
    pitfalls: [
      'Carrying over Reflect-stage actions rather than progressing to genuine delivery',
      'Setting employment or procurement targets without the systems to measure them',
      'Leaving delivery entirely to the working group instead of embedding it in business units',
      'Discovering at renewal that the evidence to support your reported progress was never captured'
    ],
    howWeHelp: [
      'Translate broad commitments into specific, deliverable and measurable actions',
      'Design employment and procurement initiatives that suit how your organisation actually operates',
      'Build the tracking and reporting framework before delivery starts, not after',
      'Facilitate deeper partnership development with Aboriginal and Torres Strait Islander organisations',
      'Provide implementation support across the two-year term so momentum does not stall'
    ],
    next: 'stretch'
  },
  {
    slug: 'stretch',
    name: 'Stretch RAP',
    duration: '3 years',
    stage: 'Embedding',
    shortFor:
      'For organisations embedding reconciliation into business as usual, with defined targets and demonstrated outcomes.',
    intro:
      'A Stretch RAP spans three years and focuses on high-impact commitments built on defined, measurable targets. It requires reconciliation initiatives to be embedded into core business strategy so they operate as business as usual — not as a separate program running alongside the organisation.',
    metaDescription:
      'A Stretch RAP spans three years and embeds reconciliation into business as usual through measurable targets. Learn what a Stretch RAP requires and how 2Ways Consultancy supports organisations at this stage.',
    bestFor: [
      'Organisations that have delivered on an Innovate RAP and can evidence outcomes',
      'Organisations with strong, sustained engagement with Aboriginal and Torres Strait Islander stakeholders',
      'Organisations ready to commit to longer-term targets across three years',
      'Organisations where reconciliation needs to sit inside core strategy rather than beside it'
    ],
    focus: [
      {
        title: 'Embed into business as usual',
        body: 'Shift reconciliation commitments out of a standalone program and into core strategy, budgets, position descriptions and performance measures, so delivery does not depend on individual champions.'
      },
      {
        title: 'Commit to defined measurable targets',
        body: 'Set specific, longer-term targets — for example in employment, procurement and leadership representation — that the organisation is prepared to be held to publicly.'
      },
      {
        title: 'Demonstrate sustained outcomes',
        body: 'Show a track record over time rather than point-in-time achievements, including honest reporting where targets have not been met and what is being done about it.'
      },
      {
        title: 'Extend influence beyond the organisation',
        body: 'Use your position with suppliers, partners and industry peers to advance reconciliation outcomes beyond your own operations.'
      }
    ],
    pitfalls: [
      'Setting three-year targets without a plan for leadership or strategy changes along the way',
      'Reporting only successes, when the framework expects honest assessment of shortfalls',
      'Keeping delivery inside the RAP working group rather than embedding it in accountable business units',
      'Committing to representation or spend targets without the pipeline work to make them achievable'
    ],
    howWeHelp: [
      'Review your Innovate outcomes honestly to establish what is genuinely evidenced',
      'Design targets that are ambitious but defensible across a three-year horizon',
      'Embed accountability into governance, position descriptions and performance frameworks',
      'Build reporting that withstands external scrutiny from clients, funders and tender panels',
      'Support delivery and course-correction across the full term'
    ],
    next: 'elevate'
  },
  {
    slug: 'elevate',
    name: 'Elevate RAP',
    duration: '3 years',
    stage: 'Leading',
    shortFor:
      'The highest RAP level, for organisations with a proven track record taking on leadership to advance national reconciliation.',
    intro:
      'An Elevate RAP is the highest level of the framework and runs over three years. It is for organisations with a proven track record of embedding effective initiatives through Stretch RAPs, which are ready to take on a leadership role in advancing reconciliation nationally. Elevate organisations must demonstrate high accountability measures, including independent assessment of their activities.',
    metaDescription:
      'An Elevate RAP is the highest level of the Reconciliation Action Plan framework, requiring a proven Stretch track record and independent assessment. Learn what Elevate involves and how 2Ways Consultancy supports it.',
    bestFor: [
      'Organisations with a demonstrated track record of delivery through Stretch RAPs',
      'Organisations prepared to submit to independent assessment of their activities',
      'Organisations with the standing and appetite to lead publicly on reconciliation',
      'Organisations whose influence extends meaningfully across an industry or sector'
    ],
    focus: [
      {
        title: 'Demonstrate national leadership',
        body: 'Move beyond your own organisational outcomes to actively advancing reconciliation across your sector — through advocacy, standard-setting, and supporting other organisations on their journeys.'
      },
      {
        title: 'Meet high accountability measures',
        body: 'Elevate requires accountability well beyond self-reporting, including independent assessment of your activities and transparent public reporting.'
      },
      {
        title: 'Sustain proven practice',
        body: 'Show that embedded practice survives leadership changes, restructures and strategy shifts, rather than depending on the tenure of particular individuals.'
      },
      {
        title: 'Influence systems, not just operations',
        body: 'Use procurement, partnerships and industry position to shift practice in supply chains and peer organisations, where the leverage is far greater than internal change alone.'
      }
    ],
    pitfalls: [
      'Pursuing Elevate for reputational positioning without the underlying Stretch track record',
      'Underestimating the evidence burden that independent assessment involves',
      'Treating sector leadership as communications activity rather than substantive contribution',
      'Allowing embedded practice to quietly degrade once the organisation is seen as a leader'
    ],
    howWeHelp: [
      'Assess honestly whether your Stretch outcomes support an Elevate submission',
      'Prepare the evidence base required for independent assessment',
      'Develop a credible sector leadership strategy grounded in substance, not profile',
      'Stress-test governance for resilience through leadership and structural change',
      'Support transparent public reporting, including where targets have not been met'
    ],
    next: null
  }
];

export const RAP_TYPE_BY_SLUG = Object.fromEntries(RAP_TYPES.map((t) => [t.slug, t]));
