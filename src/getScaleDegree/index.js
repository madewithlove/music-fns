// @flow

import isDiatonicScale from '../isDiatonicScale';
import normalizeScale from '../normalizeScale';

type options = {
  direction?: direction
};

const getDegree = (
  scale: Scale,
  degree: number,
  { direction = 1 }: options = {}
): ScientificNote => {
  if (degree < 1 || degree > 8) {
    throw new Error('Degree must be between 1 - 8.');
  }
  if (!isDiatonicScale(scale)) {
    throw new Error(
      `"${JSON.stringify(scale)}" is not a valid diatonic scale.`
    );
  }
  const normalizedScale = normalizeScale(scale, { direction });
  return normalizedScale[degree - 1];
};

export default getDegree;
