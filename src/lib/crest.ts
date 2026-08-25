export type CrestLetter = {
  letter: string;
  word: string;
  meaning: string;
};

/** The eight elements of the name. One entry per interactive letter. */
export const CREST: CrestLetter[] = [
  { letter: "T", word: "Technology", meaning: "Every tool, every system" },
  { letter: "A", word: "AI", meaning: "The intelligence processing it all" },
  { letter: "I", word: "Insight", meaning: "Seeing beneath the surface" },
  { letter: "K", word: "Knowledge", meaning: "Everything known, mapped" },
  { letter: "O", word: "Oversight", meaning: "Watching every domain" },
  { letter: "R", word: "Research", meaning: "Always expanding what's known" },
  { letter: "I", word: "Integrity", meaning: "The honesty holding it together" },
  { letter: "S", word: "Security", meaning: "Protecting all of it" },
];

/** The three parts of the wordmark. This is TAIKORIS's own constructed
 *  meaning, not documented etymology — the copy says so plainly. */
export const PARTS = [
  {
    part: "TAI",
    gloss: "great",
    note: "From 大 — the root that gives us \"tycoon.\" Scale, and the nerve to work at it.",
  },
  {
    part: "KOR",
    gloss: "heart, power",
    note: "Latin cor, Old Norse kraft. The force in the middle that drives the rest.",
  },
  {
    part: "IS",
    gloss: "throne",
    note: "An echo of Isis. Where the power sits, and answers for itself.",
  },
];
