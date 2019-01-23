import { Intervals } from "../types/Intervals";

const areIntervals = (intervals: Intervals) =>
  Array.isArray(intervals) &&
  intervals.length > 1 &&
  intervals.every(i => typeof i === 'number') &&
  (intervals.every(i => i >= 0) || intervals.every(i => i <= 0));

export default areIntervals;
