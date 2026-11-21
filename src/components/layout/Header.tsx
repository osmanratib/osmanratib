"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { href: "/#work", label: "Work", index: "01" },
  { href: "/#about", label: "About", index: "02" },
  { href: "/#capabilities", label: "Capabilities", index: "03" },
  { href: "/#contact", label: "Contact", index: "04" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-black/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          {/* Logo / Identity */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 focus-visible:outline-none"
          >
            <div className="relative h-7 w-7 overflow-hidden rounded-full border border-black/15 bg-black/5 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Osman Ratib"
                fill
                sizes="28px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-semibold tracking-widest uppercase">
                Osman Ratib
              </span>
              <span className="font-mono text-[10px] tracking-wider text-black/50 uppercase">
                Digital Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative flex items-baseline gap-1.5 py-1 text-xs font-mono tracking-widest text-black/70 uppercase transition-colors hover:text-black"
              >
                <span className="text-[10px] text-black/35 group-hover:text-black/60 transition-colors">
                  {link.index}
                </span>
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action / Availability Pill */}
          <div className="hidden items-center gap-5 md:flex">
            <div className="flex items-center gap-2 border border-black/10 px-3 py-1 rounded-full bg-black/[0.02]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] tracking-widest text-black/60 uppercase">
                Available 2026
              </span>
            </div>

            <a
              href="#contact"
              className="group relative overflow-hidden border border-black bg-black px-4 py-1.5 font-mono text-xs tracking-widest text-white uppercase transition-colors duration-300 hover:bg-white hover:text-black"
            >
              <span className="relative z-10">Get in touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 p-2 md:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`h-px w-6 bg-black transition-transform duration-300 ${
                mobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-black transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-black transition-transform duration-300 ${
                mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-30 flex flex-col justify-between bg-white px-8 pt-28 pb-12 md:hidden"
          >
            <div className="space-y-6">
              <span className="font-mono text-xs tracking-widest text-black/40 uppercase">
                Navigation
              </span>
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-baseline gap-4 font-serif text-4xl text-black"
                  >
                    <span className="font-mono text-xs text-black/40">
                      {link.index}
                    </span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-4 border-t border-black/10 pt-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-xs tracking-wider text-black/60 uppercase">
                  Open to projects worldwide
                </span>
              </div>
              <a
                href="mailto:osmanratib.dev@gmail.com"
                className="block text-center border border-black bg-black py-3 font-mono text-xs tracking-widest text-white uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                osmanratib.dev@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
