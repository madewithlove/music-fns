// @flow

// https://en.wikipedia.org/wiki/Anhemitonic_scale

import { SEMITONE } from '../constants/Interval/Names';

import isValidScale from '../isValidScale';
import getIntervals from '../getIntervals';

type options = {
  direction?: direction
};

const isHemitonicScale = (scale: Scale, { direction = 1 }: options = {}) => {
  if (!isValidScale(scale, { direction })) return false;

  const intervals = getIntervals(scale, { direction });
  return intervals.filter(i => Math.abs(i) === SEMITONE).length > 0;
};

export default isHemitonicScale;
