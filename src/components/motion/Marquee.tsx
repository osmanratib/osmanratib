"use client";

import { motion } from "motion/react";

interface MarqueeProps {
  items: string[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function Marquee({
  items,
  speed = 28,
  direction = "left",
  className = "",
}: MarqueeProps) {
  const content = items.join(" • ") + " • ";
  const repeated = Array(6).fill(content).join("");

  return (
    <div className={`overflow-hidden whitespace-nowrap select-none ${className}`}>
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-flex font-mono text-xs tracking-widest uppercase"
      >
        <span>{repeated}</span>
        <span>{repeated}</span>
      </motion.div>
    </div>
  );
}
