"use client";

import { motion } from "motion/react";

const STEPS = [
  {
    index: "01",
    phase: "Phase I",
    title: "System Blueprint & Creative Direction",
    description:
      "Deep structural analysis, typography scale selection, design tokens, and modular interface breakdown. Aligning creative vision with scalable Next.js architecture before writing a single line of code.",
    deliverables: ["Design System Foundations", "Component Hierarchy Map", "Motion Choreography Plan"],
  },
  {
    index: "02",
    phase: "Phase II",
    title: "Kinetic Motion & Physics Prototyping",
    description:
      "Choreographing 60 FPS scroll triggers, smooth-scroll inertia with Lenis, and fluid spring animations with Framer Motion. Ensuring motion enhances clarity without compromising latency or battery life.",
    deliverables: ["GSAP ScrollTrigger Timelines", "Micro-interaction Tuning", "Reduced-Motion Fallbacks"],
  },
  {
    index: "03",
    phase: "Phase III",
    title: "Full-Stack Production Engineering",
    description:
      "Developing strict TypeScript codebases, Server Components, and zero-layout-shift asset delivery. Built on Next.js 16 App Router for rapid response times and pristine maintainability.",
    deliverables: ["Next.js App Router Structure", "Strict TypeScript Schemas", "Dynamic Route Prerendering"],
  },
  {
    index: "04",
    phase: "Phase IV",
    title: "Lighthouse 99+ Polish & Edge Deployment",
    description:
      "Sub-second First Contentful Paint tuning, asset compression, dynamic sitemaps, OpenGraph image generation, and edge caching. Rigorous testing across browsers and viewport boundaries.",
    deliverables: ["Core Web Vitals Optimization", "Automated XML Sitemaps", "Global Edge CDN Caching"],
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative px-6 md:px-12 py-24 md:py-36 border-b border-black/10 bg-neutral-50/60"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-black/10 pb-6 mb-16">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold bg-black text-white px-2 py-0.5 rounded-xs">
            02
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight uppercase text-black">
            Engineering Methodology
          </h2>
        </div>
        <div className="font-mono text-xs tracking-widest uppercase text-black/50">
          How Ambitious Web Projects Are Built (4 Steps)
        </div>
      </div>

      {/* 4-Step Architectural Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step) => (
          <div
            key={step.index}
            className="group relative border border-black/15 bg-white p-7 md:p-8 rounded-sm transition-all duration-300 hover:border-black hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-baseline justify-between border-b border-black/10 pb-4 mb-6">
                <span className="font-display text-3xl font-extrabold text-black">
                  {step.index}
                </span>
                <span className="font-mono text-[11px] tracking-widest uppercase text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-200">
                  {step.phase}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold tracking-tight text-black mb-4">
                {step.title}
              </h3>

              <p className="font-sans text-sm text-black/70 leading-relaxed font-normal mb-8">
                {step.description}
              </p>
            </div>

            <div className="border-t border-black/10 pt-4">
              <span className="font-mono text-[10px] tracking-widest uppercase text-black/45 block mb-2 font-medium">
                Deliverables:
              </span>
              <ul className="space-y-1 font-mono text-[11px] text-black/75">
                {step.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="h-1 w-1 bg-black/40 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
