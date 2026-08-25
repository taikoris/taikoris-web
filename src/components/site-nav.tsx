"use client";

import { motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useState } from "react";

const LINKS = [
  { label: "The name", href: "#name" },
  { label: "What we build", href: "#work" },
];

export function SiteNav() {
  const { scrollY, scrollYProgress } = useScroll();
  const [lifted, setLifted] = useState(false);
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, "change", (y) => setLifted(y > 24));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={[
          "transition-all duration-300",
          lifted
            ? "border-b border-line/80 bg-night/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:h-18">
          <a
            href="#top"
            className="focus-ring group flex items-center gap-2.5 rounded-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-ember transition-transform duration-300 group-hover:scale-125" />
              <span className="absolute inset-0 animate-ping rounded-full bg-ember/60" />
            </span>
            <span className="font-display text-sm font-bold uppercase tracking-[0.32em] text-ink transition-colors duration-300 group-hover:text-ember">
              Taikoris
            </span>
          </a>

          <ul className="flex items-center gap-1 sm:gap-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="focus-ring group relative block rounded-md px-3 py-2 text-sm text-muted transition-colors duration-300 hover:text-ink"
                >
                  {link.label}
                  <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-ember transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Reading progress */}
      <motion.div
        aria-hidden
        className="h-px origin-left bg-[linear-gradient(to_right,var(--color-ember),var(--color-steel))]"
        style={{ scaleX: progress }}
      />
    </header>
  );
}
