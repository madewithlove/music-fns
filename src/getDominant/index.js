// @flow

import getScaleDegree from '../getScaleDegree';

type options = {
  direction?: direction
};

const getDominant = (
  scale: Scale,
  { direction = 1 }: options = {}
): ScientificNote => getScaleDegree(scale, 5, { direction });

export default getDominant;
