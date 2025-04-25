import { getAccidental } from "./getAccidental";

/**
 * Checks if a note has a sharp accidental
 *
 * @param note - The note to check
 * @returns true if the note has a sharp accidental, false otherwise
 */
export function hasSharp(note: string) {
  const accidental = getAccidental(note);
  return accidental === "#";
}
