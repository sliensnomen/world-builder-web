"use client";

import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import AnimatedLine from "../components/AnimatedLine";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function HeroSection() {
  const cornerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 1.4 + i * 0.1,
        ease: easeOutExpo,
      },
    }),
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Decorative corner marks */}
      {[
        "top-8 left-8 border-t border-l",
        "top-8 right-8 border-t border-r",
        "bottom-8 left-8 border-b border-l",
        "bottom-8 right-8 border-b border-r",
      ].map((position, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={cornerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`absolute w-12 h-12 border-[#C9A96E]/30 ${position}`}
        />
      ))}

      <div className="text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: easeOutExpo }}
          className="text-[#C9A96E] tracking-[0.4em] text-xs uppercase mb-8 font-sans"
        >
          World Building Rule Engine
        </motion.p>

        <h1 className="font-serif text-[clamp(3.5rem,12vw,9rem)] leading-[0.9] tracking-tight text-[#F5F0E6] mb-4">
          <AnimatedText text="WorldWeaver" baseDelay={0.4} staggerDelay={0.1} />
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.2, ease: easeOutExpo }}
          className="font-serif text-[clamp(1.5rem,4vw,3rem)] text-[#C9A96E] tracking-[0.3em] mb-10"
        >
          织界
        </motion.h2>

        <AnimatedLine
          className="w-24 bg-[#C9A96E] mx-auto mb-10"
          delay={1.4}
          duration={1.2}
          direction="center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.8, ease: easeOutExpo }}
          className="font-sans text-[#F5F0E6]/90 text-lg md:text-xl tracking-wide max-w-2xl mx-auto leading-relaxed"
        >
          世界观规则引擎 · 让设定自己记住自己
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="font-sans text-[#8C8C8C] text-sm mt-4 tracking-wider"
        >
          不是笔记软件。不是 AI 工具。
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.6 }}
        viewport={{ once: true }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#8C8C8C] text-xs tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-[#C9A96E] breathe-arrow" />
      </motion.div>
    </section>
  );
}
