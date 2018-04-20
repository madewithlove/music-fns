// @flow

import noteToObject from '../noteToObject';
import isValidNote from '../isValidNote';

const getRoot = (note: ScientificNote) => {
  if (!isValidNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  return noteToObject(note).root;
};

export default getRoot;
