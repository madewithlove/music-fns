import { getAccidental } from "./getAccidental";
import type { SharpNote as SharpNoteWithoutOctave, Octave, Sharp } from "../";

type SharpNote = SharpNoteWithoutOctave | `${SharpNoteWithoutOctave}${Octave}`;

/**
 * Checks if a note is sharp (containing a # accidental)
 *
 * @param note - The note to check
 * @throws {Error} If the note is invalid.
 * @returns true if the note is a sharp, false otherwise
 *
 * @example
 * ```ts
 * hasSharp("A#"); // true
 * hasSharp("Eb"); // false
 * hasSharp("C5"); // false
 * ```
 */
export function isSharp(note: string): note is SharpNote {
  const accidental = getAccidental(note);
  return accidental === ("#" as Sharp);
}
