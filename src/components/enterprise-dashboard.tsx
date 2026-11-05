"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

type TabKey = "surface" | "engine" | "compliance";

export function EnterpriseDashboard() {
  const [activeTab, setActiveTab] = useState<TabKey>("surface");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditProgress, setAuditProgress] = useState(100);

  const triggerAudit = () => {
    setIsAuditing(true);
    setAuditProgress(15);
    const interval = setInterval(() => {
      setAuditProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAuditing(false);
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-2xl border border-line bg-surface/90 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.85)] backdrop-blur-2xl overflow-hidden">
      {/* Top Application Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-line bg-surface-card/90 px-5 py-3.5 gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600 inline-block" />
          </div>
          <span className="h-4 w-px bg-line mx-1" />
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold text-ink">
              Taikoris Console · Shikra Enterprise Core
            </span>
            <span className="rounded bg-primary/10 border border-primary/20 px-1.5 py-0.5 text-[10px] font-mono text-primary-light">
              v0.4.1
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-center">
          <button
            type="button"
            onClick={triggerAudit}
            disabled={isAuditing}
            className="focus-ring flex items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary-light hover:bg-primary/20 transition-all disabled:opacity-50"
          >
            <span>{isAuditing ? `Auditing (${auditProgress}%)` : "⚡ Run Surface Audit"}</span>
          </button>

          <a
            href="https://github.com/taikoris"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex items-center gap-1 rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted hover:text-ink hover:border-slate-600 transition-colors"
          >
            <span>Export Report</span>
            <span className="text-[10px]">↓</span>
          </a>
        </div>
      </div>

      {/* Metric Highlights Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-line bg-night/60">
        <div className="p-4 sm:p-5 border-r border-b sm:border-b-0 border-line">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
            Security Posture
          </span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-display">
              98.4
            </span>
            <span className="text-xs font-semibold text-emerald-400">/ 100 (A+)</span>
          </div>
          <span className="text-[11px] text-muted/80">Continuous verification</span>
        </div>

        <div className="p-4 sm:p-5 border-r border-b sm:border-b-0 border-line">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
            Monitored Surfaces
          </span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-display">
              1,420
            </span>
            <span className="text-xs text-primary-light">Endpoints</span>
          </div>
          <span className="text-[11px] text-muted/80">API & Web surfaces mapped</span>
        </div>

        <div className="p-4 sm:p-5 border-r border-line">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
            Deduplication Rate
          </span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-display">
              99.8%
            </span>
            <span className="text-xs font-semibold text-emerald-400">Zero Noise</span>
          </div>
          <span className="text-[11px] text-muted/80">Zero false-positive filter</span>
        </div>

        <div className="p-4 sm:p-5">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
            Verification Engine
          </span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-display">
              SQLMap
            </span>
            <span className="text-xs text-accent font-mono font-medium">Heuristic</span>
          </div>
          <span className="text-[11px] text-muted/80">Deterministic injection test</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-line bg-surface-card/50 px-5 pt-3 overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab("surface")}
          className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors ${
            activeTab === "surface"
              ? "border-primary-light text-primary-light"
              : "border-transparent text-muted hover:text-ink"
          }`}
        >
          <span>Attack Surface Topology</span>
          <span className="rounded-full bg-slate-800 px-1.5 py-0.2 text-[10px] text-muted">
            42 Endpoints
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("engine")}
          className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors ${
            activeTab === "engine"
              ? "border-primary-light text-primary-light"
              : "border-transparent text-muted hover:text-ink"
          }`}
        >
          <span>Shikra Heuristic Engine</span>
          <span className="rounded-full bg-emerald-950/80 border border-emerald-500/30 px-1.5 py-0.2 text-[10px] text-emerald-400">
            Active
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("compliance")}
          className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors ${
            activeTab === "compliance"
              ? "border-primary-light text-primary-light"
              : "border-transparent text-muted hover:text-ink"
          }`}
        >
          <span>Compliance & Assurance</span>
          <span className="rounded-full bg-slate-800 px-1.5 py-0.2 text-[10px] text-muted">
            SOC2 / ISO
          </span>
        </button>
      </div>

      {/* Dashboard Body Content */}
      <div className="p-5 sm:p-6 min-h-[300px]">
        <AnimatePresence mode="wait">
          {activeTab === "surface" && (
            <motion.div
              key="surface"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between text-xs text-muted font-mono pb-2 border-b border-line/60">
                <span>TARGET ENDPOINT PATH</span>
                <span className="hidden sm:inline">AUDIT STATUS</span>
                <span>RISK ASSESSMENT</span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-line bg-surface-card p-3.5 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="rounded bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-400">
                    POST
                  </span>
                  <div>
                    <p className="font-mono text-xs sm:text-sm text-ink font-medium">
                      /api/v2/auth/session/verify
                    </p>
                    <p className="text-[11px] text-muted">
                      Parameters deduplicated: session_token, client_fingerprint
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Verified Safe</span>
                </div>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                  0 Vulnerabilities
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-amber-500/30 bg-surface-card p-3.5 hover:border-amber-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="rounded bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 text-[10px] font-mono font-bold text-sky-400">
                    GET
                  </span>
                  <div>
                    <p className="font-mono text-xs sm:text-sm text-ink font-medium">
                      /api/v1/telemetry/query?sensor_id=
                    </p>
                    <p className="text-[11px] text-amber-300/80">
                      Heuristic Blind SQL Injection vector identified & flagged for review
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-amber-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>PoC Synthesized</span>
                </div>
                <span className="rounded-full bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 text-xs font-semibold text-amber-400">
                  SQLi Vector (Critical)
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-line bg-surface-card p-3.5 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="rounded bg-slate-700/50 border border-slate-600/30 px-2 py-0.5 text-[10px] font-mono font-bold text-slate-300">
                    PUT
                  </span>
                  <div>
                    <p className="font-mono text-xs sm:text-sm text-ink font-medium">
                      /api/v3/organization/settings/billing
                    </p>
                    <p className="text-[11px] text-muted">
                      CSRF token validity & CORS header validation verified
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Hardened</span>
                </div>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                  Compliant
                </span>
              </div>
            </motion.div>
          )}

          {activeTab === "engine" && (
            <motion.div
              key="engine"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-line bg-night/80 p-5 font-mono text-xs leading-relaxed space-y-2"
            >
              <div className="flex items-center justify-between pb-3 border-b border-line text-muted">
                <span>SHIKRA ENGINE TELEMETRY — AUTOMATED VERIFICATION STREAM</span>
                <span className="text-emerald-400">SQLMap Daemon: ONLINE</span>
              </div>
              <p className="text-slate-400">
                [00:01.02] <span className="text-sky-400">INFO</span> Target endpoint tree crawled: 42 dynamic routes found.
              </p>
              <p className="text-slate-400">
                [00:01.45] <span className="text-sky-400">INFO</span> Initiating non-destructive heuristic payload matrix...
              </p>
              <p className="text-amber-400">
                [00:02.10] <span className="text-amber-400">FLAG</span> Injection point confirmed: query parameter &apos;sensor_id&apos;.
              </p>
              <p className="text-slate-400">
                [00:02.85] <span className="text-sky-400">TEST</span> Executing boolean-based blind sub-queries [5/5 successful].
              </p>
              <p className="text-emerald-400 font-semibold">
                [00:03.20] <span className="text-emerald-400">CONFIRMED</span> DBMS Fingerprint: PostgreSQL 16.2 on Linux x86_64.
              </p>
              <p className="text-slate-400">
                [00:03.80] <span className="text-sky-400">REPORT</span> Cryptographic audit token generated: sha256:8f4c...3e12.
              </p>
            </motion.div>
          )}

          {activeTab === "compliance" && (
            <motion.div
              key="compliance"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid gap-4 sm:grid-cols-3"
            >
              <div className="rounded-xl border border-line bg-surface-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-ink">SOC2 Type II</span>
                  <span className="text-emerald-400 text-xs font-semibold">✓ Aligned</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Continuous vulnerability audit controls meet CC6.6 & CC7.1 security requirements.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-surface-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-ink">OWASP Top 10</span>
                  <span className="text-emerald-400 text-xs font-semibold">✓ 10/10 Tested</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Automated heuristics cover A01 (Access Control) through A03 (Injection Vectors).
                </p>
              </div>

              <div className="rounded-xl border border-line bg-surface-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-ink">ISO/IEC 27001</span>
                  <span className="text-emerald-400 text-xs font-semibold">✓ Ready</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Technical vulnerability management aligned with Control A.12.6.1 standards.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
