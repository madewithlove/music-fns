// @flow

// https://en.wikipedia.org/wiki/Heptatonic_scale

import hasIntervalAmount from '../hasIntervalAmount';

type options = {
  direction?: direction
};

const isHeptatonic = (scale: Scale, { direction = 1 }: options = {}) =>
  hasIntervalAmount(scale, 7, { direction });

export default isHeptatonic;
