// @flow

import changeOctave from '../changeOctave';

const getNote = (scientificNote: ScientificNote) =>
  changeOctave(scientificNote);

export default getNote;
