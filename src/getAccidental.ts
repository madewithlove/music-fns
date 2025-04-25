import { toObject } from "./toObject";

/**
 * Retrieves the accidental from a note
 *
 * @param note - The note to extract the accidental from.
 * @returns The accidental character from the note, or undefined if no accidental is present.
 */
export function getAccidental(note: string) {
  const noteObject = toObject(note);
  return noteObject.accidental;
}
