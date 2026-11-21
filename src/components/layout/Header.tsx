"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useDhakaTime } from "@/hooks/useDhakaTime";

const MENU_ITEMS = [
  { href: "/#work", label: "Selected Works", index: "01" },
  { href: "/#process", label: "Process", index: "02" },
  { href: "/#about", label: "About", index: "03" },
  { href: "/#capabilities", label: "Capabilities", index: "04" },
  { href: "/#contact", label: "Contact", index: "05" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dhakaTime = useDhakaTime();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Ultra-Clean Minimalist Header: Just Logo (Visible, No Name) + Just Menu Icon */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md py-4 border-b border-black/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          {/* Prominent, Highly Visible Logo (No Name) */}
          <Link
            href="/"
            aria-label="Home"
            className="group relative flex items-center justify-center focus-visible:outline-none"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-full border border-black/15 bg-white p-2 shadow-sm transition-shadow hover:shadow-md"
            >
              <Image
                src="/logo.png"
                alt="Osman Ratib"
                fill
                sizes="(max-width: 768px) 48px, 56px"
                className="object-contain p-1"
                priority
              />
            </motion.div>
          </Link>

          {/* Just the Menu Icon */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-black/20 bg-white hover:bg-black hover:border-black transition-all duration-300 cursor-pointer shadow-xs"
          >
            <div className="flex flex-col items-center justify-center gap-1.5 w-5">
              <span
                className={`h-0.5 w-5 bg-black group-hover:bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-black group-hover:bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-black group-hover:bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen Architectural Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-black text-white px-8 md:px-20 pt-10 pb-12"
          >
            {/* Top Bar inside Menu Overlay */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              {/* Prominent Logo inside Menu */}
              <div className="relative h-12 w-12 rounded-full bg-white/10 p-2 overflow-hidden border border-white/20">
                <Image
                  src="/logo.png"
                  alt="Osman Ratib"
                  fill
                  sizes="48px"
                  className="object-contain p-1 invert"
                />
              </div>

              <div className="flex items-center gap-6">
                <span className="hidden sm:inline font-mono text-xs text-white/50 tracking-widest uppercase">
                  Dhaka {dhakaTime}
                </span>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-black transition-all cursor-pointer"
                  aria-label="Close menu"
                >
                  <span className="font-mono text-sm">✕</span>
                </button>
              </div>
            </div>

            {/* Navigation Links in Clean Bold Typography */}
            <div className="my-auto py-8">
              <span className="font-mono text-xs tracking-widest uppercase text-white/40 block mb-6">
                Navigation Index
              </span>
              <nav className="flex flex-col gap-4 md:gap-6">
                {MENU_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-baseline gap-4 md:gap-8 focus-visible:outline-none"
                  >
                    <span className="font-mono text-xs md:text-sm text-white/40 group-hover:text-emerald-400 transition-colors">
                      {item.index}
                    </span>
                    <span className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal uppercase tracking-tight text-white transition-all duration-300 group-hover:translate-x-3 group-hover:text-emerald-400">
                      {item.label}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Contact & Quick Details */}
            <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-6 font-mono text-xs">
              <div className="flex items-center gap-4">
                <span className="text-white/50">Direct Email:</span>
                <a
                  href="mailto:osmanratib14@gmail.com"
                  className="text-white hover:text-emerald-400 font-semibold underline underline-offset-4"
                >
                  osmanratib14@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-6 text-white/60">
                <a
                  href="https://github.com/osmanratib"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Twitter / X ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
