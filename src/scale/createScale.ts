import { transposeNotes } from "../utils/transposeNotes";
import type { Note, Intervals, Scale } from "../";

export function createScale(root: Note, intervals: Intervals): Scale {
  return transposeNotes(root, intervals, { fromRoot: false });
}
