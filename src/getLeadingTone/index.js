// @flow

import getScaleDegree from '../getScaleDegree';

const getLeadingTone = (scale: Scale): ScientificNote =>
  getScaleDegree(scale, 7);

export default getLeadingTone;
