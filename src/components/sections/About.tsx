"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

const ABOUT_PARAGRAPH =
  "I am a web developer based in Bangladesh obsessed with crafting digital experiences where engineering rigor meets editorial elegance. I believe modern web design wins on clarity, typography, and purposeful motion — building interfaces that feel as tactile and memorable as physical print.";

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
      className="relative px-6 md:px-16 py-24 md:py-36 border-b border-black/10"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 border-b border-black/10 pb-6 mb-12 md:mb-20">
        <span className="font-mono text-xs text-black/40">[02]</span>
        <h2 className="font-mono text-xs tracking-widest uppercase font-semibold text-black">
          About & Philosophy
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Scrubbed Typography Manifest (7 columns) */}
        <div className="lg:col-span-8">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.25] tracking-tight text-black">
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
            <div>
              <h3 className="font-mono text-xs tracking-widest uppercase text-black/40 mb-2">
                Core Focus
              </h3>
              <p className="font-sans text-sm text-black/80 leading-relaxed">
                Full-stack architecture, micro-interactions, responsive design systems, and Web Performance optimization (Lighthouse 95+).
              </p>
            </div>
            <div>
              <h3 className="font-mono text-xs tracking-widest uppercase text-black/40 mb-2">
                Location & Availability
              </h3>
              <p className="font-sans text-sm text-black/80 leading-relaxed">
                Operating remotely from Bangladesh. Partnering with forward-thinking agencies, design studios, and product teams globally.
              </p>
            </div>
          </div>
        </div>

        {/* Portrait & Quick Specs (4 columns) */}
        <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-black/10 bg-black/5">
            <Image
              src="/about.jpg"
              alt="Osman Ratib"
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase border border-black/10">
              Figure 1.0 — Osman Ratib
            </div>
          </div>

          <div className="space-y-3 font-mono text-xs border border-black/10 p-5 bg-black/[0.01]">
            <div className="flex justify-between border-b border-black/5 pb-2">
              <span className="text-black/40">Role</span>
              <span className="text-black font-medium">Software Engineer</span>
            </div>
            <div className="flex justify-between border-b border-black/5 pb-2">
              <span className="text-black/40">Experience</span>
              <span className="text-black font-medium">Modern Web & UI</span>
            </div>
            <div className="flex justify-between border-b border-black/5 pb-2">
              <span className="text-black/40">Tooling</span>
              <span className="text-black font-medium">React, Next.js, GSAP</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-black/40">GitHub</span>
              <a
                href="https://github.com/osmanratib"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-black transition-colors"
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
