"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import PainSection from "./sections/PainSection";
import SolutionSection from "./sections/SolutionSection";
import FeaturesSection from "./sections/FeaturesSection";
import TechStackSection from "./sections/TechStackSection";
import PhilosophySection from "./sections/PhilosophySection";
import CTASection from "./sections/CTASection";
import GlobalEffects from "./components/GlobalEffects";

const sections = [
  { id: "hero", label: "01" },
  { id: "pain", label: "02" },
  { id: "solution", label: "03" },
  { id: "features", label: "04" },
  { id: "tech", label: "05" },
  { id: "philosophy", label: "06" },
  { id: "cta", label: "07" },
];

function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.9, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1,
      }}
      className="h-screen w-full snap-start"
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const progressLine = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = containerRef.current?.scrollTop || 0;
      const windowHeight = window.innerHeight;
      const index = Math.round(scrollTop / windowHeight);
      setActiveIndex(Math.min(Math.max(index, 0), sections.length - 1));
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll, { passive: true });
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    containerRef.current?.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <GlobalEffects />

      {/* Scroll progress line */}
      <motion.div
        className="fixed top-0 left-0 h-px bg-[#C9A96E]/60 z-[10000]"
        style={{ width: progressLine }}
      />

      <div
        ref={containerRef}
        className="relative h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory no-scrollbar"
      >
        <SectionWrapper>
          <HeroSection />
        </SectionWrapper>
        <SectionWrapper>
          <PainSection />
        </SectionWrapper>
        <SectionWrapper>
          <SolutionSection />
        </SectionWrapper>
        <SectionWrapper>
          <FeaturesSection />
        </SectionWrapper>
        <SectionWrapper>
          <TechStackSection />
        </SectionWrapper>
        <SectionWrapper>
          <PhilosophySection />
        </SectionWrapper>
        <SectionWrapper>
          <CTASection />
        </SectionWrapper>
      </div>

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
    </>
  );
}
