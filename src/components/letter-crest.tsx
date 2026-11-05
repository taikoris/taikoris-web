"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CREST } from "@/lib/crest";

const EASE = [0.22, 1, 0.36, 1] as const;
const TILT = { stiffness: 140, damping: 20, mass: 0.6 };

/**
 * The signature element: eight interactive letters with a rich cyber bento inspector.
 * Hover (mouse) or tap (touch) raises one letter and activates its intelligence pillar.
 * Keyboard: arrows walk the row, Enter/Space pins a letter, Escape closes.
 * The whole crest tilts in 3D toward the pointer.
 */
export function LetterCrest() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const [pinned, setPinned] = useState<number | null>(0); // Default to first letter pinned for immediate rich view
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-10, 10]), TILT);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), TILT);

  const shown = active ?? pinned ?? 0;
  const current = CREST[shown];

  // A tap anywhere outside the crest releases pinned override if needed
  useEffect(() => {
    if (pinned === null) return;
    const drop = (e: PointerEvent) => {
      const target = e.target as Node;
      if (!refs.current.some((el) => el?.contains(target))) {
        // keep active element visible
      }
    };
    document.addEventListener("pointerdown", drop);
    return () => document.removeEventListener("pointerdown", drop);
  }, [pinned]);

  const onKeyDown = useCallback((e: React.KeyboardEvent, i: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const next =
        e.key === "ArrowRight"
          ? (i + 1) % CREST.length
          : (i - 1 + CREST.length) % CREST.length;
      refs.current[next]?.focus();
      setActive(next);
      setPinned(next);
    }
    if (e.key === "Escape") {
      setActive(null);
    }
  }, []);

  return (
    <div className="w-full">
      {/* 3D Interactive Letters Row */}
      <div
        className="w-full [perspective:1400px] select-none"
        onPointerMove={(e) => {
          if (reduced || e.pointerType !== "mouse") return;
          const r = e.currentTarget.getBoundingClientRect();
          px.set((e.clientX - r.left) / r.width - 0.5);
          py.set((e.clientY - r.top) / r.height - 0.5);
        }}
        onPointerLeave={() => {
          px.set(0);
          py.set(0);
        }}
      >
        <motion.ul
          className="flex w-full items-end justify-center gap-x-[1vw] sm:gap-x-[1.2vw] [transform-style:preserve-3d]"
          style={reduced ? undefined : { rotateX, rotateY }}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            shown: { transition: { staggerChildren: reduced ? 0 : 0.05 } },
          }}
        >
          {CREST.map((item, i) => {
            const isOn = shown === i;

            return (
              <motion.li
                key={`${item.letter}-${i}`}
                className="relative [transform-style:preserve-3d]"
                variants={{
                  hidden: { opacity: 0, y: reduced ? 0 : 30 },
                  shown: { opacity: 1, y: 0 },
                }}
                transition={{ duration: reduced ? 0.3 : 0.6, ease: EASE }}
              >
                <motion.button
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  type="button"
                  aria-expanded={isOn}
                  aria-label={`${item.letter} — ${item.word}: ${item.meaning}`}
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") {
                      setActive(i);
                    }
                  }}
                  onPointerLeave={(e) => {
                    if (e.pointerType === "mouse") {
                      setActive(null);
                    }
                  }}
                  onFocus={() => {
                    setActive(i);
                    setPinned(i);
                  }}
                  onBlur={() => setActive(null)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  onClick={() => setPinned(i)}
                  className="focus-ring group relative block cursor-pointer rounded-xl px-[0.06em] py-2 [transform-style:preserve-3d]"
                  animate={{
                    y: isOn && !reduced ? -18 : 0,
                    z: isOn && !reduced ? 80 : 0,
                    scale: isOn && !reduced ? 1.06 : 1,
                  }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  {/* Ember bloom behind the live letter */}
                  <AnimatePresence>
                    {isOn && (
                      <motion.span
                        aria-hidden
                        className="pointer-events-none absolute -inset-[32%] -z-10 rounded-full bg-ember/25 blur-3xl"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3, ease: EASE }}
                      />
                    )}
                  </AnimatePresence>

                  <span
                    className={[
                      "crest-face block font-display leading-[0.82] tracking-[-0.04em] transition-colors duration-300",
                      "text-[12vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[8rem]",
                      isOn ? "text-ember" : "text-ink/80 group-hover:text-ink",
                    ].join(" ")}
                    style={{
                      fontWeight: isOn ? 900 : 700,
                      textShadow: isOn
                        ? "0 0 40px rgba(224,121,60,0.5), 0 0 80px rgba(224,121,60,0.2)"
                        : "none",
                    }}
                  >
                    {item.letter}
                  </span>

                  {/* Micro index indicator */}
                  <span
                    aria-hidden
                    className="font-mono text-[9px] sm:text-[10px] tracking-widest text-steel/60 block text-center mt-1"
                  >
                    {item.code.split("/")[0]}
                  </span>

                  {/* Affordance bar */}
                  <span
                    aria-hidden
                    className={[
                      "mx-auto mt-2 block h-[2px] rounded-full transition-all duration-300",
                      isOn
                        ? "w-full bg-ember shadow-[0_0_12px_rgba(224,121,60,0.9)]"
                        : "w-1/3 bg-steel/30 group-hover:w-2/3 group-hover:bg-steel/70",
                    ].join(" ")}
                  />
                </motion.button>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>

      {/* Quick Pillar Selector Pills (Great for touch devices and quick jumping) */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 px-4 sm:hidden">
        {CREST.map((item, i) => (
          <button
            key={item.letter + i}
            type="button"
            onClick={() => setPinned(i)}
            className={`rounded-full px-2.5 py-1 text-xs font-mono transition-colors ${
              shown === i
                ? "bg-ember text-night font-bold"
                : "bg-surface border border-line text-muted"
            }`}
          >
            {item.letter}
          </button>
        ))}
      </div>

      {/* Cybernetic Pillar Bento Inspection Card */}
      <div
        aria-live="polite"
        className="relative mx-auto mt-10 w-full max-w-3xl px-4"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={shown}
            initial={{ opacity: 0, y: reduced ? 0 : 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduced ? 0 : -8, scale: 0.98 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="glass-panel relative rounded-2xl p-6 sm:p-8 overflow-hidden shadow-[0_16px_50px_-15px_rgba(0,0,0,0.7)]"
          >
            {/* Ambient corner light */}
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-ember/15 blur-3xl pointer-events-none"
            />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line/80 pb-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ember/30 bg-ember/10 font-display text-xl font-black text-ember">
                  {current.letter}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {current.word}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-steel-light font-mono">
                    {current.pillar}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <span className="rounded-md border border-line bg-surface/80 px-2.5 py-1 font-mono text-[11px] text-steel">
                  {current.code}
                </span>
                <span className="cyber-badge rounded-md px-2.5 py-1 text-[11px] font-semibold text-ember">
                  {current.tag}
                </span>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted/70 block mb-1">
                  Core Meaning
                </span>
                <p className="text-sm sm:text-base font-medium text-ink/90">
                  {current.meaning}
                </p>
              </div>

              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted/70 block mb-1">
                  Architectural Mandate
                </span>
                <p className="text-sm text-muted leading-relaxed">
                  {current.details}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
