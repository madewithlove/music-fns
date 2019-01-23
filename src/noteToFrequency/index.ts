import getIntervals from '../getIntervals';
import isNote from '../isNote';
import hasOctave from '../hasOctave';
import { ScientificNote } from '../types/ScientificNote';

type options = {
  standard?: number
};

export default (note: ScientificNote, { standard = 440 }: options = {}) => {
  if (!isNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  if (!hasOctave(note)) {
    throw new Error(`"${note}" does not contain octave information.`);
  }

  if (typeof standard !== 'number') {
    throw new Error(`"${standard}" is not a valid tuning standard.`);
  }

  const interval = getIntervals(['A4', note])[0];
  const factor = 2 ** (1 / 12);

  return standard * factor ** interval;
};
