import getIntervals from '../getIntervals';
import isNote from '../isNote';
import hasOctave from '../hasOctave';
import { ScientificNote } from '../types/ScientificNote';

type options = {
  standard?: ScientificNote
};

// standard: which note is 60? TIL: this is vendor specific

export default (note: ScientificNote, { standard = 'C4' }: options = {}) => {
  if (!isNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  if (!hasOctave(note)) {
    throw new Error(`"${note}" does not contain octave information.`);
  }

  if (!isNote(standard)) {
    throw new Error(`"${standard}" is not a valid note`);
  }

  const interval = getIntervals([standard, note])[0];
  return 60 + interval;
};
