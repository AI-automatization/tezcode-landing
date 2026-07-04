"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative "always-on AI" orbital core for the hero background.
 * A glowing nucleus emits expanding "ping" rings while dots orbit endlessly on
 * tilted rings — a system that never stops, conveying 24/7 operation without
 * any text. Sophisticated glow/depth instead of flat icons.
 *
 * Performance:
 *  - Single <canvas>, DPR capped at 2. ~4 orbits, ~12 dots, ≤3 ping rings/frame.
 *  - rAF loop pauses off-screen (IntersectionObserver) or when tab hidden.
 *  - Honors prefers-reduced-motion: one static frame, no loop.
 *  - aria-hidden + pointer-events-none; sits behind hero content.
 */
export function HeroOrbit() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const context = canvasEl.getContext("2d");
    if (!context) return;
    const canvas = canvasEl;
    const ctx = context;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const rootStyles = getComputedStyle(document.documentElement);
    const gold = rootStyles.getPropertyValue("--tc-gold").trim() || "#d4a017";
    const blue = "#5a8cff";

    type Orbit = {
      rx: number;
      ry: number;
      tilt: number;
      speed: number;
      dots: { phase: number; gold: boolean; size: number }[];
    };

    // Base (unscaled) orbit definitions; radii are scaled to the viewport.
    const ORBITS: Orbit[] = [
      { rx: 95, ry: 36, tilt: 0.4, speed: 0.013, dots: [{ phase: 0, gold: true, size: 3 }, { phase: Math.PI, gold: false, size: 2.4 }] },
      { rx: 155, ry: 58, tilt: -0.5, speed: -0.0095, dots: [{ phase: 0.6, gold: false, size: 2.8 }, { phase: 2.4, gold: true, size: 3 }, { phase: 4.4, gold: false, size: 2.4 }] },
      { rx: 225, ry: 84, tilt: 0.95, speed: 0.0066, dots: [{ phase: 1, gold: false, size: 2.6 }, { phase: 3.2, gold: true, size: 3 }, { phase: 5.2, gold: false, size: 2.4 }] },
      { rx: 305, ry: 116, tilt: -0.28, speed: 0.0048, dots: [{ phase: 0.3, gold: true, size: 2.8 }, { phase: 2.1, gold: false, size: 2.4 }, { phase: 3.9, gold: true, size: 2.6 }, { phase: 5.6, gold: false, size: 2.4 }] },
    ];

    let width = 0;
    let height = 0;
    let cx = 0;
    let cy = 0;
    let scale = 1;
    let frame = 0;
    let raf = 0;
    let running = false;
    let io: IntersectionObserver | null = null;
    let ro: ResizeObserver | null = null;
    const pings: { r: number; alpha: number }[] = [];

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      cx = width / 2;
      cy = height / 2;
      scale = Math.max(0.7, Math.min(1.6, Math.min(width, height) / 620));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function orbitPoint(o: Orbit, a: number) {
      const lx = o.rx * scale * Math.cos(a);
      const ly = o.ry * scale * Math.sin(a);
      const c = Math.cos(o.tilt);
      const s = Math.sin(o.tilt);
      return { x: cx + lx * c - ly * s, y: cy + lx * s + ly * c };
    }

    function drawCore() {
      const pulse = 0.6 + 0.4 * Math.sin(frame * 0.04);
      const glowR = 46 * scale;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
      grad.addColorStop(0, `rgba(212,160,23,${0.5 * pulse})`);
      grad.addColorStop(0.4, `rgba(212,160,23,${0.18 * pulse})`);
      grad.addColorStop(1, "rgba(212,160,23,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = gold;
      ctx.shadowColor = gold;
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.arc(cx, cy, 5 * scale, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Expanding "ping" rings — broadcasting, never stops.
      if (frame % 95 === 0 && pings.length < 3) pings.push({ r: 6 * scale, alpha: 0.4 });
      for (let i = pings.length - 1; i >= 0; i--) {
        const p = pings[i];
        p.r += 1.4 * scale;
        p.alpha -= 0.004;
        if (p.alpha <= 0) {
          pings.splice(i, 1);
          continue;
        }
        ctx.strokeStyle = `rgba(212,160,23,${p.alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, p.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Orbit rings + travelling dots
      for (const o of ORBITS) {
        ctx.strokeStyle = "rgba(90,130,255,0.14)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(cx, cy, o.rx * scale, o.ry * scale, o.tilt, 0, Math.PI * 2);
        ctx.stroke();

        for (const d of o.dots) {
          const a = frame * o.speed + d.phase;
          const pt = orbitPoint(o, a);
          const color = d.gold ? gold : blue;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, d.size * scale, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.shadowColor = color;
          ctx.shadowBlur = 12;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      drawCore();

      frame += 1;
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
      style={{ opacity: 0.75 }}
    />
  );
}
