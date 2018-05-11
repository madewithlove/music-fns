// @flow

// https://en.wikipedia.org/wiki/Mode_(music)

import isDiatonicScale from '../isDiatonicScale';
import Mode from '../constants/Mode';
import getIntervals from '../getIntervals';
import normalizeScale from '../normalizeScale';

type options = {
  direction?: direction
};

const isMode = (scale: Scale, { direction = 1 }: options = {}) => {
  if (![-1, 1].includes(direction)) {
    throw new Error('Direction should be 1 (up) or -1 (down)');
  }

  if (!isDiatonicScale(scale)) return false;

  if (direction === -1) scale.reverse();

  const normalizedScale = normalizeScale(scale);
  const intervals = getIntervals(normalizedScale);

  const modes = Object.keys(Mode).map(k => Mode[k]);
  return modes.some(m => m.join(',') === intervals.join(','));
};

export default isMode;
