import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Hourglass } from 'lucide-react'
import { PageShell } from '#/components/site/PageShell'
import { AnchorNav } from '#/components/site/AnchorNav'
import { ModelSummaryCard } from '#/components/site/ModelSummaryCard'
import { getModel, getRelatedModels, models } from '#/lib/models'
import { RoadwayFloodingContent } from '#/components/models/RoadwayFloodingContent'
import { MentalHealthContent } from '#/components/models/MentalHealthContent'
import { HousingContent } from '#/components/models/HousingContent'
import { BeachAreaContent } from '#/components/models/BeachAreaContent'
import { ConstructionNoiseContent } from '#/components/models/ConstructionNoiseContent'
import { AffordableHousingContent } from '#/components/models/AffordableHousingContent'
import { GroceryAccessContent } from '#/components/models/GroceryAccessContent'
import { PlaceholderContent } from '#/components/models/PlaceholderContent'

const contentMap: Record<string, React.ComponentType> = {
  'roadway-flooding': RoadwayFloodingContent,
  'mental-health': MentalHealthContent,
  housing: HousingContent,
  'beach-area': BeachAreaContent,
  'construction-noise': ConstructionNoiseContent,
  'affordable-housing': AffordableHousingContent,
  'grocery-access': GroceryAccessContent,
}

export const Route = createFileRoute('/models/$slug')({
  beforeLoad: ({ params }) => {
    if (!getModel(params.slug)) throw notFound()
  },
  component: ModelPage,
})

const anchorSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'framework', label: 'Bank Framework' },
  { id: 'why', label: 'Why it matters' },
  { id: 'how', label: 'Approach' },
  { id: 'visualization', label: 'Visualization' },
  { id: 'assumptions', label: 'Assumptions' },
  { id: 'limitations', label: 'Sensitivity & Limits' },
  { id: 'interview', label: 'From the field' },
  { id: 'related', label: 'Related models' },
]

function ModelPage() {
  const { slug } = Route.useParams()
  const model = getModel(slug)!
  const related = getRelatedModels(slug, 3)
  const Content = contentMap[slug] ?? PlaceholderContent
  const placeholder = model.category === 'TBD'

  const currentIdx = models.findIndex((m) => m.slug === slug)
  const prev = currentIdx > 0 ? models[currentIdx - 1] : null
  const next = currentIdx < models.length - 1 ? models[currentIdx + 1] : null

  return (
    <PageShell width="wide">
      <div className="lg:flex lg:gap-10">
        <div className="flex-1 min-w-0">
          <section id="overview" className="scroll-mt-24 mb-14">
            <Link to="/models" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground mb-6">
              <ArrowLeft size={12} />
              All models
            </Link>

            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs font-mono text-muted-foreground">MODEL</span>
              <span className="text-xs font-mono font-bold text-foreground">0{model.number}</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded-full bg-muted/50 border border-border ml-2">
                {model.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-foreground leading-[1.05] tracking-tight max-w-4xl mb-6">
              {model.title}
            </h1>

            {placeholder ? (
              <div className="flex items-center gap-4 rounded-xl border border-border bg-muted/20 p-6 md:p-8 max-w-2xl">
                <Hourglass size={32} className="text-muted-foreground" />
                <div>
                  <p className="text-2xl font-bold text-foreground">Placeholder</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Reserved for future quantification — content to be finalized.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row sm:items-end sm:gap-6 gap-2">
                <p className="text-6xl md:text-8xl font-black text-foreground tracking-tight leading-none">
                  {model.headline}
                </p>
                <p className="text-base md:text-lg text-muted-foreground max-w-xl pb-2">
                  {model.summary}
                </p>
              </div>
            )}
          </section>

          <div className="space-y-16">
            <Content />

            <section id="related" className="scroll-mt-24 space-y-4">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest">Related</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Related models</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {related.map((r) => (
                  <ModelSummaryCard key={r.slug} model={r} />
                ))}
              </div>
            </section>

            <nav className="flex items-center justify-between pt-8 border-t border-border">
              {prev ? (
                <Link
                  to="/models/$slug"
                  params={{ slug: prev.slug }}
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground min-w-0"
                >
                  <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform shrink-0" />
                  <span className="truncate">{prev.short}</span>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  to="/models/$slug"
                  params={{ slug: next.slug }}
                  className="group inline-flex items-center gap-2 text-sm text-primary hover:underline min-w-0"
                >
                  <span className="truncate">{next.short}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform shrink-0" />
                </Link>
              ) : (
                <Link to="/conclusion" className="group inline-flex items-center gap-2 text-sm text-primary hover:underline">
                  Conclusion
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              )}
            </nav>
          </div>
        </div>

        <AnchorNav sections={anchorSections} />
      </div>
    </PageShell>
  )
}
