# JMRC.intel — Project Content Overview

## What It Is
A marketing and services website for **JMRC.intel**, a regulatory intelligence and consulting firm operating in Kenya and East Africa. Built with React + Vite + TypeScript, backed by a PHP/MySQL API.

---

## Pages

| Route | Description |
|---|---|
| `/` | Main landing page |
| `/services/ltr` | Local Trade Representative & Brand Management |
| `/services/regulatory` | Regulatory Support & Registration |
| `/services/systems` | Systems & Business Operations |
| `/services/pharmacy` | Redirects → `/services/systems` (legacy) |
| `/shop` | Pharmaceutical resources & products shop |
| `*` | 404 Not Found |

---

## Landing Page Sections (in order)

1. **Header** — Navigation bar with logo
2. **Hero** — Interactive split-screen hero with 4-slide system + trust strip (see below)
3. **About** — Company background
4. **Services** — Service cards linking to detail pages
5. **CtaBand** — Call-to-action strip
6. **Map** — Location via Mapbox
7. **Contact** — Contact form (posts to `/api/contact.php`)
8. **Footer** — Links, social, legal

---

## Hero System (`HeroIntel` + `HeroIntelVisual`)

Split-screen layout: 45% left / 55% right. Auto-advances every 6.5s, pauses on hover, keyboard navigable (← →).

| Slide | Title | Right Visual |
|---|---|---|
| 01 | Your Implementation Partner Across East Africa | Logo, service pillar chips, live indicator |
| 02 | Navigate Compliance With Confidence | Animated regulatory workflow (Submission → Review → Approval → Market Entry) |
| 03 | Systems Designed For Sustainable Growth | Platform module progress bars + activity feed |
| 04 | Regional Expertise. Local Execution. | SVG East Africa map — Kenya, Uganda, Tanzania, Rwanda, Ethiopia |

Trust strip below hero: 10+ Years · 200+ Submissions · 5 Markets · 500+ Partners (count-up on scroll).

---

## Services Offered

- **Local Trade Representative (LTR)** — Market entry, brand positioning, local partnerships in Kenya/East Africa
- **Regulatory Support** — Compliance consulting, product registration, documentation, submission support
- **Systems & Business Operations** — Process design, workflow automation, systems integration for regulated organizations

---

## Backend (PHP + MySQL)

| File | Purpose |
|---|---|
| `public/api/config.php` | DB credentials and site config |
| `public/api/contact.php` | Handles contact form → inserts to `contacts` table + sends email |
| `public/api/webhook.php` | Logs inbound SMS/WhatsApp/calls to `communications` table |
| `public/api/setup.sql` | Creates `juxtrx_portal` DB, `contacts` and `communications` tables |

---

## Frontend Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** + **shadcn/ui** (Radix UI primitives)
- **Framer Motion** for hero animations and slide transitions
- **React Router v6** for routing
- **React Hook Form** + **Zod** for form validation
- **Mapbox GL** for the location map
- **TanStack Query** for data fetching
- **Lucide React** for icons

---

## Key Hooks & Utilities

- `use-in-view.ts` — Intersection observer for scroll-triggered animations
- `use-count-up.ts` — Animated number counter (used in hero trust strip)
- `use-mobile.tsx` — Responsive breakpoint detection
- `site-images.ts` — Centralised image path references

---

## Contact Channels (wired in UI)

- Phone/SMS: `tel:` / `sms:` links
- WhatsApp: `https://wa.me/254777795985`
- Email: `mailto:` link
- Map: Google Maps / Mapbox embed
- Social: Instagram, Facebook (open in new tab)
