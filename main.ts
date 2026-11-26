// Fortune Cookie Funnies for Engineers — make.fun bounty entry.
// The grader runs this program in a sandbox (Node 22, no network).
// It writes the fortune to /output/entry.txt (the file the gate checks:
// UTF-8 text, 1 to 120 characters, not only whitespace) and prints the
// same line plus its character count to stdout.
//
// DRAFT v1 — known flaws, kept on record before revising:
//   "Your code will compile on the first try tomorrow, but only because
//   nobody ever ran the tests."
//   - The setup spends 45 characters on "will compile on the first try
//     tomorrow" before any joke arrives; the fortune-cookie voice is
//     buried under throat-clearing.
//   - The punchline ("nobody ever ran the tests") is a familiar trope
//     every engineer has seen on a mug; it fails the freshness test.
//   - "tomorrow" deflates the fortune: a cookie predicts your fate,
//     it does not schedule it for later.
//   - The second clause reads like an explanation of the first, not a
//     twist, so the funniest word lands in the middle, not at the end.
// Revision v2 (final): opens on the fate itself, uses a fresh image
// (a decommissioned server that still pages you), and ends on the
// punchline — the server misses you. 84 characters.
// Revision v3: the v2 line fired TWO punchlines — the stock "paged at
// 3 a.m." on-call trope (seen on a hundred mugs) and the fresh twist
// of the server that misses you. The first laugh competed with and
// diluted the second, and the joke never depended on the hour. Cut
// "at 3 a.m." so the line has exactly one punchline, every word earns
// its place, and the twist lands last. 74 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will be paged by a server you decommissioned last year. It misses you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
console.log(FORTUNE);
console.log(`(${FORTUNE.length} characters)`);
