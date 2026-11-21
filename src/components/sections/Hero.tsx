"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useDhakaTime } from "@/hooks/useDhakaTime";
import Magnetic from "@/components/motion/Magnetic";
import { projects } from "@/data/projects";

const TECH_TAGS = [
  "Next.js 16",
  "TypeScript",
  "GSAP 3.15",
  "Lenis Smooth Scroll",
  "Framer Motion",
  "Tailwind CSS v4",
  "React 19",
  "Lighthouse 99+",
  "Edge Infrastructure",
];

export default function Hero() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const dhakaTime = useDhakaTime();
  const currentProject = projects[activeProjectIndex];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("osmanratib14@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-8 px-6 md:px-12 border-b border-black/10 overflow-hidden bg-white">
      {/* Subtle Architectural Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 grid grid-cols-4 md:grid-cols-6 -z-10"
        aria-hidden="true"
      >
        <div className="border-r border-black/[0.04] h-full" />
        <div className="border-r border-black/[0.04] h-full" />
        <div className="border-r border-black/[0.04] h-full hidden md:block" />
        <div className="border-r border-black/[0.04] h-full hidden md:block" />
        <div className="border-r border-black/[0.04] h-full" />
        <div className="h-full" />
      </div>

      {/* Top Meta Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 pb-4 mb-8">
        <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-black/60">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-semibold text-black">Status: Available for Q1/Q2 2026</span>
          <span className="text-black/30">•</span>
          <span>Remote Worldwide</span>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs tracking-widest uppercase text-black/50">
          <span>Dhaka, BD (UTC+6)</span>
          <span className="text-black/30">•</span>
          <span className="text-black font-medium tabular-nums">{dhakaTime}</span>
        </div>
      </div>

      {/* Main Split Grid: Hero Content + Interactive Showcase Anchor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto py-6">
        {/* Left Column: Monumental Professional Typography (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="font-mono text-xs font-semibold tracking-widest uppercase bg-black text-white px-3 py-1 rounded-sm">
              Creative Developer
            </span>
            <span className="font-mono text-xs tracking-widest uppercase text-black/50 border border-black/15 px-3 py-1 rounded-sm">
              UI Architect & Engineer
            </span>
          </div>

          {/* Monumental Headline */}
          <div className="space-y-1">
            <h1 className="font-display text-[clamp(3.8rem,10.5vw,10.5rem)] font-extrabold uppercase leading-[0.86] tracking-tight text-black select-none">
              Osman
            </h1>
            <h1 className="font-display text-[clamp(3.8rem,10.5vw,10.5rem)] font-extrabold uppercase leading-[0.86] tracking-tight text-black select-none">
              Ratib<span className="text-emerald-500">.</span>
            </h1>
          </div>

          {/* Impact Statement */}
          <p className="mt-8 font-sans text-lg md:text-xl text-black/75 max-w-xl leading-relaxed font-normal">
            Engineering high-performance web flagships, kinetic micro-interactions, and scalable design architectures with Next.js 16, TypeScript, and GSAP.
          </p>

          {/* Action Row */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.25}>
              <a
                href="#work"
                className="group inline-flex items-center gap-3 bg-black text-white border border-black px-7 py-4 font-mono text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-sm"
              >
                <span>Explore Works [03]</span>
                <span className="transition-transform group-hover:translate-y-0.5">↓</span>
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-2.5 bg-white text-black border border-black/25 px-6 py-4 font-mono text-xs font-semibold tracking-widest uppercase hover:border-black transition-all duration-300 cursor-pointer shadow-xs"
              >
                <span>{copied ? "Copied!" : "osmanratib14@gmail.com"}</span>
                <span className="text-black/40 group-hover:text-black transition-colors">
                  {copied ? "✓" : "↗ copy"}
                </span>
              </button>
            </Magnetic>
          </div>

          {/* Live KPI Metric Strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-black/10 pt-6">
            <div>
              <span className="font-display text-2xl md:text-3xl font-extrabold text-black block">
                03
              </span>
              <span className="font-mono text-[11px] tracking-wider uppercase text-black/50">
                Flagship Builds
              </span>
            </div>
            <div>
              <span className="font-display text-2xl md:text-3xl font-extrabold text-black block">
                99+
              </span>
              <span className="font-mono text-[11px] tracking-wider uppercase text-black/50">
                Lighthouse Score
              </span>
            </div>
            <div>
              <span className="font-display text-2xl md:text-3xl font-extrabold text-black block">
                60 FPS
              </span>
              <span className="font-mono text-[11px] tracking-wider uppercase text-black/50">
                Motion Fluidity
              </span>
            </div>
            <div>
              <span className="font-display text-2xl md:text-3xl font-extrabold text-black block">
                &lt; 1.2s
              </span>
              <span className="font-mono text-[11px] tracking-wider uppercase text-black/50">
                Speed Index
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Hero Showcase Centerpiece (5 Cols) */}
        <div className="lg:col-span-5">
          <div className="relative border border-black/15 bg-neutral-50/70 p-6 md:p-8 rounded-sm shadow-sm overflow-hidden">
            {/* Architectural Frame Header */}
            <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80 inline-block" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-black/40 ml-2">
                  Interactive Preview Folio
                </span>
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase bg-black text-white px-2 py-0.5 rounded-xs">
                Figure 1.0
              </span>
            </div>

            {/* Dynamic Portrait & Project Preview Display */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs border border-black/10 bg-white mb-6 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.slug}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={currentProject.cover}
                    alt={currentProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-emerald-400 mb-1">
                      {currentProject.category}
                    </span>
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                      {currentProject.title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Verified Badge */}
              <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/20 text-white font-mono text-[10px] tracking-wider uppercase flex items-center gap-1.5 shadow-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Next.js 16 Flagship</span>
              </div>
            </div>

            {/* Interactive Project Switcher Chips */}
            <div className="space-y-2">
              <span className="font-mono text-[10px] tracking-widest uppercase text-black/45 block">
                Click or hover to inspect featured builds:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {projects.map((proj, idx) => {
                  const isActive = activeProjectIndex === idx;
                  return (
                    <button
                      key={proj.slug}
                      type="button"
                      onClick={() => setActiveProjectIndex(idx)}
                      onMouseEnter={() => setActiveProjectIndex(idx)}
                      className={`py-2 px-2 text-center border font-mono text-[11px] tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-black text-white border-black font-semibold shadow-xs"
                          : "bg-white text-black/70 border-black/15 hover:border-black"
                      }`}
                    >
                      {proj.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Action to Open Selected Case Study */}
            <div className="mt-5 pt-4 border-t border-black/10 flex items-center justify-between font-mono text-xs">
              <span className="text-black/50 text-[11px]">
                Stack: {currentProject.stack.slice(0, 2).join(" • ")}
              </span>
              <Link
                href={`/work/${currentProject.slug}`}
                className="font-semibold text-black underline underline-offset-4 hover:text-emerald-700 transition-colors flex items-center gap-1"
              >
                <span>Case Study</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Rolling Tech Banner Strip */}
      <div className="mt-8 border-t border-black/10 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="font-mono text-[11px] tracking-widest uppercase text-black/40 shrink-0">
          Core Technologies:
        </div>
        <div className="flex flex-wrap gap-2">
          {TECH_TAGS.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] md:text-[11px] tracking-wider uppercase bg-black/[0.03] text-black/70 px-2.5 py-1 border border-black/10 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
