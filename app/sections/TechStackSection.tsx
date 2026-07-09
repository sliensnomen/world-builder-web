"use client";

import { motion } from "framer-motion";

const techItems = [
  { name: "SwiftData", detail: "声明式模型持久化" },
  { name: "#Predicate", detail: "编译期安全查询" },
  { name: "Observation", detail: "细粒度响应式更新" },
  { name: "SwiftUI Canvas", detail: "原生关系图渲染" },
];

export default function TechStackSection() {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-6 md:px-16 bg-[#1F1610] overflow-hidden">
      <div className="max-w-5xl w-full mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#8C8C8C] text-xs tracking-[0.3em] uppercase mb-20 font-sans"
        >
          Built With
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {techItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-[#C9A96E] text-2xl md:text-3xl">
                  {item.name}
                </span>
                <div className="flex-1 h-px bg-[#C9A96E]/10 group-hover:bg-[#C9A96E]/30 transition-colors duration-500" />
              </div>
              <p className="font-sans text-[#8C8C8C] text-sm tracking-wide">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <blockquote className="font-serif text-2xl md:text-3xl text-[#F5F0E6]/90 italic tracking-wide">
            &ldquo;世界的逻辑，不需要云端批准。&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
