import { getAccidental } from "./getAccidental";

/**
 * Checks if a note has an accidental (#, b)
 *
 * @param note - The note to check
 * @returns true if the note has an accidental (#, b), false otherwise
 */
export function hasAccidental(note: string): boolean {
  const accidental = getAccidental(note);
  return accidental !== undefined;
}
