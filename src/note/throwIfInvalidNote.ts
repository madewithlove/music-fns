import { isNote } from "./isNote";

/**
 * Throws an error if the note is invalid.
 * @param note - The note to check.
 * @throws {Error} If the note is invalid.
 * @returns The note if it is valid.
 *
 * @example
 * ```ts
 * throwIfInvalidNote("C4"); // "C4"
 * throwIfInvalidNote("Q"); // throws Error
 * ```
 */
export function throwIfInvalidNote(note: string) {
  if (!isNote(note)) {
    throw new Error(`Invalid note: ${note}`);
  }
  return note;
}
