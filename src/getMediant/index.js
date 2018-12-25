// @flow

import getNoteOnDegree from '../getNoteOnDegree';
import isDiatonic from '../isDiatonic';

type options = {
  direction?: direction
};

const getMediant = (
  diatonicScale: Scale,
  { direction = 1 }: options = {}
): ScientificNote => {
  if (!isDiatonic(diatonicScale, { direction })) {
    throw new Error(
      `${JSON.stringify(diatonicScale)} is not a diatonic scale.`
    );
  }
  return getNoteOnDegree(diatonicScale, 3, { direction });
};

export default getMediant;
