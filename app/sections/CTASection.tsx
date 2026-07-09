"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function CTASection() {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-6 md:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] italic text-[#F5F0E6]/90 leading-relaxed mb-12"
        >
          这不是我编得好，是这个世界本来就在。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-[clamp(3rem,9vw,7rem)] leading-[0.9] text-[#F5F0E6] mb-4">
            WorldWeaver
          </h2>
          <p className="font-serif text-[#C9A96E] text-xl md:text-2xl tracking-[0.4em] mb-16">
            织界
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#demo"
            className="group flex items-center gap-2 px-8 py-4 border border-[#C9A96E] text-[#C9A96E] font-sans tracking-wider text-sm uppercase hover:bg-[#C9A96E] hover:text-[#2B1F15] transition-all duration-500"
          >
            查看 Demo
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 border border-[#F5F0E6]/30 text-[#F5F0E6] font-sans tracking-wider text-sm uppercase hover:border-[#F5F0E6] transition-all duration-500"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Footer credit */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="font-sans text-[#8C8C8C]/60 text-xs tracking-wider">
          WorldWeaver · 世界观规则引擎
        </p>
      </div>
    </section>
  );
}
