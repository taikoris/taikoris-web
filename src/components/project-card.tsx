"use client";

import { motion, useReducedMotion } from "motion/react";

export type Project = {
  name: string;
  tagline: string;
  description: string;
  href?: string;
  linkLabel?: string;
  tags: string[];
  version?: string;
  status?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProjectCard({ project }: { project: Project }) {
  const reduced = useReducedMotion();
  const { name, tagline, description, href, linkLabel, tags } = project;

  return (
    <motion.article
      className="group relative h-full"
      whileHover={reduced ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: EASE }}
    >
      {/* Dynamic glow edge on hover */}
      <div
        aria-hidden
        className="absolute -inset-px rounded-2xl bg-[linear-gradient(135deg,var(--color-ember),var(--color-steel))] opacity-0 blur-[5px] transition-opacity duration-300 group-hover:opacity-65"
      />

      <div className="relative flex h-full flex-col rounded-2xl border border-line bg-surface/90 p-7 backdrop-blur-md transition-colors duration-300 group-hover:border-ember/40 sm:p-8">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-ember animate-pulse shadow-[0_0_8px_rgba(224,121,60,0.8)]" />
              <span className="font-mono text-xs uppercase tracking-widest text-ember">
                Security Suite
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-ink mt-1.5 transition-colors duration-300 group-hover:text-ember">
              {name}
            </h3>
          </div>

          <span className="rounded-full border border-line bg-surface-card px-2.5 py-1 font-mono text-[11px] text-steel-light">
            v0.4.1 Beta
          </span>
        </div>

        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-steel font-mono">
          {tagline}
        </p>

        <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted">
          {description}
        </p>

        {/* Attack Vector Modules Grid */}
        <div className="mt-6 rounded-xl border border-line/60 bg-night/50 p-3.5">
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted/70 block mb-2">
            Module Matrix Status
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="flex items-center justify-between rounded-lg bg-surface px-2.5 py-1.5 border border-line/50">
              <span className="text-ink/80">SQL Injection</span>
              <span className="text-emerald-400 font-bold text-[10px]">SHIPPED</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-surface px-2.5 py-1.5 border border-line/50">
              <span className="text-muted">XSS Engine</span>
              <span className="text-amber-400 text-[10px]">BETA</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-surface px-2.5 py-1.5 border border-line/50">
              <span className="text-muted">CSRF Mapping</span>
              <span className="text-steel-light text-[10px]">DEV</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-surface px-2.5 py-1.5 border border-line/50">
              <span className="text-muted">SSRF & RCE</span>
              <span className="text-steel text-[10px]">RESEARCH</span>
            </div>
          </div>
        </div>

        {/* Tech tags */}
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line/80 bg-surface-card px-2.5 py-0.5 font-mono text-[11px] text-muted transition-colors group-hover:border-steel/40 group-hover:text-ink"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Link Button */}
        {href && (
          <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group/btn inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-ink transition-colors duration-200 hover:text-ember"
            >
              <span>{linkLabel ?? `Explore ${name}`}</span>
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover/btn:translate-x-1"
              >
                →
              </span>
            </a>

            <span className="font-mono text-[11px] text-steel">
              Open-Source
            </span>
          </div>
        )}
      </div>
    </motion.article>
  );
}

/** Placeholder for ongoing development */
export function MoreInDevelopment() {
  return (
    <div className="relative flex h-full min-h-[18rem] flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-surface/30 p-8 text-center transition-colors duration-300 hover:border-steel/50">
      <div className="relative mb-5 flex h-10 w-10 items-center justify-center">
        <span
          aria-hidden
          className="absolute inset-0 animate-ping rounded-full bg-steel/30"
        />
        <span
          aria-hidden
          className="h-3 w-3 rounded-full bg-steel shadow-[0_0_12px_rgba(91,124,153,0.8)]"
        />
      </div>

      <h4 className="font-display text-xl font-bold text-ink/90">
        Autonomous Neural Agents
      </h4>
      <p className="mt-2 max-w-[28ch] text-xs font-mono uppercase tracking-wider text-steel">
        Classified Research Lab
      </p>
      <p className="mt-3 max-w-[26ch] text-sm text-muted leading-relaxed">
        Next-generation cognitive systems designed to oversee distributed software architectures.
      </p>

      <span className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-[11px] font-mono text-muted">
        <span>In Active R&D</span>
      </span>
    </div>
  );
}
