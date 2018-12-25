// @flow

import getNoteOnDegree from '../getNoteOnDegree';
import isDiatonic from '../isDiatonic';

type options = {
  direction?: direction
};

const getSupertonic = (
  diatonicScale: Scale,
  { direction = 1 }: options = {}
): ScientificNote => {
  if (!isDiatonic(diatonicScale, { direction })) {
    throw new Error(
      `${JSON.stringify(diatonicScale)} is not a diatonic scale.`
    );
  }
  return getNoteOnDegree(diatonicScale, 2, { direction });
};

export default getSupertonic;
