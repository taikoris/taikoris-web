"use client";

import { motion, useReducedMotion } from "motion/react";
import { useMemo } from "react";

/** Deterministic pseudo-random so server and client markup agree. */
function rand(seed: number) {
  const x = Math.sin(seed * 127.1) * 43758.5453;
  return x - Math.floor(x);
}

const EMBER_COUNT = 18;

/**
 * Hero backdrop: two slow-breathing gradient glows plus drifting embers.
 * Under prefers-reduced-motion the glows hold still and the embers are gone.
 */
export function Ambient() {
  const reduced = useReducedMotion();

  const embers = useMemo(
    () =>
      Array.from({ length: EMBER_COUNT }, (_, i) => ({
        left: rand(i + 1) * 100,
        size: 1.5 + rand(i + 41) * 3,
        delay: rand(i + 7) * 9,
        duration: 11 + rand(i + 19) * 12,
        drift: (rand(i + 29) - 0.5) * 90,
        opacity: 0.25 + rand(i + 53) * 0.45,
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Ember glow, upper left of centre */}
      <motion.div
        className="absolute -top-[24%] left-[6%] h-[52rem] w-[52rem] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(224,121,60,0.30) 0%, rgba(224,121,60,0.10) 42%, transparent 70%)",
        }}
        animate={
          reduced ? undefined : { scale: [1, 1.14, 1], opacity: [0.75, 1, 0.75] }
        }
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Slate glow, lower right — the cool counterweight */}
      <motion.div
        className="absolute -bottom-[28%] right-[2%] h-[46rem] w-[46rem] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(91,124,153,0.30) 0%, rgba(91,124,153,0.10) 45%, transparent 72%)",
        }}
        animate={
          reduced ? undefined : { scale: [1.1, 1, 1.1], opacity: [0.6, 0.95, 0.6] }
        }
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Drifting embers */}
      {!reduced &&
        embers.map((e, i) => (
          <motion.span
            key={i}
            className="absolute bottom-[-6%] rounded-full bg-ember"
            style={{
              left: `${e.left}%`,
              height: e.size,
              width: e.size,
              boxShadow: "0 0 8px rgba(224,121,60,0.9)",
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, e.opacity, e.opacity, 0],
              y: ["0vh", "-30vh", "-64vh", "-92vh"],
              x: [0, e.drift * 0.3, e.drift * 0.7, e.drift],
            }}
            transition={{
              duration: e.duration,
              delay: e.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

      {/* Fine grain + vignette so the gradients read as material, not banding */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,11,15,0.75)_100%)]" />
    </div>
  );
}
