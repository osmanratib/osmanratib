"use client";

import { useState } from "react";
import Magnetic from "@/components/motion/Magnetic";
import { useDhakaTime } from "@/hooks/useDhakaTime";

const EMAIL = "osmanratib14@gmail.com";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const dhakaTime = useDhakaTime();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <footer id="contact" className="relative bg-black text-white overflow-hidden">
      {/* Main Contact Container */}
      <div className="px-6 md:px-12 pt-24 md:pt-36 pb-12">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-white/15 pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold bg-white text-black px-2 py-0.5 rounded-xs">
              05
            </span>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-white">
              Initiate Dialogue
            </h2>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs tracking-wider uppercase text-white/50">
            <span>Available 2026</span>
            <span>•</span>
            <span className="text-white font-medium">Dhaka {dhakaTime}</span>
          </div>
        </div>

        {/* Giant Clean CTA */}
        <div className="max-w-5xl">
          <p className="font-sans text-sm md:text-base text-white/60 mb-6 font-normal">
            Have a project in mind, need technical leadership, or want to discuss creative ideas?
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="group block font-display text-[clamp(4.5rem,13vw,13rem)] leading-[0.88] tracking-tight uppercase text-white hover:text-emerald-400 transition-colors duration-300 select-none"
          >
            Let&apos;s talk<span className="text-emerald-500">.</span>
          </a>

          {/* Clean Action Bar */}
          <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.2}>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group relative flex items-center gap-3 border border-white/30 bg-white/5 hover:bg-white hover:text-black px-7 py-4 transition-all duration-300 cursor-pointer rounded-xs"
                aria-label="Copy email address"
              >
                <span className="font-mono text-xs md:text-sm tracking-wider uppercase font-semibold">
                  {copied ? "Copied to clipboard!" : EMAIL}
                </span>
                <span className="font-mono text-xs text-white/60 group-hover:text-black transition-colors">
                  {copied ? "✓" : "↗ copy"}
                </span>
              </button>
            </Magnetic>

            <a
              href={`mailto:${EMAIL}?subject=Project%20Inquiry%20via%20Portfolio`}
              className="font-mono text-xs tracking-wider uppercase text-white/70 hover:text-white transition-colors underline underline-offset-8"
            >
              Open Direct Mail Client ↗
            </a>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="mt-28 md:mt-36 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-1">
            <div className="font-heading text-sm text-white font-bold tracking-tight uppercase">
              Osman Ratib — Creative Developer & UI Engineer
            </div>
            <div className="font-mono text-[11px] text-white/40 tracking-wider">
              Dhaka, Bangladesh • Next.js • Tailwind CSS • GSAP • Lenis
            </div>
          </div>

          <div className="flex flex-wrap gap-8 font-mono text-xs tracking-wider uppercase text-white/70">
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
            <a
              href="#top"
              className="hover:text-white transition-colors text-white/40"
            >
              Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
