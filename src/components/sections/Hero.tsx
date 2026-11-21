"use client";

import { useRef, useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  // Smooth mouse tracking for depth parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax translation for the image and the offset wireframe shadow
  const photoX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const photoY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);
  const shadowX = useTransform(smoothX, [-0.5, 0.5], [16, -16]);
  const shadowY = useTransform(smoothY, [-0.5, 0.5], [12, -12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-8 border-b border-black/10 bg-white overflow-hidden text-center"
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
        <div className="flex items-center justify-center sm:justify-start gap-3 font-mono text-xs tracking-wider uppercase text-black/60">
          <span className="h-1.5 w-1.5 rounded-full bg-black/60" />
          <span className="font-semibold text-black">Remote Worldwide</span>
          <span className="text-black/30">•</span>
          <span>Digital Engineering & Motion</span>
        </div>

        <div className="flex items-center justify-center sm:justify-end gap-4 font-mono text-xs tracking-wider uppercase text-black/50">
          <span>Dhaka, BD (UTC+6)</span>
          <span className="text-black/30">•</span>
          <span className="text-black font-semibold tabular-nums">{dhakaTime}</span>
        </div>
      </div>

      {/* Main Centered Content Container */}
      <div className="px-6 md:px-12 flex flex-col items-center justify-center my-auto py-4 max-w-5xl mx-auto w-full">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-black/60 mb-3"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-black/60" />
          <span className="font-semibold text-black">Creative Developer & UI Engineer</span>
        </motion.div>

        {/* Monumental Centered Display Headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            className="font-display text-[clamp(4.8rem,14vw,14rem)] leading-[0.85] tracking-tight uppercase text-black select-none"
          >
            Osman Ratib
          </motion.h1>
        </div>

        {/* CENTERED HERO PHOTO WITH DISTINCTIVE CINEMATIC ANIMATIONS */}
        <div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          className="relative my-7 w-64 sm:w-72 md:w-80 flex items-center justify-center cursor-pointer select-none"
        >
          {/* 1. Behind: Offset Architectural Wireframe Layer with Counter-Parallax */}
          <motion.div
            style={{
              x: isTouch ? 0 : shadowX,
              y: isTouch ? 0 : shadowY,
            }}
            className="absolute inset-0 border-2 border-black/30 rounded-xs -z-10 translate-x-3 translate-y-3 pointer-events-none transition-transform"
          />

          {/* 2. Floating Animated Spinning Gallery Seal Stamp */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
            className="absolute -top-7 -right-7 sm:-top-9 sm:-right-9 z-30 pointer-events-none hidden sm:block"
          >
            <div className="relative h-20 w-20 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
                <path
                  id="stampCircle"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[10px] uppercase font-mono tracking-widest font-semibold">
                  <textPath href="#stampCircle">
                    • OSMAN RATIB • CREATIVE DEV • 2026 •
                  </textPath>
                </text>
              </svg>
              <div className="absolute h-3 w-3 rounded-full bg-emerald-500" />
            </div>
          </motion.div>

          {/* 3. Main Photo Card with Smooth Sine Wave Levitation & Parallax Motion */}
          <motion.div
            style={{
              x: isTouch ? 0 : photoX,
              y: isTouch ? 0 : photoY,
            }}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="relative aspect-[3/4] w-full overflow-hidden rounded-xs border-2 border-black bg-neutral-100 shadow-2xl group"
          >
            {/* Cinematic Curtain Mask Unclip on Load */}
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
              className="relative h-full w-full"
            >
              <Image
                src="/about.jpg"
                alt="Osman Ratib"
                fill
                sizes="(max-width: 768px) 280px, 320px"
                className={`object-cover transition-all duration-700 ${
                  isHovered ? "grayscale-0 scale-105" : "grayscale contrast-115 scale-100"
                }`}
                priority
              />

              {/* 4. Light Sweep Shimmer Flare on Hover */}
              <motion.div
                animate={
                  isHovered
                    ? { x: ["-120%", "200%"] }
                    : { x: "-120%" }
                }
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 pointer-events-none"
              />

              {/* Corner Crosshair Reticles */}
              <span className="absolute top-2 left-2 font-mono text-[10px] text-white/70 select-none z-10">+</span>
              <span className="absolute top-2 right-2 font-mono text-[10px] text-white/70 select-none z-10">+</span>

              {/* Minimal Bottom Glass Pill */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-2.5 border border-black/10 rounded-xs shadow-md flex items-center justify-between text-left">
                <div>
                  <span className="font-heading text-xs font-bold tracking-tight text-black uppercase block">
                    Osman Ratib
                  </span>
                  <span className="font-mono text-[9px] tracking-wider text-black/50 uppercase">
                    Dhaka, Bangladesh
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  <span className="font-mono text-[9px] font-semibold text-black uppercase">
                    Active
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Clean Subtitle in Inter */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
          className="font-sans text-base md:text-xl text-black/75 max-w-2xl leading-relaxed font-normal mx-auto"
        >
          Crafting high-performance digital products, tactile motion systems, and scalable frontend architectures with Next.js, TypeScript, and fluid animations.
        </motion.p>

        {/* Centered Action Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.76, 0, 0.24, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
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

      {/* Infinite Loop Marquee Ribbon */}
      <div className="mt-8 border-y border-black/10 py-3 bg-neutral-50/80">
        <Marquee items={INFINITE_MARQUEE_ITEMS} speed={25} />
      </div>
    </section>
  );
}
