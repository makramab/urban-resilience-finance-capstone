import { createFileRoute, Link } from '@tanstack/react-router'
import { CheckCircle2, FlaskConical, Layers, Lock, ArrowLeft, ArrowRight } from 'lucide-react'
import { PageShell, PageHero, Section } from '#/components/site/PageShell'

export const Route = createFileRoute('/conclusion')({ component: Conclusion })

function Conclusion() {
  return (
    <PageShell>
      <PageHero
        kicker="Conclusion"
        title="Takeaways & Future Work"
        subtitle="What the framework delivers today, and the most valuable places to take it next."
      />

      <div className="space-y-14">
        <Section heading="What the framework delivers">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={22} className="text-primary shrink-0" />
              <p className="text-lg md:text-xl font-semibold text-foreground">A private-investor-ready toolkit</p>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We explored the cascading impacts of disaster-resilience infrastructure and took
              concrete steps toward translating those impacts into financial valuations. The models
              together form a useful toolkit that private institutions can bring into due-diligence
              and capital-allocation conversations — not just as anecdotal benefits, but as
              defensible dollar estimates under named assumptions.
            </p>
          </div>
        </Section>

        <Section heading="Recommendations for future work">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: FlaskConical,
                title: 'Validate the models',
                desc: 'Ground assumptions with longitudinal data, sensitivity analysis, and peer review. Each headline number carries a set of literature-backed unit values — these are the first things to stress-test.',
              },
              {
                icon: Layers,
                title: 'Combine into one tool',
                desc: 'Unify the individual models under a single overarching framework so an investor can toggle scenarios, stack models, and see combined exposure across a portfolio of resilience investments.',
              },
              {
                icon: Lock,
                title: 'Stakeholder datasets',
                desc: 'Incorporate proprietary datasets from individual entities (NYCHA, MTA, DOT, insurers) that are not publicly available. These close the biggest remaining gaps — particularly around displacement and disruption.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-muted/30 border border-border rounded-xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>
                <p className="text-base font-semibold text-foreground">{title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section heading="Acknowledgements">
          <div className="rounded-xl border border-border bg-muted/20 p-6 md:p-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Team</p>
              <p className="text-base font-semibold text-foreground">Christian Humann</p>
              <p className="text-base font-semibold text-foreground">Afra Kamili</p>
              <p className="text-base font-semibold text-foreground">Ziming Xiong</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Sponsor</p>
              <p className="text-base font-semibold text-foreground">Ryutaro Adachi</p>
              <p className="text-base font-semibold text-foreground">Takuo Shioda</p>
              <p className="text-sm text-muted-foreground mt-1">NEC GX Business Development</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Faculty Mentor</p>
              <p className="text-base font-semibold text-foreground">Dr. Yuki Miura</p>
              <p className="text-sm text-muted-foreground mt-1">Center for Urban Science + Progress</p>
            </div>
          </div>
        </Section>

        <nav className="flex items-center justify-between pt-6 border-t border-border">
          <Link to="/models" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Models
          </Link>
          <Link to="/" className="group inline-flex items-center gap-2 text-sm text-primary hover:underline">
            Back to home
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </nav>
      </div>
    </PageShell>
  )
}
