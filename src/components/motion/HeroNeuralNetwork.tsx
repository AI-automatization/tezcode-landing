"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative neural-network canvas for the hero background.
 * Nodes drift slowly, nearby nodes connect, and light "signals" travel
 * along the connections — like a neural net firing.
 *
 * Performance:
 *  - Single <canvas> (not dozens of DOM nodes), DPR capped at 2.
 *  - rAF loop pauses when off-screen (IntersectionObserver) or tab hidden.
 *  - Honors prefers-reduced-motion: paints one static frame, no loop.
 *  - ~22 nodes → the O(n²) edge pass is trivial (<500 checks/frame).
 *  - aria-hidden + pointer-events-none; sits behind hero content.
 */
export function HeroNeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const context = canvasEl.getContext("2d");
    if (!context) return;
    // Non-null aliases so the type is preserved inside nested closures.
    const canvas = canvasEl;
    const ctx = context;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Pull theme colors (fallbacks match the design tokens).
    const rootStyles = getComputedStyle(document.documentElement);
    const gold = rootStyles.getPropertyValue("--tc-gold").trim() || "#d4a017";

    type NodeT = { x: number; y: number; vx: number; vy: number };
    type Edge = { a: number; b: number };
    type Pulse = { edge: number; t: number; speed: number };

    const NODE_COUNT = 34;
    const CONNECT_DIST = 210; // CSS px
    const nodes: NodeT[] = [];
    const edges: Edge[] = [];
    const pulses: Pulse[] = [];

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    let lastPulse = 0;
    let io: IntersectionObserver | null = null;
    let ro: ResizeObserver | null = null;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init() {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.14,
          vy: (Math.random() - 0.5) * 0.14,
        });
      }
    }

    function computeEdges() {
      edges.length = 0;
      const limit = CONNECT_DIST * CONNECT_DIST;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (dx * dx + dy * dy < limit) edges.push({ a: i, b: j });
        }
      }
    }

    function draw(now: number) {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }
      computeEdges();

      // Connections
      ctx.lineWidth = 1.2;
      for (const e of edges) {
        const a = nodes[e.a];
        const b = nodes[e.b];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const alpha = (1 - dist / CONNECT_DIST) * 0.55;
        ctx.strokeStyle = `rgba(110,150,255,${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // Nodes (with soft glow so they read clearly)
      ctx.fillStyle = "rgba(170,195,255,0.95)";
      ctx.shadowColor = "rgba(80,130,255,0.9)";
      ctx.shadowBlur = 8;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      // Signals travelling along edges
      if (now - lastPulse > 230 && pulses.length < 28) {
        if (edges.length > 0) {
          pulses.push({
            edge: Math.floor(Math.random() * edges.length),
            t: 0,
            speed: 0.005 + Math.random() * 0.008,
          });
        }
        lastPulse = now;
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        const e = edges[p.edge];
        if (!e) {
          pulses.splice(i, 1);
          continue;
        }
        p.t += p.speed;
        if (p.t >= 1) {
          pulses.splice(i, 1);
          continue;
        }
        const a = nodes[e.a];
        const b = nodes[e.b];
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = gold;
        ctx.shadowColor = gold;
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

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
    init();

    if (reduceMotion) {
      // Single static frame, no animation loop.
      computeEdges();
      running = false;
      draw(0);
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

    ro = new ResizeObserver(() => {
      resize();
      init();
    });
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
      style={{ opacity: 0.95 }}
    />
  );
}
