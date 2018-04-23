// @flow

import getScaleDegree from '../getScaleDegree';

const getDominant = (scale: Scale): ScientificNote => getScaleDegree(scale, 5);

export default getDominant;
