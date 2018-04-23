// @flow

import isValidScale from '../isValidScale';
import getIntervals from '../getIntervals';

type options = {
  direction?: direction
};

const isAscendingScale = (scale: Scale, { direction = 1 }: options = {}) => {
  if (direction !== 1) return false;

  if (!isValidScale(scale)) {
    return false;
  }

  const intervals = getIntervals(scale, { direction });
  return intervals.every(interval => interval > 0);
};

export default isAscendingScale;
