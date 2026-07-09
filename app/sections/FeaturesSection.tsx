"use client";

import { motion } from "framer-motion";

const features = [
  {
    num: "01",
    title: "输入即标红",
    desc: "新设定与既有规则冲突时，立即在行间亮起砖红标记。",
  },
  {
    num: "02",
    title: "长按 Quick Actions",
    desc: "按住条目即可快速插入关联、查看引用路径或添加约束。",
  },
  {
    num: "03",
    title: "关系路径脉动",
    desc: "角色、地点、事件之间的隐性联系，以可视化路径自动浮现。",
  },
  {
    num: "04",
    title: "富文本编辑器",
    desc: "像编辑精装设定集一样，排版、注释、批注一气呵成。",
  },
  {
    num: "05",
    title: "修正反馈",
    desc: "每次修改后，引擎即时验证一致性，确保世界不会自相矛盾。",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-5xl w-full mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#8C8C8C] text-xs tracking-[0.3em] uppercase mb-16 font-sans"
        >
          Capabilities
        </motion.p>

        <div className="space-y-0">
          {features.map((feature, index) => (
            <motion.div
              key={feature.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group grid grid-cols-12 gap-6 py-8 border-t border-[#C9A96E]/10 hover:border-[#C9A96E]/30 transition-colors duration-500"
            >
              <div className="col-span-12 md:col-span-2">
                <span className="font-serif text-[#C9A96E] text-3xl md:text-4xl">
                  {feature.num}
                </span>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="font-serif text-[#F5F0E6] text-2xl md:text-3xl group-hover:text-[#C9A96E] transition-colors duration-500">
                  {feature.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-6">
                <p className="font-sans text-[#8C8C8C] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
