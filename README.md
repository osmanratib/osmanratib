# osmanratib

> **Editorial / Swiss-Gallery Portfolio** — Monograph of Osman Ratib, Software Engineer & Digital Craftsman.

An Awwwards-caliber digital experience built with Next.js 16, TypeScript, GSAP, Lenis, and Framer Motion. Engineered around editorial Swiss typography, high-contrast monochrome design, and physics-driven motion choreography.

---

## 🏛️ Concept: The Digital Monograph

Built on the concept of an architectural and editorial publication:
- **Swiss Grid Discipline**: 6-column underlying grid with subtle hairlines and generous whitespace.
- **High-Contrast Monochrome**: Pure `#000000` on `#ffffff`, relying on typography scale, layout hierarchy, and motion rather than decorative color.
- **Paper & Ink Motion**: Mask reveals, scroll-scrubbed opacity, magnetic micro-interactions, and inertia-driven smooth scrolling.

---

## 🔤 Typography & Design System

| Role | Font Family | Characteristics |
|---|---|---|
| **Display / Headlines** | **Instrument Serif** | High-contrast classical serif with distinctive italic forms |
| **Body & UI** | **Geist** | Modern geometric sans-serif tuned for readability |
| **Metadata / Numbers** | **Geist Mono** | Strict tabular monospace for timestamps, tags, and indices |

---

## 🛠️ Technology Stack & Role Allocation

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + `@theme` CSS tokens
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis) (inertia scroll + GSAP ScrollTrigger sync)
- **Scroll Orchestration**: [GSAP](https://gsap.com/) + `ScrollTrigger` + `@gsap/react`
- **Component & Layout Motion**: [Framer Motion](https://motion.dev/) (cursor springs, page transitions, word-by-word scroll scrubbing)
- **Icons & Primitives**: Semantic SVG & typography directional cues (`→`, `↗`, `↓`)

---

## 📂 Project Architecture

```
src/
├─ app/
│  ├─ layout.tsx            # Root layout, Lenis provider, cursor, transitions
│  ├─ page.tsx              # Monograph home (Preloader, Hero, Work, About, Capabilities)
│  ├─ work/[slug]/          # Dynamic case studies with deep architectural writeups
│  │  ├─ page.tsx           # Static params & SEO metadata generation
│  │  └─ CaseStudy.tsx      # Video showcase, challenges, outcomes & next links
│  ├─ not-found.tsx         # Monograph 404 page
│  ├─ sitemap.ts            # Dynamic XML sitemap generator
│  └─ globals.css           # Tailwind v4, custom cursor rules, typography tokens
├─ components/
│  ├─ layout/
│  │  ├─ Header.tsx         # Sticky navigation, logo, availability pill & mobile drawer
│  │  ├─ Footer.tsx         # Contact section, marquee, magnetic copy-email CTA
│  │  ├─ Cursor.tsx         # Physics spring cursor with interactive expansion
│  │  └─ Preloader.tsx      # 0→100 counter & mask reveal (session-persisted)
│  ├─ motion/
│  │  ├─ TextReveal.tsx     # Swiss mask-reveal typography component
│  │  ├─ Magnetic.tsx       # Physics-based magnetic attraction wrapper
│  │  ├─ Marquee.tsx        # Infinite typography runner
│  │  └─ PageTransition.tsx  # Route transition wrapper
│  ├─ providers/
│  │  └─ SmoothScroll.tsx   # Lenis ↔ GSAP ScrollTrigger bridge
│  └─ sections/
│     ├─ Hero.tsx           # Giant display headline & subtle grid lines
│     ├─ Work.tsx           # 3 selected works with cursor-following previews
│     ├─ About.tsx          # Scroll-scrubbed opacity reveal paragraph
│     └─ Capabilities.tsx   # Interactive line-draw discipline accordion
├─ data/
│  └─ projects.ts           # Typed project records (CafeBee, Fixnest, Aura Gym)
├─ hooks/
│  ├─ useIsTouch.ts         # Touch device detection
│  └─ useReducedMotion.ts   # Accessibility prefers-reduced-motion hook
└─ lib/
   ├─ gsap.ts               # GSAP registration & custom easing tokens
   └─ utils.ts              # Class merging utilities
```

---

## ⚡ Performance & Polish

- **Lighthouse Performance**: 95+ score target with optimized next/image priority loading
- **Accessibility**: Semantic HTML5 elements, full keyboard navigation, `prefers-reduced-motion` compliance
- **Touch-Aware**: Custom cursor dynamically disabled on mobile & touch displays
- **Zero Layout Shift**: Strict aspect ratio preservation for images and videos

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/osmanratib/osmanratib.git
cd osmanratib

# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build
npm run build
```

---

## 📬 Contact & Colophon

- **Developer**: Osman Ratib
- **Location**: Dhaka, Bangladesh (UTC+6)
- **Email**: [osmanratib.dev@gmail.com](mailto:osmanratib.dev@gmail.com)
- **GitHub**: [@osmanratib](https://github.com/osmanratib)
