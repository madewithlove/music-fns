// @flow

// https://en.wikipedia.org/wiki/Diatonic_scale

import { S, T } from '../constants/Interval/Short';
import isHeptatonicScale from '../isHeptatonicScale';

const isDiatonicScale = (scale: Array<number>) => {
  if (!isHeptatonicScale(scale)) return false;

  const semitones = scale.filter(i => i === S).length;
  const tones = scale.filter(i => i === T).length;

  return semitones === 2 && tones === 5;
};

export default isDiatonicScale;
