// @flow

import getScaleDegree from '../getScaleDegree';

const getSupertonic = (scale: Scale): ScientificNote =>
  getScaleDegree(scale, 2);

export default getSupertonic;
