"use client";

import { motion } from "motion/react";

export type Project = {
  name: string;
  tagline: string;
  description: string;
  href?: string;
  linkLabel?: string;
  tags: string[];
};

export function ProjectCard({ project }: { project: Project }) {
  const { name, tagline, description, href, linkLabel, tags } = project;

  return (
    <motion.article
      className="group relative h-full rounded-2xl border border-line bg-surface-card/90 p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary-light/40 hover:shadow-[0_20px_50px_-20px_rgba(37,99,235,0.25)] flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-3 border-b border-line pb-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-primary-light font-semibold">
              Enterprise Suite
            </span>
          </div>
          <span className="rounded-full bg-slate-800 border border-slate-700 px-2.5 py-0.5 font-mono text-xs text-muted">
            v0.4.1 Production-Ready
          </span>
        </div>

        <div className="mt-5">
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink group-hover:text-primary-light transition-colors">
            {name} Enterprise
          </h3>
          <p className="mt-1 text-sm font-medium text-muted">
            {tagline}
          </p>
        </div>

        <p className="mt-4 text-sm text-muted leading-relaxed">
          {description}
        </p>

        {/* Enterprise Capabilities Checklist */}
        <div className="mt-6 space-y-2.5 rounded-xl border border-line bg-surface/60 p-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-ink">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Deterministic SQLMap heuristic sub-engine integration</span>
          </div>
          <div className="flex items-center gap-2 text-ink">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Zero-noise deduplication across REST & GraphQL parameters</span>
          </div>
          <div className="flex items-center gap-2 text-ink">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Electron & Python native architecture with CLI/API support</span>
          </div>
          <div className="flex items-center gap-2 text-ink">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Exportable cryptographically verified PoC audit reports</span>
          </div>
        </div>

        {/* Technical Specification Badges */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {tag}
            </span>
          ))}
          <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary-light font-medium">
            Air-Gapped Compatible
          </span>
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-primary-deep"
          >
            <span>{linkLabel ?? `Deploy ${name}`}</span>
            <span>→</span>
          </a>
        )}

        <span className="font-mono text-xs text-muted">
          Enterprise Licensing & Open Core
        </span>
      </div>
    </motion.article>
  );
}

export function MoreInDevelopment() {
  return (
    <div className="h-full rounded-2xl border border-dashed border-line bg-surface-card/40 p-7 sm:p-8 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between border-b border-line pb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-muted">
            Taikoris Applied Research Labs
          </span>
          <span className="rounded-full bg-slate-800 px-2.5 py-0.5 font-mono text-[11px] text-muted">
            Roadmap 2026-2027
          </span>
        </div>

        <h3 className="font-display text-2xl font-bold tracking-tight text-ink mt-5">
          Autonomous Threat Mitigation Mesh
        </h3>
        <p className="mt-1 text-sm text-primary-light font-medium">
          Neuro-Symbolic Red Team Agents
        </p>

        <p className="mt-4 text-sm text-muted leading-relaxed">
          Developing distributed autonomous cognitive agents capable of continuously stress-testing enterprise microservices, verifying formal application invariants, and synthesizing automated patch recommendations.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-2 text-xs font-mono">
          <div className="rounded-lg border border-line bg-surface p-3">
            <span className="text-muted block text-[10px]">COGNITIVE ENGINE</span>
            <span className="text-ink font-semibold mt-0.5 block">Neuro-Symbolic</span>
          </div>
          <div className="rounded-lg border border-line bg-surface p-3">
            <span className="text-muted block text-[10px]">VERIFICATION</span>
            <span className="text-ink font-semibold mt-0.5 block">Formal Proofs</span>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-line flex items-center justify-between text-xs font-mono text-muted">
        <span>In Active Development</span>
        <span className="text-primary-light">Private Alpha</span>
      </div>
    </div>
  );
}
