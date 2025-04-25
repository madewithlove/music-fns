/**
 * Checks if a string represents a valid musical note.
 *
 * @param note - The string to check (e.g., "C4", "F#3", "Bb2")
 * @returns true if the string represents a valid note, false otherwise
 *
 * @example
 * isNote("C4") // returns true
 * isNote("F#3") // returns true
 * isNote("Bb2") // returns true
 * isNote("H4") // returns false
 * isNote("B#4") // returns false
 */

const noteRegex = /^(?!B[#]|E[#]|C[b]|F[b])[A-G][#b]?\d+$/;

export function isNote(note: string): boolean {
  return noteRegex.test(note);
}
