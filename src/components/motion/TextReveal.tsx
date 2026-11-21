"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  as: Component = "h2",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const words = children.split(" ");

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <Component className="flex flex-wrap gap-x-[0.25em] gap-y-[0.1em] leading-none">
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden pb-[0.15em] -mb-[0.15em]">
            <motion.span
              className="inline-block"
              initial={{ y: "115%", rotate: 2 }}
              animate={isInView ? { y: "0%", rotate: 0 } : { y: "115%", rotate: 2 }}
              transition={{
                duration: 0.9,
                ease: [0.76, 0, 0.24, 1],
                delay: delay + index * 0.035,
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Component>
    </div>
  );
}
