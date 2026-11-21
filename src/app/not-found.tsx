import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between px-6 md:px-12 pt-36 pb-12 bg-white">
      <div className="font-mono text-xs tracking-widest uppercase text-black/40">
        Error 404 // Folio Not Found
      </div>

      <div className="my-auto max-w-4xl py-12">
        <h1 className="font-display text-[clamp(4.5rem,15vw,15rem)] font-extrabold uppercase leading-none tracking-tight text-black mb-6">
          404<span className="text-emerald-500">.</span>
        </h1>
        <p className="font-sans text-xl md:text-2xl text-black/70 max-w-lg mb-10 font-normal">
          The requested route does not exist or has been relocated to another archive.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-black bg-black px-7 py-4 font-mono text-xs font-semibold tracking-widest uppercase text-white hover:bg-white hover:text-black transition-colors"
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
