// @flow

// https://en.wikipedia.org/wiki/Hexatonic_scale

import hasIntervalAmount from '../hasIntervalAmount';

type options = {
  direction?: direction
};

const isHexatonic = (scale: Scale, { direction = 1 }: options = {}) =>
  hasIntervalAmount(scale, 6, { direction });

export default isHexatonic;
