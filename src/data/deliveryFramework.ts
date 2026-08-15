// The RAP delivery methodology, expressed as structured data rather than
// prose so it can drive the public page today and, later, a delivery tool.
//
// Deliberately shallow: each phase carries what it is for, roughly how long it
// takes, and what the organisation has at the end of it. The detailed method —
// the activity lists, the artefacts produced, the failure modes and the exit
// criteria used to test a phase is genuinely finished — is what clients engage
// us for, and is not published here. Keep it that way; if a future delivery
// tool needs that detail it belongs behind authentication, not in this file.

export type Phase = {
  id: string;
  number: string;
  name: string;
  purpose: string;
  duration: string;
  /** What the organisation has once the phase is done. Outcome, not method. */
  outcome: string;
};

export const PHASES: Phase[] = [
  {
    id: 'readiness',
    number: '01',
    name: 'Readiness',
    purpose: 'Establish whether the organisation is ready, and for what',
    duration: '1–2 weeks',
    outcome:
      'An agreed RAP type the organisation can realistically deliver, with the reasoning behind that choice written down.'
  },
  {
    id: 'foundation',
    number: '02',
    name: 'Foundation',
    purpose: 'Establish governance and define the sphere of influence',
    duration: '3–4 weeks',
    outcome:
      'A RAP Working Group that is properly constituted and meeting, and an agreed view of where the organisation can genuinely make a difference.'
  },
  {
    id: 'engagement',
    number: '03',
    name: 'Engagement',
    purpose: 'Build the relationships the commitments will rest on',
    duration: '4–8 weeks',
    outcome:
      'Continuing relationships with the Traditional Owners and Aboriginal and Torres Strait Islander organisations relevant to where you operate, and input from the internal teams who will deliver.'
  },
  {
    id: 'design',
    number: '04',
    name: 'Design',
    purpose: 'Draft commitments that can actually be delivered and evidenced',
    duration: '4–6 weeks',
    outcome:
      'A drafted plan in which every commitment has an owner, a timeframe and a way of showing it has been done.'
  },
  {
    id: 'endorsement',
    number: '05',
    name: 'Endorsement',
    purpose: 'Secure Reconciliation Australia endorsement',
    duration: '4–8 weeks',
    outcome:
      'A plan endorsed by Reconciliation Australia and launched internally, with action owners aware their commitments are live.'
  },
  {
    id: 'delivery',
    number: '06',
    name: 'Delivery and evidence',
    purpose: 'Deliver the commitments and capture proof as you go',
    duration: 'The full RAP term',
    outcome:
      'Commitments delivered and evidenced as the work happens, reporting obligations met, and renewal planning under way before the term ends.'
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
