"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (scrollCueRef.current) {
        gsap.to(scrollCueRef.current, {
          y: 6,
          repeat: -1,
          yoyo: true,
          duration: 1.4,
          ease: "sine.inOut",
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between px-6 md:px-16 pt-36 pb-12 overflow-hidden border-b border-black/10"
    >
      {/* Swiss Monograph Subtle Grid Lines */}
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

      {/* Top Metadata Strip */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-black/50"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-black/60" />
          <span>Independent Software Engineer</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-mono text-xs tracking-widest uppercase text-black/50"
        >
          Based in Dhaka, Bangladesh (UTC+6)
        </motion.div>
      </div>

      {/* Hero Display Typography */}
      <div className="my-auto py-12 md:py-20">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.25 }}
            className="font-serif text-[clamp(3.8rem,13.5vw,15.5rem)] leading-[0.88] tracking-[-0.045em] text-black select-none"
          >
            Osman
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.35 }}
            className="font-serif italic text-[clamp(3.8rem,13.5vw,15.5rem)] leading-[0.88] tracking-[-0.045em] text-black select-none"
          >
            Ratib<span className="font-sans not-italic text-black/30">.</span>
          </motion.h1>
        </div>

        {/* Editorial Sub-Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-8 md:mt-12 max-w-2xl"
        >
          <p className="font-sans text-base md:text-xl text-black/75 leading-relaxed font-light">
            Crafting <em className="font-serif italic font-normal text-black text-lg md:text-2xl">exceptional digital monographs</em>, 
            interactive web platforms, and motion-driven interfaces with uncompromising architectural clarity.
          </p>
        </motion.div>
      </div>

      {/* Bottom Status / Cue Bar */}
      <div className="flex items-end justify-between border-t border-black/10 pt-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 font-mono text-[11px] tracking-widest uppercase text-black/50"
        >
          <span>Available for global work</span>
          <span className="hidden sm:inline text-black/20">•</span>
          <span>Next.js 16 + TypeScript + Motion</span>
        </motion.div>

        <motion.div
          ref={scrollCueRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-black/40"
        >
          <span>Scroll to explore</span>
          <span className="font-serif text-sm">↓</span>
        </motion.div>
      </div>
    </section>
  );
}
