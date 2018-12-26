// @flow

// https://en.wikipedia.org/wiki/Diatonic_scale

import isHeptatonic from '../isHeptatonic';
import getIntervals from '../getIntervals';
import normalize from '../normalize';

import isSemitone from '../isSemitone';
import isTone from '../isTone';

type options = {
  direction?: direction
};

const isDiatonic = (scale: Scale, { direction = 1 }: options = {}) => {
  if (!isHeptatonic(scale, { direction })) return false;

  const normalizedScale = normalize(scale, { direction });
  const intervals = getIntervals(normalizedScale);

  if (intervals.filter(isSemitone).length !== 2) return false;
  if (intervals.filter(isTone).length !== 5) return false;

  const [pos1, pos2] = intervals
    .map((interval, position) => (isSemitone(interval) ? position : undefined))
    .filter(position => position !== undefined);

  if (pos2 - pos1 < 2) return false;

  return true;
};

export default isDiatonic;
