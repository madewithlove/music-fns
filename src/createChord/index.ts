import transpose from '../transpose';
import areIntervals from '../areIntervals';
import { ROOT } from '../constants/Interval/Names';

import { Intervals } from '../types/Intervals';
import { ScientificNote } from '../types/ScientificNote';
import { ScientificNotes } from '../types/ScientificNotes';

const createChord = (
  root: ScientificNote,
  chord: Intervals
): ScientificNotes => {
  if (!areIntervals(chord)) {
    throw new Error(
      `Provide a valid collection of chord intervals ex: [0, 1, 3]`
    );
  }

  if (chord[0] !== ROOT) {
    throw new Error(`First interval of chord should be 0 (Root)`);
  }

  return chord.reduce(
    (accidental, interval) => [...accidental, transpose(root, interval)],
    new Array<ScientificNote>()
  );
};

export default createChord;
