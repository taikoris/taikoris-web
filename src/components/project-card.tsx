"use client";

import { motion, useReducedMotion } from "motion/react";

export type Project = {
  name: string;
  tagline: string;
  description: string;
  href?: string;
  linkLabel?: string;
  tags: string[];
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProjectCard({ project }: { project: Project }) {
  const reduced = useReducedMotion();
  const { name, tagline, description, href, linkLabel, tags } = project;

  return (
    <motion.article
      className="group relative h-full"
      whileHover={reduced ? undefined : { y: -8 }}
      transition={{ duration: 0.3, ease: EASE }}
    >
      {/* Gradient edge that lights up on hover */}
      <div
        aria-hidden
        className="absolute -inset-px rounded-2xl bg-[linear-gradient(135deg,var(--color-ember),var(--color-steel))] opacity-0 blur-[3px] transition-opacity duration-300 group-hover:opacity-60"
      />

      <div className="relative flex h-full flex-col rounded-2xl border border-line bg-surface/80 p-7 backdrop-blur-sm transition-colors duration-300 group-hover:border-ember/40 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-ember sm:text-3xl">
            {name}
          </h3>
          {href && (
            <span
              aria-hidden
              className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember"
            >
              ↗
            </span>
          )}
        </div>

        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-steel sm:text-sm">
          {tagline}
        </p>

        <p className="mt-5 flex-1 text-[0.975rem] leading-relaxed text-muted">
          {description}
        </p>

        <ul className="mt-7 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line px-3 py-1 text-xs text-muted transition-colors duration-300 group-hover:border-steel/50 group-hover:text-ink/80"
            >
              {t}
            </li>
          ))}
        </ul>

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-7 inline-flex w-fit items-center gap-2 rounded-lg text-sm font-medium text-ink transition-colors duration-300 hover:text-ember"
          >
            {linkLabel ?? `Visit ${name}`}
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        )}
      </div>
    </motion.article>
  );
}

/** Placeholder for work that exists but isn't announced. Names nothing. */
export function MoreInDevelopment() {
  return (
    <div className="flex h-full min-h-[16rem] flex-col items-center justify-center rounded-2xl border border-dashed border-line/80 p-8 text-center transition-colors duration-300 hover:border-steel/60">
      <span
        aria-hidden
        className="mb-4 h-2 w-2 animate-pulse rounded-full bg-steel"
      />
      <p className="font-display text-lg font-semibold text-ink/70">
        More in development
      </p>
      <p className="mt-2 max-w-[22ch] text-sm text-muted">Not announced yet.</p>
    </div>
  );
}
