// @flow

import areNotes from '../areNotes';
import getIntervals from '../getIntervals';
import { OCTAVE, ROOT } from '../constants/Interval/Names';

type options = {
  direction: direction
};

const isScale = (scale: Scale, { direction = 1 }: options = {}) => {
  if (!areNotes(scale)) return false;

  try {
    const intervals = getIntervals(scale, { direction });

    const isInUniformDirection =
      intervals.every(interval => interval >= 0) ||
      intervals.every(interval => interval <= 0);

    const hasZeroIntervals = intervals.some(interval => interval === ROOT);

    if (!isInUniformDirection || hasZeroIntervals) return false;

    const intervalsFromRoot = getIntervals(scale, {
      fromRoot: true,
      direction
    });

    return intervalsFromRoot[intervalsFromRoot.length - 1] <= OCTAVE;
  } catch (e) {
    return false;
  }
};

export default isScale;
