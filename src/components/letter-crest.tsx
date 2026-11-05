"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { CREST } from "@/lib/crest";

export function LetterCrest() {
  const [selected, setSelected] = useState<number>(0);
  const current = CREST[selected];

  return (
    <div className="w-full">
      {/* Horizontal Executive Letter Selector */}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5 sm:gap-3">
        {CREST.map((item, index) => {
          const isSelected = selected === index;
          return (
            <button
              key={item.letter + index}
              type="button"
              onClick={() => setSelected(index)}
              className={`focus-ring group relative flex flex-col items-center justify-center rounded-xl border p-3 sm:py-4 transition-all duration-200 text-left ${
                isSelected
                  ? "border-primary-light bg-primary/10 shadow-[0_0_20px_-3px_rgba(56,189,248,0.25)]"
                  : "border-line bg-surface-card/60 hover:border-slate-600 hover:bg-surface-card"
              }`}
            >
              <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">
                {item.code.split("/")[0]}
              </span>
              <span
                className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 transition-colors ${
                  isSelected ? "text-primary-light" : "text-ink group-hover:text-primary-light"
                }`}
              >
                {item.letter}
              </span>
              <span className="text-[11px] font-medium text-muted truncate max-w-full hidden sm:block mt-0.5">
                {item.word}
              </span>
              {isSelected && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute -bottom-px left-3 right-3 h-[2px] bg-primary-light"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Pillar Executive Dossier */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-line bg-surface-card/90 p-6 sm:p-8 backdrop-blur-xl shadow-lg"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-6">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/30 text-primary-light font-display text-2xl font-black">
                  {current.letter}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                      {current.word}
                    </h3>
                    <span className="rounded-full bg-slate-800 border border-slate-700 px-2 py-0.5 font-mono text-[11px] text-muted">
                      {current.code}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-primary-light mt-0.5">
                    {current.pillar}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 self-start sm:self-center">
                <span className="rounded-lg border border-line bg-surface px-3 py-1 font-mono text-xs font-semibold text-emerald-400">
                  {current.metric}
                </span>
                <span className="rounded-lg bg-primary/10 border border-primary/20 px-3 py-1 font-mono text-xs font-medium text-primary-light">
                  {current.tag}
                </span>
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-muted block mb-1.5">
                  Strategic Objective
                </span>
                <p className="text-base font-semibold text-ink/95">
                  {current.meaning}
                </p>
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-muted block mb-1.5">
                  Enterprise Implementation
                </span>
                <p className="text-sm text-muted leading-relaxed">
                  {current.details}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
