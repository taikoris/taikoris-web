"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

type LogEntry = {
  text: string;
  type: "info" | "warn" | "vuln" | "success" | "cmd";
};

const DEMO_LOGS: LogEntry[] = [
  { type: "cmd", text: "$ shikra scan --target https://core-sys.internal --depth 3 --modules sqli,xss" },
  { type: "info", text: "[*] Initializing Shikra v0.4.1 Core Engine [PID: 49210]" },
  { type: "info", text: "[*] Electron UI <-> Python daemon IPC channel established" },
  { type: "info", text: "[*] Target surface mapping: crawled 42 dynamic endpoints" },
  { type: "info", text: "[*] Deduplicating injection vectors across URI query & JSON bodies..." },
  { type: "warn", text: "[!] Vector identified: /api/v2/telemetry/query?sensor_id=" },
  { type: "info", text: "[*] Engaging SQLMap sub-engine: heuristic test for boolean-based blind..." },
  { type: "vuln", text: "[+] CRITICAL VULN DETECTED: Parameter 'sensor_id' is injectable via Blind SQLi (AND boolean-based)" },
  { type: "vuln", text: "[+] Back-end DBMS: PostgreSQL 16.2 | OS: Linux x86_64" },
  { type: "info", text: "[*] Generating cryptographically signed proof-of-concept report..." },
  { type: "success", text: "[✓] Audit completed in 4.28s. Zero false positives verified." },
];

export function TerminalSimulator() {
  const [activeStep, setActiveStep] = useState(DEMO_LOGS.length);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const startReplay = () => {
    setActiveStep(1);
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning) return;
    if (activeStep < DEMO_LOGS.length) {
      const timer = setTimeout(() => {
        setActiveStep((s) => s + 1);
      }, 450);
      return () => clearTimeout(timer);
    } else {
      setIsRunning(false);
    }
  }, [activeStep, isRunning]);

  const copyCommand = () => {
    navigator.clipboard.writeText("shikra scan --target https://core-sys.internal");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl rounded-2xl border border-line bg-night/90 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.85)] backdrop-blur-xl">
      {/* Top window chrome */}
      <div className="flex items-center justify-between border-b border-line/80 px-4 py-3 bg-surface/80 rounded-t-2xl">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="ml-3 font-mono text-xs text-muted/80 tracking-wide hidden sm:inline-block">
            shikra-core — zsh — 80×24
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={copyCommand}
            className="focus-ring flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-mono text-muted hover:text-ink hover:bg-surface-hover transition-colors"
            title="Copy command"
          >
            {copied ? (
              <span className="text-emerald-400">Copied ✓</span>
            ) : (
              <span>Copy CLI</span>
            )}
          </button>

          <button
            type="button"
            onClick={startReplay}
            disabled={isRunning}
            className="focus-ring flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1 text-xs font-mono text-steel-light hover:text-ember hover:border-ember/40 bg-surface/50 transition-colors disabled:opacity-50"
          >
            <span>{isRunning ? "Simulating..." : "▶ Replay Audit"}</span>
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="relative p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[340px] scanline-overlay">
        <div className="space-y-2">
          {DEMO_LOGS.slice(0, activeStep).map((log, index) => {
            let textColor = "text-muted";
            if (log.type === "cmd") textColor = "text-ink font-semibold";
            if (log.type === "warn") textColor = "text-yellow-400";
            if (log.type === "vuln") textColor = "text-rose-400 font-medium";
            if (log.type === "success") textColor = "text-emerald-400 font-semibold";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={`flex items-start gap-2 ${textColor}`}
              >
                <span className="select-none text-steel/50 text-[10px] sm:text-xs pt-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="break-all">{log.text}</span>
              </motion.div>
            );
          })}

          {/* Active blinking cursor */}
          <div className="flex items-center gap-2 pt-1 text-ember">
            <span className="select-none text-steel/50 text-[10px] sm:text-xs">
              {String(activeStep + 1).padStart(2, "0")}
            </span>
            <span className="inline-block h-4 w-2 bg-ember animate-pulse shadow-[0_0_10px_rgba(224,121,60,0.8)]" />
          </div>
        </div>

        {/* Floating telemetry tag bottom right */}
        <div className="absolute bottom-3 right-4 hidden sm:flex items-center gap-2 rounded-full border border-line bg-surface/90 px-3 py-1 text-[11px] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Engine: SQLMap-Daemon v1.8</span>
        </div>
      </div>
    </div>
  );
}
