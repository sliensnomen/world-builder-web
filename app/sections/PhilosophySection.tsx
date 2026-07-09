"use client";

import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center px-6 md:px-16 overflow-hidden">
      {/* Spotlight background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 50%)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[#8C8C8C] text-xs tracking-[0.3em] uppercase mb-16 font-sans"
        >
          Philosophy
        </motion.p>

        <motion.h2
          className="font-serif text-[clamp(1.75rem,4vw,3.5rem)] leading-tight italic tracking-wide text-[#F5F0E6]/95"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          大多数工具问：你要找什么？
        </motion.h2>

        <motion.div
          className="w-20 h-px bg-[#C9A96E]/40 mx-auto my-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "center" }}
        />

        <motion.h2
          className="font-serif text-[clamp(2rem,5vw,4rem)] leading-tight italic tracking-wider text-[#C9A96E]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          WorldWeaver 问：你发现了吗？
        </motion.h2>
      </div>

      {/* Corner page number */}
      <motion.div
        className="absolute bottom-8 right-8 font-serif text-[#8C8C8C]/40 text-6xl md:text-8xl italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{ once: true }}
      >
        vii
      </motion.div>
    </section>
  );
}
