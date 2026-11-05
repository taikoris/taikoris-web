export type CrestLetter = {
  letter: string;
  word: string;
  meaning: string;
  code: string;
  pillar: string;
  details: string;
  tag: string;
};

/** The eight elements of the name. One entry per interactive letter. */
export const CREST: CrestLetter[] = [
  {
    letter: "T",
    word: "Technology",
    meaning: "Every tool, every system",
    code: "01/SYS",
    pillar: "Core Infrastructure",
    details: "Architecting resilient, self-healing platforms and high-throughput computational primitives.",
    tag: "Engineering",
  },
  {
    letter: "A",
    word: "AI",
    meaning: "The intelligence processing it all",
    code: "02/COG",
    pillar: "Autonomous Cognition",
    details: "Advanced neuro-symbolic models and neural agents designed for deterministic domain reasoning.",
    tag: "Intelligence",
  },
  {
    letter: "I",
    word: "Insight",
    meaning: "Seeing beneath the surface",
    code: "03/OPT",
    pillar: "Analytical Depth",
    details: "Extracting high-entropy patterns from complex signals and opaque corporate attack surfaces.",
    tag: "Analytics",
  },
  {
    letter: "K",
    word: "Knowledge",
    meaning: "Everything known, mapped",
    code: "04/MAP",
    pillar: "Total Topology",
    details: "Universal threat graphs, ontology systems, and real-time dependency vector mapping.",
    tag: "Mapping",
  },
  {
    letter: "O",
    word: "Oversight",
    meaning: "Watching every domain",
    code: "05/MON",
    pillar: "Continuous Audit",
    details: "Non-stop autonomous surveillance of system integrity, access anomalies, and runtime drifts.",
    tag: "Governance",
  },
  {
    letter: "R",
    word: "Research",
    meaning: "Always expanding what's known",
    code: "06/LAB",
    pillar: "Frontier Science",
    details: "Pioneering offensive security theory, exploit synthesis algorithms, and cryptographic proofs.",
    tag: "Discovery",
  },
  {
    letter: "I",
    word: "Integrity",
    meaning: "The honesty holding it together",
    code: "07/VAL",
    pillar: "Sovereign Trust",
    details: "Provable invariants, verifiable computation, and uncompromised ethical boundaries.",
    tag: "Protocol",
  },
  {
    letter: "S",
    word: "Security",
    meaning: "Protecting all of it",
    code: "08/SEC",
    pillar: "Defensive Citadel",
    details: "Zero-tolerance perimeter defense, automated exploit mitigation, and hostile vector nullification.",
    tag: "Cyber-Defense",
  },
];

/** The three parts of the wordmark. This is TAIKORIS's own constructed
 *  meaning, not documented etymology — the copy says so plainly. */
export const PARTS = [
  {
    part: "TAI",
    gloss: "great",
    symbol: "大",
    note: "From 大 — scale, preeminence, and the nerve to work at the foundational stratum.",
  },
  {
    part: "KOR",
    gloss: "heart, power",
    symbol: "COR",
    note: "Latin cor, Old Norse kraft. The engine at the center that drives intent into impact.",
  },
  {
    part: "IS",
    gloss: "throne",
    symbol: "ISE",
    note: "An echo of Isis. Where the power sits, takes accountability, and answers for itself.",
  },
];
