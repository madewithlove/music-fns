// @flow

import getScaleDegree from '../getScaleDegree';

const getTonic = (scale: Scale): ScientificNote => getScaleDegree(scale, 1);

export default getTonic;
