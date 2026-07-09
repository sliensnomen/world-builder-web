"use client";

import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-6 md:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-[#8C8C8C] text-xs tracking-[0.3em] uppercase mb-16 font-sans">
            Philosophy
          </p>

          <h2 className="font-serif text-[clamp(1.75rem,4vw,3.5rem)] leading-tight italic tracking-wide text-[#F5F0E6]/95">
            大多数工具问：你要找什么？
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="w-20 h-px bg-[#C9A96E]/40 mx-auto my-12 origin-center"
          />

          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] leading-tight italic tracking-wider text-[#C9A96E]">
            WorldWeaver 问：你发现了吗？
          </h2>
        </motion.div>
      </div>

      {/* Corner page number */}
      <div className="absolute bottom-8 right-8 font-serif text-[#8C8C8C]/40 text-6xl md:text-8xl italic">
        vii
      </div>
    </section>
  );
}
