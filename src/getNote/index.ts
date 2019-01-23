import getRoot from '../getRoot';
import getAccidental from '../getAccidental';
import isNote from '../isNote';
import { ScientificNote } from '../types/ScientificNote';

const getNote = (note: ScientificNote) => {
  if (!isNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  return `${getRoot(note)}${getAccidental(note) || ''}`;
};

export default getNote;
