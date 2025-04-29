import type { FlatNote as FlatNoteWithoutOctave, Octave } from "../";
import { getAccidental } from "./getAccidental";

type FlatNote = FlatNoteWithoutOctave | `${FlatNoteWithoutOctave}${Octave}`;

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
export function isFlat(note: string): note is FlatNote {
  const accidental = getAccidental(note);
  return accidental === "b";
}
