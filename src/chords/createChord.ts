import { getIntervals } from "../interval/getIntervals";
import type { Note, Chord, Intervals, Interval } from "../";
import { transpose } from "src/note/transpose";

export function createChord(root: Note, intervals: Intervals): Chord {
  return intervals.reduce((acc, interval: Interval) => {
    return [...acc, transpose(root, interval)];
  }, []);
}
