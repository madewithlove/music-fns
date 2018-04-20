// @flow

// https://en.wikipedia.org/wiki/Hexatonic_scale

import isScaleWithIntervalAmount from '../isScaleWithIntervalAmount';

type options = {
  direction?: direction
};

const isHexatonicScale = (scale: Scale, { direction = 1 }: options = {}) =>
  isScaleWithIntervalAmount(scale, 6, { direction });

export default isHexatonicScale;
