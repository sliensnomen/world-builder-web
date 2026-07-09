"use client";

import { motion } from "framer-motion";
import { Type, ScanLine, Check } from "lucide-react";

const steps = [
  {
    icon: Type,
    title: "输入",
    desc: "像平时一样写下角色、地点、事件。",
  },
  {
    icon: ScanLine,
    title: "检测",
    desc: "规则引擎在本地扫描潜在矛盾。",
  },
  {
    icon: Check,
    title: "修正",
    desc: "冲突高亮，关系路径自动显现。",
  },
];

export default function SolutionSection() {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#8C8C8C] text-xs tracking-[0.3em] uppercase mb-16 text-center font-sans"
        >
          The Solution
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center group"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-8 border border-[#C9A96E]/30 rounded-full text-[#C9A96E] group-hover:border-[#C9A96E] transition-colors duration-500">
                <step.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-[#F5F0E6] mb-4">
                {step.title}
              </h3>
              <p className="font-sans text-[#8C8C8C] leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="hidden md:block absolute top-10 left-[calc(100%+1.5rem)] w-[calc(100%-3rem)] h-px bg-[#C9A96E]/30 origin-left"
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="w-24 h-px bg-[#C9A96E]/30 mx-auto mb-6" />
          <p className="font-mono text-[#8C8C8C] text-sm tracking-wider">
            基于 SwiftData 声明式约束，零 AI，零网络
          </p>
        </motion.div>
      </div>
    </section>
  );
}
