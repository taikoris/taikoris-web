"use client";

import { motion, useReducedMotion } from "motion/react";

export function Ambient() {
  const reduced = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Primary Sapphire Blue Glow */}
      <motion.div
        className="absolute -top-[25%] left-1/2 -translate-x-1/2 h-[55rem] w-[75rem] rounded-full blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.22) 0%, rgba(56,189,248,0.08) 40%, transparent 70%)",
        }}
        animate={
          reduced ? undefined : { scale: [1, 1.08, 1], opacity: [0.75, 1, 0.75] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle Cyan Edge Accent */}
      <motion.div
        className="absolute top-[45%] right-[-10%] h-[40rem] w-[40rem] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 65%)",
        }}
        animate={
          reduced ? undefined : { scale: [1.05, 0.95, 1.05], opacity: [0.6, 0.9, 0.6] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Enterprise Architectural Grid Backdrop */}
      <div className="absolute inset-0 grid-veil" />

      {/* Bottom Vignette Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,9,18,0.9)_100%)]" />
    </div>
  );
}
