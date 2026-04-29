import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PageShell, PageHero, Section } from '#/components/site/PageShell'
import { ImpactFlowchart } from '#/components/site/ImpactFlowchart'

export const Route = createFileRoute('/impact-mapping')({ component: ImpactMapping })

function ImpactMapping() {
  return (
    <PageShell width="wide">
      <PageHero
        kicker="III. Impact Mapping"
        title="Cascading Effects Flowchart"
        subtitle="Seven intervention categories, each producing a chain of community, economic, and financial outcomes. Drag to pan, pinch or use the toolbar to zoom."
      />

      <div className="space-y-10">
        <ImpactFlowchart height="72vh" initialScale={0.7} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5 space-y-2">
            <p className="text-sm font-semibold text-red-400 uppercase tracking-wider">Negative</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Short-term disruptions, ecological costs, and project risks that must be mitigated or
              priced in — these reduce funding capacity if not addressed.
            </p>
          </div>
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 space-y-2">
            <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Mixed</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Outcomes with both positive and negative sides — e.g. rising property values that
              benefit owners but raise displacement risk for long-term tenants.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 space-y-2">
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Positive</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Downstream benefits — health, economic, ecological — that flow through to funding
              capacity via tax revenue, avoided costs, and investor confidence.
            </p>
          </div>
        </div>

        <Section heading="How to read the flowchart">
          <div className="prose prose-invert max-w-none text-base text-muted-foreground leading-relaxed space-y-4">
            <p>
              Each column is an intervention category. The nodes below the header are the observed
              or expected effects in roughly causal order — earlier impacts near the top, derived
              outcomes lower down. The dashed card at the bottom of each column summarises the net
              effect on funding capacity, which is the financial through-line across every model.
            </p>
            <p>
              Many of the individual financial models sit at the bottom of these chains: the mental-
              health model quantifies the "lower healthcare costs" node under green infrastructure and
              infrastructure outcomes; the beach-area model quantifies "tourism & visitor recovery"
              under beach nourishment, and so on.
            </p>
          </div>
        </Section>

        <nav className="flex items-center justify-between pt-6 border-t border-border">
          <Link to="/methodology" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Methodology
          </Link>
          <Link to="/models" className="group inline-flex items-center gap-2 text-sm text-primary hover:underline">
            Next — Models
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </nav>
      </div>
    </PageShell>
  )
}
