export interface ModelMeta {
  slug: string
  number: number
  title: string
  short: string
  headline: string
  summary: string
  category: 'Transportation' | 'Health' | 'Housing' | 'Environment' | 'Construction' | 'TBD'
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
    slug: 'model-6',
    number: 6,
    title: 'Model 6',
    short: 'Model 6',
    headline: 'TBD',
    summary: 'Reserved for a sixth financing model — focus area to be finalized.',
    category: 'TBD',
  },
  {
    slug: 'model-7',
    number: 7,
    title: 'Model 7',
    short: 'Model 7',
    headline: 'TBD',
    summary: 'Reserved for the seventh model — rounds out the full toolkit.',
    category: 'TBD',
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
