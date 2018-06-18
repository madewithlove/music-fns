// @flow

import isScientificNoteArray from '../isScientificNoteArray';

const createPattern = (
  notes: ScientificNotes,
  positions: number[]
): ScientificNotes => {
  if (!isScientificNoteArray(notes)) {
    throw new Error('Please provide an array of scientific notes');
  }

  if (!Array.isArray(positions) || positions.some(v => v > notes.length - 1)) {
    throw new Error('Please provide a pattern array with note positions');
  }

  return positions.map(v => notes[v]);
};

export default createPattern;
