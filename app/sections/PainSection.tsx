"use client";

import { motion } from "framer-motion";

export default function PainSection() {
  return (
    <section className="relative h-screen w-full snap-start flex items-center px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full max-w-7xl mx-auto items-center">
        {/* Left: Testimonial */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-[#8C8C8C] text-xs tracking-[0.3em] uppercase mb-8 font-sans">
            The Problem
          </p>
          <blockquote className="font-serif text-[clamp(1.25rem,2.5vw,2rem)] leading-relaxed text-[#F5F0E6]/95">
            第 47 页的角色小传里，格雷说他
            <span className="text-[#B85450]">怕火</span>
            。三个月后，玩家在
            <span className="text-[#B85450]">火山口</span>
            指着铁匠铺问他：&ldquo;为什么？&rdquo; 我关掉团表，假装查手机。
          </blockquote>
          <div className="w-16 h-px bg-[#B85450]/40 mt-8" />
          <p className="text-[#8C8C8C] text-sm mt-4 font-sans">
            世界观越大，笔记越多，矛盾藏得越深。
          </p>
        </motion.div>

        {/* Right: Scattered Notes Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[500px]"
        >
          {/* Note 1 */}
          <div
            className="note-float absolute top-[10%] left-[5%] w-48 h-60 bg-[#F5F0E6]/95 rounded-sm shadow-2xl p-4 origin-top-left"
            style={{ "--rotation": "-8deg", "--delay": "0s" } as React.CSSProperties}
          >
            <div className="w-full h-2 bg-[#B85450]/80 mb-3" />
            <div className="space-y-2">
              <div className="h-1 bg-[#2B1F15]/20 w-5/6" />
              <div className="h-1 bg-[#2B1F15]/20 w-4/6" />
              <div className="h-1 bg-[#2B1F15]/20 w-full" />
              <div className="h-1 bg-[#2B1F15]/20 w-3/6" />
            </div>
            <p className="absolute bottom-3 right-3 font-serif text-[#8C8C8C] text-xs italic">
              p.47
            </p>
          </div>

          {/* Note 2 */}
          <div
            className="note-float absolute top-[25%] right-[10%] w-44 h-56 bg-[#F5F0E6]/90 rounded-sm shadow-2xl p-4 origin-top-right"
            style={{ "--rotation": "6deg", "--delay": "1.2s" } as React.CSSProperties}
          >
            <div className="space-y-2 mt-4">
              <div className="h-1 bg-[#2B1F15]/20 w-full" />
              <div className="h-1 bg-[#2B1F15]/20 w-5/6" />
              <div className="h-1 bg-[#B85450]/60 w-4/6" />
              <div className="h-1 bg-[#2B1F15]/20 w-3/6" />
            </div>
            <p className="absolute bottom-3 right-3 font-serif text-[#8C8C8C] text-xs italic">
              p.128
            </p>
          </div>

          {/* Note 3 */}
          <div
            className="note-float absolute bottom-[5%] left-[20%] w-40 h-52 bg-[#F5F0E6]/85 rounded-sm shadow-2xl p-4"
            style={{ "--rotation": "-3deg", "--delay": "2.4s" } as React.CSSProperties}
          >
            <div className="space-y-2 mt-2">
              <div className="h-1 bg-[#2B1F15]/20 w-5/6" />
              <div className="h-1 bg-[#2B1F15]/20 w-full" />
              <div className="h-1 bg-[#2B1F15]/20 w-4/6" />
            </div>
            <p className="absolute bottom-3 right-3 font-serif text-[#8C8C8C] text-xs italic">
              p.203
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
