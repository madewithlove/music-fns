// @flow

import getRoot from '../getRoot';
import getAccidental from '../getAccidental';
import isScientificNote from '../isScientificNote';

const getNote = (note: ScientificNote) => {
  if (!isScientificNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  return `${getRoot(note)}${getAccidental(note) || ''}`;
};

export default getNote;
