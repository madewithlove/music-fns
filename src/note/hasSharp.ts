import { getAccidental } from "./getAccidental";

/**
 * Checks if a note has a sharp (#) accidental
 *
 * @param note - The note to check
 * @throws {Error} If the note is invalid.
 * @returns true if the note has a sharp (#) accidental, false otherwise
 *
 * @example
 * ```ts
 * hasSharp("A#"); // true
 * hasSharp("Eb"); // false
 * hasSharp("C5"); // false
 * ```
 */
export function hasSharp(note: string) {
  const accidental = getAccidental(note);
  return accidental === "#";
}
