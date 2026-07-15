# Phronesis — Frontend

Production-ready frontend for the Phronesis landing page and application flow, built with React 19, Vite, TypeScript, Tailwind CSS, and Framer Motion. Backend and Supabase integration are not wired yet — the application form runs on mock data (see `src/features/apply/applicationService.ts`).

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL. `npm run build` produces a production bundle in `dist/`; `npm run preview` serves it locally.

## What's implemented

- **Design tokens** (`src/theme/tokens.ts`, `tailwind.config.js`) — color, type, spacing, radius, shadow, motion, breakpoints, all sourced from a single place.
- **Shared UI library** (`src/components/ui/`) — Button, Input, Textarea, Select, Card, Badge, Accordion, Timeline (roadmap + wizard modes), TrackCard, Navbar, Footer, Modal, Toast, Loader, Skeleton, EmptyState, ErrorState, Breadcrumb, PageTransition, Section/Container.
- **Landing page** (`src/pages/LandingPage.tsx` + `src/features/landing/*`) — all 16 sections: Hero, Philosophy, Why Phronesis, Learning Methodology, Tracks, Roadmaps, What Students Build, Learning Experience, Paper Club, Industry Case Studies, Practice Platform, Projects, Community, FAQ, Application CTA, Footer.
- **Application flow** (`src/features/apply/`, `src/pages/ApplyPage.tsx`) — 4-step wizard (Personal Info → Track → Motivation/CV → Review), React Hook Form + Zod validation per step, `localStorage` autosave/draft recovery, mock async submit with retry-via-Toast on failure, success and error states.
- **Routing** — React Router with lazy-loaded routes, a shared fade/blur/drift page transition, and a route-level error boundary.
- **Motion** — a single token file (`src/animations/variants.ts`) drives every macro (600ms, emphasized ease) and micro (150–200ms, standard ease) animation; everything respects `prefers-reduced-motion`.
- **Accessibility** — semantic landmarks, keyboard-navigable Accordion/Modal/Navbar, focus-visible states, `aria-*` wiring throughout, a real focus trap in Modal.

## Known gaps (intentional, pending backend phase)

- Application submission is mocked (`applicationService.ts`) — swap in the real Supabase Edge Function call when it's ready.
- Country list, university autocomplete, and phone validation in Step 1 are simplified placeholders, not the full ISO/libphonenumber implementation.
- i18n (Arabic/EN toggle, RTL) is scaffolded at the CSS/font level (`dir` attribute, logical properties, AR font stacks) but no language switcher is wired up yet.
- Analytics, security headers, and rate limiting are backend/infra concerns and aren't part of this frontend-only phase.

## Folder structure

```
src/
  app/            route-level error boundary
  animations/     shared Framer Motion variants
  components/ui/  the shared component library
  features/
    apply/        application wizard, steps, schema, mock service
    landing/       one folder per landing section (index.tsx, {Section}.tsx, content.ts)
  hooks/          useReducedMotion, useScrollSpy, useStaggeredReveal, useFocusTrap
  layouts/        MainLayout (Navbar + Footer shell)
  pages/          route-level page components
  theme/          design tokens (tokens.ts)
  utils/          cn (clsx + tailwind-merge), scrollToSection
```
