// @flow

import getScaleDegree from '../getScaleDegree';

type options = {
  direction?: direction
};

const getLeadingTone = (
  scale: Scale,
  { direction = 1 }: options = {}
): ScientificNote => getScaleDegree(scale, 7, { direction });

export default getLeadingTone;
