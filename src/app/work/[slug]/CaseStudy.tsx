"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

interface CaseStudyProps {
  project: Project;
}

export default function CaseStudy({ project }: CaseStudyProps) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-36">
      {/* Top Navigation & Index */}
      <div className="px-6 md:px-16 mb-12 flex items-center justify-between border-b border-black/10 pb-6">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-black/60 hover:text-black transition-colors"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          <span>Index of Selected Works</span>
        </Link>

        <span className="font-mono text-xs tracking-widest uppercase text-black/40">
          Case Study 0{currentIndex + 1} / 0{projects.length}
        </span>
      </div>

      {/* Hero Header */}
      <header className="px-6 md:px-16 mb-16 md:mb-24">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-black/50 mb-4">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-serif text-[clamp(3.5rem,10vw,9.5rem)] leading-[0.9] tracking-tight text-black mb-8">
            {project.title}
          </h1>

          <p className="font-sans text-lg md:text-2xl text-black/75 max-w-3xl leading-relaxed font-light">
            {project.description}
          </p>
        </div>
      </header>

      {/* Main Cover Asset */}
      <div className="px-6 md:px-16 mb-20 md:mb-28">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-black/10 bg-black/5">
          <Image
            src={project.cover}
            alt={`${project.title} Interface preview`}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>
        <div className="mt-3 flex justify-between font-mono text-[11px] tracking-wider text-black/40 uppercase">
          <span>Figure 1.0 — Primary Application Surface</span>
          <span>{project.title} System</span>
        </div>
      </div>

      {/* Core Case Study Content Grid */}
      <div className="px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        {/* Main Narrative Column (8 cols) */}
        <div className="lg:col-span-8 space-y-16 md:space-y-24">
          {/* Challenge Section */}
          <section className="space-y-4">
            <span className="font-mono text-xs tracking-widest uppercase text-black/40 block">
              [01] The Problem & Context
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-black tracking-tight">
              The Challenge
            </h2>
            <p className="font-sans text-base md:text-lg text-black/75 leading-relaxed font-light">
              {project.challenge}
            </p>
          </section>

          {/* Video Showcase Section */}
          <section className="space-y-4">
            <span className="font-mono text-xs tracking-widest uppercase text-black/40 block">
              [02] Dynamic Motion & Interactions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-black tracking-tight">
              Live Interface Recording
            </h2>
            <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-black/10 bg-black/5">
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
            <p className="font-mono text-[11px] text-black/45 tracking-wider uppercase">
              Screen recording demonstrating responsive layout behavior and micro-interactions.
            </p>
          </section>

          {/* Outcome Section */}
          <section className="space-y-4">
            <span className="font-mono text-xs tracking-widest uppercase text-black/40 block">
              [03] Impact & Delivery
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-black tracking-tight">
              Results & Key Learnings
            </h2>
            <p className="font-sans text-base md:text-lg text-black/75 leading-relaxed font-light">
              {project.outcome}
            </p>
          </section>
        </div>

        {/* Sidebar Specifications (4 cols) */}
        <aside className="lg:col-span-4 lg:col-start-9 space-y-10 lg:sticky lg:top-28 self-start">
          <div className="border border-black/10 p-6 md:p-8 space-y-6 bg-black/[0.01]">
            <div>
              <span className="font-mono text-[11px] tracking-widest uppercase text-black/40 block mb-1">
                Role & Scope
              </span>
              <p className="font-serif text-xl text-black">{project.role}</p>
            </div>

            <div className="border-t border-black/5 pt-4">
              <span className="font-mono text-[11px] tracking-widest uppercase text-black/40 block mb-1">
                Year of Execution
              </span>
              <p className="font-mono text-sm text-black">{project.year}</p>
            </div>

            <div className="border-t border-black/5 pt-4">
              <span className="font-mono text-[11px] tracking-widest uppercase text-black/40 block mb-2">
                Technologies Utilized
              </span>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] tracking-wider uppercase border border-black/15 bg-white px-2.5 py-1 text-black/70 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-black/5 pt-6">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-black bg-black py-3.5 px-4 font-mono text-xs tracking-widest uppercase text-white hover:bg-white hover:text-black transition-colors"
              >
                <span>Launch Live Site</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* Next Case Study Navigation Footer */}
      <div className="mt-28 md:mt-40 px-6 md:px-16 border-t border-black/10 pt-16">
        <span className="font-mono text-xs tracking-widest uppercase text-black/40 block mb-4">
          Next Selected Work
        </span>
        <Link
          href={`/work/${nextProject.slug}`}
          className="group block"
        >
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
            <h3 className="font-serif text-4xl sm:text-6xl md:text-8xl tracking-tight text-black group-hover:italic transition-all duration-300">
              {nextProject.title} →
            </h3>
            <span className="font-mono text-xs tracking-widest uppercase text-black/50">
              {nextProject.category} ({nextProject.year})
            </span>
          </div>
        </Link>
      </div>
    </article>
  );
}
