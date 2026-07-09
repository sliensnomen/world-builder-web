"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Decorative corner marks */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-[#C9A96E]/30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-[#C9A96E]/30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-[#C9A96E]/30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-[#C9A96E]/30" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#C9A96E] tracking-[0.4em] text-xs uppercase mb-6 font-sans"
        >
          World Building Rule Engine
        </motion.p>

        <h1 className="font-serif text-[clamp(3.5rem,12vw,9rem)] leading-[0.9] tracking-tight text-[#F5F0E6] mb-4">
          WorldWeaver
        </h1>

        <h2 className="font-serif text-[clamp(1.5rem,4vw,3rem)] text-[#C9A96E] tracking-[0.3em] mb-8">
          织界
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-24 h-px bg-[#C9A96E] mx-auto mb-8 origin-left"
        />

        <p className="font-sans text-[#F5F0E6]/90 text-lg md:text-xl tracking-wide max-w-2xl mx-auto leading-relaxed">
          世界观规则引擎 · 让设定自己记住自己
        </p>

        <p className="font-sans text-[#8C8C8C] text-sm mt-4 tracking-wider">
          不是笔记软件。不是 AI 工具。
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#8C8C8C] text-xs tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-[#C9A96E] breathe-arrow" />
      </motion.div>
    </section>
  );
}
