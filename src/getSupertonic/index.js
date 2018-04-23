// @flow

import getScaleDegree from '../getScaleDegree';

type options = {
  direction?: direction
};

const getSupertonic = (
  scale: Scale,
  { direction = 1 }: options = {}
): ScientificNote => getScaleDegree(scale, 2, { direction });

export default getSupertonic;
