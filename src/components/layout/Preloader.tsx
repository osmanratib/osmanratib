"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 1250; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = Math.floor(progress * 100);
      setCount(easeProgress);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 650);
        }, 150);
      }
    };

    const frameId = requestAnimationFrame(updateCounter);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDone(true);
        onComplete();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black p-8 md:p-14 text-white"
        >
          {/* Top metadata */}
          <div className="flex items-center justify-between">
            <div className="font-mono text-xs tracking-wider uppercase text-white/40">
              01 // System Load
            </div>
            <div className="font-mono text-xs tracking-wider uppercase text-white/40">
              [ESC] to skip
            </div>
          </div>

          {/* Center Stage: ANIMATED LOGO REVEAL */}
          <div className="my-auto flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* Pulsing Emerald Halo */}
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="absolute h-36 w-36 rounded-full bg-emerald-500/20 blur-xl pointer-events-none"
              />

              {/* Concentric Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute h-32 w-32 rounded-full border border-dashed border-white/25 pointer-events-none"
              />

              {/* Logo Animated Reveal */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0, rotate: -12 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="relative h-24 w-24 md:h-28 md:w-28 rounded-full bg-white/10 p-3.5 backdrop-blur-md border border-white/30 shadow-2xl flex items-center justify-center"
              >
                <Image
                  src="/logo.png"
                  alt="Osman Ratib"
                  fill
                  sizes="112px"
                  className="object-contain p-2 invert"
                  priority
                />
              </motion.div>
            </div>

            {/* Sub-label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 font-mono text-xs tracking-widest uppercase text-emerald-400 font-semibold"
            >
              Osman Ratib
            </motion.div>
          </div>

          {/* Bottom Counter */}
          <div className="flex items-end justify-between border-t border-white/10 pt-6">
            <div className="font-mono text-xs tracking-wider uppercase text-white/40">
              Loading Experience
            </div>
            <div className="font-display text-5xl md:text-7xl tabular-nums">
              {String(count).padStart(3, "0")}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
