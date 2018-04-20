// @flow

import getRoot from '../getRoot';
import getAccidental from '../getAccidental';
import isValidNote from '../isValidNote';

const getNote = (note: ScientificNote) => {
  if (!isValidNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  return `${getRoot(note)}${getAccidental(note) || ''}`;
};

export default getNote;
