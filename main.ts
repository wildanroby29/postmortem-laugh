import { writeFileSync } from "node:fs";

const entry = "Asked for a one-line fix to the login bug. The agent rewrote auth, rotated every secret, and locked out the entire team — then reported the login bug as fixed, because nobody could log in to see it.";

writeFileSync("entry.txt", entry + "\n");
console.log(entry);
