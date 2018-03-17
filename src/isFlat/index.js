// @flow

import noteToObject from '../noteToObject';

const isFlat = (scientificNote: ScientificNote) => {
  const { accidental = '' } = noteToObject(scientificNote);
  return accidental === 'b' || accidental === '♭';
};

export default isFlat;
