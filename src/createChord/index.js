// @flow

import transpose from '../transpose';
import { ROOT } from '../constants/Interval/Names';

const createChord = (root: ScientificNote, chord: Chord): ScientificNotes => {
  if (
    !Array.isArray(chord) ||
    chord.length === 0 ||
    chord.some(i => typeof i !== 'number')
  ) {
    throw new Error(
      `Provide a valid collection of chord intervals ex: [0, 1, 3]`
    );
  }

  if (chord[0] !== ROOT) {
    throw new Error(`First interval of chord should be 0 (Root)`);
  }

  const arr = [];
  chord.forEach(interval => arr.push(transpose(root, interval)));
  return arr;
};

export default createChord;
