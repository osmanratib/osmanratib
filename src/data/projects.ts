export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  url: string;
  stack: string[];
  cover: string;
  video: string;
  description: string;
  role: string;
  challenge: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "cafebee",
    title: "CafeBee",
    category: "Specialty Roastery & Slow Bar",
    year: "2026",
    url: "https://cafebee-orpin.vercel.app/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    cover: "/work/cafebee.png",
    video: "/work/cafebee.mp4",
    description: "A specialty coffee roastery and slow bar brand experience, designed to evoke warmth, ritual, and craft.",
    role: "Design & Development",
    challenge: "Translate the tactile, sensory experience of specialty coffee into a digital brand presence.",
    outcome: "A warm editorial site with rich typography, animated transitions, and a menu that invites slow browsing.",
  },
  {
    slug: "fixnest",
    title: "Fixnest",
    category: "Professional Cleaning Service",
    year: "2026",
    url: "https://fix-nest-alpha.vercel.app/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    cover: "/work/fixnest.png",
    video: "/work/fixnest.mp4",
    description: "A professional cleaning service platform built for trust, clarity, and easy booking.",
    role: "Design & Development",
    challenge: "Make a cleaning service feel premium, approachable, and trustworthy at first glance.",
    outcome: "A clean, high-contrast site with smooth animations and a booking flow that reduced friction.",
  },
  {
    slug: "aura-gym",
    title: "Aura Gym",
    category: "Performance & Recovery",
    year: "2026",
    url: "https://aura-gym-teal.vercel.app/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Three.js"],
    cover: "/work/aura.png",
    video: "/work/aura.mp4",
    description: "A performance and recovery gym brand, built to inspire commitment and discipline.",
    role: "Design & Development",
    challenge: "Convey energy, discipline, and premium quality without the typical aggressive gym aesthetic.",
    outcome: "A refined, editorial gym site that speaks to serious athletes seeking both performance and recovery.",
  },
];
