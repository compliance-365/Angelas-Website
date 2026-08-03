// The RAP delivery methodology, expressed as structured data rather than
// prose so it can drive the public page today and, later, a delivery tool.
//
// The shape here is deliberately close to what a workflow product would need:
// every phase has owned activities, named artefacts, and an explicit exit
// condition. "artefacts" in particular are the things that would become
// records in a system — they are what an organisation is asked to produce and
// evidence, and they are what most RAPs fail to capture.

export type Phase = {
  id: string;
  number: string;
  name: string;
  purpose: string;
  duration: string;
  objective: string;
  activities: string[];
  artefacts: string[];
  /** Who typically carries the work. Roles, not named individuals. */
  owners: { role: string; involvement: string }[];
  /** The specific way this phase usually goes wrong. */
  failureMode: string;
  /** The test for whether the phase is genuinely finished. */
  exitCriteria: string[];
};

export const PHASES: Phase[] = [
  {
    id: 'readiness',
    number: '01',
    name: 'Readiness',
    purpose: 'Establish whether the organisation is ready, and for what',
    duration: '1–2 weeks',
    objective:
      'Determine honestly which RAP type the organisation can deliver, not which one it would like to announce. This phase exists to prevent the most expensive mistake in the framework: committing to a level the organisation cannot resource.',
    activities: [
      'Structured readiness assessment across all four RAP pillars',
      'Review of any previous RAP, including what was and was not delivered',
      'Executive interview to test the durability of leadership commitment',
      'Early identification of internal capacity and likely resourcing gaps',
      'Recommendation on RAP type, with reasoning stated plainly'
    ],
    artefacts: [
      'Readiness assessment report with pillar-level scoring',
      'RAP type recommendation and rationale',
      'Resourcing and capacity gap register'
    ],
    owners: [
      { role: '2Ways consultant', involvement: 'Leads assessment and produces recommendation' },
      { role: 'Executive sponsor', involvement: 'Interview and sign-off on direction' },
      { role: 'Project lead (client)', involvement: 'Provides organisational context and history' }
    ],
    failureMode:
      'The organisation decides its RAP type before this phase, usually based on what a peer organisation has, and treats readiness as a formality confirming a decision already made.',
    exitCriteria: [
      'A RAP type is agreed and the reasoning is documented',
      'The executive sponsor is named and has accepted the role',
      'Known capacity gaps are recorded rather than assumed away'
    ]
  },
  {
    id: 'foundation',
    number: '02',
    name: 'Foundation',
    purpose: 'Establish governance and define the sphere of influence',
    duration: '3–4 weeks',
    objective:
      'Put in place the decision-making structure the plan will depend on, and define honestly where the organisation can actually make a difference. Commitments made outside a genuine sphere of influence are the ones that quietly disappear.',
    activities: [
      'Establish or reconstitute the RAP Working Group with terms of reference',
      'Confirm working group membership, including Aboriginal and Torres Strait Islander representation or advice',
      'Map the sphere of influence across workforce, supply chain, clients and community footprint',
      'Baseline current state: existing training, supplier spend, workforce data',
      'Agree the meeting cadence and decision rights that will operate through the term'
    ],
    artefacts: [
      'RAP Working Group terms of reference',
      'Sphere of influence map',
      'Baseline data pack (workforce, procurement, training)',
      'Governance and decision-rights model'
    ],
    owners: [
      { role: 'RAP Working Group', involvement: 'Formed and operating by end of phase' },
      { role: 'Executive sponsor', involvement: 'Endorses terms of reference and resourcing' },
      { role: '2Ways consultant', involvement: 'Facilitates setup and produces the sphere of influence map' }
    ],
    failureMode:
      'A working group is formed on paper with no decision-making authority, no budget and no executive attendance. It meets twice, then stops, and delivery has nowhere to live.',
    exitCriteria: [
      'Terms of reference are endorsed and the group has met at least once',
      'Baseline data exists — you cannot show progress from an unknown starting point',
      'The sphere of influence is documented and agreed by leadership'
    ]
  },
  {
    id: 'engagement',
    number: '03',
    name: 'Engagement',
    purpose: 'Build the relationships the commitments will rest on',
    duration: '4–8 weeks',
    objective:
      'Establish genuine, continuing relationships with the Traditional Owners and Aboriginal and Torres Strait Islander organisations relevant to where the organisation operates, and bring internal stakeholders into the plan rather than presenting it to them.',
    activities: [
      'Identify the Traditional Owner groups and Aboriginal and Torres Strait Islander organisations relevant to each location',
      'Facilitate first or renewed engagement, at a pace the relationship sets',
      'Internal workshops with the business units who will own delivery',
      'Staff consultation to surface what is realistic on the ground',
      'Document what community stakeholders have actually asked for'
    ],
    artefacts: [
      'Stakeholder register with relationship status, not just contact details',
      'Engagement log recording what was discussed and agreed',
      'Internal consultation findings',
      'Community priorities summary'
    ],
    owners: [
      { role: '2Ways consultant', involvement: 'Facilitates community engagement and internal workshops' },
      { role: 'RAP Working Group', involvement: 'Participates and carries relationships forward' },
      { role: 'Business unit leads', involvement: 'Contribute to what is deliverable in their area' }
    ],
    failureMode:
      'Engagement is compressed into a single consultation session so drafting can begin on schedule. Community stakeholders are approached once, never followed up with, and the organisation damages a relationship it will need later.',
    exitCriteria: [
      'Relationships exist with named organisations, with a next contact already agreed',
      'Business units have contributed to what they will be asked to deliver',
      'Community priorities are documented and have visibly shaped the draft direction'
    ]
  },
  {
    id: 'design',
    number: '04',
    name: 'Design',
    purpose: 'Draft commitments that can actually be delivered and evidenced',
    duration: '4–6 weeks',
    objective:
      'Convert intent into commitments with a named owner, a deliverable, a timeframe and a defined measure. This is the phase where most RAPs are won or lost, and where general language is most tempting because it is easiest to agree on.',
    activities: [
      'Draft actions under each of the four pillars',
      'Assign a named owner to every action — a role and a person, not a team',
      'Define the measure and evidence source for each commitment before it is agreed',
      'Test the draft with the people who will have to deliver it',
      'Iterate; the first draft is never the one that gets submitted',
      'Design the evidence capture method that Phase 6 will depend on'
    ],
    artefacts: [
      'Draft RAP document',
      'Action register with owners, timeframes and measures',
      'Evidence capture plan naming the source for each measure',
      'Internal review and sign-off record'
    ],
    owners: [
      { role: '2Ways consultant', involvement: 'Drafts and challenges vague commitments' },
      { role: 'Action owners', involvement: 'Confirm they can deliver what is being committed to' },
      { role: 'RAP Working Group', involvement: 'Reviews and recommends for endorsement' }
    ],
    failureMode:
      'Actions are written in language everyone can agree to precisely because it commits nobody — "promote", "explore", "raise awareness" — with no owner and no measure. It reads well and cannot be delivered or assessed.',
    exitCriteria: [
      'Every action has a named owner who has agreed to it',
      'Every measurable commitment has a defined evidence source',
      'No action survives that nobody can explain how to deliver'
    ]
  },
  {
    id: 'endorsement',
    number: '05',
    name: 'Endorsement',
    purpose: 'Secure Reconciliation Australia endorsement',
    duration: '4–8 weeks',
    objective:
      'Submit a plan that meets Reconciliation Australia’s expectations, and resolve gaps before submission rather than in response to feedback.',
    activities: [
      'Review the draft against Reconciliation Australia’s published requirements for the RAP type',
      'Close identified gaps prior to submission',
      'Executive and board approval as required',
      'Submit to Reconciliation Australia',
      'Respond to any feedback and resubmit',
      'Plan the internal and external launch'
    ],
    artefacts: [
      'Pre-submission review checklist',
      'Final RAP document',
      'Internal approval record',
      'Launch and communications plan'
    ],
    owners: [
      { role: '2Ways consultant', involvement: 'Pre-submission review and feedback response support' },
      { role: 'Executive sponsor', involvement: 'Final approval and submission authority' },
      { role: 'Communications', involvement: 'Launch planning' }
    ],
    failureMode:
      'The plan is submitted without an honest internal review, comes back with feedback, and the organisation loses months — often at the exact point momentum and executive attention were highest.',
    exitCriteria: [
      'Reconciliation Australia has endorsed the plan',
      'Action owners know their commitments have gone live',
      'Launch has happened internally, not just externally'
    ]
  },
  {
    id: 'delivery',
    number: '06',
    name: 'Delivery and evidence',
    purpose: 'Deliver the commitments and capture proof as you go',
    duration: 'The full RAP term',
    objective:
      'Keep delivery moving and capture evidence continuously, so that reporting and renewal draw on a record that already exists rather than a reconstruction attempted under time pressure.',
    activities: [
      'Regular working group cycles against the action register',
      'Progress tracking at action level, not just overall',
      'Continuous evidence capture against each defined measure',
      'Reporting to executive and board on an agreed cadence',
      'Honest escalation of actions that are slipping, early',
      'Annual reporting obligations, including the RAP Impact Survey',
      'Renewal preparation beginning well before expiry'
    ],
    artefacts: [
      'Live action register with status',
      'Evidence library mapped to commitments',
      'Periodic progress reports',
      'Renewal readiness assessment'
    ],
    owners: [
      { role: 'RAP Working Group', involvement: 'Runs delivery cycles and tracks status' },
      { role: 'Action owners', involvement: 'Deliver and supply evidence' },
      { role: '2Ways consultant', involvement: 'Optional ongoing support, review and course correction' }
    ],
    failureMode:
      'The plan is launched, celebrated, and then not looked at for eighteen months. At renewal, the organisation discovers that some actions were delivered but nobody recorded it, and others were quietly dropped without a decision ever being taken.',
    exitCriteria: [
      'Progress against every action is known at any point, not only at reporting time',
      'Evidence exists for delivered commitments at the moment they are delivered',
      'Renewal planning starts before the term ends, not after'
    ]
  }
];

// Principles that hold across every phase.
export const PRINCIPLES = [
  {
    title: 'Every commitment has an owner',
    body: 'A named person, not a team or a function. Actions owned by "the business" are owned by nobody.'
  },
  {
    title: 'Evidence is designed before delivery',
    body: 'The measure and its source are agreed when the commitment is written. Deciding how to prove something after the fact rarely works.'
  },
  {
    title: 'Engagement sets its own pace',
    body: 'Relationship-building cannot be compressed to fit a drafting deadline without damaging the relationship.'
  },
  {
    title: 'Honest beats ambitious',
    body: 'Fewer commitments delivered fully is worth more — to staff, to community, and at renewal — than many announced and abandoned.'
  }
];
