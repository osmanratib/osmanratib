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
      className="relative px-6 md:px-16 py-20 md:py-32 border-b border-black/10"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-black/10 pb-6 mb-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-black/40">[01]</span>
          <h2 className="font-mono text-xs tracking-widest uppercase font-semibold text-black">
            Selected Works
          </h2>
        </div>
        <span className="font-mono text-xs tracking-widest uppercase text-black/40">
          Curated Case Studies (3)
        </span>
      </div>

      {/* Floating Image Preview on Cursor (Desktop Only) */}
      {!isTouch && (
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.85, rotate: 2 }}
              transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
              style={{
                x: smoothX,
                y: smoothY,
                translateX: "32px",
                translateY: "-50%",
              }}
              className="pointer-events-none fixed z-30 hidden md:block overflow-hidden rounded shadow-2xl border border-black/15 bg-white w-72 h-48 lg:w-88 lg:h-56"
            >
              <div className="relative h-full w-full">
                <Image
                  src={projects[hoveredIndex].cover}
                  alt={projects[hoveredIndex].title}
                  fill
                  sizes="360px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-white/90">
                    Explore Case Study →
                  </span>
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
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group block relative py-8 md:py-14 transition-colors duration-300 focus-visible:outline-none"
            >
              {/* Background hover tint */}
              <div
                className={`absolute inset-0 -mx-6 md:-mx-16 px-6 md:px-16 transition-colors duration-300 pointer-events-none ${
                  isHovered ? "bg-black/[0.02]" : "bg-transparent"
                }`}
              />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Index + Title */}
                <div className="flex items-start md:items-center gap-6 md:gap-12">
                  <span className="font-mono text-xs md:text-sm text-black/35 font-light pt-1 md:pt-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-black transition-all duration-300 group-hover:italic group-hover:translate-x-1">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[11px] md:text-xs tracking-widest uppercase text-black/50 mt-1.5">
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Tags + Year + Arrow */}
                <div className="flex flex-wrap items-center gap-4 md:gap-8 self-start md:self-auto pl-12 md:pl-0">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] md:text-[11px] tracking-wider uppercase text-black/60 border border-black/15 px-2.5 py-1 rounded-sm bg-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="font-mono text-xs text-black/40">
                    {project.year}
                  </span>

                  <span className="font-serif text-xl md:text-2xl text-black transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>

              {/* Mobile Image Inline Preview */}
              <div className="mt-6 block md:hidden relative aspect-video w-full overflow-hidden rounded border border-black/10">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
