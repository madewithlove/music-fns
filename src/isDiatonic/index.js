// @flow

// https://en.wikipedia.org/wiki/Diatonic_scale

import isHeptatonic from '../isHeptatonic';
import getIntervals from '../getIntervals';
import normalize from '../normalize';

import { SEMITONE, TONE } from '../constants/Interval/Names';

type options = {
  direction?: direction
};

const isDiatonic = (scale: Scale, { direction = 1 }: options = {}) => {
  if (!isHeptatonic(scale, { direction })) return false;

  const normalizedScale = normalize(scale, { direction });
  const intervals = getIntervals(normalizedScale);

  const semitones = intervals.filter(i => i === SEMITONE).length;
  const tones = intervals.filter(i => i === TONE).length;

  return semitones === 2 && tones === 5;
};

export default isDiatonic;
