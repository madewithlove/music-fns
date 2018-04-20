// @flow

import isValidNoteArray from '../isValidNoteArray';
import getIntervals from '../getIntervals';
import { OCTAVE, ROOT } from '../constants/Interval/Names';

type options = {
  direction: direction
};

const isValidScale = (scale: Scale, { direction = 1 }: options = {}) => {
  if (!isValidNoteArray(scale)) return false;

  const intervals = getIntervals(scale, { direction });

  const isInUniformDirection =
    intervals.every(interval => interval >= 0) ||
    intervals.every(interval => interval <= 0);

  const hasZeroIntervals = intervals.some(interval => interval === ROOT);

  if (!isInUniformDirection || hasZeroIntervals) return false;

  const intervalsFromRoot = getIntervals(scale, { fromRoot: true, direction });

  return intervalsFromRoot[intervalsFromRoot.length - 1] <= OCTAVE;
};

export default isValidScale;
