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
        subtitle="Two halves — negative and positive — each grouping intervention categories whose downstream effects ripple through community, economic, and financial outcomes. Drag to pan, pinch or use the toolbar to zoom."
      />

      <div className="space-y-10">
        <ImpactFlowchart height="72vh" initialScale={0.7} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-5 space-y-2">
            <p className="text-sm font-semibold text-rose-300 uppercase tracking-wider">Negative impact (−)</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Short-term disruptions, ecological costs, displacement pressure, and project risks
              that must be mitigated or priced in.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 space-y-2">
            <p className="text-sm font-semibold text-emerald-300 uppercase tracking-wider">Positive impact (+)</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Downstream benefits — health, economic, ecological — flowing through to funding
              capacity via tax revenue, avoided costs, and investor confidence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <TierCard color="bg-green-700" label="Project" desc="The intervention itself — top of every column." />
          <TierCard color="bg-emerald-400" label="Direct" desc="First-order effects of the intervention." />
          <TierCard color="bg-orange-500" label="Indirect" desc="Second-order ripple effects on people and economy." />
          <TierCard color="bg-red-500" label="Looping" desc="Financial feedback — funding, taxes, recovery cost." />
        </div>

        <Section heading="How to read the flowchart">
          <div className="prose prose-invert max-w-none text-base text-muted-foreground leading-relaxed space-y-4">
            <p>
              Two halves: the <span className="text-rose-300 font-semibold">negative side</span> on
              the left captures construction-phase harms and the displacement cascade, the{' '}
              <span className="text-emerald-300 font-semibold">positive side</span> on the right
              captures the cascade of benefits from each financing model. Inside each side, every
              column is an intervention category; nodes are coloured by their causal tier — direct,
              indirect, or looping (financial feedback).
            </p>
            <p>
              The five quantified models live at specific endpoints in the cascade — look for the{' '}
              <span className="rounded border border-primary/40 bg-primary/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">M1</span>{' '}
              –{' '}
              <span className="rounded border border-primary/40 bg-primary/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">M5</span>{' '}
              badges. They sit on "Transit access preserved" (Model 1, roadway flooding), "Mental health
              burden lessened" (Model 2), the property-and-insurance branch's funding endpoint
              (Model 3, housing displacement), the beach nourishment endpoint (Model 4), and the
              construction-phase financial feasibility endpoint (Model 5, construction noise).
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

function TierCard({ color, label, desc }: { color: string; label: string; desc: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/20 p-4 space-y-1.5">
      <div className="flex items-center gap-2">
        <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
        <p className="text-xs font-semibold text-foreground uppercase tracking-wider">{label}</p>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}
