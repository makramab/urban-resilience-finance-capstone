import { createFileRoute, Link } from '@tanstack/react-router'
import { CloudRain, Building, DollarSign, GitBranch, BarChart3, Users, ArrowRight } from 'lucide-react'
import { PageShell, PageHero, Section } from '#/components/site/PageShell'

export const Route = createFileRoute('/background')({ component: Background })

function Background() {
  return (
    <PageShell>
      <PageHero
        kicker="I. Introduction"
        title="Background"
        subtitle="Climate-related disasters are growing in frequency and severity. Coastal cities face recurring, cascading risks — and the funding to address them is falling short."
      />

      <div className="space-y-14">
        <Section heading="Three forces that define the problem">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-muted/30 rounded-xl p-6 space-y-3 border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <CloudRain size={20} className="text-primary" />
              </div>
              <p className="text-lg font-semibold text-foreground">Recurring Risk</p>
              <p className="text-base text-muted-foreground leading-relaxed">
                In coastal cities such as New York, flooding presents recurring risks to housing,
                transportation, and economic activity.
              </p>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 space-y-3 border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building size={20} className="text-primary" />
              </div>
              <p className="text-lg font-semibold text-foreground">Cascading Effects</p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Large-scale resilience initiatives reduce physical risk while also generating broader
                social and economic effects across communities.
              </p>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 space-y-3 border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <DollarSign size={20} className="text-primary" />
              </div>
              <p className="text-lg font-semibold text-foreground">Funding Gap</p>
              <p className="text-base text-muted-foreground leading-relaxed">
                These secondary impacts are rarely quantified in a way that supports private
                investment — leaving projects dependent on insufficient public funding.
              </p>
            </div>
          </div>
        </Section>

        <Section heading="The gap this project addresses">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Resilience projects remain dependent on limited public funding, which is becoming
              increasingly insufficient — while the measurable downstream benefits they create go
              unaccounted for. Without a way to translate these benefits into financial terms, private
              capital stays on the sidelines.
            </p>
          </div>
        </Section>

        <Section heading="Objectives" eyebrow="What we set out to build">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Explore alternative financing mechanisms for resilience infrastructure across three
            interlocking deliverables:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {[
              {
                n: '01',
                icon: GitBranch,
                title: 'Impact Flowchart',
                desc: 'Mapping the effects of resilience infrastructure on local communities and the public + private sectors.',
              },
              {
                n: '02',
                icon: BarChart3,
                title: 'Financing Models',
                desc: 'A series of models based on these impact flows, combinable to inform financing.',
              },
              {
                n: '03',
                icon: Users,
                title: 'Stakeholder Analysis',
                desc: 'Connects the work to the needs and goals of individual public, private, and community entities.',
              },
            ].map(({ n, icon: Icon, title, desc }) => (
              <div
                key={n}
                className="bg-muted/30 border border-border rounded-xl p-6 space-y-4 relative overflow-hidden"
              >
                <span className="absolute top-3 right-4 text-5xl font-black text-muted-foreground/10 leading-none">
                  {n}
                </span>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>
                <p className="text-lg font-semibold text-foreground">{title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <nav className="flex items-center justify-between pt-6 border-t border-border">
          <div />
          <Link to="/methodology" className="group inline-flex items-center gap-2 text-sm text-primary hover:underline">
            Next — Methodology
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </nav>
      </div>
    </PageShell>
  )
}
