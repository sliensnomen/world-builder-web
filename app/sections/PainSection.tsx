"use client";

import { motion } from "framer-motion";
import AnimatedLine from "../components/AnimatedLine";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const notes = [
  {
    top: "10%",
    left: "5%",
    rotation: "-8deg",
    delay: "0.2s",
    className: "w-48 h-60 bg-[#F5F0E6]/95 origin-top-left",
    page: "p.47",
    highlight: true,
  },
  {
    top: "25%",
    right: "10%",
    rotation: "6deg",
    delay: "0.5s",
    className: "w-44 h-56 bg-[#F5F0E6]/90 origin-top-right",
    page: "p.128",
    highlight: false,
  },
  {
    bottom: "5%",
    left: "20%",
    rotation: "-3deg",
    delay: "0.8s",
    className: "w-40 h-52 bg-[#F5F0E6]/85",
    page: "p.203",
    highlight: false,
  },
];

export default function PainSection() {
  return (
    <section className="relative h-screen w-full flex items-center px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full max-w-7xl mx-auto items-center">
        {/* Left: Testimonial */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: easeOutExpo }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[#8C8C8C] text-xs tracking-[0.3em] uppercase mb-8 font-sans">
            The Problem
          </p>
          <blockquote className="font-serif text-[clamp(1.25rem,2.5vw,2rem)] leading-relaxed text-[#F5F0E6]/95">
            第 47 页的角色小传里，格雷说他
            <motion.span
              className="text-[#B85450] inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6, ease: easeOutExpo }}
              viewport={{ once: true }}
            >
              怕火
            </motion.span>
            。三个月后，玩家在
            <motion.span
              className="text-[#B85450] inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.6, ease: easeOutExpo }}
              viewport={{ once: true }}
            >
              火山口
            </motion.span>
            指着铁匠铺问他：&ldquo;为什么？&rdquo; 我关掉团表，假装查手机。
          </blockquote>
          <AnimatedLine
            className="w-16 bg-[#B85450]/40 mt-8"
            delay={0.6}
            duration={1}
            direction="left"
          />
          <p className="text-[#8C8C8C] text-sm mt-4 font-sans">
            世界观越大，笔记越多，矛盾藏得越深。
          </p>
        </motion.div>

        {/* Right: Scattered Notes Visual */}
        <div className="relative h-[400px] md:h-[500px]">
          {notes.map((note, index) => {
            const style: React.CSSProperties = {
              top: note.top,
              left: note.left,
              right: note.right,
              bottom: note.bottom,
              ["--rotation" as string]: note.rotation,
              ["--delay" as string]: note.delay,
            };
            return (
              <motion.div
                key={index}
                className={`paper-fall absolute rounded-sm shadow-2xl p-4 ${note.className}`}
                style={style}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {note.highlight && (
                  <div className="w-full h-2 bg-[#B85450]/80 mb-3" />
                )}
                <div className="space-y-2">
                  <div className="h-1 bg-[#2B1F15]/20 w-5/6" />
                  <div className="h-1 bg-[#2B1F15]/20 w-4/6" />
                  <div className={`h-1 ${note.highlight ? "bg-[#B85450]/60" : "bg-[#2B1F15]/20"} w-full`} />
                  <div className="h-1 bg-[#2B1F15]/20 w-3/6" />
                </div>
                <p className="absolute bottom-3 right-3 font-serif text-[#8C8C8C] text-xs italic">
                  {note.page}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
