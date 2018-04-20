// @flow

// https://en.wikipedia.org/wiki/Heptatonic_scale

import isScaleWithIntervalAmount from '../isScaleWithIntervalAmount';

type options = {
  direction?: direction
};

const isHeptatonicScale = (scale: Scale, { direction = 1 }: options = {}) =>
  isScaleWithIntervalAmount(scale, 7, { direction });

export default isHeptatonicScale;
