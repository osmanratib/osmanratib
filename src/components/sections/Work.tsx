"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { projects } from "@/data/projects";
import { useIsTouch } from "@/hooks/useIsTouch";

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
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-black/10 pb-6 mb-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold bg-black text-white px-2 py-0.5 rounded-xs">
            01
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight uppercase text-black">
            Selected Flagship Works
          </h2>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs tracking-widest uppercase text-black/50">
          <span>Production Case Studies (03)</span>
          <span>•</span>
          <span>Next.js 16 + TypeScript</span>
        </div>
      </div>

      {/* Floating Image Preview on Cursor (Desktop Only) */}
      {!isTouch && (
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.88, rotate: 2 }}
              transition={{ duration: 0.22, ease: [0.76, 0, 0.24, 1] }}
              style={{
                x: smoothX,
                y: smoothY,
                translateX: "32px",
                translateY: "-50%",
              }}
              className="pointer-events-none fixed z-30 hidden md:block overflow-hidden rounded-sm shadow-2xl border border-black/20 bg-white w-80 h-52 lg:w-96 lg:h-60"
            >
              <div className="relative h-full w-full">
                <Image
                  src={projects[hoveredIndex].cover}
                  alt={projects[hoveredIndex].title}
                  fill
                  sizes="400px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5 text-white">
                  <div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-emerald-400 block mb-0.5">
                      {projects[hoveredIndex].category}
                    </span>
                    <span className="font-display text-lg font-bold tracking-tight">
                      Explore Case Study →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Project Rows */}
      <div className="divide-y divide-black/10">
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={project.slug}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative py-10 md:py-16 transition-colors duration-300"
            >
              {/* Background hover tint */}
              <div
                className={`absolute inset-0 -mx-6 md:-mx-12 px-6 md:px-12 transition-colors duration-300 pointer-events-none ${
                  isHovered ? "bg-neutral-50" : "bg-transparent"
                }`}
              />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                {/* Index + Title + Description */}
                <div className="flex items-start gap-6 md:gap-10 max-w-2xl">
                  <span className="font-mono text-sm md:text-base text-black/30 font-semibold pt-1">
                    0{index + 1}
                  </span>
                  <div>
                    <Link
                      href={`/work/${project.slug}`}
                      className="block group-hover:translate-x-1.5 transition-transform duration-300 focus-visible:outline-none"
                    >
                      <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-black transition-colors duration-300 group-hover:text-black">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="font-mono text-xs tracking-widest uppercase text-emerald-700 font-medium mt-2">
                      {project.category}
                    </p>
                    <p className="font-sans text-sm md:text-base text-black/70 mt-3 line-clamp-2 font-normal leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Tags + Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 self-start lg:self-auto pl-12 lg:pl-0">
                  <div className="flex flex-wrap gap-2 max-w-xs">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] md:text-[11px] tracking-wider uppercase text-black/70 border border-black/15 px-2.5 py-1 rounded-sm bg-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs uppercase tracking-wider border border-black/20 hover:border-black bg-white px-3.5 py-2 transition-all hover:bg-black hover:text-white"
                    >
                      Demo ↗
                    </a>
                    <Link
                      href={`/work/${project.slug}`}
                      className="font-mono text-xs uppercase tracking-wider bg-black text-white px-4 py-2 hover:bg-zinc-800 transition-all font-semibold flex items-center gap-1.5"
                    >
                      <span>Study</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Image Inline Preview */}
              <div className="mt-6 block md:hidden relative aspect-video w-full overflow-hidden rounded-sm border border-black/10">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
