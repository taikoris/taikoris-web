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
 * The signature element: eight separately interactive letters.
 * Hover (mouse) or tap (touch) raises one letter and reveals its word.
 * Keyboard: arrows walk the row, Enter/Space pins a letter, Escape closes.
 * The whole crest tilts in 3D toward the pointer.
 */
export function LetterCrest() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const [pinned, setPinned] = useState<number | null>(null);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-12, 12]), TILT);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [8, -8]), TILT);

  const shown = active ?? pinned;
  const current = shown === null ? null : CREST[shown];

  // A tap anywhere else releases a pinned letter (touch devices).
  useEffect(() => {
    if (pinned === null) return;
    const drop = (e: PointerEvent) => {
      const target = e.target as Node;
      if (!refs.current.some((el) => el?.contains(target))) setPinned(null);
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
    }
    if (e.key === "Escape") {
      setPinned(null);
      setActive(null);
    }
  }, []);

  return (
    <div className="w-full">
      <div
        className="w-full [perspective:1400px]"
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
          className="flex w-full items-end justify-center gap-x-[0.5vw] [transform-style:preserve-3d]"
          style={reduced ? undefined : { rotateX, rotateY }}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            shown: { transition: { staggerChildren: reduced ? 0 : 0.07 } },
          }}
        >
          {CREST.map((item, i) => {
            const isOn = shown === i;

            return (
              <motion.li
                key={`${item.letter}-${i}`}
                className="relative [transform-style:preserve-3d]"
                variants={{
                  hidden: { opacity: 0, y: reduced ? 0 : 40 },
                  shown: { opacity: 1, y: 0 },
                }}
                transition={{ duration: reduced ? 0.4 : 0.8, ease: EASE }}
              >
                <motion.button
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  type="button"
                  aria-expanded={isOn}
                  aria-label={`${item.letter} — ${item.word}: ${item.meaning}`}
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") setActive(i);
                  }}
                  onPointerLeave={(e) => {
                    if (e.pointerType === "mouse") setActive(null);
                  }}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  onClick={() => setPinned((p) => (p === i ? null : i))}
                  className="focus-ring group relative block cursor-pointer rounded-xl px-[0.05em] [transform-style:preserve-3d]"
                  animate={{
                    y: isOn && !reduced ? -16 : 0,
                    z: isOn && !reduced ? 90 : 0,
                    scale: isOn && !reduced ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.34, ease: EASE }}
                >
                  {/* Ember bloom behind the live letter */}
                  <AnimatePresence>
                    {isOn && (
                      <motion.span
                        aria-hidden
                        className="pointer-events-none absolute -inset-[28%] -z-10 rounded-full bg-ember/25 blur-2xl"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        transition={{ duration: 0.35, ease: EASE }}
                      />
                    )}
                  </AnimatePresence>

                  <span
                    className={[
                      "crest-face block font-display leading-[0.8] tracking-[-0.04em] transition-colors duration-300",
                      "text-[13vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[9rem]",
                      isOn ? "text-ember" : "text-ink/85 group-hover:text-ink",
                    ].join(" ")}
                    style={{
                      fontWeight: isOn ? 900 : 700,
                      textShadow: isOn
                        ? "0 0 48px rgba(224,121,60,0.45)"
                        : "none",
                    }}
                  >
                    {item.letter}
                  </span>

                  {/* Affordance every letter carries at rest — hover/tap grows it */}
                  <span
                    aria-hidden
                    className={[
                      "mx-auto mt-3 block h-[2px] rounded-full transition-all duration-300",
                      isOn
                        ? "w-full bg-ember shadow-[0_0_12px_rgba(224,121,60,0.8)]"
                        : "w-1/4 bg-steel/45 group-hover:w-2/3 group-hover:bg-steel",
                    ].join(" ")}
                  />
                </motion.button>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>

      {/* Reveal panel — one shared slot, so the row never reflows */}
      <div
        aria-live="polite"
        className="relative mx-auto mt-12 flex min-h-[7.5rem] w-full max-w-2xl items-start justify-center px-4 sm:min-h-[6.5rem]"
      >
        <AnimatePresence mode="wait">
          {current ? (
            <motion.div
              key={shown}
              className="text-center"
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduced ? 0 : -12 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <p className="font-display text-3xl font-black tracking-tight text-ember sm:text-4xl">
                {current.word}
              </p>
              <p className="mt-3 text-[1.0625rem] text-muted sm:text-lg">
                {current.meaning}
              </p>
            </motion.div>
          ) : (
            <motion.p
              key="idle"
              className="text-center text-xs uppercase tracking-[0.3em] text-muted/70 sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="hidden sm:inline">Hover a letter</span>
              <span className="sm:hidden">Tap a letter</span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
