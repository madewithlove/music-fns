import getOctave from '../getOctave';
import hasOctave from '../hasOctave';
import getChromaticCPosition from '../getChromaticCPosition';
import areNotes from '../areNotes';
import Interval from '../constants/Interval';
import { direction } from '../types/direction';
import { ScientificNote } from '../types/ScientificNote';
import { ScientificNotes } from '../types/ScientificNotes';

type options = {
  fromRoot?: boolean,
  direction?: direction
};

const getInterval = (
  note: ScientificNote,
  note2: ScientificNote,
  { direction = 1 }: options = {}
): Interval => {
  const note1Position = getChromaticCPosition(note);
  const note2Position = getChromaticCPosition(note2);

  let difference = note2Position - note1Position;

  const octave1 = hasOctave(note) ? getOctave(note) : -1;
  const octave2 = hasOctave(note2) ? getOctave(note2) : -1;

  if (octave1 !== undefined && octave2 !== undefined) {
    if (octave1 === -1 && octave2 === -1) {
      if (difference < 0 && direction === 1)
        difference = Interval.OCTAVE - Math.abs(difference);
      if (direction === -1 && difference > 0) difference -= Interval.OCTAVE;
      return difference;
    }

    return difference + (octave2 - octave1) * Interval.OCTAVE;
  } else {
    if (octave1 === undefined) {
      if (octave2 === undefined) {
        throw new Error(`${note} and ${note2} are not valid notes.`);
      } else {
        throw new Error(`${note} is not a valid note.`);
      }
    } else {
      throw new Error(`${note2} is not a valid note.`);
    }
  }
};

const getIntervals = (
  notes: ScientificNotes,
  { fromRoot = false, direction = 1 }: options = {}
) => {
  if (![-1, 1].includes(direction)) {
    throw new Error('Direction should be 1 (up) or -1 (down)');
  }

  if (!areNotes(notes) || notes.length < 2) {
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
  }, new Array<Interval>());

  if (fromRoot) {
    intervals = intervals.map((interval, i) =>
      intervals.slice(0, i + 1).reduce((acc, v) => acc + v, 0)
    );
  }

  return intervals;
};

export default getIntervals;
