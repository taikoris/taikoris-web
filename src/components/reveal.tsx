"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Cast through a single concrete motion component so the union of element
 *  types doesn't break the JSX call signature. */
const TAGS = {
  div: motion.div,
  section: motion.section,
  ul: motion.ul,
  li: motion.li,
  header: motion.header,
  footer: motion.footer,
} as const;

type TagName = keyof typeof TAGS;

function tag(name: TagName) {
  return TAGS[name] as typeof motion.div;
}

/**
 * Fades + lifts its children into place the first time they scroll into view.
 * Under prefers-reduced-motion it fades only, with no travel.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: TagName;
}) {
  const reduced = useReducedMotion();
  const Tag = tag(as);

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: reduced ? 0.4 : 0.75,
        ease: EASE,
        delay: reduced ? 0 : delay,
      }}
    >
      {children}
    </Tag>
  );
}

/** Wraps a row/grid so each <RevealItem> inside animates in sequence. */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: TagName;
}) {
  const reduced = useReducedMotion();
  const Tag = tag(as);

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        shown: { transition: { staggerChildren: reduced ? 0 : stagger } },
      }}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: TagName;
}) {
  const reduced = useReducedMotion();
  const Tag = tag(as);

  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : 24 },
        shown: { opacity: 1, y: 0 },
      }}
      transition={{ duration: reduced ? 0.4 : 0.7, ease: EASE }}
    >
      {children}
    </Tag>
  );
}
