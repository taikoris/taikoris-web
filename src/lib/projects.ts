import type { Project } from "@/components/project-card";

/**
 * Only projects confirmed to exist in the TAIKORIS workspace belong here.
 * Shikra's details come from its own README and package.json — the scanner
 * is Electron + Python, SQLMap-powered, with SQLi shipping and the other
 * modules still in progress. Do not add speculative entries.
 */
export const PROJECTS: Project[] = [
  {
    name: "Shikra",
    tagline: "Modular web vulnerability scanner",
    description:
      "A desktop scanner built with Electron and Python, running SQLMap as its engine behind a terminal-style UI. It crawls a target, deduplicates every injection surface, and reports findings live. SQL injection ships today; XSS, CSRF, SSRF and RCE modules are in progress. For authorized security testing only.",
    href: "https://github.com/TAIKORIS",
    linkLabel: "View on GitHub",
    tags: ["Electron", "Python", "SQLMap", "Security"],
  },
];

/** The one contact link confirmed in the workspace. */
export const GITHUB_URL = "https://github.com/TAIKORIS";
