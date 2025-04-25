import { toObject } from "./toObject";

/**
 * Retrieves the accidental from a note
 *
 * @param note - The note to extract the accidental (#, b) from.
 * @returns The accidental character (#, b) from the note, or undefined if no accidental is present.
 */
export function getAccidental(note: string) {
  const noteObject = toObject(note);
  return noteObject.accidental;
}
