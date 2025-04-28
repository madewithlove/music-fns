import { Root } from "../";

/**
 * Checks if a given value is a valid root note.
 *
 * @param root - The value to check.
 * @returns true if the value is a valid root note, false otherwise.
 *
 * @example
 * isRoot("C") // returns true
 * isRoot("H") // returns false
 */
export function isRoot(root: unknown): root is Root {
  return typeof root === "string" && root.length === 1 && !!root.match(/[A-G]/);
}
