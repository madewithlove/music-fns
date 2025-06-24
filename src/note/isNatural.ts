import type { Note, Octave, Root } from "../";
import { hasAccidental } from "./hasAccidental";

type NaturalNote = Root | `${Root}${Octave}`;

/**
 * Checks if a note is a natural note.
 *
 * @param note - The note to check.
 * @returns true if the note is a natural note, false otherwise.
 * @throws {Error} If the note is invalid.
 *
 * @example
 * isNatural("C4") // true
 * isNatural("A#5") // false
 * isNatural("Fb3") // false
 */
export function isNatural(note: Note): note is NaturalNote {
  return !hasAccidental(note);
}
