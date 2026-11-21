"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

interface CaseStudyProps {
  project: Project;
}

export default function CaseStudy({ project }: CaseStudyProps) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-36 bg-white">
      {/* Top Navigation & Index */}
      <div className="px-6 md:px-12 mb-12 flex items-center justify-between border-b border-black/10 pb-6">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-black/60 hover:text-black transition-colors"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          <span>Index of Selected Works</span>
        </Link>

        <span className="font-mono text-xs tracking-wider uppercase text-black/50">
          Case Study 0{currentIndex + 1} / 0{projects.length}
        </span>
      </div>

      {/* Hero Header */}
      <header className="px-6 md:px-12 mb-16 md:mb-24">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 font-mono text-xs tracking-wider uppercase text-emerald-700 font-semibold mb-4">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-display text-[clamp(4.5rem,11vw,10.5rem)] leading-[0.88] tracking-tight uppercase text-black mb-8">
            {project.title}
          </h1>

          <p className="font-sans text-lg md:text-2xl text-black/75 max-w-3xl leading-relaxed font-normal">
            {project.description}
          </p>
        </div>
      </header>

      {/* Main Cover Asset */}
      <div className="px-6 md:px-12 mb-20 md:mb-28">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xs border border-black/15 bg-neutral-100 shadow-sm">
          <Image
            src={project.cover}
            alt={`${project.title} Interface preview`}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Core Case Study Content Grid */}
      <div className="px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        {/* Main Narrative Column (8 cols) */}
        <div className="lg:col-span-8 space-y-16 md:space-y-20">
          {/* Challenge Section */}
          <section className="space-y-4">
            <span className="font-mono text-xs tracking-wider uppercase text-black/50 block font-semibold">
              01 // The Challenge
            </span>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-black tracking-tight">
              Problem & Context
            </h2>
            <p className="font-sans text-base md:text-lg text-black/75 leading-relaxed font-normal">
              {project.challenge}
            </p>
          </section>

          {/* Video Showcase Section */}
          <section className="space-y-4">
            <span className="font-mono text-xs tracking-wider uppercase text-black/50 block font-semibold">
              02 // Live Interaction Recording
            </span>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-black tracking-tight">
              Interface Motion Preview
            </h2>
            <div className="relative aspect-video w-full overflow-hidden rounded-xs border border-black/15 bg-neutral-100 shadow-sm">
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </section>

          {/* Outcome Section */}
          <section className="space-y-4">
            <span className="font-mono text-xs tracking-wider uppercase text-black/50 block font-semibold">
              03 // Results & Impact
            </span>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-black tracking-tight">
              Outcome
            </h2>
            <p className="font-sans text-base md:text-lg text-black/75 leading-relaxed font-normal">
              {project.outcome}
            </p>
          </section>
        </div>

        {/* Sidebar Specifications (4 cols) */}
        <aside className="lg:col-span-4 lg:col-start-9 space-y-8 lg:sticky lg:top-28 self-start">
          <div className="border border-black/15 p-6 md:p-8 space-y-6 bg-neutral-50/50 rounded-xs">
            <div>
              <span className="font-mono text-[11px] tracking-wider uppercase text-black/45 block mb-1">
                Role & Scope
              </span>
              <p className="font-heading text-lg font-bold uppercase text-black">{project.role}</p>
            </div>

            <div className="border-t border-black/10 pt-4">
              <span className="font-mono text-[11px] tracking-wider uppercase text-black/45 block mb-1">
                Year
              </span>
              <p className="font-mono text-sm text-black font-semibold">{project.year}</p>
            </div>

            <div className="border-t border-black/10 pt-4">
              <span className="font-mono text-[11px] tracking-wider uppercase text-black/45 block mb-2">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] tracking-wider uppercase border border-black/15 bg-white px-2.5 py-1 text-black/80 rounded-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-black/10 pt-6">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-black bg-black py-3.5 px-4 font-mono text-xs tracking-wider uppercase text-white hover:bg-neutral-800 transition-colors font-semibold rounded-xs"
              >
                <span>Launch Live Site</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* Next Case Study Navigation Footer */}
      <div className="mt-28 md:mt-40 px-6 md:px-12 border-t border-black/10 pt-16">
        <span className="font-mono text-xs tracking-wider uppercase text-black/50 block mb-4">
          Next Case Study
        </span>
        <Link
          href={`/work/${nextProject.slug}`}
          className="group block"
        >
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
            <h3 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-black group-hover:text-emerald-700 transition-colors duration-300">
              {nextProject.title} →
            </h3>
            <span className="font-mono text-xs tracking-wider uppercase text-black/50">
              {nextProject.category} ({nextProject.year})
            </span>
          </div>
        </Link>
      </div>
    </article>
  );
}
