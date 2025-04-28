import { getAccidental } from "./getAccidental";

/**
 * Checks if a note has an accidental (#, b)
 *
 * @param note - The note to check
 * @throws {Error} If the note is invalid.
 * @returns true if the note has an accidental (#, b), false otherwise
 *
 * @example
 * ```ts
 * hasAccidental("A#"); // true
 * hasAccidental("Eb"); // true
 * hasAccidental("D3"); // false
 * ```
 */
export function hasAccidental(note: string): boolean {
  const accidental = getAccidental(note);
  return accidental !== undefined;
}
