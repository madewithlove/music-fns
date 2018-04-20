// @flow

import noteToObject from '../noteToObject';
import isValidNote from '../isValidNote';

const getOctave = (note: ScientificNote) => {
  if (!isValidNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  return noteToObject(note).octave;
};

export default getOctave;
