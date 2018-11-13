// @flow

import isDiatonicScale from '../isDiatonicScale';
import normalizeScale from '../normalizeScale';
import getIntervals from '../getIntervals';
import IONIAN from '../constants/Mode/IONIAN';

type options = {
  direction?: direction
};

const isMajorScale = (scale: Scale, { direction = 1 }: options = {}) => {
  if (![-1, 1].includes(direction)) {
    throw new Error('Direction should be 1 (up) or -1 (down)');
  }

  if (!isDiatonicScale(scale)) return false;

  if (direction === -1) scale.reverse();

  const normalizedScale = normalizeScale(scale);
  const intervals = getIntervals(normalizedScale);

  return IONIAN.join(',') === intervals.join(',');
};

export default isMajorScale;
