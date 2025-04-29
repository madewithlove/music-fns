import { getOctave } from "./getOctave";

/**
 * Checks if a note has an octave (number)
 *
 * @param note - The note to check
 * @throws {Error} If the note is invalid.
 * @returns true if the note has an octave (number), false otherwise
 *
 * @example
 * ```ts
 * hasOctave("C4"); // true
 * hasOctave("C"); // false
 * ```
 */
export function hasOctave(note: string): boolean {
  const octave = getOctave(note);
  return octave !== undefined;
}
