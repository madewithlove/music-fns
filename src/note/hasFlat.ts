import { getAccidental } from "./getAccidental";

/**
 * Checks if a note has a flat (b) accidental
 *
 * @param note - The note to check
 * @throws {Error} If the note is invalid.
 * @returns true if the note has a flat (b) accidental, false otherwise
 *
 * @example
 * ```ts
 * hasFlat("Ab"); // true
 * hasFlat("D#"); // false
 * hasFlat("C5"); // false
 * ```
 */
export function hasFlat(note: string) {
  const accidental = getAccidental(note);
  return accidental === "b";
}
