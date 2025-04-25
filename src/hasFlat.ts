import { getAccidental } from "./getAccidental";

/**
 * Checks if a note has a flat accidental
 *
 * @param note - The note to check
 * @returns true if the note has a flat accidental, false otherwise
 */
export function hasFlat(note: string) {
  const accidental = getAccidental(note);
  return accidental === "b";
}
