"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative AI circuit-board background for the hero.
 * A central "AI core" chip with PCB traces routing outward; light "current"
 * pulses flow along the traces from the core — like an AI processor running.
 *
 * Performance:
 *  - Single <canvas>, DPR capped at 2 (crisp traces). Traces are rebuilt only
 *    on resize; per-frame work is just re-stroking ~16 short polylines + a few
 *    pulses — cheap.
 *  - rAF loop pauses off-screen (IntersectionObserver) or when tab hidden.
 *  - Honors prefers-reduced-motion: one static frame, no loop.
 *  - aria-hidden + pointer-events-none; sits behind hero content.
 */
export function HeroCircuit() {
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
    const blue = "#3b6dff";

    type Pt = { x: number; y: number };
    type Trace = { pts: Pt[]; segLens: number[]; len: number };
    type Pulse = { trace: number; d: number; speed: number; gold: boolean };

    let width = 0;
    let height = 0;
    let chip = { x: 0, y: 0, w: 0, h: 0 };
    const traces: Trace[] = [];
    const pulses: Pulse[] = [];

    let raf = 0;
    let running = false;
    let frame = 0;
    let io: IntersectionObserver | null = null;
    let ro: ResizeObserver | null = null;

    const snap = (v: number, g: number) => Math.round(v / g) * g;

    function buildTrace(sx: number, sy: number, dir: Pt): Trace {
      const grid = 24;
      const pts: Pt[] = [{ x: sx, y: sy }];
      let x = sx;
      let y = sy;
      // First segment straight outward from the chip.
      const out = 36 + Math.random() * 80;
      x += dir.x * out;
      y += dir.y * out;
      pts.push({ x: snap(x, grid), y: snap(y, grid) });
      // A couple of right-angle meanders (PCB look).
      let horizontal = dir.x !== 0;
      const segs = 1 + Math.floor(Math.random() * 3);
      for (let s = 0; s < segs; s++) {
        horizontal = !horizontal;
        const sign = Math.random() < 0.5 ? -1 : 1;
        const len = 30 + Math.random() * 120;
        if (horizontal) x += sign * len;
        else y += sign * len;
        x = Math.max(12, Math.min(width - 12, x));
        y = Math.max(12, Math.min(height - 12, y));
        pts.push({ x: snap(x, grid), y: snap(y, grid) });
      }
      const segLens: number[] = [];
      let total = 0;
      for (let k = 1; k < pts.length; k++) {
        const l = Math.hypot(pts[k].x - pts[k - 1].x, pts[k].y - pts[k - 1].y);
        segLens.push(l);
        total += l;
      }
      return { pts, segLens, len: total };
    }

    function rebuild() {
      traces.length = 0;
      pulses.length = 0;
      const cx = width / 2;
      const cy = height * 0.5;
      const size = Math.max(90, Math.min(150, width * 0.14));
      chip = { x: cx - size / 2, y: cy - size / 2, w: size, h: size };

      const perSide = 4;
      const sides: ("l" | "r" | "t" | "b")[] = ["l", "r", "t", "b"];
      for (const side of sides) {
        for (let i = 1; i <= perSide; i++) {
          const f = i / (perSide + 1);
          let sx = 0;
          let sy = 0;
          let dir: Pt = { x: 0, y: 0 };
          if (side === "l") {
            sx = chip.x;
            sy = chip.y + chip.h * f;
            dir = { x: -1, y: 0 };
          } else if (side === "r") {
            sx = chip.x + chip.w;
            sy = chip.y + chip.h * f;
            dir = { x: 1, y: 0 };
          } else if (side === "t") {
            sx = chip.x + chip.w * f;
            sy = chip.y;
            dir = { x: 0, y: -1 };
          } else {
            sx = chip.x + chip.w * f;
            sy = chip.y + chip.h;
            dir = { x: 0, y: 1 };
          }
          traces.push(buildTrace(sx, sy, dir));
        }
      }
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rebuild();
    }

    function pointAt(tr: Trace, d: number): Pt {
      if (d <= 0) return tr.pts[0];
      let acc = 0;
      for (let k = 0; k < tr.segLens.length; k++) {
        if (acc + tr.segLens[k] >= d) {
          const f = (d - acc) / tr.segLens[k];
          const a = tr.pts[k];
          const b = tr.pts[k + 1];
          return { x: a.x + (b.x - a.x) * f, y: a.y + (b.y - a.y) * f };
        }
        acc += tr.segLens[k];
      }
      return tr.pts[tr.pts.length - 1];
    }

    function drawChip() {
      const glow = 0.35 + 0.25 * Math.sin(frame * 0.05);
      // Outer chip
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = `rgba(212,160,23,${0.55})`;
      ctx.shadowColor = gold;
      ctx.shadowBlur = 14 * glow;
      ctx.beginPath();
      ctx.roundRect(chip.x, chip.y, chip.w, chip.h, 10);
      ctx.stroke();
      ctx.shadowBlur = 0;
      // Inner ring
      const pad = chip.w * 0.2;
      ctx.strokeStyle = `rgba(90,140,255,0.5)`;
      ctx.beginPath();
      ctx.roundRect(chip.x + pad, chip.y + pad, chip.w - pad * 2, chip.h - pad * 2, 6);
      ctx.stroke();
      // Core
      const coreR = chip.w * 0.1;
      ctx.fillStyle = gold;
      ctx.shadowColor = gold;
      ctx.shadowBlur = 18 * glow;
      ctx.beginPath();
      ctx.arc(chip.x + chip.w / 2, chip.y + chip.h / 2, coreR, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Traces
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(90,130,255,0.2)";
      for (const tr of traces) {
        ctx.beginPath();
        ctx.moveTo(tr.pts[0].x, tr.pts[0].y);
        for (let k = 1; k < tr.pts.length; k++) ctx.lineTo(tr.pts[k].x, tr.pts[k].y);
        ctx.stroke();
        // Pads at vertices
        ctx.fillStyle = "rgba(120,150,255,0.35)";
        for (const p of tr.pts) {
          ctx.fillRect(p.x - 1.5, p.y - 1.5, 3, 3);
        }
      }

      drawChip();

      // Current pulses flowing outward from the chip
      if (frame % 14 === 0 && pulses.length < 22 && traces.length > 0) {
        pulses.push({
          trace: Math.floor(Math.random() * traces.length),
          d: 0,
          speed: 1.6 + Math.random() * 2.2,
          gold: Math.random() < 0.5,
        });
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        const tr = traces[p.trace];
        if (!tr) {
          pulses.splice(i, 1);
          continue;
        }
        p.d += p.speed;
        if (p.d > tr.len) {
          pulses.splice(i, 1);
          continue;
        }
        const pt = pointAt(tr, p.d);
        const c = p.gold ? gold : blue;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2.6, 0, Math.PI * 2);
        ctx.fillStyle = c;
        ctx.shadowColor = c;
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

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
      style={{ opacity: 0.85 }}
    />
  );
}
