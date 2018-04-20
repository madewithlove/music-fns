// @flow

import getOctave from '../getOctave';
import isValidNote from '../isValidNote';

const hasOctave = (note: ScientificNote) => {
  if (!isValidNote(note)) {
    return false;
  }

  return typeof getOctave(note) !== 'undefined';
};

export default hasOctave;
