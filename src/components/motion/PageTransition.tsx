"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Trigger logo transition overlay on route change
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Route Change Logo Wipe Transition Overlay */}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key={`transition-${pathname}`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            style={{ originY: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black pointer-events-none"
          >
            {/* Animated Logo in Center of Transition */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
              animate={{ scale: [0.6, 1.1, 1], opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative flex flex-col items-center justify-center"
            >
              {/* Outer Pulsing Halo */}
              <div className="absolute h-28 w-28 rounded-full bg-emerald-500/20 blur-lg animate-pulse" />

              {/* Logo Card */}
              <div className="relative h-20 w-20 rounded-full bg-white/10 p-3 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl">
                <Image
                  src="/logo.png"
                  alt="Osman Ratib"
                  fill
                  sizes="80px"
                  className="object-contain p-2 invert"
                  priority
                />
              </div>

              <span className="mt-3 font-mono text-[10px] tracking-widest uppercase text-emerald-400">
                Osman Ratib
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Content */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
