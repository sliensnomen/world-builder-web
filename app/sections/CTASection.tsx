"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center px-6 md:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          viewport={{ once: true, amount: 0.5 }}
          className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] italic text-[#F5F0E6]/90 leading-relaxed mb-12"
        >
          这不是我编得好，是这个世界本来就在。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="font-serif text-[clamp(3rem,9vw,7rem)] leading-[0.9] text-[#F5F0E6] mb-4">
            WorldWeaver
          </h2>
          <p className="font-serif text-[#C9A96E] text-xl md:text-2xl tracking-[0.4em] mb-16">
            织界
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex items-center justify-center"
        >
          <motion.a
            href="https://github.com/sliensnomen/world-bulider"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 px-8 py-4 border border-[#C9A96E] text-[#C9A96E] font-sans tracking-wider text-sm uppercase overflow-hidden"
            whileHover={{ backgroundColor: "#C9A96E", color: "#2B1F15" }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="absolute inset-0 bg-[#C9A96E]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            />
            <span className="relative z-10">查看 Demo</span>
            <ArrowUpRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>

      {/* Footer credit */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <p className="font-sans text-[#8C8C8C]/60 text-xs tracking-wider">
          WorldWeaver · 世界观规则引擎
        </p>
      </motion.div>
    </section>
  );
}
