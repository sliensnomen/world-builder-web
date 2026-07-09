"use client";

import { motion } from "framer-motion";
import AnimatedLine from "../components/AnimatedLine";

const nodes = [
  { id: "input", label: "输入", x: 50, y: 200, desc: "像平时一样写下角色、地点、事件。" },
  { id: "detect", label: "检测", x: 250, y: 120, desc: "规则引擎在本地扫描潜在矛盾。" },
  { id: "fix", label: "修正", x: 450, y: 200, desc: "冲突高亮，关系路径自动显现。" },
];

const connections = [
  { from: nodes[0], to: nodes[1] },
  { from: nodes[1], to: nodes[2] },
];

export default function SolutionSection() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[#8C8C8C] text-xs tracking-[0.3em] uppercase mb-16 text-center font-sans"
        >
          The Solution
        </motion.p>

        {/* Network graph */}
        <div className="relative h-[300px] md:h-[350px] max-w-2xl mx-auto mb-16">
          <svg
            className="w-full h-full"
            viewBox="0 0 500 300"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {connections.map((conn, index) => {
              const midX = (conn.from.x + conn.to.x) / 2;
              const midY = (conn.from.y + conn.to.y) / 2 - 40;
              const d = `M ${conn.from.x} ${conn.from.y} Q ${midX} ${midY} ${conn.to.x} ${conn.to.y}`;
              const length = 500;
              return (
                <motion.path
                  key={index}
                  d={d}
                  stroke="#C9A96E"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                  strokeDasharray={length}
                  initial={{ strokeDashoffset: length }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5 + index * 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              );
            })}

            {nodes.map((node, index) => (
              <g key={node.id}>
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="8"
                  fill="#2B1F15"
                  stroke="#C9A96E"
                  strokeWidth="2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </g>
            ))}

            {/* Wandering dot on second path */}
            <motion.circle
              r="4"
              fill="#C9A96E"
              initial={{ offsetDistance: "0%", opacity: 0 }}
              whileInView={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 3,
                delay: 2.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "linear",
              }}
              style={{
                offsetPath: "path('M 50 200 Q 150 80 250 120 Q 350 160 450 200')",
              }}
            />
          </svg>
        </div>

        {/* Node labels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {nodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8 + index * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-center group"
            >
              <h3 className="font-serif text-3xl md:text-4xl text-[#F5F0E6] mb-4 group-hover:text-[#C9A96E] transition-colors duration-500">
                {node.label}
              </h3>
              <p className="font-sans text-[#8C8C8C] leading-relaxed max-w-xs mx-auto">
                {node.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-24 text-center"
        >
          <AnimatedLine
            className="w-24 bg-[#C9A96E]/30 mx-auto mb-6"
            delay={0.2}
            duration={1}
            direction="center"
          />
          <p className="font-mono text-[#8C8C8C] text-sm tracking-wider">
            基于 SwiftData 声明式约束，零 AI，零网络
          </p>
        </motion.div>
      </div>
    </section>
  );
}
