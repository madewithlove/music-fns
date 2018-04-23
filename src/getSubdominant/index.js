// @flow

import getScaleDegree from '../getScaleDegree';

const getSubdominant = (scale: Scale): ScientificNote =>
  getScaleDegree(scale, 4);

export default getSubdominant;
