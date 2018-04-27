// @flow

// https://en.wikipedia.org/wiki/Anhemitonic_scale

import isScale from '../isScale';
import getIntervals from '../getIntervals';

import { SEMITONE } from '../constants/Interval/Names';

type options = {
  direction?: direction
};

const isAnhemitonicscale = (scale: Scale, { direction = 1 }: options = {}) => {
  if (!isScale(scale, { direction })) return false;

  const intervals = getIntervals(scale, { direction });
  return intervals.filter(i => Math.abs(i) === SEMITONE).length === 0;
};

export default isAnhemitonicscale;
