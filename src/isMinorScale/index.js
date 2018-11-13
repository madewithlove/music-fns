// @flow

import isDiatonicScale from '../isDiatonicScale';
import normalizeScale from '../normalizeScale';
import getIntervals from '../getIntervals';
import AEOLIAN from '../constants/Mode/AEOLIAN';

type options = {
  direction?: direction
};

const isMinorScale = (scale: Scale, { direction = 1 }: options = {}) => {
  if (![-1, 1].includes(direction)) {
    throw new Error('Direction should be 1 (up) or -1 (down)');
  }

  if (!isDiatonicScale(scale)) return false;

  if (direction === -1) scale.reverse();

  const normalizedScale = normalizeScale(scale);
  const intervals = getIntervals(normalizedScale);

  return AEOLIAN.join(',') === intervals.join(',');
};

export default isMinorScale;
