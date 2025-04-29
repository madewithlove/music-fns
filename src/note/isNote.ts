import type { Note } from "../";

const noteRegex = /^(?!B[#]|E[#]|C[b]|F[b])[A-G][#b]?(?:\d+)?$/;

/**
 * Checks if a value represents a valid musical note.
 *
 * @param note - The value to check (e.g., "C4", "F#3", "Bb2")
 * @returns true if the value represents a valid note, false otherwise
 *
 * @example
 * isNote("C4") // returns true
 * isNote("F#3") // returns true
 * isNote("Bb2") // returns true
 * isNote("H4") // returns false
 * isNote("B#4") // returns false
 */
export function isNote(note: unknown): note is Note {
  return typeof note === "string" && noteRegex.test(note);
}
