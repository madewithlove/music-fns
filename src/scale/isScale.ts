import { Note, Scale } from "../";
import { getIntervals } from "../interval/getIntervals";
const Octave = 12;

export function isScale(notes: Note[]): notes is Scale {
  const intervals = getIntervals(notes, { fromRoot: true });

  const lastInterval = intervals[intervals.length - 1];
  if (lastInterval > Octave) return false;

  return intervals.every((currentInterval, index) => {
    const hasPrevious = index > 0;
    const prevInterval = hasPrevious ? intervals[index - 1] : 0;
    return currentInterval > prevInterval;
  });
}
