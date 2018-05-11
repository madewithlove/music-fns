// @flow

import getOctave from '../getOctave';
import hasOctave from '../hasOctave';
import getChromaticCPosition from '../getChromaticCPosition';
import isScientificNoteArray from '../isScientificNoteArray';
import { OCTAVE } from '../constants/Interval';

type options = {
  fromRoot?: boolean,
  direction?: direction
};

const getInterval = (
  note: ScientificNote,
  note2: ScientificNote,
  { direction = 1 }: options = {}
) => {
  const note1Position = getChromaticCPosition(note);
  const note2Position = getChromaticCPosition(note2);

  let difference = note2Position - note1Position;

  const octave1 = hasOctave(note) ? getOctave(note) : -1;
  const octave2 = hasOctave(note2) ? getOctave(note2) : -1;

  if (octave1 === -1 && octave2 === -1) {
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

  if (!isScientificNoteArray(notes) || notes.length < 2) {
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
