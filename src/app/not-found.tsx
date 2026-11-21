import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between px-6 md:px-16 pt-36 pb-12">
      <div className="font-mono text-xs tracking-widest uppercase text-black/40">
        Error 404 / Monograph Missing
      </div>

      <div className="my-auto max-w-4xl py-12">
        <h1 className="font-serif text-[clamp(4rem,14vw,14rem)] leading-none tracking-tight text-black mb-6">
          404<span className="italic">.</span>
        </h1>
        <p className="font-sans text-xl md:text-2xl text-black/70 max-w-lg mb-10 font-light">
          The requested folio does not exist or has been relocated to another archive.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-black bg-black px-6 py-3.5 font-mono text-xs tracking-widest uppercase text-white hover:bg-white hover:text-black transition-colors"
        >
          <span>← Return to Monograph Front</span>
        </Link>
      </div>

      <div className="border-t border-black/10 pt-4 font-mono text-xs text-black/40">
        Osman Ratib Portfolio — All indexes active
      </div>
    </div>
  );
}
