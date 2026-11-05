import { Ambient } from "@/components/ambient";
import { EnterpriseDashboard } from "@/components/enterprise-dashboard";
import { LetterCrest } from "@/components/letter-crest";
import { MoreInDevelopment, ProjectCard } from "@/components/project-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SiteNav } from "@/components/site-nav";
import { PARTS } from "@/lib/crest";
import { GITHUB_URL, PROJECTS } from "@/lib/projects";

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-2.5 mb-3">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      <span className="font-mono text-xs uppercase tracking-widest text-primary-light font-semibold">
        {children}
      </span>
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <SiteNav />

      <main id="top" className="relative overflow-hidden bg-night">
        {/* ── 01. Hero Section ─────────────────────────────────────────── */}
        <section className="relative min-h-[92svh] flex items-center justify-center pt-28 pb-20 px-6 sm:px-8">
          <Ambient />

          <div className="relative mx-auto w-full max-w-5xl text-center z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono text-primary-light mb-6 shadow-lg shadow-primary/10">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>ENTERPRISE ATTACK SURFACE DEFENSE & SOVEREIGN INTELLIGENCE</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="display-face font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-ink leading-[1.08] sm:leading-[1.05]">
                Continuous Attack Surface Defense
                <span className="block mt-2 bg-gradient-to-r from-primary-light via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  For Modern Enterprise.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mx-auto mt-7 max-w-2xl text-balance text-base sm:text-xl text-muted leading-relaxed">
                Taikoris delivers deterministic vulnerability verification and autonomous cognitive auditing. Eliminating false alarms, mapping entire digital topologies, and proving exploit invariants before adversaries can act.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="focus-ring inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-deep hover:shadow-primary/40 hover:-translate-y-0.5"
                >
                  <span>Request Technical Briefing</span>
                  <span>→</span>
                </a>

                <a
                  href="#platform"
                  className="focus-ring inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-line bg-surface-card px-8 py-3.5 text-sm font-semibold text-ink transition-all hover:border-slate-600 hover:bg-surface-hover hover:-translate-y-0.5"
                >
                  <span>Explore Live Console</span>
                  <span className="text-muted">↓</span>
                </a>
              </div>
            </Reveal>

            {/* Institutional Compliance Ribbon */}
            <Reveal delay={0.4}>
              <div className="mx-auto mt-16 max-w-4xl border-t border-line/80 pt-8">
                <p className="font-mono text-[11px] text-muted uppercase tracking-widest mb-4">
                  Built to Align with Strict Enterprise Security Standards
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span>
                    <span>SOC2 Type II Aligned</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span>
                    <span>Zero False Positives</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span>
                    <span>Deterministic Heuristics</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span>
                    <span>Air-Gapped Deployment</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 02. Interactive Platform Console Preview ─────────────────── */}
        <section id="platform" className="relative py-24 sm:py-32 border-t border-line/70 bg-surface/30">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <SectionEyebrow>Enterprise Platform</SectionEyebrow>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
                Real-Time Attack Surface Observability
              </h2>
              <p className="mt-4 text-base text-muted">
                Inspect how the Taikoris Console continuously analyzes enterprise assets, deduplicates injection surfaces, and generates verified vulnerability proof-of-concepts.
              </p>
            </div>

            <EnterpriseDashboard />
          </div>
        </section>

        {/* ── 03. Core Enterprise Solutions ────────────────────────────── */}
        <section id="solutions" className="relative py-24 sm:py-32 border-t border-line/70">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionEyebrow>Enterprise Capabilities</SectionEyebrow>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
                Engineered for High-Consequence Environments
              </h2>
              <p className="mt-4 text-base text-muted">
                Three unified architectural pillars protecting mission-critical digital infrastructure from modern systemic threats.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-line bg-surface-card/80 p-8 hover:border-primary-light/40 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/25 text-primary-light font-display text-lg font-bold">
                    01
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink mt-6">
                    Continuous Attack Surface Management
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    Automated, non-invasive discovery of shadow APIs, orphaned subdomains, and exposed cloud interfaces with continuous parameter deduplication.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-primary-light">
                  <span>100% Asset Observability</span>
                  <span>→</span>
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-surface-card/80 p-8 hover:border-primary-light/40 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-display text-lg font-bold">
                    02
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink mt-6">
                    Autonomous Vulnerability Verification
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    Powered by the Shikra engine. Replaces noisy regex scanners with verified heuristic execution, proving whether injection surfaces are actually exploitable.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-emerald-400">
                  <span>Zero False Positives</span>
                  <span>→</span>
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-surface-card/80 p-8 hover:border-primary-light/40 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 font-display text-lg font-bold">
                    03
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink mt-6">
                    Neuro-Symbolic Sovereign AI
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    Deterministic cognitive models that operate within strict mathematical bounds, offering explainable reasoning for security operations without generative hallucination.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-indigo-400">
                  <span>Formal Proof Verification</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. Shikra Enterprise Spotlight ─────────────────────────── */}
        <section id="shikra" className="relative py-24 sm:py-32 border-t border-line/70 bg-surface/20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionEyebrow>Flagship Technology</SectionEyebrow>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
                Shikra Vulnerability Intelligence Engine
              </h2>
              <p className="mt-4 text-base text-muted">
                The desktop & cloud scanner engineered with Electron and Python, powered by a high-throughput SQLMap sub-engine for rigorous penetration auditing.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard project={PROJECTS[0]} />
              <MoreInDevelopment />
            </div>
          </div>
        </section>

        {/* ── 05. Enterprise Comparison Matrix ─────────────────────────── */}
        <section className="relative py-24 sm:py-32 border-t border-line/70">
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <SectionEyebrow>Comparative Advantage</SectionEyebrow>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
                Traditional Scanners vs. Taikoris
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted">
                Why enterprise security teams are migrating from legacy DAST tools to deterministic verification.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-line bg-surface-card/90 shadow-xl">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-line bg-surface-card text-muted font-mono uppercase tracking-wider text-[11px]">
                    <th className="py-4 px-6">Capability & Metric</th>
                    <th className="py-4 px-6">Legacy DAST & Scanners</th>
                    <th className="py-4 px-6 text-primary-light font-bold">Taikoris Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/70">
                  <tr>
                    <td className="py-4 px-6 font-medium text-ink">False Positive Rate</td>
                    <td className="py-4 px-6 text-rose-400">High (35% – 60% false alarms)</td>
                    <td className="py-4 px-6 text-emerald-400 font-semibold font-mono">0% (Verified PoC Guaranteed)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-ink">SQL Injection Verification</td>
                    <td className="py-4 px-6 text-muted">Generic regex & status code guessing</td>
                    <td className="py-4 px-6 text-primary-light font-mono">SQLMap Heuristic Blind Sub-Engine</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-ink">Surface Deduplication</td>
                    <td className="py-4 px-6 text-muted">Repeats scan on every raw URL</td>
                    <td className="py-4 px-6 text-emerald-400 font-mono">Normalized Parameter Topology</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-ink">Deployment Architecture</td>
                    <td className="py-4 px-6 text-muted">Cloud SaaS only (Data leaves perimeter)</td>
                    <td className="py-4 px-6 text-ink font-mono">Air-Gapped, On-Prem, or Hybrid</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-ink">Audit Verification Proof</td>
                    <td className="py-4 px-6 text-muted">Static PDF without replay proof</td>
                    <td className="py-4 px-6 text-emerald-400 font-mono">Cryptographically Signed Token</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 06. The 8 Governance Pillars (Framework) ─────────────────── */}
        <section id="governance" className="relative py-24 sm:py-32 border-t border-line/70 bg-surface/30">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <SectionEyebrow>Institutional Standard</SectionEyebrow>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
                The Taikoris Governance Framework
              </h2>
              <p className="mt-4 text-base text-muted">
                Eight operational standards defining how every system, model, and platform in the enterprise portfolio is architected and audited.
              </p>
            </div>

            <LetterCrest />
          </div>
        </section>

        {/* ── 07. Corporate Architecture & Etymology ───────────────────── */}
        <section id="architecture" className="relative py-24 sm:py-32 border-t border-line/70">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <SectionEyebrow>Corporate Identity</SectionEyebrow>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
                The Sovereign Standard
              </h2>
              <p className="mt-4 text-base text-muted">
                Three foundational pillars synthesized into one unified corporate mandate.
              </p>
            </div>

            <RevealGroup className="grid gap-6 md:grid-cols-3" as="div">
              {PARTS.map((p) => (
                <RevealItem key={p.part}>
                  <div className="rounded-2xl border border-line bg-surface-card p-8 h-full flex flex-col justify-between hover:border-slate-600 transition-colors">
                    <div>
                      <div className="flex items-center justify-between border-b border-line pb-4">
                        <span className="font-mono text-xs font-bold text-primary-light">
                          {p.symbol}
                        </span>
                        <span className="font-mono text-xs text-muted">
                          {p.gloss}
                        </span>
                      </div>
                      <h3 className="font-display text-4xl font-black text-ink mt-6">
                        {p.part}
                      </h3>
                      <p className="mt-4 text-sm text-muted leading-relaxed">
                        {p.note}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <div className="mt-12 rounded-2xl border border-line/80 bg-surface-card/60 p-8 text-center max-w-3xl mx-auto backdrop-blur-md">
              <p className="font-display text-2xl font-bold text-ink">
                Mandate:{" "}
                <span className="text-primary-light">
                  The Great Power, Enthroned.
                </span>
              </p>
              <p className="mt-3 text-sm text-muted max-w-xl mx-auto">
                We hold our engineering, tools, and autonomous systems to the highest bar of institutional accountability and deterministic security.
              </p>
            </div>
          </div>
        </section>

        {/* ── 08. Enterprise Contact / Conversion Banner ───────────────── */}
        <section id="contact" className="relative py-24 sm:py-32 border-t border-line/70 bg-gradient-to-b from-surface/50 to-night">
          <div className="mx-auto w-full max-w-5xl px-6 lg:px-8 text-center">
            <div className="rounded-3xl border border-primary/30 bg-surface-card/90 p-8 sm:p-14 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

              <span className="font-mono text-xs uppercase tracking-widest text-primary-light font-semibold block mb-3">
                Enterprise Engagement
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink">
                Secure Your Attack Surface Today
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-muted leading-relaxed">
                Schedule a confidential architecture briefing with our senior security engineers or deploy the Shikra vulnerability engine across your perimeter.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:contact@taikoris.com"
                  className="focus-ring inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-deep transition-all"
                >
                  <span>Inquire at contact@taikoris.com</span>
                  <span>→</span>
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-line bg-surface px-8 py-3.5 text-sm font-semibold text-ink hover:border-slate-600 transition-all"
                >
                  <span>Explore GitHub Organization</span>
                  <span className="text-muted">↗</span>
                </a>
              </div>

              <div className="mt-10 pt-6 border-t border-line/60 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
                <span>● Dedicated SLA Support</span>
                <span>● Custom Air-Gapped Deployments</span>
                <span>● Executive PoC Verification</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 09. Multi-Column Corporate Footer ────────────────────────── */}
        <footer className="relative border-t border-line/80 bg-night py-16 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              <div className="col-span-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-display text-sm font-black">
                    T
                  </div>
                  <span className="font-display text-lg font-bold text-ink">
                    TAIKORIS
                  </span>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-muted max-w-xs leading-relaxed">
                  Enterprise-grade attack surface defense, sovereign vulnerability auditing, and deterministic cognitive systems.
                </p>
                <div className="mt-4 flex items-center gap-2 font-mono text-xs text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Global Operations Nominal</span>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-semibold mb-3">
                  Solutions
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted">
                  <li><a href="#solutions" className="hover:text-ink transition-colors">Attack Surface Management</a></li>
                  <li><a href="#shikra" className="hover:text-ink transition-colors">Vulnerability Auditing</a></li>
                  <li><a href="#solutions" className="hover:text-ink transition-colors">Neuro-Symbolic AI</a></li>
                  <li><a href="#solutions" className="hover:text-ink transition-colors">Air-Gapped Deployment</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-semibold mb-3">
                  Platform
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted">
                  <li><a href="#platform" className="hover:text-ink transition-colors">Taikoris Console</a></li>
                  <li><a href="#shikra" className="hover:text-ink transition-colors">Shikra Engine</a></li>
                  <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">GitHub Source</a></li>
                  <li><a href="#governance" className="hover:text-ink transition-colors">8 Pillars Framework</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-semibold mb-3">
                  Trust & Company
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted">
                  <li><a href="#architecture" className="hover:text-ink transition-colors">About Taikoris</a></li>
                  <li><a href="#contact" className="hover:text-ink transition-colors">Security Disclosures</a></li>
                  <li><a href="#contact" className="hover:text-ink transition-colors">Enterprise Inquiries</a></li>
                  <li><a href="https://taikoris.com" className="hover:text-ink transition-colors">taikoris.com</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-line/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted font-mono">
              <p>© {year} TAIKORIS Inc. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <span>SOC2 Type II Aligned</span>
                <span>Zero-Noise Verification</span>
                <a href="#top" className="hover:text-ink transition-colors">Back to Top ↑</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
