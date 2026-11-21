# osmanratib

> **Editorial / Swiss-Gallery Portfolio** — Monograph of Osman Ratib, Creative Developer & UI Architect.

An Awwwards-caliber digital experience built with Next.js 16, TypeScript, GSAP 3.15, Lenis, and Framer Motion. Engineered with razor-sharp geometric typography (Syne & Plus Jakarta Sans), high-contrast architectural layouts, and physics-driven motion choreography.

---

## 🏛️ Concept: The Architectural Flagship

Built around modern creative development principles:
- **Architectural Grid Discipline**: 6-column underlying grid with subtle hairlines and balanced density.
- **Ultra-Modern Typography**: `Syne` for monumental headlines + `Plus Jakarta Sans` for razor-sharp body text + `JetBrains Mono` for metadata precision.
- **Physics & Motion**: Mask reveals, scroll-scrubbed opacity, magnetic micro-interactions, live local time ticker, and inertia-driven smooth scrolling.

---

## 🔤 Typography & Design System

| Role | Font Family | Characteristics |
|---|---|---|
| **Display / Headlines** | **Syne** (700/800) | Futuristic, monumental, high-impact geometric architecture |
| **Body & UI** | **Plus Jakarta Sans** | Modern geometric sans-serif tuned for readability & authority |
| **Metadata / Code** | **JetBrains Mono** | Strict tabular monospace for timestamps, tags, and indices |

---

## 🛠️ Technology Stack & Role Allocation

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + `@theme` CSS tokens
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis) (inertia scroll + GSAP ScrollTrigger sync)
- **Scroll Orchestration**: [GSAP](https://gsap.com/) + `ScrollTrigger` + `@gsap/react`
- **Component & Layout Motion**: [Framer Motion](https://motion.dev/) (cursor springs, page transitions, word-by-word scroll scrubbing)
- **Icons & Directional Cues**: Semantic typography and SVG primitives (`→`, `↗`, `↓`)

---

## 📂 Project Architecture

```
src/
├─ app/
│  ├─ layout.tsx            # Root layout, Google Fonts, Lenis provider, cursor, transitions
│  ├─ page.tsx              # Monograph home (Preloader, Hero, Work, Process, About, Capabilities)
│  ├─ work/[slug]/          # Dynamic case studies with deep architectural writeups
│  │  ├─ page.tsx           # Static params & SEO metadata generation
│  │  └─ CaseStudy.tsx      # Video showcase, challenges, outcomes & next links
│  ├─ not-found.tsx         # Monograph 404 page
│  ├─ sitemap.ts            # Dynamic XML sitemap generator
│  └─ globals.css           # Tailwind v4, custom cursor rules, typography tokens
├─ components/
│  ├─ layout/
│  │  ├─ Header.tsx         # Navigation, live Dhaka time ticker, availability pill & mobile drawer
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
│     ├─ Hero.tsx           # High-density hero with interactive project switcher & KPI strip
│     ├─ Work.tsx           # 3 selected flagship works with cursor-following previews
│     ├─ Process.tsx        # 4-stage engineering methodology breakdown
│     ├─ About.tsx          # Scroll-scrubbed opacity reveal paragraph & portrait
│     └─ Capabilities.tsx   # Interactive discipline matrix & deliverables
├─ data/
│  └─ projects.ts           # Typed project records (CafeBee, Fixnest, Aura Gym)
├─ hooks/
│  ├─ useDhakaTime.ts       # Real-time ticking clock (Asia/Dhaka UTC+6)
│  ├─ useIsTouch.ts         # Touch device detection
│  └─ useReducedMotion.ts   # Accessibility prefers-reduced-motion hook
└─ lib/
   ├─ gsap.ts               # GSAP registration & custom easing tokens
   └─ utils.ts              # Class merging utilities
```

---

## ⚡ Performance & Polish

- **Lighthouse Performance**: 99+ score target with optimized priority image loading
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
- **Email**: [osmanratib14@gmail.com](mailto:osmanratib14@gmail.com)
- **GitHub**: [@osmanratib](https://github.com/osmanratib)
