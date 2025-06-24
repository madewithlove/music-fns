import { Frequency, Interval, Note } from "..";
import { getIntervals } from "../interval/getIntervals";
import { hasOctave } from "../note/hasOctave";

import { round } from "../utils/round";
import { unwrap } from "../utils/unwrap";

/**
 * Converts a note to its frequency in Hz
 *
 * @param note - The note to convert
 * @returns The frequency in Hz (rounded to 2 decimals)
 * @throws {Error} If the note is invalid or does not have an octave
 *
 * @example
 * ```ts
 * toFrequency("A4"); // 440
 * toFrequency("C#5"); // 554.37
 * ```
 */
export function toFrequency(note: Note): Frequency {
  if (!hasOctave(note)) {
    throw new Error("Note must have an octave");
  }
  const intervalFromA4 = unwrap<Interval>(getIntervals(["A4", note]));
  return round(Math.pow(2, intervalFromA4 / 12) * 440, 2);
}
