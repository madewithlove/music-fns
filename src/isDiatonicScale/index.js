// @flow

// https://en.wikipedia.org/wiki/Diatonic_scale

import isHeptatonicScale from '../isHeptatonicScale';
import getIntervals from '../getIntervals';
import normalizeScale from '../normalizeScale';

import { SEMITONE, TONE } from '../constants/Interval/Names';

type options = {
  direction?: direction
};

const isDiatonicScale = (scale: Scale, { direction = 1 }: options = {}) => {
  if (!isHeptatonicScale(scale, { direction })) return false;

  const normalizedScale = normalizeScale(scale, 7, { direction });
  const intervals = getIntervals(normalizedScale);

  const semitones = intervals.filter(i => i === SEMITONE).length;
  const tones = intervals.filter(i => i === TONE).length;

  return semitones === 2 && tones === 5;
};

export default isDiatonicScale;
