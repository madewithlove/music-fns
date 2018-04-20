// @flow

import getOctave from '../getOctave';
import getChromaticCPosition from '../getChromaticCPosition';
import isValidNoteArray from '../isValidNoteArray';
import { OCTAVE } from '../constants/Interval';

type options = {
  fromRoot?: boolean,
  direction?: direction
};

const getInterval = (
  scientificNote: ScientificNote,
  scientificNote2: ScientificNote,
  { direction = 1 }: options = {}
) => {
  const note1Position = getChromaticCPosition(scientificNote);
  const note2Position = getChromaticCPosition(scientificNote2);

  let difference = note2Position - note1Position;

  const octave1 = getOctave(scientificNote);
  const octave2 = getOctave(scientificNote2);

  if (typeof octave1 === 'undefined' && typeof octave2 === 'undefined') {
    if (difference < 0 && direction === 1)
      difference = OCTAVE - Math.abs(difference);
    if (direction === -1 && difference > 0) difference -= OCTAVE;
    return difference;
  }

  return difference + (octave2 - octave1) * OCTAVE;
};

const getIntervals = (
  notes: ScientificNotes,
  { fromRoot = false, direction = 1 }: options = {}
) => {
  if (![-1, 1].includes(direction)) {
    throw new Error('Direction should be 1 (up) or -1 (down)');
  }

  if (!isValidNoteArray(notes) || notes.length < 2) {
    throw new Error(
      'You can only calculate intervals for a uniform array (minimum size 2) of notes with or without octave'
    );
  }

  let intervals = notes.reduce((acc, note1, i) => {
    const note2 = notes[i + 1];
    if (!note2) return acc;

    const interval = getInterval(note1, note2, {
      direction
    });

    return [...acc, interval];
  }, []);

  if (fromRoot) {
    intervals = intervals.map((interval, i) =>
      intervals.slice(0, i + 1).reduce((acc, v) => acc + v, 0)
    );
  }

  return intervals;
};

export default getIntervals;
