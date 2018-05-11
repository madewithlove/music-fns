// @flow

import noteToObject from '../noteToObject';
import isScientificNote from '../isScientificNote';

const getRoot = (note: ScientificNote) => {
  if (!isScientificNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  return noteToObject(note).root;
};

export default getRoot;
