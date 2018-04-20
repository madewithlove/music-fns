// @flow

// https://en.wikipedia.org/wiki/Pentatonic_scale

import isScaleWithIntervalAmount from '../isScaleWithIntervalAmount';

type options = {
  direction?: direction
};

const isPentatonicScale = (scale: Scale, { direction = 1 }: options = {}) =>
  isScaleWithIntervalAmount(scale, 5, { direction });

export default isPentatonicScale;
