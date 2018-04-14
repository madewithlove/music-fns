// @flow

import noteToObject from '../noteToObject';

const getOctave = (scientificNote: ScientificNote) =>
  noteToObject(scientificNote).octave;

export default getOctave;
