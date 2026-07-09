"use client";

import { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function GlobalEffects() {
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <>
      {/* Film grain overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* Vignette */}
      <div className="vignette" aria-hidden="true" />

      {/* Mouse following light */}
      <motion.div
        className="fixed pointer-events-none z-[9997]"
        style={{
          left: x,
          top: y,
          width: 600,
          height: 600,
          x: -300,
          y: -300,
          background: "radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
