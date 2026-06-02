"use client";

import { motion, useScroll, useTransform } from "motion/react";

export function HeroBackground3D() {
  const { scrollY } = useScroll();
  const meshY = useTransform(scrollY, [0, 800], ["0%", "30%"]);
  const meshOpacity = useTransform(scrollY, [0, 600], [1, 0.3]);
  const gridY = useTransform(scrollY, [0, 800], ["0%", "20%"]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Conic mesh gradient — slowly rotating (transform only, composited) */}
      <motion.div
        style={{ y: meshY, opacity: meshOpacity }}
        className="absolute inset-0"
      >
        <div
          className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] opacity-[0.18]"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, var(--tc-blue) 0deg, transparent 60deg, var(--tc-gold) 180deg, transparent 240deg, var(--tc-blue) 360deg)",
            filter: "blur(80px)",
            willChange: "transform",
            animation: "tc-conic-spin 40s linear infinite",
          }}
        />
      </motion.div>

      {/* Two animated mesh blobs (transform-only drift, composited) */}
      <motion.div
        style={{ y: meshY }}
        aria-hidden
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,64,255,0.45) 0%, transparent 60%)",
            filter: "blur(80px)",
            willChange: "transform",
            animation: "tc-mesh-drift 14s ease-in-out infinite",
          }}
        />
      </motion.div>
      <motion.div
        style={{ y: meshY }}
        aria-hidden
        className="absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212,160,23,0.32) 0%, transparent 60%)",
            filter: "blur(100px)",
            willChange: "transform",
            animation: "tc-mesh-drift 18s ease-in-out infinite reverse",
          }}
        />
      </motion.div>

      {/* Aurora ribbon — Linear-style (opacity + transform, composited) */}
      <motion.div
        style={{ y: meshY }}
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[140%] h-[60%] -rotate-12 opacity-[0.10]"
      >
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--tc-blue) 30%, var(--tc-gold) 50%, var(--tc-blue) 70%, transparent)",
            filter: "blur(60px)",
            willChange: "transform, opacity",
            animation: "tc-aurora 12s ease-in-out infinite",
          }}
        />
      </motion.div>

      {/* Static grid lines — animating background-position is non-composited,
          so the pan is dropped; the scroll-parallax (transform) is kept. */}
      <motion.div
        style={{ y: gridY }}
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(var(--tc-border-bright) 1px, transparent 1px),
              linear-gradient(90deg, var(--tc-border-bright) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Vignette */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 30%, rgba(10,10,15,0.6) 100%)",
        }}
      />

      {/* Corner accent lines */}
      <div className="absolute top-20 left-6 w-24 h-px bg-gradient-to-r from-[var(--tc-blue)] to-transparent opacity-60" />
      <div className="absolute top-20 left-6 w-px h-24 bg-gradient-to-b from-[var(--tc-blue)] to-transparent opacity-60" />
      <div className="absolute bottom-20 right-6 w-24 h-px bg-gradient-to-l from-[var(--tc-gold)] to-transparent opacity-60" />
      <div className="absolute bottom-20 right-6 w-px h-24 bg-gradient-to-t from-[var(--tc-gold)] to-transparent opacity-60" />

      {/* Floating particles (transform + opacity only, composited) */}
      {[
        { top: "18%", left: "12%", color: "var(--tc-blue)", size: 3, delay: 0 },
        { top: "72%", left: "90%", color: "var(--tc-blue)", size: 4, delay: 0.6 },
        { top: "45%", left: "50%", color: "var(--tc-gold)", size: 2, delay: 1.8 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          aria-hidden
          animate={{ y: [0, -14, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
          className="absolute rounded-full"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            background: dot.color,
            boxShadow: `0 0 12px ${dot.color}`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}
