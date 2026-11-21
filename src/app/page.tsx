"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/layout/Preloader";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";

export default function HomePage() {
  const [showPreloader, setShowPreloader] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has already visited in this session
    const hasVisited = sessionStorage.getItem("portfolio_visited");
    if (!hasVisited) {
      setShowPreloader(true);
    }
  }, []);

  return (
    <>
      {mounted && showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}
      <Hero />
      <Work />
      <About />
      <Capabilities />
    </>
  );
}
