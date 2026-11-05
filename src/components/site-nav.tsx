"use client";

import { motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useState } from "react";

const LINKS = [
  { label: "The Name", href: "#name" },
  { label: "8 Pillars", href: "#crest" },
  { label: "Shikra Engine", href: "#shikra" },
  { label: "Ecosystem", href: "#ecosystem" },
];

export function SiteNav() {
  const { scrollY, scrollYProgress } = useScroll();
  const [lifted, setLifted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, "change", (y) => setLifted(y > 20));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={[
          "mx-auto flex h-14 sm:h-16 w-full max-w-6xl items-center justify-between rounded-full px-5 sm:px-7 transition-all duration-300",
          lifted
            ? "border border-line/90 bg-night/85 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
            : "border border-line/40 bg-night/40 backdrop-blur-md",
        ].join(" ")}
      >
        {/* Brand / Logo */}
        <a
          href="#top"
          className="focus-ring group flex items-center gap-2.5 rounded-full"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-ember transition-transform duration-300 group-hover:scale-125" />
            <span className="absolute inset-0 animate-ping rounded-full bg-ember/60" />
          </span>
          <span className="font-display text-sm font-black uppercase tracking-[0.35em] text-ink transition-colors duration-300 group-hover:text-ember">
            Taikoris
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring group relative rounded-full px-3.5 py-1.5 text-xs lg:text-sm font-medium text-muted transition-colors duration-200 hover:text-ink hover:bg-surface/60"
            >
              {link.label}
              <span className="absolute inset-x-3 bottom-0.5 h-[1.5px] origin-left scale-x-0 bg-ember transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Right side: Status indicator & GitHub badge */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-[11px] font-mono text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Systems Active</span>
          </div>

          <a
            href="https://github.com/taikoris"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group hidden sm:inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs font-semibold text-ink backdrop-blur-sm transition-all duration-200 hover:border-ember/40 hover:bg-surface hover:text-ember"
          >
            <span>GitHub</span>
            <span className="text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember">
              ↗
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface/80 text-ink focus-ring"
            aria-label="Toggle Navigation"
          >
            <span className="text-sm font-mono">{mobileOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden mx-auto mt-2 w-full max-w-sm rounded-2xl border border-line bg-surface/95 p-4 shadow-2xl backdrop-blur-2xl">
          <ul className="flex flex-col gap-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-ink/80 hover:bg-night hover:text-ember"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-line">
              <a
                href="https://github.com/taikoris"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-ember"
              >
                <span>GitHub Repository</span>
                <span>↗</span>
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Top Reading Progress Bar */}
      <motion.div
        aria-hidden
        className="fixed top-0 inset-x-0 h-[2px] origin-left bg-[linear-gradient(to_right,var(--color-ember),var(--color-steel),var(--color-ember-light))] z-[60]"
        style={{ scaleX: progress }}
      />
    </header>
  );
}
