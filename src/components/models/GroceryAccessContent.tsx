import { Section } from '#/components/site/PageShell'
import { BankFrameworkCard } from '#/components/site/BankFrameworkCard'

export function GroceryAccessContent() {
  return (
    <>
      <Section id="framework" eyebrow="The card" heading="Bank framework">
        <BankFrameworkCard
          what="Continuity of grocery-store access during and after flood events for surrounding communities."
          who="Local communities served by four major grocery stores (Costco) and the stores themselves."
          howMuch="135,000 of 286,000 households (47%) within 10,000 ft of a Costco fall inside an evacuation zone."
          contribution="Reduced flood risk lowers the need for resident evacuations, keeps roadways clear, and allows stores to stay open."
          risk="Next steps require customer-trip data that is not publicly available, so the financial impact is currently unquantified."
        />
      </Section>

      <Section id="why" eyebrow="Context" heading="Why this matters">
        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            Grocery-store access is a structural, daily-life service — not a luxury. When a flood
            event evacuates the surrounding community or closes the access road, the disruption
            ripples into food security, household budgets (smaller stores price higher), and the
            store's own revenue. That same store is also a hub for pharmacy and other essentials.
          </p>
          <p>
            We frame this model as a <span className="font-semibold text-foreground">service-area
            exposure</span>: how much of the population that depends on a given store sits inside
            an evacuation zone. The number isn't dollarized yet — that step needs customer-trip
            data the project team doesn't have access to — but the household-level exposure is
            already a strong stand-alone signal.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-6">
          <StatTile big="286K" small="households within 10K ft of a Costco" />
          <StatTile big="135K" small="of those inside an evacuation zone" />
          <StatTile big="47%" small="of the served population at risk" />
        </div>
        <div className="mt-3 rounded-lg border-2 border-red-500/30 bg-red-500/5 p-3 text-center">
          <p className="text-lg md:text-xl font-bold text-red-400">Nearly half of every store's catchment is exposed</p>
        </div>
      </Section>

      <Section id="how" eyebrow="Method" heading="How we calculated it">
        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            Each anchor store's catchment is defined as the area within 10,000 feet, intersected
            with NYC evacuation zones to identify the share of households at risk during a flood
            event.
          </p>
          <p>
            Reduced flood risk in those catchments keeps stores open and access roads clear so
            households retain access during events.
          </p>
        </div>
      </Section>

      <Section id="visualization" eyebrow="Map" heading="Service-area exposure">
        <figure className="space-y-3">
          <div className="rounded-xl border border-border overflow-hidden bg-muted/10">
            <img
              src="/grocery-service-area.png"
              alt="Service areas of two selected Costco stores in NYC, with covered block groups symbolized by flood evacuation zone category. Concentric rings show 0–5,000, 5,000–7,500, and 7,500–10,000 ft distance bands."
              className="w-full h-auto"
            />
          </div>
          <figcaption className="text-xs text-muted-foreground">
            Two service areas covering Manhattan and Brooklyn/Queens — block groups in red are in
            the highest-risk evacuation tier. The cream/pink/grey rings encode the 0–5K / 5–7.5K /
            7.5–10K ft distance bands.
          </figcaption>
        </figure>
      </Section>

      <Section id="assumptions" eyebrow="Inputs" heading="Key assumptions">
        <ul className="space-y-2 text-base text-muted-foreground">
          <AssumptionRow title="Costco as a representative anchor">
            Four large stores are chosen as a legible proxy for grocery access. A wider basket
            (small grocers, bodegas, ethnic markets) would broaden coverage but blur the signal.
          </AssumptionRow>
          <AssumptionRow title="10,000-ft service area">
            Real catchments are mode-dependent. The flat radius is a defensible first cut for
            walk-and-short-drive trips.
          </AssumptionRow>
          <AssumptionRow title="Households as the unit of exposure">
            We don't weight by household size or food-insecurity rate; the headline is units, not
            people.
          </AssumptionRow>
          <AssumptionRow title="Evacuation zone as risk proxy">
            NYC OEM zones are a coarse but operational definition of "where flood evacuations get
            ordered." Real damage tracks more closely with FEMA AE/VE.
          </AssumptionRow>
        </ul>
      </Section>

      <Section id="limitations" eyebrow="Risk" heading="Sensitivity & limitations">
        <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-5 md:p-6 space-y-3">
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            The model is currently <span className="font-semibold">unmonetized</span>. Without
            customer-visit or loyalty-card data, we can't yet quantify the revenue lost to a store
            during a closure event, nor the welfare cost to households of substituting to more
            expensive options.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The natural next step is to obtain anonymized trip data from a single store to
            calibrate visit-frequency, average spend, and substitution patterns. With those
            ratios, the 135K-household exposure figure becomes a credible dollar number.
          </p>
        </div>
      </Section>

      <Section id="interview" eyebrow="Voices" heading="From the field">
        <div className="rounded-xl border border-border bg-muted/20 p-5 md:p-6 space-y-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Stakeholder interview material specific to grocery operators is still being gathered.
            Adjacent quotes from Models 1 (transit) and 3 (housing) suggest that food-access
            disruption and roadway disruption are repeatedly conflated by residents — they show up
            as one experience.
          </p>
        </div>
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
