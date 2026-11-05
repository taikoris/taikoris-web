import { Ambient } from "@/components/ambient";
import { LetterCrest } from "@/components/letter-crest";
import { MoreInDevelopment, ProjectCard } from "@/components/project-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SiteNav } from "@/components/site-nav";
import { TerminalSimulator } from "@/components/terminal-simulator";
import { PARTS } from "@/lib/crest";
import { GITHUB_URL, PROJECTS } from "@/lib/projects";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span aria-hidden className="hairline h-px w-8 sm:w-16" />
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-steel-light sm:text-xs">
        {children}
      </span>
      <span aria-hidden className="hairline h-px w-8 sm:w-16" />
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <SiteNav />

      <main id="top" className="relative overflow-hidden">
        {/* ── 01. Hero Section ─────────────────────────────────────────── */}
        <section className="relative flex min-h-svh items-center overflow-hidden pt-20 pb-16">
          <Ambient />
          <div aria-hidden className="grid-veil absolute inset-0" />

          <div className="relative mx-auto w-full max-w-5xl px-6 py-24 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-1.5 text-xs font-mono text-ember-light mb-4 shadow-[0_0_20px_rgba(224,121,60,0.15)]">
                <span className="h-1.5 w-1.5 rounded-full bg-ember animate-ping" />
                <span>SOVEREIGN DEFENSE & INTELLIGENCE ARCHITECTURE</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="display-face mt-6 font-display text-[12vw] font-black leading-[0.92] tracking-[-0.035em] text-ink sm:text-[10vw] lg:text-[7.5rem]">
                The Great Power,
                <span className="block bg-[linear-gradient(135deg,var(--color-ember),var(--color-ember-light),var(--color-steel-light))] bg-clip-text text-transparent">
                  Enthroned.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
                A technology company built on eight non-negotiable ideas. From autonomous cognitive models to relentless offensive security — we engineer systems that answer for themselves.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#shikra"
                  className="focus-ring group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-ember px-8 py-4 text-sm font-semibold text-night transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(224,121,60,0.65)] sm:w-auto"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.35),transparent)] transition-transform duration-700 group-hover:translate-x-full"
                  />
                  <span className="relative">Explore Shikra Suite</span>
                  <span
                    aria-hidden
                    className="relative transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>

                <a
                  href="#name"
                  className="focus-ring-steel group inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-surface/70 px-8 py-4 text-sm font-semibold text-ink backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-steel/60 hover:bg-surface sm:w-auto"
                >
                  <span>Decipher The Name</span>
                  <span
                    aria-hidden
                    className="text-steel transition-transform duration-300 group-hover:translate-y-0.5"
                  >
                    ↓
                  </span>
                </a>
              </div>
            </Reveal>

            {/* Kinetic Telemetry Strip */}
            <Reveal delay={0.44}>
              <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-line/70 bg-surface/40 p-4 backdrop-blur-lg">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-2">
                    <span className="block font-display text-2xl font-black text-ink">08</span>
                    <span className="font-mono text-[11px] text-muted uppercase tracking-wider">Core Pillars</span>
                  </div>
                  <div className="p-2">
                    <span className="block font-display text-2xl font-black text-ember">0%</span>
                    <span className="font-mono text-[11px] text-muted uppercase tracking-wider">Speculation</span>
                  </div>
                  <div className="p-2">
                    <span className="block font-display text-2xl font-black text-emerald-400">SQLMap</span>
                    <span className="font-mono text-[11px] text-muted uppercase tracking-wider">Engine Core</span>
                  </div>
                  <div className="p-2">
                    <span className="block font-display text-2xl font-black text-steel-light">100%</span>
                    <span className="font-mono text-[11px] text-muted uppercase tracking-wider">Verifiable</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 02. The Sovereign Name Section ───────────────────────────── */}
        <section id="name" className="relative overflow-hidden py-28 sm:py-36 border-t border-line/60">
          <div aria-hidden className="grid-veil absolute inset-0 opacity-40" />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-ember/[0.06] blur-[140px]"
          />

          <div className="relative mx-auto w-full max-w-6xl px-6">
            <Reveal>
              <Eyebrow>The Sovereign Claim</Eyebrow>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="display-face mx-auto mt-6 max-w-2xl text-balance text-center font-display text-4xl font-black leading-[1.08] tracking-tight text-ink sm:text-5xl">
                Three Parts. One Authority.
              </h2>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mx-auto mt-4 max-w-xl text-center text-sm sm:text-base text-muted">
                Every syllable of TAIKORIS has been engineered from historical roots to articulate our philosophy of scale, driving power, and sovereign posture.
              </p>
            </Reveal>

            {/* Three parts cards */}
            <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3" as="ul">
              {PARTS.map((p) => (
                <RevealItem key={p.part} as="li">
                  <div className="group h-full rounded-2xl border border-line bg-surface/80 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-ember/40 hover:bg-surface hover:shadow-[0_20px_50px_-20px_rgba(224,121,60,0.4)] backdrop-blur-md">
                    <div className="flex items-center justify-between border-b border-line/60 pb-4">
                      <span className="font-mono text-xs font-semibold text-ember uppercase tracking-widest">
                        {p.symbol}
                      </span>
                      <span className="font-mono text-[11px] text-steel uppercase tracking-wider">
                        {p.gloss}
                      </span>
                    </div>

                    <p className="font-display text-4xl font-black tracking-tight text-ink mt-5 transition-colors duration-300 group-hover:text-ember">
                      {p.part}
                    </p>

                    <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
                      {p.note}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            {/* Read Together Banner */}
            <Reveal delay={0.24}>
              <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-line/80 bg-night/80 p-8 text-center shadow-xl backdrop-blur-xl">
                <p className="font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
                  Synthesized Mandate:{" "}
                  <span className="bg-[linear-gradient(135deg,var(--color-ember),var(--color-ember-light))] bg-clip-text text-transparent">
                    The Great Power, Enthroned.
                  </span>
                </p>
                <p className="mx-auto mt-4 max-w-xl text-balance text-sm leading-relaxed text-muted">
                  This is our constructed architecture, not an inherited dictionary entry. We assembled the name, we engineered the vision, and we hold every system to what it claims.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 03. The 8 Pillars Section (Letter Crest) ─────────────────── */}
        <section id="crest" className="relative overflow-hidden py-28 sm:py-36 border-t border-line/60 bg-surface/20">
          <div aria-hidden className="grid-veil absolute inset-0 opacity-50" />
          <div
            aria-hidden
            className="absolute right-1/4 top-1/4 h-[30rem] w-[30rem] rounded-full bg-steel/[0.08] blur-[150px]"
          />

          <div className="relative mx-auto w-full max-w-6xl px-6">
            <Reveal>
              <Eyebrow>Cognitive Foundation</Eyebrow>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="display-face mx-auto mt-6 max-w-2xl text-balance text-center font-display text-4xl font-black leading-[1.08] tracking-tight text-ink sm:text-5xl">
                Eight Letters. Eight Mandates.
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mx-auto mt-4 max-w-xl text-center text-sm sm:text-base text-muted">
                Each letter in TAIKORIS defines an operational axiom. Interact with any letter to inspect its architectural purpose and domain telemetry.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-14 sm:mt-18">
                <LetterCrest />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 04. Security Suite Showcase (Shikra) ────────────────────── */}
        <section id="shikra" className="relative overflow-hidden py-28 sm:py-36 border-t border-line/60">
          <div
            aria-hidden
            className="absolute left-1/3 bottom-1/4 h-[34rem] w-[34rem] rounded-full bg-ember/[0.08] blur-[150px]"
          />

          <div className="relative mx-auto w-full max-w-6xl px-6">
            <Reveal>
              <Eyebrow>Offensive Cyber Security</Eyebrow>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="display-face mx-auto mt-6 max-w-3xl text-balance text-center font-display text-4xl font-black leading-[1.08] tracking-tight text-ink sm:text-5xl">
                Shikra Vulnerability Intelligence Engine
              </h2>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm sm:text-base text-muted">
                Experience the terminal simulation of Shikra in action. Combining deep heuristic SQLMap execution with desktop ergonomics to eliminate web vulnerabilities before adversaries find them.
              </p>
            </Reveal>

            {/* Interactive Terminal Simulator */}
            <div className="mt-14">
              <Reveal delay={0.24}>
                <TerminalSimulator />
              </Reveal>
            </div>

            {/* Project Details Cards Grid */}
            <div className="mt-12">
              <RevealGroup className="grid gap-6 sm:grid-cols-2" as="ul">
                {PROJECTS.map((project) => (
                  <RevealItem key={project.name} as="li" className="h-full">
                    <ProjectCard project={project} />
                  </RevealItem>
                ))}
                <RevealItem as="li" className="h-full">
                  <MoreInDevelopment />
                </RevealItem>
              </RevealGroup>
            </div>
          </div>
        </section>

        {/* ── 05. Technological Ecosystem & Wings ──────────────────────── */}
        <section id="ecosystem" className="relative overflow-hidden py-28 sm:py-36 border-t border-line/60 bg-surface/20">
          <div className="relative mx-auto w-full max-w-6xl px-6">
            <Reveal>
              <Eyebrow>Strategic Wings</Eyebrow>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="display-face mx-auto mt-6 max-w-2xl text-balance text-center font-display text-4xl font-black leading-[1.08] tracking-tight text-ink sm:text-5xl">
                The Taikoris Ecosystem
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <div className="glass-panel rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ember/10 border border-ember/30 text-ember font-mono text-sm font-bold">
                  01
                </div>
                <h3 className="font-display text-2xl font-bold text-ink mt-5">
                  Neuro-Symbolic AI
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Moving beyond stochastic generators to deterministic reasoning agents capable of verifying formal proofs and critical application logic.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-mono text-steel">
                  <span>● Status: Active Research</span>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-steel/10 border border-steel/30 text-steel-light font-mono text-sm font-bold">
                  02
                </div>
                <h3 className="font-display text-2xl font-bold text-ink mt-5">
                  Offensive Security Lab
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Empowering authorized security auditors with automated deduplication, blind injection telemetry, and zero false-positive exploit synthesis.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span>● Status: Shipped (Shikra)</span>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ember-deep/20 border border-ember-deep/40 text-ember-light font-mono text-sm font-bold">
                  03
                </div>
                <h3 className="font-display text-2xl font-bold text-ink mt-5">
                  Sovereign Primitives
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Hardened infrastructure primitives engineered to resist adversarial interference, data extraction, and hostile runtime manipulation.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-mono text-steel">
                  <span>● Status: Architectural Spec</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 06. Footer ──────────────────────────────────────────────── */}
        <footer className="relative overflow-hidden border-t border-line/70 bg-night py-16">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 sm:flex-row sm:justify-between">
            <div className="flex flex-col items-center gap-2.5 sm:items-start text-center sm:text-left">
              <span className="font-display text-xl font-black uppercase tracking-[0.35em] text-ink">
                Taikoris
              </span>
              <span className="text-sm text-muted">
                The Great Power, Enthroned.
              </span>
              <div className="mt-2 flex items-center gap-2 text-xs font-mono text-emerald-400/90">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Node: nominal · Cryptographic verification active</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 sm:items-end">
              <div className="flex items-center gap-6">
                <a
                  href="#top"
                  className="focus-ring text-xs font-mono text-muted transition-colors duration-200 hover:text-ink"
                >
                  Top ↑
                </a>
                <a
                  href="#crest"
                  className="focus-ring text-xs font-mono text-muted transition-colors duration-200 hover:text-ink"
                >
                  8 Pillars
                </a>
                <a
                  href="#shikra"
                  className="focus-ring text-xs font-mono text-muted transition-colors duration-200 hover:text-ink"
                >
                  Shikra
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring text-xs font-mono text-muted transition-colors duration-200 hover:text-ember"
                >
                  GitHub ↗
                </a>
              </div>
              <span className="text-xs font-mono text-muted/60">
                © {year} TAIKORIS. All rights reserved.
              </span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
