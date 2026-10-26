"use client";

import { useEffect, useState } from "react";

// Isometric line drawing of the real event: a queue builds at checkout 1, the
// ceiling camera spots it, checkout 2 opens and two people move over.
// Site palette only (blue lines on white). Advances on a timer while visible.

const S = 10.5; // iso unit in px
const CX = 150;
const CY = 72;
const iso = (x: number, y: number, z = 0): [number, number] => [
  CX + (x - y) * 0.866 * S,
  CY + (x + y) * 0.5 * S - z * S,
];
const pts = (list: [number, number, number?][]) =>
  list.map(([x, y, z]) => iso(x, y, z ?? 0).map((v) => v.toFixed(1)).join(",")).join(" ");

function Box({ x, y, w, d, h, active = true }: { x: number; y: number; w: number; d: number; h: number; active?: boolean }) {
  const stroke = active ? "var(--tc-blue)" : "var(--tc-text-muted)";
  const top = pts([[x, y, h], [x + w, y, h], [x + w, y + d, h], [x, y + d, h]]);
  const left = pts([[x, y + d, 0], [x + w, y + d, 0], [x + w, y + d, h], [x, y + d, h]]);
  const right = pts([[x + w, y, 0], [x + w, y + d, 0], [x + w, y + d, h], [x + w, y, h]]);
  return (
    <g stroke={stroke} strokeWidth={1.1} strokeLinejoin="round" style={{ transition: "stroke .6s" }}>
      <polygon points={left} fill="var(--tc-surface-0)" />
      <polygon points={right} fill="var(--tc-surface-1)" />
      <polygon points={top} fill={active ? "var(--tc-blue-dim)" : "var(--tc-surface-2)"} style={{ transition: "fill .6s" }} />
    </g>
  );
}

function Person({ at, alert, staff = false }: { at: [number, number]; alert: boolean; staff?: boolean }) {
  const [x, y] = iso(at[0], at[1]);
  const c = staff ? "var(--tc-success)" : alert ? "#e8792b" : "var(--tc-blue)";
  return (
    <g style={{ transform: `translate(${x}px, ${y}px)`, transition: "transform .9s cubic-bezier(.65,0,.35,1)" }}>
      <ellipse cx={0} cy={0} rx={5} ry={2.4} fill="rgba(10,19,48,.08)" />
      <rect x={-3.6} y={-17} width={7.2} height={15} rx={3.6} fill="var(--tc-surface-0)" stroke={c} strokeWidth={1.2} style={{ transition: "stroke .5s" }} />
      <circle cx={0} cy={-21} r={3.2} fill="var(--tc-surface-0)" stroke={c} strokeWidth={1.2} style={{ transition: "stroke .5s" }} />
    </g>
  );
}

export function CameraIso({ running }: { running: boolean }) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setStep((s) => (s + 1) % 8), 1100);
    return () => clearInterval(id);
  }, [running]);

  const n = Math.min(step + 1, 4); // people waiting
  const alert = step >= 4 && step < 6;
  const open2 = step >= 6;

  // queue slots in front of checkout 1 and checkout 2
  const lane1: [number, number][] = [[7.2, 2.6], [8.5, 2.6], [9.8, 2.6], [11.1, 2.6]];
  const lane2: [number, number][] = [[7.2, 6.6], [8.5, 6.6]];
  const people = [0, 1, 2, 3].map((i) => (open2 && i >= 2 ? lane2[i - 2] : lane1[i]));

  // camera on the back wall and its view cone towards the queue
  const cam = iso(0.4, 0.4, 4.6);
  const cone = pts([[7, 1.6, 0], [12.5, 1.6, 0], [12.5, 3.8, 0], [7, 3.8, 0]]);
  // screen-space box around the queue (detection frame)
  const a = iso(7, 1.8, 2.6);
  const b = iso(12, 3.4, 0);

  return (
    <svg viewBox="46 15 246 154" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden>
      {/* floor grid */}
      <g stroke="var(--tc-border)" strokeWidth={0.6}>
        {Array.from({ length: 13 }, (_, i) => (
          <line key={`x${i}`} x1={iso(i, 0)[0]} y1={iso(i, 0)[1]} x2={iso(i, 8)[0]} y2={iso(i, 8)[1]} />
        ))}
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`y${i}`} x1={iso(0, i)[0]} y1={iso(0, i)[1]} x2={iso(12, i)[0]} y2={iso(12, i)[1]} />
        ))}
      </g>
      {/* back walls */}
      <g fill="none" stroke="var(--tc-text-muted)" strokeWidth={0.8} opacity={0.55}>
        <polyline points={pts([[0, 8, 0], [0, 0, 0], [12, 0, 0]])} />
        <polyline points={pts([[0, 8, 5], [0, 0, 5], [12, 0, 5]])} />
        <line x1={iso(0, 0)[0]} y1={iso(0, 0)[1]} x2={iso(0, 0, 5)[0]} y2={iso(0, 0, 5)[1]} />
      </g>

      {/* camera view cone on the floor */}
      <polygon points={cone} fill={alert ? "rgba(232,121,43,.12)" : "rgba(0,64,255,.07)"} style={{ transition: "fill .5s" }} />
      <line x1={cam[0]} y1={cam[1]} x2={iso(7, 1.6)[0]} y2={iso(7, 1.6)[1]} stroke="var(--tc-blue)" strokeWidth={0.6} strokeDasharray="3 3" opacity={0.6} />
      <line x1={cam[0]} y1={cam[1]} x2={iso(12.5, 3.8)[0]} y2={iso(12.5, 3.8)[1]} stroke="var(--tc-blue)" strokeWidth={0.6} strokeDasharray="3 3" opacity={0.6} />

      {/* checkouts */}
      <Box x={2} y={1.8} w={4} d={1.4} h={1.1} />
      <Box x={4.6} y={2} w={1} d={0.8} h={1.7} />
      <Box x={2} y={5.8} w={4} d={1.4} h={1.1} active={open2} />
      <Box x={4.6} y={6} w={1} d={0.8} h={1.7} active={open2} />

      {/* cashiers */}
      <Person at={[3.6, 1.1]} alert={false} staff />
      <g style={{ opacity: open2 ? 1 : 0, transition: "opacity .6s" }}>
        <Person at={[3.6, 5.1]} alert={false} staff />
      </g>

      {/* queue (furthest first so nearer people overlap correctly) */}
      {[3, 2, 1, 0].map((i) => (
        <g key={i} style={{ opacity: i < n ? 1 : 0, transition: "opacity .5s" }}>
          <Person at={people[i]} alert={alert} />
        </g>
      ))}

      {/* detection frame + count */}
      <g style={{ opacity: step >= 3 && !open2 ? 1 : 0, transition: "opacity .4s" }}>
        <rect x={a[0] - 8} y={a[1] - 4} width={b[0] - a[0] + 16} height={b[1] - a[1] + 12} rx={4} fill="none" stroke={alert ? "#e8792b" : "var(--tc-blue)"} strokeWidth={1.2} strokeDasharray="4 3" />
        <rect x={b[0] - 2} y={a[1] - 12} width={18} height={13} rx={3} fill={alert ? "#e8792b" : "var(--tc-blue)"} />
        <text x={b[0] + 7} y={a[1] - 2.5} textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">{n}</text>
      </g>

      {/* ceiling camera */}
      <g transform={`translate(${cam[0]}, ${cam[1]})`}>
        <line x1={0} y1={-10} x2={0} y2={-2} stroke="var(--tc-text-muted)" strokeWidth={1.2} />
        <rect x={-6} y={-3} width={14} height={7} rx={2} fill="var(--tc-surface-0)" stroke={alert ? "#e8792b" : "var(--tc-blue)"} strokeWidth={1.2} transform="rotate(22)" style={{ transition: "stroke .5s" }} />
        <circle cx={6} cy={4} r={1.6} fill={alert ? "#e8792b" : "var(--tc-blue)"} />
      </g>
    </svg>
  );
}
