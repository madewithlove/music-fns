// @flow

import transpose from '../transpose';

const createChord = (root: ScientificNote, chord: Chord): ScientificNotes => {
  if (!Array.isArray(chord) || chord.length === 0) {
    throw new Error(
      `Provide a valid collection of chord intervals ex: [0, 1, 3]`
    );
  }

  const arr = [];
  chord.forEach(interval => arr.push(transpose(root, interval)));
  return arr;
};

export default createChord;
