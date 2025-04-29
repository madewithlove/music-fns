import { getIntervals } from "../interval/getIntervals";
import { hasOctave } from "../note/hasOctave";
import type { Interval, MidiNote, Note } from "../";
import { unwrap } from "../utils/unwrap";

/**
 * Converts a note to a MIDI note number
 *
 * @param note - The note to convert
 * @returns The MIDI note number
 * @throws {Error} If the note is invalid or does not have an octave
 *
 * @example
 * ```ts
 * toMidi("A4"); // 69
 * toMidi("C#5"); // 70
 * ```
 */
export function toMidi(note: Note): MidiNote {
  if (!hasOctave(note)) {
    throw new Error("Note must have an octave");
  }

  const intervalFromC4 = unwrap<Interval>(getIntervals(["C4", note]));
  return intervalFromC4 + 60;
}
