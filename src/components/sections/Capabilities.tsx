"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CapabilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  techStack: string[];
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "01",
    title: "Front-End Engineering",
    subtitle: "High-performance web applications",
    description:
      "Crafting production-grade architectures with Next.js, React, TypeScript, and modern state paradigms. Engineered for zero hydration penalty and optimal Core Web Vitals.",
    deliverables: ["Single-Page Applications", "SSR / Edge Rendering", "Design System Implementation"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "02",
    title: "Motion & Creative Interaction",
    subtitle: "Micro-interactions and fluid physics",
    description:
      "Bringing screens to life through choreographed motion, smooth-scroll inertia, spring physics, and canvas rendering. Creating memorable moments that amplify user engagement without bloat.",
    deliverables: ["Scroll-Triggered Sequences", "Page Transitions", "SVG Line Draws & Mask Reveals"],
    techStack: ["GSAP", "ScrollTrigger", "Framer Motion", "Lenis"],
  },
  {
    id: "03",
    title: "Design Systems & UI Architecture",
    subtitle: "Grid precision and component discipline",
    description:
      "Bridging the gap between Figma designs and pristine code. Translating high-contrast editorial concepts into reusable, accessible component libraries that scale across viewports.",
    deliverables: ["Component Libraries", "WCAG 2.1 AA Compliance", "Dark/Light Design Tokens"],
    techStack: ["shadcn/ui", "Radix Primitives", "Figma", "CSS Subgrid"],
  },
  {
    id: "04",
    title: "Performance & Technical SEO",
    subtitle: "Speed optimization and clean metadata",
    description:
      "Rigorous profiling of bundle size, asset pipeline caching, font preloading, and dynamic OpenGraph generation to ensure maximum discoverability and instantaneous load speeds.",
    deliverables: ["Bundle Optimization", "Automated Sitemap & RSS", "LCP / FID / CLS Tuning"],
    techStack: ["Lighthouse", "next/image", "Turbopack", "Edge Caching"],
  },
];

export default function Capabilities() {
  const [activeItem, setActiveItem] = useState<string | null>("01");

  return (
    <section
      id="capabilities"
      className="relative px-6 md:px-12 py-24 md:py-36 border-b border-black/10 bg-white"
    >
      {/* Clean Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-black/10 pb-6 mb-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold bg-black text-white px-2 py-0.5 rounded-xs">
            04
          </span>
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-black">
            Capabilities & Disciplines
          </h2>
        </div>
        <div className="font-mono text-xs tracking-wider uppercase text-black/50">
          Core Services & Tooling
        </div>
      </div>

      {/* Accordion List */}
      <div className="divide-y divide-black/10">
        {CAPABILITIES.map((cap) => {
          const isOpen = activeItem === cap.id;
          return (
            <div key={cap.id} className="relative group">
              <button
                type="button"
                onClick={() => setActiveItem(isOpen ? null : cap.id)}
                className="w-full py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between text-left cursor-pointer focus-visible:outline-none"
              >
                <div className="flex items-start md:items-center gap-6 md:gap-10">
                  <span className="font-mono text-sm md:text-base text-black/30 font-semibold pt-1 md:pt-0">
                    {cap.id}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-black transition-all duration-300 group-hover:translate-x-1">
                      {cap.title}
                    </h3>
                    <p className="font-mono text-xs tracking-wider uppercase text-black/50 mt-1">
                      {cap.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 mt-4 md:mt-0 pl-12 md:pl-0">
                  <span className="hidden lg:inline font-mono text-xs uppercase tracking-wider text-black/40">
                    {isOpen ? "Collapse" : "Explore"}
                  </span>
                  <div
                    className={`h-8 w-8 rounded-full border border-black/20 flex items-center justify-center font-mono text-sm transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-black text-white border-black" : "group-hover:border-black"
                    }`}
                  >
                    +
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-12 md:pl-16 pb-10 pt-2 grid grid-cols-1 md:grid-cols-12 gap-8 text-black">
                      <div className="md:col-span-7">
                        <p className="font-sans text-sm md:text-base text-black/75 leading-relaxed font-normal">
                          {cap.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {cap.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-[11px] tracking-wider uppercase bg-black/[0.04] text-black/70 px-2.5 py-1 border border-black/10 rounded-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="md:col-span-5 border-l border-black/10 pl-6 space-y-2">
                        <span className="font-mono text-xs tracking-wider uppercase text-black/45 block mb-2 font-semibold">
                          Deliverables
                        </span>
                        <ul className="space-y-1.5 font-mono text-xs text-black/70">
                          {cap.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="h-1 w-1 bg-black/40 rounded-full" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
