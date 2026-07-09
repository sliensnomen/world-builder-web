"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  baseDelay?: number;
  staggerDelay?: number;
  once?: boolean;
}

export default function AnimatedText({
  text,
  className = "",
  baseDelay = 0,
  staggerDelay = 0.08,
  once = true,
}: AnimatedTextProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: baseDelay },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block mr-[0.25em]"
          style={{ transformOrigin: "bottom center" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
