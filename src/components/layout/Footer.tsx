"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Marquee from "@/components/motion/Marquee";
import Magnetic from "@/components/motion/Magnetic";

const EMAIL = "osmanratib.dev@gmail.com";

const MARQUEE_ITEMS = [
  "Available for Select Engagements 2026",
  "Editorial Web Design",
  "Next.js Architecture",
  "Based in Dhaka, Bangladesh",
  "Creative Motion & Micro-interactions",
  "High Performance Engineering",
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <footer id="contact" className="relative bg-black text-white overflow-hidden">
      {/* Running Marquee Banner */}
      <div className="border-b border-white/10 py-4 bg-white/[0.02]">
        <Marquee items={MARQUEE_ITEMS} speed={36} />
      </div>

      {/* Main Contact Container */}
      <div className="px-6 md:px-16 pt-24 md:pt-36 pb-12">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/15 pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-white/40">[04]</span>
            <h2 className="font-mono text-xs tracking-widest uppercase font-semibold text-white">
              Initiate Dialogue
            </h2>
          </div>
          <span className="font-mono text-xs tracking-widest uppercase text-white/40">
            Available Q1/Q2 2026
          </span>
        </div>

        {/* Giant Hero CTA */}
        <div className="max-w-5xl">
          <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-white/50 mb-6">
            Have a project in mind, need technical leadership, or want to discuss creative ideas?
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="group block font-serif text-[clamp(3.5rem,11vw,11.5rem)] leading-[0.88] tracking-[-0.035em] text-white hover:italic transition-all duration-300 select-none"
          >
            Let&apos;s talk<span className="font-sans not-italic text-white/40 group-hover:text-white transition-colors">.</span>
          </a>

          {/* Interactive Email Bar with Magnetic Copy Button */}
          <div className="mt-10 md:mt-16 flex flex-wrap items-center gap-6">
            <Magnetic strength={0.25}>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group relative flex items-center gap-3 border border-white/30 bg-white/5 hover:bg-white hover:text-black px-6 py-3.5 transition-all duration-300 cursor-pointer"
                aria-label="Copy email address"
              >
                <span className="font-mono text-xs md:text-sm tracking-wider uppercase">
                  {copied ? "Copied to clipboard!" : EMAIL}
                </span>
                <span className="font-mono text-xs text-white/60 group-hover:text-black transition-colors">
                  {copied ? "✓" : "↗ copy"}
                </span>
              </button>
            </Magnetic>

            <a
              href={`mailto:${EMAIL}?subject=Project%20Inquiry%20via%20Portfolio`}
              className="font-mono text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors underline underline-offset-8"
            >
              Open Mail Client ↗
            </a>
          </div>
        </div>

        {/* Bottom Editorial Colophon */}
        <div className="mt-28 md:mt-40 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-2">
            <div className="font-mono text-xs text-white/80 font-medium">
              Osman Ratib — Independent Software Engineer
            </div>
            <div className="font-mono text-[11px] text-white/40 tracking-wider">
              Dhaka, Bangladesh • Next.js 16 • Tailwind CSS v4 • GSAP • Lenis
            </div>
            <div className="font-mono text-[11px] text-white/30">
              © 2026 Osman Ratib. Printed in digital medium. All rights reserved.
            </div>
          </div>

          <div className="flex flex-wrap gap-8 font-mono text-xs tracking-widest uppercase text-white/60">
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
              className="hover:text-white transition-colors text-white/35"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
