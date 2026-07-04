"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative flowing gradient waves for the hero background — soft, organic,
 * slowly drifting silk-like bands (Claude / Anthropic-style calm aesthetic),
 * tinted with the Tezcode blue + gold palette.
 *
 * Performance:
 *  - Single <canvas>, DPR capped at 1.5 (it's blurred, no need for sharp px).
 *  - Only ~4 filled wave paths/frame (a few hundred line segments) — cheap.
 *  - rAF loop pauses off-screen (IntersectionObserver) or when tab hidden.
 *  - Honors prefers-reduced-motion: one static frame, no loop.
 *  - aria-hidden + pointer-events-none; sits behind hero content.
 */
export function HeroFlowWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const context = canvasEl.getContext("2d");
    if (!context) return;
    // Non-null aliases so the type survives inside nested closures.
    const canvas = canvasEl;
    const ctx = context;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    type Band = {
      yFactor: number; // base vertical position (0..1)
      amp: number; // wave amplitude (px)
      len: number; // wavelength factor across the width
      speed: number; // phase drift per frame
      color: [number, number, number];
      alpha: number;
    };
    const bands: Band[] = [
      { yFactor: 0.32, amp: 42, len: 0.9, speed: 0.006, color: [0, 90, 255], alpha: 0.16 },
      { yFactor: 0.46, amp: 58, len: 1.3, speed: -0.0042, color: [60, 120, 255], alpha: 0.13 },
      { yFactor: 0.6, amp: 38, len: 1.1, speed: 0.005, color: [212, 160, 23], alpha: 0.1 },
      { yFactor: 0.72, amp: 64, len: 0.8, speed: -0.0034, color: [0, 64, 255], alpha: 0.12 },
    ];

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    let t = 0;
    let io: IntersectionObserver | null = null;
    let ro: ResizeObserver | null = null;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawBand(b: Band, phase: number) {
      const baseY = height * b.yFactor;
      const [r, g, bl] = b.color;
      const grad = ctx.createLinearGradient(0, baseY - b.amp, 0, height);
      grad.addColorStop(0, `rgba(${r},${g},${bl},${b.alpha})`);
      grad.addColorStop(1, `rgba(${r},${g},${bl},0)`);
      ctx.fillStyle = grad;

      ctx.beginPath();
      ctx.moveTo(0, height);
      const step = 18;
      for (let x = 0; x <= width; x += step) {
        const u = x / width;
        const y =
          baseY +
          Math.sin(u * Math.PI * 2 * b.len + phase) * b.amp +
          Math.sin(u * Math.PI * 4 * b.len + phase * 1.3) * (b.amp * 0.3);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Additive blend → overlapping bands glow softly on the dark bg.
      ctx.globalCompositeOperation = "lighter";
      for (const b of bands) drawBand(b, t * b.speed);
      ctx.globalCompositeOperation = "source-over";
      t += 1;
      if (running) raf = requestAnimationFrame(draw);
    }

    function start() {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(draw);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    resize();

    if (reduceMotion) {
      running = false;
      draw();
      return;
    }

    start();

    io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    return () => {
      stop();
      io?.disconnect();
      ro?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full pointer-events-none"
      style={{ opacity: 0.9, filter: "blur(16px)" }}
    />
  );
}
