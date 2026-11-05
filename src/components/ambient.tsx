"use client";

import { motion, useReducedMotion } from "motion/react";
import { useMemo } from "react";

/** Deterministic pseudo-random so server and client markup agree. */
function rand(seed: number) {
  const x = Math.sin(seed * 127.1) * 43758.5453;
  return x - Math.floor(x);
}

const EMBER_COUNT = 24;

/**
 * Hero & Page backdrop: breathing ember & slate ambient glows,
 * cyber-radar concentric coordinates, and drifting ember particles.
 */
export function Ambient() {
  const reduced = useReducedMotion();

  const embers = useMemo(
    () =>
      Array.from({ length: EMBER_COUNT }, (_, i) => ({
        left: rand(i + 1) * 100,
        size: 1.5 + rand(i + 41) * 2.8,
        delay: rand(i + 7) * 8,
        duration: 10 + rand(i + 19) * 12,
        drift: (rand(i + 29) - 0.5) * 80,
        opacity: 0.2 + rand(i + 53) * 0.5,
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Primary Ember core bloom */}
      <motion.div
        className="absolute -top-[18%] left-[12%] h-[56rem] w-[56rem] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(224,121,60,0.28) 0%, rgba(224,121,60,0.08) 45%, transparent 70%)",
        }}
        animate={
          reduced ? undefined : { scale: [1, 1.15, 1], opacity: [0.75, 1, 0.75] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary Cool Steel/Slate core bloom */}
      <motion.div
        className="absolute -bottom-[20%] right-[8%] h-[50rem] w-[50rem] rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(91,124,153,0.26) 0%, rgba(91,124,153,0.07) 50%, transparent 72%)",
        }}
        animate={
          reduced ? undefined : { scale: [1.1, 1, 1.1], opacity: [0.65, 0.95, 0.65] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Concentric subtle cyber radar rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[900px] w-[900px] rounded-full border border-steel/[0.04] pointer-events-none">
        <div className="absolute inset-16 rounded-full border border-steel/[0.03]" />
        <div className="absolute inset-36 rounded-full border border-dashed border-steel/[0.04]" />
        <div className="absolute inset-60 rounded-full border border-steel/[0.03]" />
      </div>

      {/* Drifting embers */}
      {!reduced &&
        embers.map((e, i) => (
          <motion.span
            key={i}
            className="absolute bottom-[-5%] rounded-full bg-ember-light"
            style={{
              left: `${e.left}%`,
              height: e.size,
              width: e.size,
              boxShadow: "0 0 10px rgba(224,121,60,0.9)",
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, e.opacity, e.opacity, 0],
              y: ["0vh", "-30vh", "-65vh", "-95vh"],
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

      {/* Vignette depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(8,9,13,0.85)_100%)]" />
    </div>
  );
}
