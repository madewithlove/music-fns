import { Accidental } from "../";

/**
 * Checks if a given value is a valid accidental.
 *
 * @param accidental - The value to check.
 * @returns true if the value is a valid accidental, false otherwise.
 *
 * @example
 * isAccidental("#") // returns true
 * isAccidental("b") // returns true
 * isAccidental("x") // returns false
 */
export function isAccidental(accidental: unknown): accidental is Accidental {
  return (
    typeof accidental === "string" &&
    accidental.length === 1 &&
    ["#", "b"].includes(accidental)
  );
}
