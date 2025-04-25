import { toObject } from "./toObject";

/**
 * Retrieves the octave (number) from a note
 *
 * @param note - The note to extract the octave (number) from.
 * @throws {Error} If the note is invalid.
 * @returns The octave (number) from the note, or undefined if no octave is present
 *
 * @example
 * ```ts
 * getOctave("F4"); // 4
 * getOctave("C#2"); // 2
 * getOctave("C"); // undefined
 * ```
 */
export function getOctave(note: string) {
  const noteObject = toObject(note);
  return noteObject.octave;
}
