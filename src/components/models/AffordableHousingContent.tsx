import { Section } from '#/components/site/PageShell'
import { BankFrameworkCard } from '#/components/site/BankFrameworkCard'
import { InterviewQuote } from '#/components/site/InterviewQuote'

export function AffordableHousingContent() {
  return (
    <>
      <Section id="framework" eyebrow="The card" heading="Bank framework">
        <BankFrameworkCard
          what="Avoided storm damage to the lowest-value coastal housing on the Rockaway peninsula."
          who="14,208 residential units in the project boundary — the lowest third by assessed value, used as a proxy for affordability."
          howMuch="$204M (30-year NPV) using federal storm-damage depth curves and a 7% discount rate."
          contribution="New barriers and dunes reduce flood depth at every affected parcel, lowering damages directly."
          risk="Sensitive to flood-zone definition; under the USACE Sandy inundation scenario, units at risk grow to roughly 55,000."
        />
      </Section>

      <Section id="why" eyebrow="Context" heading="Why this matters">
        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            Public-housing displacement (Model 3) covers a small share of the affordability story.
            Most low-income households on the peninsula rent or own privately, and they live in
            the same flood exposure as everyone else — but with the least financial slack to
            recover. Storm damages they can't absorb cascade into displacement, deferred
            maintenance, and long-term value loss for the neighborhood.
          </p>
          <p>
            We use the lowest tertile of assessed value as a proxy for affordability when
            household-income microdata isn't joinable to parcels. It's a coarse filter — but it
            isolates the housing stock that compounding flood damage would push out of the market
            first.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-6">
          <StatTile big="155,809" small="residential units in project boundary" />
          <StatTile big="35,694" small="units in FEMA flood zone" />
          <StatTile big="14,208" small="low-income units at risk" />
        </div>
      </Section>

      <Section id="how" eyebrow="Method" heading="How we calculated it">
        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            The figure is a 30-year net present value of avoided storm damage to the lowest-tertile
            housing units in the project boundary, using federal storm-damage curves at a 7%
            discount rate.
          </p>
          <p>
            New barriers and dunes reduce flood depth at every affected parcel, lowering damages
            directly.
          </p>
        </div>
      </Section>

      <Section id="visualization" eyebrow="Map" heading="Where the at-risk stock sits">
        <figure className="space-y-3">
          <div className="rounded-xl border border-border overflow-hidden bg-muted/10">
            <img
              src="/affordable-housing-map.png"
              alt="Map of the Rockaway peninsula showing lower-value parcels (low-income proxy) overlaid with FEMA AE and VE flood zones, project boundary outlined."
              className="w-full h-auto"
            />
          </div>
          <figcaption className="text-xs text-muted-foreground">
            Lower-value parcels (red) concentrated inside FEMA AE (light blue) and VE (pink, high
            risk) flood zones across the project boundary.
          </figcaption>
        </figure>
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 md:p-10 text-center space-y-2 mt-6">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">30-year NPV</p>
          <p className="text-6xl md:text-8xl font-black text-foreground tracking-tight">$204M</p>
          <p className="text-sm text-muted-foreground mt-3">
            Avoided storm damage to 14,208 affordable units, 7% discount
          </p>
        </div>
      </Section>

      <Section id="assumptions" eyebrow="Inputs" heading="Key assumptions">
        <ul className="space-y-2 text-base text-muted-foreground">
          <AssumptionRow title="Value as affordability proxy">
            The lowest assessed-value tertile substitutes for household income at parcel scale.
            Coarse but spatially join-able to flood data.
          </AssumptionRow>
          <AssumptionRow title="FEMA flood zone as baseline">
            We compute exposure against current FEMA AE/VE polygons. Boundaries shift with each
            flood-map revision.
          </AssumptionRow>
          <AssumptionRow title="7% discount">
            Federal BCA convention. A lower discount (e.g. 3%) raises NPV materially.
          </AssumptionRow>
          <AssumptionRow title="No relocation costs">
            We count avoided structural damage, not the household-level recovery costs that piled
            up in Models 2 and 3.
          </AssumptionRow>
        </ul>
      </Section>

      <Section id="limitations" eyebrow="Risk" heading="Sensitivity & limitations">
        <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-5 md:p-6 space-y-3">
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            The headline figure is{' '}
            <span className="font-semibold">very sensitive to flood-zone definition</span>. Under
            the USACE Hurricane Sandy inundation scenario rather than current FEMA AE/VE, the
            at-risk affordable stock grows from 14,208 to roughly 55,000 units — and the NPV scales
            accordingly.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The value-tertile proxy may also miss income-burdened households living in higher-value
            buildings (e.g. rent-stabilized tenants in market-rate stock). The figure is a floor on
            structural damage, not a ceiling on community-level loss.
          </p>
        </div>
      </Section>

      <Section id="interview" eyebrow="Voices" heading="From the field">
        <InterviewQuote
          quote="Not all houses received insurance to recover from Sandy. Some houses are just empty, and it makes the area feel less safe."
          attribution="Peninsula resident, stakeholder interview"
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
