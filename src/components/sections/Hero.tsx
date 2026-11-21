"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Magnetic from "@/components/motion/Magnetic";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 md:pt-40 pb-12 px-6 md:px-12 border-b border-black/10 bg-white overflow-hidden">
      {/* Subtle Hairline Grid */}
      <div
        className="pointer-events-none absolute inset-0 grid grid-cols-2 md:grid-cols-4 -z-10"
        aria-hidden="true"
      >
        <div className="border-r border-black/[0.03] h-full" />
        <div className="border-r border-black/[0.03] h-full hidden md:block" />
        <div className="border-r border-black/[0.03] h-full" />
        <div className="h-full" />
      </div>

      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Clean Bold Typography & Actions (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-black/60 mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="font-semibold text-black">Creative Developer & UI Engineer</span>
          </motion.div>

          {/* Monumental Clean Bold Display Headline */}
          <div className="space-y-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-[clamp(4.5rem,12vw,12rem)] leading-[0.88] tracking-tight uppercase text-black select-none"
            >
              Osman Ratib
            </motion.h1>
          </div>

          {/* Clean Subtitle in Inter */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="mt-8 font-sans text-lg md:text-xl text-black/75 max-w-xl leading-relaxed font-normal"
          >
            Crafting high-performance digital products, tactile motion systems, and scalable frontend architectures with Next.js, TypeScript, and GSAP.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic strength={0.2}>
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 bg-black text-white border border-black px-8 py-4 font-mono text-xs font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-colors rounded-xs shadow-xs"
              >
                <span>View Works [03]</span>
                <span>↓</span>
              </a>
            </Magnetic>

            <Magnetic strength={0.2}>
              <a
                href="mailto:osmanratib14@gmail.com"
                className="inline-flex items-center gap-2.5 bg-white text-black border border-black/30 px-8 py-4 font-mono text-xs font-semibold tracking-widest uppercase hover:border-black transition-colors rounded-xs"
              >
                <span>Contact</span>
                <span>↗</span>
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right Column: Osman's Photo (Clean & Uncluttered) (5 Cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-full max-w-md"
          >
            {/* Clean Frame for Photo */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xs border border-black/15 bg-neutral-50 shadow-sm">
              <Image
                src="/about-main.png"
                alt="Osman Ratib"
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-contain object-bottom pt-4 transition-transform duration-700 hover:scale-[1.02]"
                priority
              />

              {/* Minimal Clean Caption */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 border border-black/10 rounded-xs shadow-xs">
                <span className="font-mono text-[11px] font-semibold tracking-wider text-black uppercase">
                  Osman Ratib
                </span>
                <span className="font-mono text-[10px] tracking-wider text-black/50 uppercase block">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Minimal Strip */}
      <div className="border-t border-black/10 pt-6 mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-black/50">
        <div className="flex items-center gap-4 tracking-wider uppercase">
          <span>Based in Dhaka, Bangladesh (UTC+6)</span>
          <span>•</span>
          <span>Available for 2026 Projects</span>
        </div>

        <div className="flex items-center gap-2 tracking-wider uppercase text-black/40">
          <span>Scroll to explore</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
}
