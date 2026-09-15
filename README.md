# Yogesh Rawat — Portfolio

Portfolio site for **Yogesh Rawat**, Creative Designer (UI/UX & Brand Design).
Built with Next.js (App Router), TypeScript, Tailwind CSS and shadcn/ui
components, with a liquid-metal shader hero from `@paper-design/shaders-react`.

## Stack

- **Next.js 16** (App Router, static export-friendly)
- **TypeScript**
- **Tailwind CSS** with a custom design-token palette (see `app/globals.css`)
- **shadcn/ui** — `button`, `badge`, `card` in `components/ui/`
- **Framer Motion** for scroll reveals and hero animation
- **@paper-design/shaders-react** for the liquid-metal hero background
- **lucide-react** for icons

## Design system

Paper-toned, single theme by deliberate choice — no dark mode, and no
yellow/orange anywhere in the palette. Tokens live in `app/globals.css`:

- `--background` — warm paper white
- `--foreground` — near-black charcoal ink
- `--primary` — deep studio emerald (the only accent color)
- `--secondary` / `--muted` — sunken paper panels
- `--card` — white raised surface

Fonts (wired via `next/font/google` in `app/layout.tsx`):
- **Fraunces** — display/headings
- **Archivo** — body text
- **IBM Plex Mono** — labels, kickers, timestamps

The visual motifs (dot-grid canvas, crop-mark corner brackets, hex-labeled
work-card swatches) are meant to evoke a working designer's own tools, not
decorative gradients.

## Project structure

```
app/
  layout.tsx        # root layout, fonts, metadata
  page.tsx           # assembles all sections
  globals.css        # design tokens + base styles
components/
  ui/                 # shadcn primitives + liquid-metal-hero.tsx
  sections/           # stats, work, about, experience, skills, contact
  site-header.tsx, site-footer.tsx, marquee.tsx, reveal.tsx, counter.tsx, scroll-progress.tsx
lib/utils.ts          # cn() helper
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel (free)

1. Go to https://vercel.com/new and sign in with GitHub.
2. Import this repository.
3. Framework preset: **Next.js** (auto-detected — no config needed).
4. Click **Deploy**.

## Before going live — replace these placeholders

- **Profile photo** — `components/sections/about-section.tsx` currently
  shows a "YR" monogram placeholder. Swap it for a real photo (use
  `next/image` for optimization).
- **Work thumbnails** — `components/sections/work-section.tsx` uses flat
  color swatches as placeholders. Replace with real project
  screenshots/mockups once available.
- **LinkedIn & Behance URLs** — currently point to the generic homepages in
  `components/sections/contact-section.tsx` and `work-section.tsx`. Update to
  the real profile URLs.
- **shadcn components** — to add more shadcn/ui components later, run
  `npx shadcn@latest add <component>` from the project root; `components.json`
  is already configured.

## Notes

- All animations respect `prefers-reduced-motion` via Tailwind/Framer Motion defaults where applicable.
- The liquid-metal shader's colors (`colorBack`/`colorTint`) are set explicitly
  in `components/ui/liquid-metal-hero.tsx` to match the site palette — no
  built-in preset was used, since several ship with warm/amber tones that
  would violate this project's "no orange or yellow" rule.
