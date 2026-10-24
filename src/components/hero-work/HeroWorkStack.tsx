"use client";

import { useEffect, useRef, useState } from "react";
import screens from "./screens.json";
import "./hero-work.css";

// Hero right-side visual: "who on the team builds what". Each project is shown
// on its own device (phone, laptop, POS, monitor) with the teammates who work
// on it. Screen markup is static, generated from the design mockup; all data in
// it is illustrative (no real client figures).

type Screen = {
  nm: string;
  logo: string | null;
  wide: boolean;
  mark: string | null;
  ppl: string[];
  html: string;
};

const SCREENS = screens as Screen[];
const STAGE_W = 600;
const STAGE_H = 540;
const SLIDE_MS = 9000;

export function HeroWorkStack() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scale, setScale] = useState(1);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Fit the fixed-size stage into the hero column.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(Math.min(1, entry.contentRect.width / STAGE_W)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % SCREENS.length), SLIDE_MS);
    return () => clearInterval(id);
  }, [paused, active]);

  // Restart the CSS animations of the screen that comes to the front.
  useEffect(() => {
    const el = slotRefs.current[active];
    el?.getAnimations({ subtree: true }).forEach((a) => {
      a.currentTime = 0;
    });
  }, [active]);

  // Live price ticker on the trading terminal.
  useEffect(() => {
    const idx = SCREENS.findIndex((s) => s.nm === "AI-Trade");
    const el = slotRefs.current[idx];
    const price = el?.querySelector<HTMLElement>("#xp");
    const pl = el?.querySelector<HTMLElement>("#xpl");
    if (!price || !pl) return;
    let k = 0;
    const id = setInterval(() => {
      k++;
      const v = 4128.4 + Math.sin(k * 1.3) * 1.6 + (k % 7) * 0.12;
      price.textContent = v.toFixed(2).replace(/^(\d)/, "$1 ");
      price.style.color = Math.sin(k * 1.3) >= 0 ? "#2bd38a" : "#ff5d6c";
      pl.textContent = "+$" + ((v - 4121.8) * 10).toFixed(1);
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      ref={wrapRef}
      className="hws relative mx-auto w-full max-w-[600px]"
      style={{ height: STAGE_H * scale }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="stage"
        style={{ position: "absolute", left: 0, top: 0, width: STAGE_W, height: STAGE_H, transform: `scale(${scale})`, transformOrigin: "top left" }}
      >
        {SCREENS.map((s, i) => {
          const d = (i - active + SCREENS.length) % SCREENS.length;
          const front = d === 0;
          return (
            <div
              key={s.nm}
              ref={(el) => {
                slotRefs.current[i] = el;
              }}
              className={`slot${front ? " front" : ""}`}
              aria-hidden={!front}
              style={{
                zIndex: 10 - d,
                opacity: front ? 1 : 0,
                pointerEvents: front ? "auto" : "none",
                transform: front ? "none" : `translateY(${d === 1 ? -14 : 14}px) scale(.96)`,
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: s.html }} />
              <div className="chip">
                {s.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className={`lg${s.wide ? " wide" : ""}`} src={s.logo} alt={s.nm} />
                ) : s.mark ? (
                  <span dangerouslySetInnerHTML={{ __html: s.mark }} />
                ) : null}
                {s.wide ? null : s.nm}
                <div className="ppl">
                  {s.ppl.map((p) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={p} src={p} alt="" />
                  ))}
                </div>
                <span className="lv" />
              </div>
            </div>
          );
        })}
        <div className="dots">
          {SCREENS.map((s, i) => (
            <button
              key={s.nm}
              type="button"
              className={i === active ? "on" : undefined}
              onClick={() => setActive(i)}
              aria-label={s.nm}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.ppl[0]} alt="" />
              <span>{s.nm}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
