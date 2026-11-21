"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

const ABOUT_PARAGRAPH =
  "I am a software engineer and creative developer based in Bangladesh obsessed with building web flagships where rigorous engineering meets bold visual direction. I partner with founders, design studios, and product companies worldwide to turn complex requirements into clean, tactile, award-winning digital experiences.";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"],
  });

  const words = ABOUT_PARAGRAPH.split(" ");

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative px-6 md:px-12 py-24 md:py-36 border-b border-black/10 bg-white"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-black/10 pb-6 mb-16">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold bg-black text-white px-2 py-0.5 rounded-xs">
            03
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight uppercase text-black">
            About & Philosophy
          </h2>
        </div>
        <div className="font-mono text-xs tracking-widest uppercase text-black/50">
          Engineering Manifesto // Osman Ratib
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Scrubbed Typography Manifest (7 columns) */}
        <div className="lg:col-span-8">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-black">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[start, end]}
                >
                  {word}
                </Word>
              );
            })}
          </p>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-black/10 pt-8">
            <div className="space-y-2">
              <h3 className="font-mono text-xs tracking-widest uppercase text-black/50 font-semibold">
                Core Specialization
              </h3>
              <p className="font-sans text-sm md:text-base text-black/80 leading-relaxed font-normal">
                Next.js 16 full-stack architecture, micro-interactions, responsive design systems, and Web Performance optimization (Lighthouse 99+).
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-mono text-xs tracking-widest uppercase text-black/50 font-semibold">
                Remote Collaboration
              </h3>
              <p className="font-sans text-sm md:text-base text-black/80 leading-relaxed font-normal">
                Operating remotely from Dhaka, Bangladesh with asynchronous overlap across US, European, and Asian timezones.
              </p>
            </div>
          </div>
        </div>

        {/* Portrait & Quick Specs (4 columns) */}
        <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xs border border-black/15 bg-neutral-100 shadow-sm">
            <Image
              src="/about.jpg"
              alt="Osman Ratib"
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 text-[10px] font-mono tracking-widest uppercase border border-black/10 shadow-xs">
              Osman Ratib // Engineer
            </div>
          </div>

          <div className="space-y-3 font-mono text-xs border border-black/10 p-5 bg-neutral-50/50 rounded-xs">
            <div className="flex justify-between border-b border-black/10 pb-2">
              <span className="text-black/50">Primary Role</span>
              <span className="text-black font-semibold">Software Engineer</span>
            </div>
            <div className="flex justify-between border-b border-black/10 pb-2">
              <span className="text-black/50">Direct Contact</span>
              <a
                href="mailto:osmanratib14@gmail.com"
                className="text-black font-semibold hover:underline"
              >
                osmanratib14@gmail.com
              </a>
            </div>
            <div className="flex justify-between border-b border-black/10 pb-2">
              <span className="text-black/50">Primary Stack</span>
              <span className="text-black font-semibold">Next.js, TS, GSAP</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-black/50">GitHub Profile</span>
              <a
                href="https://github.com/osmanratib"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-black underline hover:text-emerald-700 transition-colors"
              >
                @osmanratib ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <span className="inline-block mr-[0.28em] my-[0.05em]">
      <motion.span style={{ opacity }} className="inline-block transition-opacity">
        {children}
      </motion.span>
    </span>
  );
}
