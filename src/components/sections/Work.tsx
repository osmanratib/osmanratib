"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { projects } from "@/data/projects";
import { useIsTouch } from "@/hooks/useIsTouch";
import Marquee from "@/components/motion/Marquee";

const WORK_MARQUEE = [
  "FEATURED CASE STUDIES",
  "CAFEBEE SPECIALTY ROASTERY",
  "FIXNEST CLEANING PLATFORM",
  "AURA GYM PERFORMANCE",
  "FULL-STACK NEXT.JS 16",
  "60 FPS MOTION DESIGN",
];

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isTouch = useIsTouch();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.3 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouch) return;
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative px-6 md:px-12 py-24 md:py-36 border-b border-black/10 bg-white"
    >
      {/* Clean Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-black/10 pb-6 mb-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold bg-black text-white px-2 py-0.5 rounded-xs">
            01
          </span>
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-black">
            Selected Works
          </h2>
        </div>
        <div className="font-mono text-xs tracking-wider uppercase text-black/50">
          Hover for Live Video Preview (03 Projects)
        </div>
      </div>

      {/* Floating Video Preview on Cursor (Desktop Only) */}
      {!isTouch && (
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
              transition={{ duration: 0.2, ease: [0.76, 0, 0.24, 1] }}
              style={{
                x: smoothX,
                y: smoothY,
                translateX: "32px",
                translateY: "-50%",
              }}
              className="pointer-events-none fixed z-30 hidden md:block overflow-hidden rounded-xs shadow-2xl border-2 border-black/20 bg-black w-88 h-56 lg:w-96 lg:h-60"
            >
              <div className="relative h-full w-full">
                {/* Looping Video on Hover */}
                <video
                  src={projects[hoveredIndex].video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 text-white">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <span className="font-mono text-[10px] tracking-widest uppercase text-emerald-400 block mb-0.5">
                        {projects[hoveredIndex].category}
                      </span>
                      <span className="font-display text-xl uppercase tracking-tight text-white">
                        {projects[hoveredIndex].title}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] tracking-wider uppercase bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-xs">
                      Live Preview ↗
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Project Rows (Clicking directly opens the live site, no study) */}
      <div className="divide-y divide-black/10">
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <a
              key={project.slug}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group block relative py-10 md:py-16 transition-colors duration-300 focus-visible:outline-none cursor-pointer"
            >
              {/* Subtle hover background */}
              <div
                className={`absolute inset-0 -mx-6 md:-mx-12 px-6 md:px-12 transition-colors duration-300 pointer-events-none ${
                  isHovered ? "bg-neutral-50/80" : "bg-transparent"
                }`}
              />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                {/* Index + Title + Description */}
                <div className="flex items-start gap-6 md:gap-10 max-w-2xl">
                  <span className="font-mono text-sm md:text-base text-black/35 font-semibold pt-1">
                    0{index + 1}
                  </span>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-black transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-neutral-700">
                        {project.title}
                      </h3>
                      <span className="font-serif text-2xl text-black/30 group-hover:text-black transition-colors">
                        ↗
                      </span>
                    </div>
                    <p className="font-mono text-xs tracking-wider uppercase text-emerald-700 font-semibold mt-1">
                      {project.category}
                    </p>
                    <p className="font-sans text-sm md:text-base text-black/70 mt-3 font-normal leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Stack + Direct Live Button */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 self-start lg:self-auto pl-12 lg:pl-0">
                  <div className="flex flex-wrap gap-2 max-w-xs">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] tracking-wider uppercase text-black/70 border border-black/15 px-2.5 py-1 rounded-xs bg-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="font-mono text-xs uppercase tracking-wider bg-black text-white group-hover:bg-neutral-800 px-6 py-3 font-semibold rounded-xs transition-all flex items-center gap-2 shadow-xs shrink-0">
                    <span>Visit Site</span>
                    <span>↗</span>
                  </span>
                </div>
              </div>

              {/* Mobile Inline Video Preview */}
              <div className="mt-6 block md:hidden relative aspect-video w-full overflow-hidden rounded-xs border border-black/15 bg-black">
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-black/70 text-white font-mono text-[10px] px-2 py-0.5 rounded-xs">
                  Video Preview
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Infinite Marquee Loop at the bottom of Works */}
      <div className="mt-16 border-t border-black/10 pt-8">
        <Marquee items={WORK_MARQUEE} speed={28} />
      </div>
    </section>
  );
}
