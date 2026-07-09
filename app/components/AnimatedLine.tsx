"use client";

import { motion } from "framer-motion";

interface AnimatedLineProps {
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "left" | "center" | "right";
  color?: string;
}

export default function AnimatedLine({
  className = "",
  delay = 0,
  duration = 1,
  direction = "left",
  color = "#C9A96E",
}: AnimatedLineProps) {
  const origin = direction === "left" ? "left" : direction === "right" ? "right" : "center";

  return (
    <motion.div
      className={`h-px ${className}`}
      style={{ backgroundColor: color, transformOrigin: origin }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    />
  );
}
