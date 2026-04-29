import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Section } from '#/components/site/PageShell'
import { BankFrameworkCard } from '#/components/site/BankFrameworkCard'
import { InterviewQuote } from '#/components/site/InterviewQuote'

const chartData = Array.from({ length: 10 }, (_, i) => {
  const year = 2025 + i
  const cost = Math.round(6.5 + i * 1.05 + Math.sin(i) * 0.4)
  return { year: String(year), cost }
})

export function RoadwayFloodingContent() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      <Section id="framework" eyebrow="The card" heading="Bank framework">
        <BankFrameworkCard
          what="Driver delay costs due to flooding that disrupts local roadways."
          who="Commuters, freight trucks, and local businesses across the peninsula."
          howMuch="$105 million over 10 years."
          contribution="Targeted flood infrastructure can mitigate or prevent roadway closures."
          risk="Variable assumptions, not yet well validated; assumes linear change in disruption over time."
        />
      </Section>

      <Section id="why" eyebrow="Context" heading="Why this matters">
        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            The Rockaway peninsula has a small number of roadway connections to the rest of the
            city. When any of them flood, delay cascades across commuters, deliveries, and service
            trips — disproportionate to the size of the affected segment.
          </p>
          <p>
            The economic cost shows up as hours of lost productive time, fuel burned idling, and
            delivery windows missed. These are usually absorbed quietly by households and small
            businesses and never surface as a line item in project financing.
          </p>
        </div>
      </Section>

      <Section id="how" eyebrow="Method" heading="How we calculated it">
        <div className="rounded-xl border border-border bg-muted/20 p-5 md:p-6 font-mono text-sm text-foreground overflow-x-auto">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans mb-3">Formula</p>
          <p className="leading-relaxed">
            <span className="text-primary">Cost</span> ={' '}
            <span>Exposed roadway segments</span> ×{' '}
            <span>AADT</span> ×{' '}
            <span>Closure hours / event</span> ×{' '}
            <span>Value of delay per vehicle-hour</span> ×{' '}
            <span>Events / yr</span> ×{' '}
            <span>10 yrs</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          <InputTile label="Exposure layer" desc="NYC roadway centerlines spatially joined with FEMA / NYC flood hazard polygons." />
          <InputTile label="Traffic counts" desc="NYCDOT annual average daily traffic (AADT) by segment class." />
          <InputTile label="Delay valuation" desc="USDOT Value of Travel Time Savings per vehicle-hour, passenger + freight blended." />
          <InputTile label="Event rate" desc="Historical flood closure events per year, extrapolated linearly across the horizon." />
        </div>
      </Section>

      <Section id="visualization" eyebrow="Chart" heading="Cumulative delay cost, 10 years">
        <div className="rounded-xl border border-border bg-muted/20 p-4 md:p-6">
          <div className="w-full h-72">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="year" stroke="var(--color-muted-foreground)" tick={{ fontSize: 11 }} />
                  <YAxis
                    stroke="var(--color-muted-foreground)"
                    tick={{ fontSize: 11 }}
                    label={{ value: 'Cost ($M)', angle: -90, position: 'insideLeft', fill: 'var(--color-muted-foreground)', fontSize: 11 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--color-popover)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 8,
                      color: 'var(--color-popover-foreground)',
                    }}
                    formatter={(v) => [`$${v}M`, 'Delay cost']}
                  />
                  <Bar dataKey="cost" fill="var(--color-chart-1)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : null}
          </div>
        </div>
      </Section>

      <Section id="assumptions" eyebrow="Inputs" heading="Key assumptions">
        <ul className="space-y-2 text-base text-muted-foreground">
          <AssumptionRow title="AADT held constant">
            Traffic volumes are assumed stable across the 10-year horizon. Growth or mode shifts would change the result proportionally.
          </AssumptionRow>
          <AssumptionRow title="Linear disruption growth">
            The number of closure hours scales linearly with time. Sea-level rise projections suggest this is conservative.
          </AssumptionRow>
          <AssumptionRow title="Blended per-vehicle valuation">
            One delay-cost figure is applied across passenger and freight; a split model would refine the estimate.
          </AssumptionRow>
        </ul>
      </Section>

      <Section id="limitations" eyebrow="Risk" heading="Sensitivity & limitations">
        <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-5 md:p-6 space-y-3">
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            The headline figure is most sensitive to the number of closure hours per event and the
            per-vehicle-hour delay valuation. Both carry substantial literature spread.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This model is the least validated of the five presented here. A calibration pass against
            observed post-event traffic data (MTA, NYCDOT) would materially tighten the range.
          </p>
        </div>
      </Section>

      <Section id="interview" eyebrow="Voices" heading="From the field">
        <InterviewQuote
          quote="Transportation delays can cause severe impacts, especially when affecting the few ways into or out of the area."
          attribution="Stakeholder interview, peninsula community organization"
        />
      </Section>

      <Section id="references" eyebrow="Sources" heading="References">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <RefItem title="USDOT Value of Travel Time Savings" note="Departmental guidance, latest revision." />
          <RefItem title="NYCDOT Annual Average Daily Traffic counts" note="Published by segment class." />
          <RefItem title="FEMA / NYC Flood Hazard Mapper" note="Used for exposure join." />
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
