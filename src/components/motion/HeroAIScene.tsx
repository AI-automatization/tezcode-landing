"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Activity,
  BarChart3,
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  FileText,
  Layers,
  MessageSquare,
  Mic,
  Network,
  ScanFace,
  Sparkles,
  User,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Decorative "AI at work" scene for the hero background: a scattered field of
 * AI- and user-related lucide icons gently floating and fading in/out, giving
 * the impression of lots of AI activity happening behind the headline.
 *
 * Performance:
 *  - ~18 elements animating only transform (y) + opacity → GPU-composited.
 *  - Honors prefers-reduced-motion: icons render static (no loop).
 *  - aria-hidden + pointer-events-none; sits behind hero content.
 *  - Center band is kept sparse so the headline stays readable.
 */

type Item = {
  Icon: LucideIcon;
  top: string;
  left: string;
  size: number;
  delay: number;
  dur: number;
  drift: number;
  gold?: boolean;
};

const ITEMS: Item[] = [
  { Icon: Bot, top: "14%", left: "9%", size: 34, delay: 0, dur: 6, drift: 12, gold: true },
  { Icon: Cpu, top: "22%", left: "82%", size: 30, delay: 0.8, dur: 7, drift: 10 },
  { Icon: Sparkles, top: "11%", left: "45%", size: 22, delay: 1.5, dur: 5, drift: 9, gold: true },
  { Icon: MessageSquare, top: "30%", left: "5%", size: 26, delay: 0.4, dur: 6.5, drift: 11 },
  { Icon: User, top: "70%", left: "11%", size: 28, delay: 1.1, dur: 7, drift: 12 },
  { Icon: Users, top: "80%", left: "79%", size: 30, delay: 0.2, dur: 6, drift: 10 },
  { Icon: BrainCircuit, top: "17%", left: "65%", size: 36, delay: 2, dur: 8, drift: 14, gold: true },
  { Icon: BarChart3, top: "76%", left: "49%", size: 26, delay: 1.7, dur: 6, drift: 9 },
  { Icon: Database, top: "63%", left: "89%", size: 24, delay: 0.6, dur: 7.5, drift: 11 },
  { Icon: Code2, top: "85%", left: "29%", size: 26, delay: 2.3, dur: 6.5, drift: 10 },
  { Icon: Workflow, top: "40%", left: "90%", size: 30, delay: 1.3, dur: 8, drift: 13 },
  { Icon: Zap, top: "57%", left: "4%", size: 22, delay: 0.9, dur: 5.5, drift: 8, gold: true },
  { Icon: Network, top: "87%", left: "61%", size: 28, delay: 1.9, dur: 7, drift: 12 },
  { Icon: FileText, top: "26%", left: "91%", size: 22, delay: 2.6, dur: 6, drift: 9 },
  { Icon: ScanFace, top: "72%", left: "35%", size: 26, delay: 0.5, dur: 7, drift: 11 },
  { Icon: Mic, top: "15%", left: "29%", size: 20, delay: 1.6, dur: 5.5, drift: 8 },
  { Icon: Layers, top: "50%", left: "93%", size: 22, delay: 2.1, dur: 6.5, drift: 10 },
  { Icon: Activity, top: "88%", left: "13%", size: 24, delay: 0.3, dur: 6, drift: 9, gold: true },
];

export function HeroAIScene() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      {ITEMS.map((it, i) => {
        const { Icon } = it;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: it.top,
              left: it.left,
              color: it.gold ? "var(--tc-gold)" : "rgba(140,170,255,0.9)",
            }}
            initial={{ opacity: 0 }}
            animate={
              reduce
                ? { opacity: 0.3 }
                : { opacity: [0.12, 0.45, 0.12], y: [0, -it.drift, 0] }
            }
            transition={
              reduce
                ? { duration: 0.6 }
                : {
                    duration: it.dur,
                    delay: it.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          >
            <Icon size={it.size} strokeWidth={1.5} />
          </motion.div>
        );
      })}
    </div>
  );
}
