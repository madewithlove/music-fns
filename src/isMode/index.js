// @flow

// https://en.wikipedia.org/wiki/Mode_(music)

import isDiatonicScale from '../isDiatonicScale';
import Mode from '../constants/Mode';

const isMode = (scale: Array<number>) => {
  if (!isDiatonicScale(scale)) return false;

  const modes = Object.keys(Mode).map(k => Mode[k]);
  return modes.some(m => m.join(',') === scale.join(','));
};

export default isMode;
