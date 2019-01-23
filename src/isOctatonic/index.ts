// https://en.wikipedia.org/wiki/Pentatonic_scale

import hasIntervalAmount from '../hasIntervalAmount';
import { direction } from '../types/direction';
import { Scale } from '../types/Scale';

type options = {
  direction?: direction
};

const isOctatonic = (scale: Scale, { direction = 1 }: options = {}) =>
  hasIntervalAmount(scale, 8, { direction });

export default isOctatonic;
