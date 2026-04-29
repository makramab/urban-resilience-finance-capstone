import { createFileRoute, Link } from '@tanstack/react-router'
import { Database, GitMerge, Calculator, FileCheck, ArrowRight, ArrowLeft } from 'lucide-react'
import { PageShell, PageHero, Section } from '#/components/site/PageShell'

export const Route = createFileRoute('/methodology')({ component: Methodology })

const stages = [
  {
    n: 1,
    icon: Database,
    title: 'Data Collection',
    lead: 'Municipal, federal, and project-level sources joined spatially.',
    items: [
      'PLUTO, ACS, Tiger, NYC Open Data',
      'Rockaway Project Documentation',
      'Flood Hazard Scenarios (FEMA, NYC)',
      'Spatial join across datasets at tax-lot granularity',
    ],
  },
  {
    n: 2,
    icon: GitMerge,
    title: 'Mapping Cascading Impact',
    lead: 'Both directions of impact — positive and negative — captured via mixed methods.',
    items: [
      'Literature review flagging positive vs. negative effects',
      'Stakeholder interviews across public, private, and community actors',
      'Impact flowchart bridging physical works to downstream outcomes',
    ],
  },
  {
    n: 3,
    icon: Calculator,
    title: 'Quantification',
    lead: 'Exposure × intensity × valuation, validated against comparables.',
    items: [
      'Exposure layer assembled per model (who is affected, how many)',
      'Historical trends and regression for time-dependent inputs',
      'Benchmarking from literature for per-person / per-event valuations',
    ],
  },
  {
    n: 4,
    icon: FileCheck,
    title: 'Bank-Framework Output',
    lead: 'Every model resolves to a single, comparable investor-ready card.',
    items: [
      'What: the impact being valued',
      'Who: the population or stakeholder',
      'How Much: the headline dollar estimate',
      'Contribution: how the project delivers the outcome',
      'Risk: assumption fragility and known unknowns',
    ],
  },
]

function Methodology() {
  return (
    <PageShell>
      <PageHero
        kicker="II. Methodology"
        title="Workflow"
        subtitle="A four-stage pipeline that transforms raw municipal data into financial cost estimates private investors can act on."
      />

      <div className="space-y-14">
        <Section heading="The pipeline at a glance">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {stages.map(({ n, icon: Icon, title }) => (
              <div key={n} className="bg-muted/30 border border-border rounded-xl p-5 relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">STEP {String(n).padStart(2, '0')}</span>
                </div>
                <p className="text-base font-semibold text-foreground">{title}</p>
              </div>
            ))}
          </div>
        </Section>

        {stages.map(({ n, icon: Icon, title, lead, items }) => (
          <Section key={n} eyebrow={`Step ${String(n).padStart(2, '0')}`} heading={title}>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Icon size={22} className="text-primary" />
              </div>
              <div className="space-y-4 flex-1">
                <p className="text-lg md:text-xl text-foreground leading-relaxed">{lead}</p>
                <ul className="space-y-2 pl-0">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>
        ))}

        <Section heading="Formula pattern">
          <div className="rounded-xl border border-border bg-muted/30 p-6 md:p-8 font-mono text-sm md:text-base text-foreground leading-relaxed overflow-x-auto">
            <p className="text-muted-foreground mb-2 font-sans text-xs uppercase tracking-widest">
              Common shape across models
            </p>
            <p>
              <span className="text-primary">Estimated Financial Cost</span> ={' '}
              <span className="text-foreground">Exposure</span> ×{' '}
              <span className="text-foreground">Per-unit valuation</span> ×{' '}
              <span className="text-foreground">Time / event factor</span>
            </p>
            <p className="text-xs text-muted-foreground font-sans mt-3">
              Per-unit valuations come from literature benchmarks; time factors come from historical
              regression or event-frequency assumptions.
            </p>
          </div>
        </Section>

        <nav className="flex items-center justify-between pt-6 border-t border-border">
          <Link to="/background" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Background
          </Link>
          <Link to="/impact-mapping" className="group inline-flex items-center gap-2 text-sm text-primary hover:underline">
            Next — Impact Mapping
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </nav>
      </div>
    </PageShell>
  )
}
