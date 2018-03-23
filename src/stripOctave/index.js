// @flow

import noteToObject from '../noteToObject';

const stripOctave = (scientificNote: ScientificNote) => {
  const { note = '', accidental = '' } = noteToObject(scientificNote);
  return `${note}${accidental}`;
};

export default stripOctave;
