"use client";

import { useEffect, useState } from "react";
import HeroSection from "./sections/HeroSection";
import PainSection from "./sections/PainSection";
import SolutionSection from "./sections/SolutionSection";
import FeaturesSection from "./sections/FeaturesSection";
import TechStackSection from "./sections/TechStackSection";
import PhilosophySection from "./sections/PhilosophySection";
import CTASection from "./sections/CTASection";

const sections = [
  { id: "hero", label: "01" },
  { id: "pain", label: "02" },
  { id: "solution", label: "03" },
  { id: "features", label: "04" },
  { id: "tech", label: "05" },
  { id: "philosophy", label: "06" },
  { id: "cta", label: "07" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const index = Math.round(scrollTop / windowHeight);
      setActiveIndex(Math.min(Math.max(index, 0), sections.length - 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory no-scrollbar">
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <FeaturesSection />
      <TechStackSection />
      <PhilosophySection />
      <CTASection />

      {/* Side navigation dots */}
      <nav className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className="group flex items-center gap-3 text-right"
            aria-label={`Go to section ${section.label}`}
          >
            <span
              className={`font-sans text-xs tracking-wider transition-all duration-300 ${
                activeIndex === index
                  ? "text-[#C9A96E] opacity-100"
                  : "text-[#8C8C8C] opacity-0 group-hover:opacity-60"
              }`}
            >
              {section.label}
            </span>
            <div
              className={`h-px transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-[#C9A96E]"
                  : "w-4 bg-[#8C8C8C]/40 group-hover:w-6 group-hover:bg-[#8C8C8C]/70"
              }`}
            />
          </button>
        ))}
      </nav>
    </div>
  );
}
