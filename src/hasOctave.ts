import { getOctave } from "./getOctave";

/**
 * Checks if a note has an octave
 *
 * @param note - The note to check
 * @returns true if the note has an octave, false otherwise
 */
export function hasOctave(note: string) {
  const octave = getOctave(note);
  return octave !== undefined;
}
