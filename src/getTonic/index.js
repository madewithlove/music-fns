// @flow

import getScaleDegree from '../getScaleDegree';

type options = {
  direction?: direction
};

const getTonic = (
  scale: Scale,
  { direction = 1 }: options = {}
): ScientificNote => getScaleDegree(scale, 1, { direction });

export default getTonic;
