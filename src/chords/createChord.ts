import { transposeNotes } from "../utils/transposeNotes";
import type { Note, Chord, Intervals } from "../";

export function createChord(root: Note, intervals: Intervals): Chord {
  return transposeNotes(root, intervals, { fromRoot: true });
}
