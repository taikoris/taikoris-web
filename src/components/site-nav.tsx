"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

const LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Platform", href: "#platform" },
  { label: "Shikra Core", href: "#shikra" },
  { label: "Governance", href: "#governance" },
  { label: "Architecture", href: "#architecture" },
];

export function SiteNav() {
  const { scrollY } = useScroll();
  const [lifted, setLifted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setLifted(y > 15));

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div
        className={[
          "w-full transition-all duration-300 border-b",
          lifted
            ? "border-line/90 bg-night/90 backdrop-blur-xl shadow-lg shadow-black/20"
            : "border-transparent bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 sm:h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Corporate Brand Identity */}
          <a href="#top" className="focus-ring group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-deep text-white font-display text-lg font-black shadow-md shadow-primary/25">
              T
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base font-bold tracking-tight text-ink">
                TAIKORIS
              </span>
              <span className="font-mono text-[10px] tracking-widest text-muted uppercase">
                Enterprise Defense
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-ink hover:bg-surface-card/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden xl:flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Global Grid Nominal</span>
            </div>

            <a
              href="https://github.com/taikoris"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface-card px-3.5 py-2 text-xs font-medium text-ink transition-colors hover:border-slate-600 hover:bg-surface-hover"
            >
              <span>GitHub</span>
              <span className="text-muted text-[10px]">↗</span>
            </a>

            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-deep hover:shadow-primary/30"
            >
              Contact Enterprise
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-card text-ink"
              aria-label="Toggle navigation"
            >
              <span className="font-mono text-sm">{mobileOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-line bg-surface/98 px-6 py-5 shadow-2xl backdrop-blur-2xl">
          <nav className="flex flex-col gap-2">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-surface-card"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-line flex flex-col gap-2">
              <a
                href="https://github.com/taikoris"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-muted hover:text-ink"
              >
                <span>GitHub Repository</span>
                <span>↗</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center rounded-lg bg-primary py-2.5 text-sm font-semibold text-white"
              >
                Contact Enterprise
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
