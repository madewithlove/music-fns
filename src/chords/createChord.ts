import { getIntervals } from "../interval/getIntervals";
import type { Note, Chord, Intervals } from "../";

export function createChord(root: Note, intervals: Intervals): Chord {
  return getIntervals([root, ...intervals]);
}
