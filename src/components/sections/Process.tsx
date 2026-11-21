"use client";

const STEPS = [
  {
    index: "01",
    phase: "Phase I",
    title: "Blueprint & System Design",
    description:
      "Structural analysis, modular architecture, and typography scaling. Defining component boundaries and data flows before implementation.",
  },
  {
    index: "02",
    phase: "Phase II",
    title: "Kinetic Motion & Prototyping",
    description:
      "Choreographing smooth scroll physics, interactive state transitions, and responsive gestures with Lenis and GSAP.",
  },
  {
    index: "03",
    phase: "Phase III",
    title: "Production Engineering",
    description:
      "Full-stack development with Next.js App Router, strict TypeScript, server components, and responsive layout polish.",
  },
  {
    index: "04",
    phase: "Phase IV",
    title: "Performance & Deployment",
    description:
      "Lighthouse 99+ optimization, asset preloading, edge CDN caching, and automated sitemap generation.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative px-6 md:px-12 py-24 md:py-36 border-b border-black/10 bg-neutral-50/50"
    >
      {/* Clean Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-black/10 pb-6 mb-16">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold bg-black text-white px-2 py-0.5 rounded-xs">
            02
          </span>
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-black">
            Process & Methodology
          </h2>
        </div>
        <div className="font-mono text-xs tracking-wider uppercase text-black/50">
          How Projects Are Built (04 Steps)
        </div>
      </div>

      {/* Clean 4-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {STEPS.map((step) => (
          <div
            key={step.index}
            className="border-t border-black/20 pt-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display text-4xl text-black">
                  {step.index}
                </span>
                <span className="font-mono text-xs font-semibold tracking-wider uppercase text-emerald-700">
                  {step.phase}
                </span>
              </div>

              <h3 className="font-heading text-lg font-bold text-black mb-3">
                {step.title}
              </h3>

              <p className="font-sans text-sm text-black/70 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
