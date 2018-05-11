// @flow

import noteToObject from '../noteToObject';
import isScientificNote from '../isScientificNote';

const getOctave = (note: ScientificNote) => {
  if (!isScientificNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  return noteToObject(note).octave;
};

export default getOctave;
