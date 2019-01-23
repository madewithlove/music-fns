import isScale from '../isScale';
import getIntervals from '../getIntervals';
import { direction } from '../types/direction';
import { Scale } from '../types/Scale';

type options = {
  direction?: direction
};

const isAscending = (scale: Scale, { direction = 1 }: options = {}) => {
  if (!isScale(scale, { direction })) {
    return false;
  }

  const intervals = getIntervals(scale, { direction });
  return intervals.every(interval => interval < 0);
};

export default isAscending;
