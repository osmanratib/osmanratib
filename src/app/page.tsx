"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/layout/Preloader";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";

export default function HomePage() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}
      <Hero />
      <Work />
      <Process />
      <About />
      <Capabilities />
    </>
  );
}
