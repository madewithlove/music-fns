import { toObject } from "./toObject";

/**
 * Retrieves the octave from a note
 *
 * @param note - The note to extract the octave from.
 * @returns The octave from the note, or undefined if no octave is present.
 */
export function getOctave(note: string) {
  const noteObject = toObject(note);
  return noteObject.octave;
}
