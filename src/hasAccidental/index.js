// @flow

import getAccidental from '../getAccidental';

const hasAccidental = (scientificNote: ScientificNote) =>
  typeof getAccidental(scientificNote) !== 'undefined';

export default hasAccidental;
