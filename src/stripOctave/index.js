// @flow

import changeOctave from '../changeOctave';

const stripOctave = (scientificNote: ScientificNote) =>
  changeOctave(scientificNote);

export default stripOctave;
