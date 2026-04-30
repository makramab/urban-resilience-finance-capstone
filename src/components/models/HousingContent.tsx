import { Section } from '#/components/site/PageShell'
import { BankFrameworkCard } from '#/components/site/BankFrameworkCard'
import { InterviewQuote } from '#/components/site/InterviewQuote'

export function HousingContent() {
  return (
    <>
      <Section id="framework" eyebrow="The card" heading="Bank framework">
        <BankFrameworkCard
          what="Avoided emergency shelter costs for public housing residents after flooding."
          who="15,932 residents across 24 developments; 88% in the flood zone with a 5+ year waitlist for public housing."
          howMuch="$16.5M per event using a shelter cost of $165 per night over 6 to 18 months."
          contribution="The project protects the same buildings that flooded during Hurricane Sandy in 2012."
          risk="Shelter rate is a proxy; real recovery cost also includes schooling and health impacts."
        />
      </Section>

      <Section id="why" eyebrow="Context" heading="Why this matters">
        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            Public housing residents on the Rockaway peninsula face a structural trap: the
            apartments rent below market, the flood exposure is high, and the waitlist for
            alternative public housing units stretches five years or more. When a flood
            displaces them, there is effectively nowhere equivalent to go.
          </p>
          <p>
            Emergency shelter is what the city actually pays for in practice — but it's a floor,
            not a ceiling. The real recovery cost compounds across interrupted schooling,
            healthcare continuity, and the long-term instability of being in temporary housing.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-6">
          <StatTile big="15,932" small="residents in flood-zone public housing" />
          <StatTile big="$535/mo" small="avg rent vs $2,000+ market rate" />
          <StatTile big="5+ yrs" small="waitlist for public housing" />
        </div>
        <div className="mt-3 rounded-lg border-2 border-red-500/30 bg-red-500/5 p-3 text-center">
          <p className="text-lg md:text-xl font-bold text-red-400">88% of units sit in the flood zone</p>
        </div>
      </Section>

      <Section id="how" eyebrow="Method" heading="How we calculated it">
        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            Per-event emergency-shelter cost is computed at $165 per night over a 6–18 month
            window for the 15,932 NYCHA residents in the flood zone.
          </p>
          <p>
            The project protects the same buildings that flooded during Sandy in 2012, removing
            the displacement event itself.
          </p>
        </div>
      </Section>

      <Section id="visualization" eyebrow="Chart" heading="Headline figure">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-10 md:p-14 text-center space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Per flood event</p>
          <p className="text-7xl md:text-9xl font-black text-foreground tracking-tight">$16.5M</p>
          <p className="text-sm text-muted-foreground mt-3">
            Avoided emergency shelter cost, 15,932 residents
          </p>
        </div>
      </Section>

      <Section id="assumptions" eyebrow="Inputs" heading="Key assumptions">
        <ul className="space-y-2 text-base text-muted-foreground">
          <AssumptionRow title="Shelter as a proxy">
            The $165/night rate stands in for the actual displacement cost; many downstream costs are excluded.
          </AssumptionRow>
          <AssumptionRow title="Central displacement duration">
            We use a central estimate within the 6–18 month range. Severe events push well past 18 months for some households.
          </AssumptionRow>
          <AssumptionRow title="Static resident count">
            Headcount is held at current NYCHA levels; long waitlists imply excess demand that is not captured.
          </AssumptionRow>
        </ul>
      </Section>

      <Section id="limitations" eyebrow="Risk" heading="Sensitivity & limitations">
        <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-5 md:p-6 space-y-3">
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            The shelter-rate proxy almost certainly <span className="font-semibold">understates</span>{' '}
            the true displacement cost. Schooling continuity, healthcare disruption, and long-term
            housing instability are excluded.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The per-event headline also doesn't capture the compounding effect of repeated events on
            a population that cannot easily relocate between them.
          </p>
        </div>
      </Section>

      <Section id="interview" eyebrow="Voices" heading="From the field">
        <InterviewQuote
          quote="Housing prices rose during COVID, and even regular housing prices remain high as life returns to the new normal."
          attribution="Peninsula housing advocate, stakeholder interview"
        />
      </Section>

    </>
  )
}

function StatTile({ big, small }: { big: string; small: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/40 p-4 text-center space-y-1">
      <p className="text-2xl md:text-3xl font-black text-foreground">{big}</p>
      <p className="text-xs text-muted-foreground leading-tight">{small}</p>
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
