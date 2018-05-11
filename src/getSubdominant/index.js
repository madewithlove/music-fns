// @flow

import getScaleDegree from '../getScaleDegree';

type options = {
  direction?: direction
};

const getSubdominant = (
  scale: Scale,
  { direction = 1 }: options = {}
): ScientificNote => getScaleDegree(scale, 4, { direction });

export default getSubdominant;
