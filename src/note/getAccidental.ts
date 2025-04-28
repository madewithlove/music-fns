import { toObject } from "./toObject";

/**
 * Retrieves the accidental character (#, b) from a note
 *
 * @param note - The note to extract the accidental character (#, b) from.
 * @throws {Error} If the note is invalid.
 * @returns The accidental character (#, b) from the note, or undefined if no accidental is present
 *
 * @example
 * ```ts
 * getAccidental("C#"); // "#"
 * getAccidental("Ab"); // "b"
 * getAccidental("C"); // undefined
 * ```
 */
export function getAccidental(note: string) {
  const noteObject = toObject(note);
  return noteObject.accidental;
}
