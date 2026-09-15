# Yogesh Rawat — Portfolio

A fast, dependency-free portfolio site for **Yogesh Rawat**, Creative Designer
(UI/UX & Brand Design). Pure HTML/CSS/JS — no build step, no backend, no
framework — so it deploys instantly and stays cheap to host forever.

## Structure

```
.
├── index.html        # all page content/sections
├── css/style.css      # design tokens, layout, animations
├── js/main.js          # cursor, reveal-on-scroll, counters, nav, smooth scroll
└── vercel.json         # clean URLs config for Vercel
```

## Run locally

No build tools needed — any static server works:

```bash
npx serve .
# or
python3 -m http.server 8080
```

Then open the printed local URL.

## Deploy to Vercel (free)

**Option A — Vercel dashboard (easiest):**
1. Go to https://vercel.com/new and sign in with GitHub.
2. Import the `yogeshwebsite` repository.
3. Framework preset: **Other** (no build command, no output directory needed).
4. Click **Deploy**. Done — you'll get a live `*.vercel.app` URL, and every
   future push to this branch/repo redeploys automatically.

**Option B — Vercel CLI:**
```bash
npm i -g vercel
vercel        # first deploy, follow prompts
vercel --prod # promote to production URL
```

## Before going live — replace these placeholders

The content (bio, experience, education, skills) was pulled directly from the
CV. A few things still need real assets/links since they weren't in the CV:

- **Profile photo** — `.portrait-placeholder` in `index.html` currently shows
  a monogram. Swap it for a real photo: add an `<img>` inside
  `.portrait-frame` and remove the placeholder div.
- **Work thumbnails** — the four cards in `#work` use generated gradient
  placeholders (`.visual-fill--1..4`). Replace each with a real project
  screenshot/mockup image once available (e.g. `<img src="...">` inside
  `.work-visual`, `object-fit: cover`).
- **LinkedIn & Behance URLs** — currently point to the generic homepages
  (`linkedin.com`, `behance.net`). Update the `href`s in the nav-less
  `#contact` section and the `#work` "Full case studies" link to the real
  profile URLs.
- **Favicon** — a minimal inline "Y" mark is set via a data URI in
  `<head>`; swap for a proper icon file if you'd like.

## Notes

- All animations respect `prefers-reduced-motion`.
- The custom cursor and magnetic buttons only activate on fine-pointer
  (mouse/trackpad) devices — touch devices get the native cursor.
- Color system, spacing and type scale live as CSS custom properties at the
  top of `css/style.css` — change `--accent` there to re-theme the whole
  site in one edit.
