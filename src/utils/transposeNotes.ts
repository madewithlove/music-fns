import { transpose } from "../note/transpose";
import type { Interval, Intervals, Note } from "../";

export function transposeNotes(
  root: Note,
  intervals: Intervals,
  { fromRoot = false }: { fromRoot?: boolean } = {},
) {
  return intervals.reduce<Note[]>(
    (acc, interval: Interval) => {
      const prevNote = fromRoot ? root : acc[acc.length - 1];
      return [...acc, transpose(prevNote, interval) as Note];
    },
    [root],
  );
}
