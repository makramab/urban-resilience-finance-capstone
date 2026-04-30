# Digital Adaptation Finance for Urban Resilience

Multi-page website for the NYU CUSP Spring 2026 capstone *Digital Adaptation
Finance for Urban Resilience: A Data-Driven Framework Integrating
Infrastructure, Real Estate, and Transportation*.

The site presents the capstone in deeper detail than the poster could fit:
13 pages covering Background, Methodology, an interactive Impact Mapping
flowchart, seven financing-model deep-dives, and a Conclusion.

**Team:** Christian Humann · Afra Kamili · Ziming Xiong
**Sponsor:** Ryutaro Adachi & Takuo Shioda — NEC GX Business Development
**Mentor:** Dr. Yuki Miura — CUSP

---

## Quick start

```bash
bun install
bun run dev        # http://localhost:3000
bun run build      # production build
bun run deploy     # build + deploy to Cloudflare Workers
bun x tsc --noEmit # type check
```

## Stack

- TanStack Start (file-based routing, SSR) + React 19
- Tailwind CSS 4 with shadcn-style OKLch theme tokens, dark by default
- Recharts for charts, `motion` for animation, `lucide-react` for icons
- Cloudflare Workers + Bun

## Routes

```
/                          Landing
/background                I. Background & Objectives
/methodology               II. Workflow
/impact-mapping            III. Cascading Effects Flowchart (interactive)
/models                    Dashboard of all seven models
/models/roadway-flooding   Model 1 — $105M / 10yr
/models/mental-health      Model 2 — $501M / event
/models/housing            Model 3 — $16.5M / event
/models/beach-area         Model 4 — $170M / 10yr
/models/construction-noise Model 5 — $17.1M
/models/model-6            Placeholder
/models/model-7            Placeholder
/conclusion                Takeaways & future work
/references                Sources used across all seven models
```

## Editing & contributing

See **[HANDOVER.md](./HANDOVER.md)** — the canonical guide for anyone picking
up this project. It covers what's real vs illustrative, where each piece of
content lives, common tasks (adding a model, replacing chart data, writing
references), conventions, gotchas, and a roadmap of source materials still to
incorporate.
