// @flow

import getScaleDegree from '../getScaleDegree';

const getMediant = (scale: Scale): ScientificNote => getScaleDegree(scale, 3);

export default getMediant;
