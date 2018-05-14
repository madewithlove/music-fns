// @flow

import getIntervals from '../getIntervals';
import isScientificNote from '../isScientificNote';
import hasOctave from '../hasOctave';

type options = {
  standard: ScientificNote
};

// standard: which note is 60? TIL: this is vendor specific

export default (note: ScientificNote, { standard = 'C3' }: options = {}) => {
  if (!isScientificNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  if (!hasOctave(note)) {
    throw new Error(`"${note}" does not contain octave information.`);
  }

  if (!isScientificNote(standard)) {
    throw new Error(`"${standard}" is not a valid note`);
  }

  const interval = getIntervals([standard, note])[0];
  return 60 + interval;
};
