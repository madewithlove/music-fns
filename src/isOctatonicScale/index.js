// @flow

// https://en.wikipedia.org/wiki/Pentatonic_scale

import isScaleWithIntervalAmount from '../isScaleWithIntervalAmount';

type options = {
  direction?: direction
};

const isOctatonicScale = (scale: Scale, { direction = 1 }: options = {}) =>
  isScaleWithIntervalAmount(scale, 8, { direction });

export default isOctatonicScale;
