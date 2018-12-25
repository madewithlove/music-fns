// @flow

import areNotes from '../areNotes';

const createMelody = (
  notes: ScientificNotes,
  pattern: number[]
): ScientificNotes => {
  if (!areNotes(notes)) {
    throw new Error('Please provide an array of scientific notes');
  }

  if (!Array.isArray(pattern) || pattern.some(v => v > notes.length - 1)) {
    throw new Error(
      `Please provide an array with note positions (max position: ${notes.length -
        1})`
    );
  }

  return pattern.map(v => notes[v]);
};

export default createMelody;
