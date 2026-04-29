# Handover Guide

This document is the entry point for anyone picking up this project after the
original build. It is written for a future contributor — not necessarily a
frontend engineer — who has seen the capstone poster but not the codebase, and
who likely wants to **add or refine content** rather than redesign the system.

If you only have time for one section, read [§2 What this site is](#2-what-this-site-is)
and [§4 Where each piece of content lives](#4-where-each-piece-of-content-lives).

---

## Table of contents

1. [Quick start](#1-quick-start)
2. [What this site is](#2-what-this-site-is)
3. [Architecture at a glance](#3-architecture-at-a-glance)
4. [Where each piece of content lives](#4-where-each-piece-of-content-lives)
5. [Common tasks](#5-common-tasks)
6. [Conventions & gotchas](#6-conventions--gotchas)
7. [Content gaps — what is real vs illustrative](#7-content-gaps--what-is-real-vs-illustrative)
8. [Source materials to incorporate next](#8-source-materials-to-incorporate-next)
9. [Open work & TODOs](#9-open-work--todos)
10. [Deployment](#10-deployment)
11. [Glossary](#11-glossary)

---

## 1. Quick start

Requirements: [Bun](https://bun.sh) ≥ 1.x.

```bash
bun install
bun run dev        # http://localhost:3000
bun run build      # production build to dist/
bun run deploy     # build + deploy to Cloudflare Workers (wrangler)
bun x tsc --noEmit # type-check only
```

### "I want to..." quick index

| If you want to... | Jump to |
|---|---|
| Edit narrative text on a model page | [§5.1](#51-edit-a-models-narrative) |
| Replace illustrative chart data with real numbers | [§5.2](#52-replace-chart-data-with-real-numbers) |
| Add a new financing model | [§5.3](#53-add-a-new-model) |
| Add a new top-level page (e.g. `/stakeholders`) | [§5.4](#54-add-a-new-top-level-page) |
| Edit the impact-mapping flowchart | [§5.5](#55-edit-the-impact-mapping-flowchart) |
| Add an image, video, or embedded iframe | [§5.6](#56-add-images-videos-or-iframes) |
| Fill in real reference citations | [§5.7](#57-fill-in-real-references) |
| Promote Models 6 & 7 from placeholder to full | [§5.8](#58-promote-models-6--7-from-placeholder-to-full) |
| Understand what content is real vs invented | [§7](#7-content-gaps--what-is-real-vs-illustrative) |

---

## 2. What this site is

A multi-page website that presents the **NYU CUSP Spring 2026 capstone**
*Digital Adaptation Finance for Urban Resilience* in deeper detail than the
single-page poster could fit.

The site has 13 pages: a landing page, four narrative pages (Background,
Methodology, Impact Mapping, Conclusion), an index of models, and seven
individual model pages — five with full content, two reserved as placeholders.

### Source materials used so far

**Only `capstone-poster-v4.pdf`** has been used as the basis for content. The
poster is dense but compressed; almost everything on the site that is not
literally on the poster is either:

1. **Paraphrased and lightly elaborated** from poster text (most "Why this
   matters" sections, the introduction blurbs), or
2. **Illustrative placeholder** that needs to be replaced with real material
   (chart values, references, formulas, assumption tables, sensitivity
   narratives).

See [§7](#7-content-gaps--what-is-real-vs-illustrative) for a per-model
breakdown.

### Source materials NOT yet incorporated

These almost certainly exist and have not yet been used:

- The original capstone proposal / draft / final-report document
- Stakeholder interview transcripts (only short pull-quotes from the poster
  are currently on the site)
- NYCHA Data Book 2025 (only a few headline figures used)
- Datasets feeding the five models (NYC Open Data, PLUTO, ACS, FEMA flood
  hazard, NYCDOT AADT, NYC DEP 311 noise complaints, etc.)
- Cited literature (Lowe et al., WHO Environmental Noise Guidelines, USDOT
  Value of Travel Time Savings, NPS coastal economic studies, etc.)
- Detailed model specifications, formulas, and sensitivity ranges
- Stakeholder analysis matrix (the third pillar of the project — currently
  mentioned only on `/background`)
- Any maps, photos, or diagrams beyond the poster

[§8](#8-source-materials-to-incorporate-next) maps each of these to the place
on the site where they would fit naturally.

---

## 3. Architecture at a glance

### Tech stack

- **Framework:** TanStack Start (file-based routing, SSR by default) + React 19
- **Styling:** Tailwind CSS 4 with shadcn-style OKLch theme tokens (no shadcn
  components installed — just the CSS variables)
- **Charts:** [Recharts](https://recharts.org/) 3.x, theme-aware via CSS
  variables (`var(--color-chart-1)` etc.)
- **Animation:** [`motion`](https://motion.dev/) (formerly Framer Motion) for
  hero entrances and the `StatCounter` count-up
- **Icons:** [`lucide-react`](https://lucide.dev/)
- **Runtime / deploy:** Cloudflare Workers via `@cloudflare/vite-plugin`
- **Package manager / runner:** Bun

### File layout

```
src/
├── routes/                          # File-based routing — one file per URL
│   ├── __root.tsx                   # Root shell: <Header /> + <Outlet /> + <Footer />, dark-by-default
│   ├── index.tsx                    # / — landing page (striking hero)
│   ├── background.tsx               # /background
│   ├── methodology.tsx              # /methodology
│   ├── impact-mapping.tsx           # /impact-mapping
│   ├── conclusion.tsx               # /conclusion
│   ├── routeTree.gen.ts             # AUTO-GENERATED — do not edit
│   └── models/
│       ├── index.tsx                # /models — dashboard of all 7 model cards
│       └── $slug.tsx                # /models/:slug — dynamic route, switches on slug
├── components/
│   ├── site/                        # Shared site primitives
│   │   ├── Header.tsx               # Sticky header + nav + Models dropdown + theme toggle
│   │   ├── Footer.tsx               # 4-column footer with credits + sitemap
│   │   ├── PageShell.tsx            # Exports PageShell, PageHero, Section
│   │   ├── AnchorNav.tsx            # Sticky "On this page" sidebar (model pages)
│   │   ├── BankFrameworkCard.tsx    # What/Who/How Much/Contribution/Risk table
│   │   ├── InterviewQuote.tsx       # Pull-quote block
│   │   ├── ModelSummaryCard.tsx     # Card used in models index, landing, related
│   │   ├── StatCounter.tsx          # Animated count-up, triggers on scroll
│   │   └── ImpactFlowchart.tsx      # Pan/zoom flowchart for /impact-mapping
│   └── models/                      # Per-model content (one file per model)
│       ├── RoadwayFloodingContent.tsx
│       ├── MentalHealthContent.tsx
│       ├── HousingContent.tsx
│       ├── BeachAreaContent.tsx
│       ├── ConstructionNoiseContent.tsx
│       └── PlaceholderContent.tsx   # Reused for Models 6 & 7
├── hooks/
│   └── useTheme.ts                  # Toggles `dark` class on <html>
├── lib/
│   ├── models.ts                    # Single source of truth for the 7 models
│   └── utils.ts                     # cn() helper (clsx + tailwind-merge)
├── styles.css                       # Tailwind + OKLch theme tokens (light + dark)
├── router.tsx                       # TanStack Router config
└── routeTree.gen.ts                 # AUTO-GENERATED top-level alias

public/                              # Static assets (images, videos, iframes)
HANDOVER.md                          # This document
README.md                            # Short project-oriented README → points here
```

### Routing model

- **Static routes**: each top-level page is a single file under `src/routes/`.
- **Dynamic model route**: all seven model pages share `src/routes/models/$slug.tsx`.
  That file looks up the slug in `src/lib/models.ts`, picks a content
  component from a `contentMap`, and renders the shared hero + anchor nav +
  related-models block around it. **You almost never need to edit `$slug.tsx`
  itself** — to change a model, edit the registry and the content file.

### The models registry

`src/lib/models.ts` is the single source of truth for which models exist,
their order, headline numbers, categories, and short summaries. The header
dropdown, the footer, the `/models` dashboard, and the related-models block
on each model page are all driven by this file. **Update it once and every
listing on the site updates.**

---

## 4. Where each piece of content lives

This table maps every visible piece of content to the file you would edit.

### Site shell (visible on every page)

| What you see | File |
|---|---|
| Logo wordmark "Adaptation Finance" | `src/components/site/Header.tsx` |
| Top-nav links (Background / Methodology / Impact Mapping / Conclusion) | `Header.tsx` — `primaryNav` and `endNav` arrays at top |
| Models dropdown items | Driven by `src/lib/models.ts` |
| Footer columns + credits band | `src/components/site/Footer.tsx` |
| Page title in browser tab | `src/routes/__root.tsx` — `head.meta.title` |

### Landing page (`/`)

| Section | Where to edit |
|---|---|
| Hero kicker, headline, subtitle, CTAs | `src/routes/index.tsx` (top of file) |
| "By the numbers" stats | `src/routes/index.tsx` — `<StatCounter>` calls in the second `<section>` |
| Abstract paragraphs | Same file, `Abstract` section |
| "Explore the project" cards | Same file, array literal of icons + descriptions |
| "Five validated quantifications" preview | Reads from `models.ts` (slice of first 3) |
| Credits band (team / sponsor / mentor) | Bottom of `src/routes/index.tsx` |

### Narrative pages

| Page | File |
|---|---|
| `/background` | `src/routes/background.tsx` |
| `/methodology` | `src/routes/methodology.tsx` (the four-stage `stages` array near the top is the main content payload) |
| `/impact-mapping` | `src/routes/impact-mapping.tsx` (the flowchart itself is in `src/components/site/ImpactFlowchart.tsx` — see [§5.5](#55-edit-the-impact-mapping-flowchart)) |
| `/conclusion` | `src/routes/conclusion.tsx` |

### Model pages

For each model, content is split between two files:

1. **`src/lib/models.ts`** — title, slug, headline number, short summary,
   category, ordering. *Driven by this file: header dropdown entries, footer
   list, `/models` dashboard cards, related-model cards.*

2. **`src/components/models/{Model}Content.tsx`** — every section under the
   hero: bank framework, why it matters, how it was calculated, visualization,
   assumptions, limitations, interview quote, references.

The hero (big number + summary + breadcrumb) is rendered by the dynamic route
itself — `src/routes/models/$slug.tsx` — using values from the registry. You
should not normally need to edit `$slug.tsx`.

---

## 5. Common tasks

### 5.1. Edit a model's narrative

1. Open `src/components/models/{Model}Content.tsx`.
2. Each `<Section id="...">` block is a self-contained portion of the page —
   change the prose inside. The `id` attribute (`framework`, `why`, `how`,
   `visualization`, `assumptions`, `limitations`, `interview`, `references`)
   wires the anchor sidebar — **don't change those IDs**, just the content.
3. Save — Vite hot-reloads.

To change the **headline number** ($501M, $16.5M, etc.) or the **short summary**
that appears on dashboards: edit `src/lib/models.ts`, not the content file.

### 5.2. Replace chart data with real numbers

The five chart-bearing model files all declare a `chartData` (or `data`) array
at the top of the file:

- `RoadwayFloodingContent.tsx` — bar chart, 10 years
- `BeachAreaContent.tsx` — three-line chart with named scenarios
- `ConstructionNoiseContent.tsx` — three-bar comparison

Most of these values are **illustrative placeholders**. Replace them with real
numbers as the validation work progresses. Recharts will pick up the new shape
automatically — no other changes needed unless you add new series (in which
case add a new `<Line>` or `<Bar>` and a new color via `var(--color-chart-N)`).

For Models 2 (Mental Health) and 3 (Housing), the visual is a custom
infographic rather than a chart, so it's just JSX — edit it inline in the
`<Section id="visualization">` block.

### 5.3. Add a new model

To add an eighth model — say, "Public Health Cost":

1. **Add an entry** in `src/lib/models.ts`:

   ```ts
   {
     slug: 'public-health',
     number: 8,
     title: 'Public Health Cost Avoided',
     short: 'Public Health',
     headline: '$XXM',
     summary: 'One-line summary used on dashboards.',
     category: 'Health', // or add a new category
   }
   ```

2. **Create the content file** `src/components/models/PublicHealthContent.tsx`.
   Easiest: copy `RoadwayFloodingContent.tsx` (richest template) and rewrite
   the eight sections. **Keep the section IDs unchanged** — the anchor nav
   depends on them.

3. **Register it** in `src/routes/models/$slug.tsx`:

   ```ts
   import { PublicHealthContent } from '#/components/models/PublicHealthContent'

   const contentMap: Record<string, React.ComponentType> = {
     // ...existing entries
     'public-health': PublicHealthContent,
   }
   ```

4. Save. The header dropdown, footer, `/models` dashboard, and related-models
   blocks all update automatically. URL: `/models/public-health`.

### 5.4. Add a new top-level page

Example: a `/stakeholders` page for the third capstone deliverable.

1. **Create** `src/routes/stakeholders.tsx`:

   ```tsx
   import { createFileRoute } from '@tanstack/react-router'
   import { PageShell, PageHero, Section } from '#/components/site/PageShell'

   export const Route = createFileRoute('/stakeholders')({ component: Stakeholders })

   function Stakeholders() {
     return (
       <PageShell>
         <PageHero
           kicker="IV. Stakeholders"
           title="Stakeholder Analysis"
           subtitle="Optional subtitle."
         />
         {/* sections */}
       </PageShell>
     )
   }
   ```

2. **Add it to the header nav** — open `src/components/site/Header.tsx` and
   append to `primaryNav` (or `endNav` if it should sit after Models).

3. **Add it to the footer sitemap** — `src/components/site/Footer.tsx`,
   "Project" column.

4. Save and run `bun run dev` — `routeTree.gen.ts` regenerates automatically.

### 5.5. Edit the impact-mapping flowchart

`src/components/site/ImpactFlowchart.tsx` declares a `categories` array near
the top. Each category has a `name`, a `tone` (`'negative' | 'mixed' |
'positive'` — controls color), and a `nodes` array of impact strings.

The current categories are paraphrased from the poster's much larger
flowchart. You can:

- **Rewrite a node** — change a string in `nodes`.
- **Add a node** — push to the array.
- **Add a whole category** — append a new object. The flowchart is
  horizontally scrollable, so adding columns just makes it wider.
- **Change a category's tone** — change `tone` to one of the three values.

The pan/zoom interaction is generic — no need to touch it when editing
content.

### 5.6. Add images, videos, or iframes

1. Drop the file in `public/`. It will be served at the same path
   (`public/site-photo.jpg` → `/site-photo.jpg`).
2. Reference from a slide / page:

   ```tsx
   <img src="/site-photo.jpg" alt="..." className="rounded-xl border border-border" />

   <video src="/walkthrough.mp4" autoPlay loop muted playsInline className="rounded-xl" />

   <iframe src="/embedded-map.html" title="..." className="w-full h-96 rounded-xl border border-border" />
   ```

3. For env-driven URLs (e.g. Mapbox tokens like the midterm uses), put the
   token in `.env.local` as `VITE_MAPBOX_TOKEN=...` and reference it as
   `import.meta.env.VITE_MAPBOX_TOKEN`. Do **not** commit `.env.local`.

### 5.7. Fill in real references

Each `*Content.tsx` ends with a `<Section id="references">` block holding a
`<ul>` of `<RefItem>` entries. The current entries are paraphrased — they
need to become real citations.

Recommended format per item:

```tsx
<RefItem
  title="Lowe, S.R. et al. (2014). Mental health …"
  note={
    <>
      <em>Journal of Traumatic Stress</em>, 27(4) ·{' '}
      <a className="underline hover:text-foreground" href="https://doi.org/...">
        DOI
      </a>
    </>
  }
/>
```

(The `RefItem` helper in each model file currently expects `note` as a string;
extend it to accept `ReactNode` if you want inline links — one-line change.)

If a unified references page becomes useful, see [§5.4](#54-add-a-new-top-level-page) for adding `/references`.

### 5.8. Promote Models 6 & 7 from placeholder to full

Both currently render `PlaceholderContent` (eight empty sections with an
hourglass icon).

1. Decide on the model's title, slug rename (currently `model-6` / `model-7`),
   headline number, and category.
2. Update the entry in `src/lib/models.ts` — change `slug`, `title`, `short`,
   `headline`, `summary`, `category`.
3. Create `src/components/models/{NewName}Content.tsx` (copy from any
   completed model).
4. Update the `contentMap` in `src/routes/models/$slug.tsx` to point the new
   slug at the new content file. Remove the `'model-6'` / `'model-7'` key if
   you renamed.
5. The dashboard card will switch from the "TBD / Hourglass" appearance to a
   normal card automatically (driven by `category !== 'TBD'`).

---

## 6. Conventions & gotchas

### Theme — use semantic classes, not hardcoded colors

The site uses shadcn-style theme variables exposed as Tailwind utilities. Use
`bg-muted`, `text-foreground`, `text-muted-foreground`, `border-border`,
`bg-primary/10`, `text-destructive` — these all flip correctly between dark
(default) and light themes.

For chart colors, use the CSS variables directly: `var(--color-chart-1)`
through `var(--color-chart-5)` — these too are theme-aware.

For accent colors that don't have a semantic token (red/amber/emerald in the
flowchart legend), keep using Tailwind `bg-red-500/10` etc. — they look fine
in both modes.

### HTML entities only render between JSX tags

This works:

```tsx
<p>Hello &mdash; world</p>           // renders the em-dash
```

This does NOT work:

```tsx
<Section heading="Hello &mdash; world" />   // renders literal "&mdash;"
```

Inside string-typed props or `prop="..."` strings, use the **Unicode
character directly** (`—`, `×`, `–`, `±`, `°`, `µ`) rather than HTML entities.

### Recharts must be mounted on the client

Recharts needs `window` to lay out. To avoid SSR layout glitches, every chart
follows this pattern:

```tsx
const [mounted, setMounted] = useState(false)
useEffect(() => setMounted(true), [])

return (
  <div className="w-full h-72">
    {mounted ? <ResponsiveContainer>...</ResponsiveContainer> : null}
  </div>
)
```

Keep this pattern when adding new charts.

### Recharts type signatures

Recharts 3.x types `Tooltip` formatters as accepting `ValueType | undefined`
rather than `number`. If TS complains, drop the explicit type annotation:

```tsx
formatter={(v) => [`$${v}M`, 'Cost']}        // OK
formatter={(v: number) => [`$${v}M`, 'Cost']}  // TS error in 3.x
```

For `LabelList` formatters that need to do math, coerce with `Number(v)`
inside the function body.

### `routeTree.gen.ts` is auto-generated

Don't hand-edit. It rewrites on `bun run dev` and `bun run build`. If
something gets stuck, delete it and run `bun run build` to regenerate.

### Section IDs are part of the anchor-nav contract

Every model page expects these IDs in this order:

```
overview · framework · why · how · visualization · assumptions · limitations · interview · references · related
```

`overview` and `related` are emitted by `src/routes/models/$slug.tsx`. The
remaining eight come from the content file. Keep the IDs intact even if you
rename the headings — the anchor sidebar (`AnchorNav.tsx`) hardcodes this
list.

### Components vs routes

- Anything visual that's reused across multiple pages → `src/components/site/`
- Anything specific to one model → `src/components/models/`
- Anything that's a route → `src/routes/`

### lucide-react icons

Search [lucide.dev/icons](https://lucide.dev/icons) for available icons.
Import individually:

```tsx
import { ChevronDown, Sun, Moon } from 'lucide-react'
```

Avoid `import * as Icons from 'lucide-react'` — it ships the whole library to
the client.

---

## 7. Content gaps — what is real vs illustrative

This is the most important section for new contributors. **Anything marked
"illustrative" is a placeholder I generated in the absence of real source
material — replace with the real content as soon as it's available.**

### Site-wide

| Element | Source | Status |
|---|---|---|
| Project title, team, sponsor, mentor | Poster | ✓ Real |
| All five validated headline numbers ($105M, $501M, $16.5M, $170M, $17.1M) | Poster | ✓ Real |
| Bank-framework field text (What/Who/How Much/Contribution/Risk) for each model | Poster | ✓ Real, lightly tightened for prose flow |
| Interview quotes | Poster | ✓ Real, but **single short quote per model** — the full transcripts almost certainly have more |
| Methodology workflow stages | Poster | ✓ Real, slightly expanded |
| Impact flowchart categories | Poster | ⚠ Paraphrased — the poster's flowchart has more nodes and finer groupings than the seven columns now on the site |
| `$809.6M+` on landing | Math (sum of five headlines) | ⚠ Sum is correct, but mixing per-event and 10yr figures into one stat is conceptually loose — flag or replace with a more honest aggregate |
| "5 impact categories" stat on landing | Made up | ✗ Replace with a defensible figure |
| Per-resident / per-night / per-hour valuations (where named) | Poster | ✓ Real |

### Per-model

| Model | What's real | What's illustrative |
|---|---|---|
| **Roadway Flooding** | Headline ($105M), bank-framework fields, interview quote | Bar chart yearly values (invented), formula breakdown, input-tile descriptions, assumption text, references |
| **Mental Health** | Headline ($501M), 21%/6% PTSD stat, $4,555/resident, 30-month window, interview quote | Per-resident valuation breakdown, "why this matters" elaboration, references |
| **Housing Displacement** | Headline ($16.5M), 15,932 residents, $535/mo vs $2,000+ market, 5+ year waitlist, 88% in flood zone, $165/night, 6–18 month range, interview quote | Formula breakdown, assumption text, references |
| **Beach Area Loss** | Headline ($170M), interview quote | Three-scenario line chart values (entirely invented), formula breakdown, assumptions, references |
| **Construction Noise** | Headline ($17.1M), 44,000 residents, 6 years, -37% / +21% / +57% complaint changes, interview quote | Formula breakdown, dose-response framing details, assumptions, references |
| **Models 6 & 7** | — | All placeholder. Whole content TBD |

### Where I extrapolated narrative

Every model's "Why this matters", "Sensitivity & limitations", and most
"Assumptions" prose is paraphrased and lightly extended beyond what the
poster contains. The direction is faithful but the specific phrasings are
mine and should be reviewed by the original team.

---

## 8. Source materials to incorporate next

For each likely-available source, the natural place(s) on the site:

### Original capstone proposal / final report document

- `/background` — full project framing, NYC context, why-now arguments
- `/methodology` — formal methods write-up, datasets used, validation
- Each model's `<Section id="why">` and `<Section id="how">` — replace
  paraphrase with primary text

### Stakeholder interview transcripts

- Every model's `<Section id="interview">` currently shows **one short
  quote**. Add an array of quotes per model and either render them stacked
  or in a `<details>` block.
- Consider a new `/voices` route gathering the most representative quotes
  (recipe in [§5.4](#54-add-a-new-top-level-page)).

### NYCHA Data Book 2025

- `/models/housing` — exact development-by-development figures, possibly a
  table or small chart.
- `/background` — population context.

### Datasets feeding the models

- NYCDOT AADT counts → `/models/roadway-flooding` (replace illustrative bar
  chart with real annual closure-cost estimates).
- NYC DEP 311 noise complaints → `/models/construction-noise` (the bar chart
  is real shape, real numbers — confirm the year-range and project-area
  definitions).
- NPS visitor-spending data → `/models/beach-area` (replace illustrative
  three-scenario line chart with empirical ranges).
- FEMA flood hazard polygons + PLUTO joins → could anchor a **new map page**
  (e.g. `/map`) showing exposure layers, possibly via Leaflet or Mapbox in
  an iframe (see midterm `urban-sensing-midterm` for a Leaflet pattern).

### Cited literature

- Mental health: Lowe et al., APA disaster guidelines
- Construction noise: WHO Environmental Noise Guidelines, FHWA / FAA noise
  monitoring
- Roadway delay: USDOT Value of Travel Time Savings
- Beach: NPS / NOAA coastal economic studies, coastal engineering on erosion
- General: Setälä, Yli-Pelkonen, Janhall (referenced in the midterm), Nowak
  (urban trees / pollution)

These belong in each model's `<Section id="references">`. A unified
`/references` page is a reasonable addition once 30+ entries accumulate.

### Stakeholder analysis matrix

The third capstone deliverable. Currently mentioned only as objective #03 on
`/background`. Strong candidate for its own `/stakeholders` route — likely a
matrix or grouped cards of public / private / community entities, each with
goals, constraints, and which of the seven models speak to them.

### Maps, photos, diagrams

Drop in `public/`, reference per [§5.6](#56-add-images-videos-or-iframes).
Site photos of construction zones, before/after flood imagery, and the
original poster's flowchart graphic (as a fallback if the interactive
flowchart proves insufficient) all have natural homes.

---

## 9. Open work & TODOs

### Content
- [ ] Replace illustrative chart values in Models 1, 4 with real data
- [ ] Fill in real references in all five model files + landing page
- [ ] Define and write Models 6 & 7
- [ ] Expand the impact-mapping flowchart back to the poster's full granularity
- [ ] Add stakeholder analysis content (own page, see §8)
- [ ] Add longer interview excerpts where transcripts allow

### Engineering
- [ ] Re-evaluate the `$809.6M+` landing stat — currently mixes per-event and
      10-year figures (see §7)
- [ ] Add tests (none exist yet — Vitest is configured but unused)
- [ ] Add SEO meta per page (only `__root.tsx` has site-wide meta)
- [ ] Add accessibility audit pass (heading hierarchy, color contrast in
      light mode, dropdown keyboard nav)
- [ ] Consider preloading the Recharts bundle on hover of model links
- [ ] Decide whether to lift the "models" registry into a CMS / JSON file if
      content updates become frequent

### Validation (from `/conclusion`)
- [ ] Sensitivity analysis on each model's headline figure
- [ ] Peer review / spot-check of unit valuations against fresh literature
- [ ] Combined-portfolio framework across all seven models (the recommended
      future tool)

---

## 10. Deployment

The project is configured to deploy to Cloudflare Workers via Wrangler.

```bash
bun run deploy
```

This runs `bun run build` then `wrangler deploy`. You need to be logged into
the Cloudflare account that owns the worker (`wrangler login` if not).

The Worker config is in `wrangler.jsonc`. Static assets are served from
`dist/client/`; the SSR handler is in `dist/server/`.

For local production preview without deploying:

```bash
bun run preview
```

---

## 11. Glossary

- **Bank framework** — the five-field card (What / Who / How Much /
  Contribution / Risk) used as the comparable output of every model. Modeled
  on how investment banks structure due-diligence summaries.
- **Cascading impact** — the chain of secondary effects that ripple from a
  resilience intervention into community, economic, and financial outcomes.
- **Dose-response** — epidemiological term: the function relating exposure
  intensity (decibels of noise, hours of flood disruption) to a measurable
  health or behavioral outcome.
- **Exposure layer** — the GIS layer that identifies who or what is affected
  by a given hazard (residents in a flood zone, properties under a noise
  footprint, etc.).
- **AADT** — Annual Average Daily Traffic. NYCDOT's per-segment traffic
  volume measurement, used for the roadway-flooding model.
- **NYCHA** — New York City Housing Authority. The public-housing operator
  whose tenants are quantified in the housing-displacement model.
- **PLUTO** — Primary Land Use Tax Lot Output. NYC's parcel-level dataset.
- **Theme tokens** — the OKLch CSS variables in `styles.css` that define
  every color used in the UI. Edit there to retheme the site.
