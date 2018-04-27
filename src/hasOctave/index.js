// @flow

import getOctave from '../getOctave';
import isScientificNote from '../isScientificNote';

const hasOctave = (note: ScientificNote) => {
  if (!isScientificNote(note)) {
    return false;
  }

  return typeof getOctave(note) !== 'undefined';
};

export default hasOctave;
