// @flow

// https://en.wikipedia.org/wiki/Anhemitonic_scale

import { SEMITONE } from '../constants/Interval/Names';

import isValidScale from '../isValidScale';
import getIntervals from '../getIntervals';
import normalizeScale from '../normalizeScale';

type options = {
  direction?: direction
};

const isHemitonicScale = (scale: Scale, { direction = 1 }: options = {}) => {
  if (!isValidScale(scale, { direction })) return false;

  const normalizedScale = normalizeScale(scale, { direction });
  const intervals = getIntervals(normalizedScale);

  return intervals.filter(i => Math.abs(i) === SEMITONE).length > 0;
};

export default isHemitonicScale;
