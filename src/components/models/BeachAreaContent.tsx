import { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Section } from '#/components/site/PageShell'
import { BankFrameworkCard } from '#/components/site/BankFrameworkCard'
import { InterviewQuote } from '#/components/site/InterviewQuote'

const data = Array.from({ length: 11 }, (_, i) => {
  const year = 2025 + i
  return {
    year: String(year),
    'No intervention': Math.round(Math.max(100 - i * 8.5, 0)),
    'Inland only': Math.round(Math.max(100 - i * 5.5, 35)),
    'Beach + inland': Math.round(Math.max(100 - i * 2.0, 78)),
  }
})

export function BeachAreaContent() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      <Section id="framework" eyebrow="The card" heading="Bank framework">
        <BankFrameworkCard
          what="Beachfront tourism spending protected by combined interventions."
          who="Annual beach visitors and local businesses across the Rockaway peninsula."
          howMuch="$170 million in potential lost revenue retained over 10 years."
          contribution="Beach nourishment and protection alongside inland flood infrastructure."
          risk="Variable assumptions, not well validated; visitor numbers modeled linearly, which may not reflect reality."
        />
      </Section>

      <Section id="why" eyebrow="Context" heading="Why this matters">
        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            The Rockaways economy is seasonal and heavily tied to summer beach visitation. The
            beach itself is the asset, not an amenity — erosion and flooding directly shrink the
            usable surface area and, in turn, the local revenue it sustains.
          </p>
          <p>
            Unlike inland flood infrastructure, beach protection pays back partially through
            tourism rather than property or services. This model isolates that piece so it can be
            stacked with the other financial flows from the inland models.
          </p>
        </div>
      </Section>

      <Section id="how" eyebrow="Method" heading="How we calculated it">
        <div className="rounded-xl border border-border bg-muted/20 p-5 md:p-6 font-mono text-sm text-foreground overflow-x-auto">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans mb-3">Formula</p>
          <p className="leading-relaxed">
            <span className="text-primary">Cost</span> ={' '}
            <span>Annual tourism revenue</span> ×{' '}
            <span>Beach-loss rate</span> ×{' '}
            <span>Scenario multiplier</span> ×{' '}
            <span>10 yrs</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          <InputTile label="Baseline revenue" desc="NPS and NYC tourism data for beachfront visitor spending." />
          <InputTile label="Beach-loss rate" desc="Historical erosion + storm impact, extended linearly." />
          <InputTile label="Scenario multipliers" desc="Three scenarios: no intervention, inland only, and beach + inland." />
          <InputTile label="Horizon" desc="10-year cumulative, consistent with other infrastructure models." />
        </div>
      </Section>

      <Section id="visualization" eyebrow="Chart" heading="Three intervention scenarios">
        <div className="rounded-xl border border-border bg-muted/20 p-4 md:p-6">
          <div className="w-full h-72">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="year" stroke="var(--color-muted-foreground)" tick={{ fontSize: 11 }} />
                  <YAxis
                    stroke="var(--color-muted-foreground)"
                    tick={{ fontSize: 11 }}
                    label={{ value: 'Revenue retained (%)', angle: -90, position: 'insideLeft', fill: 'var(--color-muted-foreground)', fontSize: 11 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--color-popover)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 8,
                      color: 'var(--color-popover-foreground)',
                    }}
                    formatter={(v) => [`${v}%`, '']}
                  />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Line type="monotone" dataKey="No intervention" stroke="var(--color-chart-5)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="Inland only" stroke="var(--color-chart-3)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="Beach + inland" stroke="var(--color-chart-2)" strokeWidth={2.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            ) : null}
          </div>
        </div>
      </Section>

      <Section id="assumptions" eyebrow="Inputs" heading="Key assumptions">
        <ul className="space-y-2 text-base text-muted-foreground">
          <AssumptionRow title="Linear visitor decline">
            Scenarios assume visitor numbers fall along straight lines — not realistic for regime shifts or extreme-event years.
          </AssumptionRow>
          <AssumptionRow title="Spend per visitor held constant">
            Per-visitor spending is fixed across the horizon; inflation and tourism mix changes would shift results.
          </AssumptionRow>
          <AssumptionRow title="Combined intervention additivity">
            Beach + inland is modeled as additive; real interactions between infrastructure types are likely nonlinear.
          </AssumptionRow>
        </ul>
      </Section>

      <Section id="limitations" eyebrow="Risk" heading="Sensitivity & limitations">
        <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-5 md:p-6 space-y-3">
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            This model is not well validated and is among the more assumption-heavy in the suite.
            The linear visitor-decline model in particular is a known simplification.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Pairing this with regional comparables (e.g. Fire Island, Jones Beach) and testing
            against tourism-spending data from specific intervention years would substantially
            tighten the projection.
          </p>
        </div>
      </Section>

      <Section id="interview" eyebrow="Voices" heading="From the field">
        <InterviewQuote
          quote="The Rockaways economy is seasonal and highly dependent on summer tourism, so protecting the beach is important."
          attribution="Local business owner, stakeholder interview"
        />
      </Section>

      <Section id="references" eyebrow="Sources" heading="References">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <RefItem title="NPS economic analysis of coastal recreation" note="Visitor-spending benchmarks." />
          <RefItem title="NYC tourism / visitor data" note="Seasonal volume and spending." />
          <RefItem title="Coastal engineering literature" note="Erosion and beach-loss rates." />
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
