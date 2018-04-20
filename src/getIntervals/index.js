// @flow

import getOctave from '../getOctave';
import getChromaticCPosition from '../getChromaticCPosition';
import { OCTAVE } from '../constants/Interval';

import hasOctave from '../hasOctave';

type options = {
  fromRoot?: boolean,
  direction?: number
};

const isValidNotesArray = notes =>
  notes.filter(hasOctave).length === notes.length ||
  notes.filter(n => !hasOctave(n)).length === notes.length;

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

  if (!Array.isArray(notes) || notes.length < 2 || !isValidNotesArray(notes)) {
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
    intervals = intervals.map((interval, i, arr) => {
      if (i === 0) return interval;
      return arr.slice(i - 1).reduce((acc, v) => acc + v, 0);
    });
  }

  return intervals;
};

export default getIntervals;
