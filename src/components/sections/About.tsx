"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

const ABOUT_PARAGRAPH =
  "I am a software engineer and creative developer based in Bangladesh focused on building digital products where engineering precision meets thoughtful design. I partner with founders, design studios, and product teams to translate ambitious requirements into clean, tactile, memorable web applications.";

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
      {/* Clean Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-black/10 pb-6 mb-16">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold bg-black text-white px-2 py-0.5 rounded-xs">
            03
          </span>
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-black">
            About & Philosophy
          </h2>
        </div>
        <div className="font-mono text-xs tracking-wider uppercase text-black/50">
          Profile & Discipline
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Scrubbed Typography (7 columns) */}
        <div className="lg:col-span-8">
          <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.3] text-black">
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
              <h3 className="font-mono text-xs tracking-wider uppercase text-black/50 font-semibold">
                Technical Focus
              </h3>
              <p className="font-sans text-sm md:text-base text-black/75 leading-relaxed font-normal">
                Next.js full-stack development, kinetic UI animations, responsive component systems, and web performance optimization.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-mono text-xs tracking-wider uppercase text-black/50 font-semibold">
                Availability
              </h3>
              <p className="font-sans text-sm md:text-base text-black/75 leading-relaxed font-normal">
                Based in Dhaka, Bangladesh (UTC+6). Working remotely with clients across Europe, the US, and Asia.
              </p>
            </div>
          </div>
        </div>

        {/* Second Photo (about.jpg) & Clean Specs (4 columns) */}
        <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xs border border-black/15 bg-neutral-100 shadow-sm">
            <Image
              src="/about-main.png"
              alt="Osman Ratib"
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-contain p-2 grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="space-y-3 font-mono text-xs border border-black/10 p-5 bg-neutral-50/50 rounded-xs">
            <div className="flex justify-between border-b border-black/10 pb-2">
              <span className="text-black/50">Role</span>
              <span className="text-black font-semibold">Software Engineer</span>
            </div>
            <div className="flex justify-between border-b border-black/10 pb-2">
              <span className="text-black/50">Email</span>
              <a
                href="mailto:osmanratib14@gmail.com"
                className="text-black font-semibold hover:underline"
              >
                osmanratib14@gmail.com
              </a>
            </div>
            <div className="flex justify-between border-b border-black/10 pb-2">
              <span className="text-black/50">Stack</span>
              <span className="text-black font-semibold">Next.js, TypeScript, GSAP</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-black/50">GitHub</span>
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
