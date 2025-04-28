import { Octave } from "../";

/**
 * Checks if a given value is a valid octave.
 *
 * @param octave - The value to check.
 * @returns true if the value is a valid octave, false otherwise.
 *
 * @example
 */
export function isOctave(octave: unknown): octave is Octave {
  return typeof octave === "number";
}
