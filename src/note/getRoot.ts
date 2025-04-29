import type { Root } from "../";
import { toObject } from "./toObject";

/**
 * Retrieves the root (A, B, C, D, E, F, G) from a note
 *
 * @param note - The note to extract the root from
 * @throws {Error} If the note is invalid.
 * @returns The root (A, B, C, D, E, F, G) from the note
 *
 * @example
 * ```ts
 * getRoot("C4"); // "C"
 * getRoot("F#5"); // "F"
 * getRoot("A"); // "A"
 * ```
 */
export function getRoot(note: string): Root {
  const noteObject = toObject(note);
  return noteObject.root;
}
