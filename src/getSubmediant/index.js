// @flow

import getScaleDegree from '../getScaleDegree';

const getSubmediant = (scale: Scale): ScientificNote =>
  getScaleDegree(scale, 6);

export default getSubmediant;
