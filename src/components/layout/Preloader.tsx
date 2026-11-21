"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check session storage
    if (typeof window !== "undefined" && sessionStorage.getItem("portfolio_visited")) {
      setIsDone(true);
      onComplete();
      return;
    }

    const duration = 1200; // ms
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
          sessionStorage.setItem("portfolio_visited", "true");
          setTimeout(onComplete, 600);
        }, 120);
      }
    };

    const frameId = requestAnimationFrame(updateCounter);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDone(true);
        sessionStorage.setItem("portfolio_visited", "true");
        onComplete();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    sessionStorage.setItem("portfolio_visited", "true");
    onComplete();
  };

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
            <div className="font-mono text-xs tracking-wider uppercase text-white/50">
              01 // 2026 Portfolio
            </div>
            <button
              onClick={handleSkip}
              className="font-mono text-xs tracking-wider uppercase text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              Skip [ESC]
            </button>
          </div>

          {/* Center Name Reveal */}
          <div className="my-auto space-y-3">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="font-display text-[clamp(4.5rem,11vw,11rem)] leading-none uppercase tracking-tight"
              >
                Osman Ratib
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="font-mono text-xs md:text-sm tracking-wider uppercase text-emerald-400 font-medium"
              >
                Creative Developer & UI Engineer
              </motion.div>
            </div>
          </div>

          {/* Bottom Counter */}
          <div className="flex items-end justify-between border-t border-white/10 pt-6">
            <div className="font-mono text-xs tracking-wider uppercase text-white/40">
              Loading
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
