"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Magnetic from "@/components/motion/Magnetic";
import Marquee from "@/components/motion/Marquee";
import { useDhakaTime } from "@/hooks/useDhakaTime";
import { useIsTouch } from "@/hooks/useIsTouch";

const INFINITE_MARQUEE_ITEMS = [
  "OSMAN RATIB",
  "CREATIVE DEVELOPER",
  "FULL STACK ARCHITECT",
  "NEXT.JS 16",
  "GSAP 3.15 MOTION",
  "TYPESCRIPT",
  "FLUID UI INTERFACES",
  "LIGHTHOUSE 99+",
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const isTouch = useIsTouch();
  const dhakaTime = useDhakaTime();

  // 3D Parallax Tilt for Osman's second photo (about.jpg)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["9deg", "-9deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-9deg", "9deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-8 border-b border-black/10 bg-white overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 grid grid-cols-2 md:grid-cols-4 -z-10"
        aria-hidden="true"
      >
        <div className="border-r border-black/[0.03] h-full" />
        <div className="border-r border-black/[0.03] h-full hidden md:block" />
        <div className="border-r border-black/[0.03] h-full" />
        <div className="h-full" />
      </div>

      {/* Top Meta Strip */}
      <div className="px-6 md:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 pb-4 mb-6">
        <div className="flex items-center gap-3 font-mono text-xs tracking-wider uppercase text-black/60">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-semibold text-black">Available for 2026 Contracts</span>
          <span className="text-black/30">•</span>
          <span>Remote Worldwide</span>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs tracking-wider uppercase text-black/50">
          <span>Dhaka, BD (UTC+6)</span>
          <span className="text-black/30">•</span>
          <span className="text-black font-semibold tabular-nums">{dhakaTime}</span>
        </div>
      </div>

      {/* Main Hero Split Content */}
      <div className="px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto py-6">
        {/* Left Column: Monumental Bold Typography & CTAs (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-black/60 mb-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-black/60" />
            <span className="font-semibold text-black">Creative Developer & UI Engineer</span>
          </motion.div>

          {/* Monumental Bebas Neue Display Headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-[clamp(4.8rem,13vw,13rem)] leading-[0.85] tracking-tight uppercase text-black select-none"
            >
              Osman Ratib
            </motion.h1>
          </div>

          <div className="overflow-hidden mt-1">
            <motion.h2
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-[clamp(2.5rem,6.5vw,6.5rem)] leading-[0.9] tracking-tight uppercase text-neutral-400 select-none"
            >
              Digital Craftsman<span className="text-emerald-500">.</span>
            </motion.h2>
          </div>

          {/* Clean Subtitle in Inter */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
            className="mt-6 font-sans text-base md:text-xl text-black/75 max-w-xl leading-relaxed font-normal"
          >
            Crafting high-performance digital products, tactile motion systems, and scalable frontend architectures with Next.js, TypeScript, and fluid animations.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic strength={0.2}>
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 bg-black text-white border border-black px-8 py-4 font-mono text-xs font-semibold tracking-wider uppercase hover:bg-neutral-800 transition-colors rounded-xs shadow-xs"
              >
                <span>View Works [03]</span>
                <span>↓</span>
              </a>
            </Magnetic>

            <Magnetic strength={0.2}>
              <a
                href="mailto:osmanratib14@gmail.com"
                className="inline-flex items-center gap-2.5 bg-white text-black border border-black/30 px-8 py-4 font-mono text-xs font-semibold tracking-wider uppercase hover:border-black transition-colors rounded-xs"
              >
                <span>Contact</span>
                <span>↗</span>
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right Column: Unique 3D Tilt Frame with the Second Photo (about.jpg) (5 Cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: isTouch ? 0 : rotateX,
              rotateY: isTouch ? 0 : rotateY,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-full max-w-sm sm:max-w-md group cursor-pointer"
          >
            {/* Architectural Crosshair Corners */}
            <span className="absolute -top-3 -left-3 font-mono text-xs text-black/40 select-none z-20">+</span>
            <span className="absolute -top-3 -right-3 font-mono text-xs text-black/40 select-none z-20">+</span>
            <span className="absolute -bottom-3 -left-3 font-mono text-xs text-black/40 select-none z-20">+</span>
            <span className="absolute -bottom-3 -right-3 font-mono text-xs text-black/40 select-none z-20">+</span>

            {/* Photo Card with 3D Depth */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xs border-2 border-black/15 bg-neutral-100 shadow-xl transition-all duration-500 group-hover:border-black group-hover:shadow-2xl">
              <Image
                src="/about.jpg"
                alt="Osman Ratib"
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                priority
              />

              {/* Minimal Clean Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 border border-black/10 rounded-xs shadow-md flex items-center justify-between">
                <div>
                  <span className="font-heading text-xs font-bold tracking-tight text-black uppercase block">
                    Osman Ratib
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-black/50 uppercase">
                    Software Engineer • Dhaka, BD
                  </span>
                </div>
                <span className="font-mono text-[10px] bg-black text-white px-2 py-0.5 rounded-xs uppercase">
                  Available
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Loop Marquee Ribbon */}
      <div className="mt-8 border-y border-black/10 py-3 bg-neutral-50/80">
        <Marquee items={INFINITE_MARQUEE_ITEMS} speed={25} />
      </div>
    </section>
  );
}
