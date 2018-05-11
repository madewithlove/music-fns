// @flow

import getScaleDegree from '../getScaleDegree';

type options = {
  direction?: direction
};

const getMediant = (
  scale: Scale,
  { direction = 1 }: options = {}
): ScientificNote => getScaleDegree(scale, 3, { direction });

export default getMediant;
