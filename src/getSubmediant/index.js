// @flow

import getScaleDegree from '../getScaleDegree';

type options = {
  direction?: direction
};

const getSubmediant = (
  scale: Scale,
  { direction = 1 }: options = {}
): ScientificNote => getScaleDegree(scale, 6, { direction });

export default getSubmediant;
