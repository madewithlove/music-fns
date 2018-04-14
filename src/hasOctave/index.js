// @flow

import getOctave from '../getOctave';

const hasOctave = (scientificNote: ScientificNote) =>
  typeof getOctave(scientificNote) !== 'undefined';

export default hasOctave;
