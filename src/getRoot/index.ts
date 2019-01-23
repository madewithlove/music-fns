import noteToObject from '../noteToObject';
import isNote from '../isNote';
import { ScientificNote } from '../types/ScientificNote';

const getRoot = (note: ScientificNote) => {
  if (!isNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  return noteToObject(note).root;
};

export default getRoot;
