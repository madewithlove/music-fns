import noteToObject from '../noteToObject';
import isNote from '../isNote';
import { ScientificNote } from '../types/ScientificNote';

const getOctave = (note: ScientificNote) => {
  if (!isNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  return noteToObject(note).octave;
};

export default getOctave;
