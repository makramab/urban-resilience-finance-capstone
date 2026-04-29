import { Section } from '#/components/site/PageShell'
import { BankFrameworkCard } from '#/components/site/BankFrameworkCard'
import { InterviewQuote } from '#/components/site/InterviewQuote'

export function MentalHealthContent() {
  return (
    <>
      <Section id="framework" eyebrow="The card" heading="Bank framework">
        <BankFrameworkCard
          what="Avoided healthcare and lost wages from flood-triggered trauma."
          who="110,000 peninsula residents with a post-Sandy PTSD rate of 21% — three times the national average."
          howMuch="$501M per event, applying $4,555 per resident over a 30-month recovery window."
          contribution="The project blocks the floodwater that triggers the trauma response entirely."
          risk="Figure is per event; the headline depends on assumed flood frequency over the project's life."
        />
      </Section>

      <Section id="why" eyebrow="Context" heading="Why this matters">
        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            One to three years after Hurricane Sandy, surveys on the Rockaway peninsula measured
            post-traumatic stress rates around <span className="text-foreground font-medium">21%</span> — roughly
            three-and-a-half times the national background rate of about 6%.
          </p>
          <p>
            Unlike property damage, the mental-health burden is deferred, diffuse, and rarely
            priced into resilience investment cases. Yet it shows up in real numbers: healthcare
            utilization, missed work, and sustained disability claims that outlast the recovery
            of physical structures.
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-6 md:gap-12 rounded-xl border border-border bg-muted/20 p-8">
          <div className="text-center space-y-2">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-muted/60 border-2 border-border flex items-center justify-center">
              <p className="text-3xl md:text-4xl font-black text-muted-foreground">6%</p>
            </div>
            <p className="text-xs text-muted-foreground">National average</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-2xl md:text-3xl font-bold text-primary">3.5×</p>
            <div className="w-16 h-px bg-primary/40" />
          </div>
          <div className="text-center space-y-2">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-red-500/10 border-2 border-red-500/40 flex items-center justify-center">
              <p className="text-4xl md:text-5xl font-black text-red-400">21%</p>
            </div>
            <p className="text-xs text-muted-foreground">Rockaway after Sandy</p>
          </div>
        </div>
      </Section>

      <Section id="how" eyebrow="Method" heading="How we calculated it">
        <div className="rounded-xl border border-border bg-muted/20 p-5 md:p-6 font-mono text-sm text-foreground overflow-x-auto">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans mb-3">Formula</p>
          <p className="leading-relaxed">
            <span className="text-primary">Cost</span> ={' '}
            <span>Population</span> ×{' '}
            <span>PTSD rate</span> ×{' '}
            <span>(Healthcare + lost wages per resident)</span> ×{' '}
            <span>Recovery months</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          <InputTile label="Exposed population" desc="~110,000 Rockaway peninsula residents, per ACS and NYC Data Book." />
          <InputTile label="PTSD incidence" desc="~21% measured post-Sandy, literature-backed (Lowe et al., others)." />
          <InputTile label="Per-person valuation" desc="$4,555 / resident, blending treatment costs and reduced earnings." />
          <InputTile label="Recovery window" desc="30 months, representing the bulk of acute-phase care and disruption." />
        </div>
      </Section>

      <Section id="visualization" eyebrow="Chart" heading="Headline figure">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-10 md:p-14 text-center space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Per major flood prevented</p>
          <p className="text-7xl md:text-9xl font-black text-foreground tracking-tight">$501M</p>
          <p className="text-sm text-muted-foreground mt-3">
            Avoided healthcare and lost wages, community-wide
          </p>
        </div>
      </Section>

      <Section id="assumptions" eyebrow="Inputs" heading="Key assumptions">
        <ul className="space-y-2 text-base text-muted-foreground">
          <AssumptionRow title="Post-event trauma rate replicates">
            Future flood events produce PTSD rates of a similar order of magnitude to post-Sandy, moderated by prior exposure and resilience measures.
          </AssumptionRow>
          <AssumptionRow title="30-month recovery window">
            Taken from published longitudinal studies; longer tails (5+ yrs in some cohorts) are not captured.
          </AssumptionRow>
          <AssumptionRow title="Blended per-resident cost">
            One figure covers both healthcare utilization and reduced earnings — a split model would refine the estimate.
          </AssumptionRow>
        </ul>
      </Section>

      <Section id="limitations" eyebrow="Risk" heading="Sensitivity & limitations">
        <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-5 md:p-6 space-y-3">
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            The headline is a <span className="font-semibold">per-event</span> figure. Converting it
            to an NPV for an investment case requires an assumption about event frequency over the
            project's life — the most uncertain input in the whole model.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The per-resident valuation is also sensitive to local labor-market conditions and
            healthcare access. Community members with pre-existing exposure may see compounded
            rather than additive effects.
          </p>
        </div>
      </Section>

      <Section id="interview" eyebrow="Voices" heading="From the field">
        <InterviewQuote
          quote="Sandy is still top of mind — especially concerning given the lack of follow-up resilience work."
          attribution="Peninsula resident, stakeholder interview"
        />
      </Section>

      <Section id="references" eyebrow="Sources" heading="References">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <RefItem title="Lowe et al." note="Longitudinal PTSD studies of post-Sandy Rockaway residents." />
          <RefItem title="APA disaster mental-health guidelines" note="Clinical benchmarks for recovery windows." />
          <RefItem title="NYC Data Book 2025" note="Peninsula population figures." />
        </ul>
      </Section>
    </>
  )
}

function InputTile({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/20 p-4">
      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{label}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}

function AssumptionRow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2.5" />
      <div>
        <span className="text-foreground font-medium">{title}. </span>
        <span className="text-muted-foreground">{children}</span>
      </div>
    </li>
  )
}

function RefItem({ title, note }: { title: string; note?: string }) {
  return (
    <li className="flex items-start gap-2">
      <span className="text-muted-foreground">—</span>
      <p>
        <span className="text-foreground font-medium">{title}</span>
        {note && <span className="text-muted-foreground"> · {note}</span>}
      </p>
    </li>
  )
}
