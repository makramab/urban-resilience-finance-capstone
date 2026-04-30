export interface ModelMeta {
  slug: string
  number: number
  title: string
  short: string
  headline: string
  summary: string
  category: 'Transportation' | 'Health' | 'Housing' | 'Environment' | 'Construction' | 'Community' | 'TBD'
}

export const models: ModelMeta[] = [
  {
    slug: 'roadway-flooding',
    number: 1,
    title: 'Regional Roadway Flooding Avoided',
    short: 'Roadway Flooding',
    headline: '$105M',
    summary: 'Driver delay costs avoided over 10 years when targeted flood infrastructure prevents roadway closures.',
    category: 'Transportation',
  },
  {
    slug: 'mental-health',
    number: 2,
    title: 'Mental Health Avoided Cost',
    short: 'Mental Health',
    headline: '$501M',
    summary: 'Healthcare and lost wages avoided per major flood event, applied across 110,000 peninsula residents.',
    category: 'Health',
  },
  {
    slug: 'housing',
    number: 3,
    title: 'Public Housing Displacement Avoided',
    short: 'Housing Displacement',
    headline: '$16.5M',
    summary: 'Emergency shelter costs avoided per event for 15,932 NYCHA residents in the flood zone.',
    category: 'Housing',
  },
  {
    slug: 'beach-area',
    number: 4,
    title: 'Beach Area Loss Prevented',
    short: 'Beach Area Loss',
    headline: '$170M',
    summary: 'Lost beachfront tourism revenue retained over 10 years with beach nourishment + inland protection.',
    category: 'Environment',
  },
  {
    slug: 'construction-noise',
    number: 5,
    title: 'Construction Noise Mitigation Cost',
    short: 'Construction Noise',
    headline: '$17.1M',
    summary: 'Community health cost from 6 years of construction noise affecting 44,000 nearby residents.',
    category: 'Construction',
  },
  {
    slug: 'affordable-housing',
    number: 6,
    title: 'Affordable Housing Protection',
    short: 'Affordable Housing',
    headline: '$204M',
    summary: 'Avoided storm damage to the lowest-value coastal housing — 14,208 residential units protected by new barriers and dunes (30-year NPV).',
    category: 'Housing',
  },
  {
    slug: 'grocery-access',
    number: 7,
    title: 'Grocery Store Service Area',
    short: 'Grocery Access',
    headline: '135K HH',
    summary: '135,000 of 286,000 households within 10,000 ft of four major grocery stores fall inside evacuation zones — flood risk threatens essential access.',
    category: 'Community',
  },
]

export function getModel(slug: string): ModelMeta | undefined {
  return models.find((m) => m.slug === slug)
}

export function getRelatedModels(slug: string, n = 2): ModelMeta[] {
  const idx = models.findIndex((m) => m.slug === slug)
  if (idx === -1) return []
  const others = models.filter((m) => m.slug !== slug && m.category !== 'TBD')
  return others.slice(0, n)
}
