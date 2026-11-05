export type CrestLetter = {
  letter: string;
  word: string;
  meaning: string;
  code: string;
  pillar: string;
  details: string;
  tag: string;
  metric: string;
};

/** The eight enterprise pillars of the Taikoris standard. */
export const CREST: CrestLetter[] = [
  {
    letter: "T",
    word: "Technology",
    meaning: "High-Availability Infrastructure",
    code: "01/SYS",
    pillar: "Enterprise Computing",
    details: "Fault-tolerant, globally distributed platforms and low-latency computation engineered for 99.999% reliability.",
    tag: "Infrastructure",
    metric: "99.999% Uptime",
  },
  {
    letter: "A",
    word: "AI",
    meaning: "Deterministic Neuro-Symbolic AI",
    code: "02/COG",
    pillar: "Cognitive Intelligence",
    details: "Neuro-symbolic models eliminating hallucination drift through rigorous formal verification and domain constraints.",
    tag: "Intelligence",
    metric: "0% Hallucination Drift",
  },
  {
    letter: "I",
    word: "Insight",
    meaning: "Continuous Threat Observability",
    code: "03/OPT",
    pillar: "Deep Analytics",
    details: "Real-time telemetry and heuristic anomaly detection turning noisy security logs into actionable business mitigation.",
    tag: "Observability",
    metric: "Sub-Second Latency",
  },
  {
    letter: "K",
    word: "Knowledge",
    meaning: "Universal Attack Surface Topology",
    code: "04/MAP",
    pillar: "Threat Graph",
    details: "Comprehensive digital asset discovery and dependency mapping across cloud, on-premises, and hybrid perimeters.",
    tag: "Asset Discovery",
    metric: "100% Asset Coverage",
  },
  {
    letter: "O",
    word: "Oversight",
    meaning: "Autonomous 24/7 Governance",
    code: "05/MON",
    pillar: "Continuous Compliance",
    details: "Autonomous supervisory agents conducting real-time compliance checks aligned with SOC2, ISO 27001, and OWASP standards.",
    tag: "Governance",
    metric: "Continuous Audit",
  },
  {
    letter: "R",
    word: "Research",
    meaning: "Advanced Offensive Lab",
    code: "06/LAB",
    pillar: "Vulnerability R&D",
    details: "Pioneering novel exploit detection methods, automated proof-of-concept synthesis, and proactive red-team tooling.",
    tag: "Innovation",
    metric: "Zero-Day Research",
  },
  {
    letter: "I",
    word: "Integrity",
    meaning: "Cryptographic Provability",
    code: "07/VAL",
    pillar: "Zero-Trust Protocol",
    details: "Mathematical invariants, immutable audit logs, and verifiable execution preventing unauthorized internal or external tampering.",
    tag: "Trust",
    metric: "Cryptographic Proofs",
  },
  {
    letter: "S",
    word: "Security",
    meaning: "Sovereign Perimeter Defense",
    code: "08/SEC",
    pillar: "Enterprise Shield",
    details: "Multi-layered defensive architecture, zero-tolerance attack surface hardening, and automated vulnerability elimination.",
    tag: "Cyber Defense",
    metric: "Tier-1 Hardening",
  },
];

/** The three foundational roots of the Taikoris enterprise name. */
export const PARTS = [
  {
    part: "TAI",
    gloss: "Global Scale",
    symbol: "SCALE",
    note: "Rooted in institutional scale. The technical fortitude and architectural breadth to protect mission-critical global assets.",
  },
  {
    part: "KOR",
    gloss: "Core Power",
    symbol: "EXECUTION",
    note: "The deterministic engine and technical authority that translates complex threat intelligence into decisive enterprise action.",
  },
  {
    part: "IS",
    gloss: "Sovereign State",
    symbol: "GOVERNANCE",
    note: "The unyielding seat of governance. Ensuring every autonomous system answers to verifiable institutional accountability.",
  },
];
