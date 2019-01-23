// https://en.wikipedia.org/wiki/Mode_(music)

import isDiatonic from '../isDiatonic';
import Mode, { IMode } from '../constants/Mode';
import getIntervals from '../getIntervals';
import normalize from '../normalize';
import { direction } from '../types/direction';
import { Scale } from '../types/Scale';

type options = {
  direction?: direction
};

const isMode = (scale: Scale, { direction = 1 }: options = {}) => {
  if (![-1, 1].includes(direction)) {
    throw new Error('Direction should be 1 (up) or -1 (down)');
  }

  if (!isDiatonic(scale)) return false;

  if (direction === -1) scale.reverse();

  const normalizedScale = normalize(scale);
  const intervals = getIntervals(normalizedScale);

  const modes = Object.keys(Mode).map(k => Mode[k as keyof IMode]);
  return modes.some(m => m.join(',') === intervals.join(','));
};

export default isMode;
