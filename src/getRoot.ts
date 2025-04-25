import { toObject } from "./toObject";

/**
 * Retrieves the root (A, B, C, D, E, F, G) from a note
 *
 * @param note - The note to extract the root from
 * @returns The root (A, B, C, D, E, F, G) from the note
 */
export function getRoot(note: string) {
  const noteObject = toObject(note);
  return noteObject.root;
}
