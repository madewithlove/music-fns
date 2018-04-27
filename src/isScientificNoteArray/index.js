// @flow

import hasOctave from '../hasOctave';
import isScientificNote from '../isScientificNote';

const isScientificNoteArray = (notes: ScientificNotes) => {
  if (!Array.isArray(notes)) return false;

  try {
    const isValid =
      notes.filter(n => hasOctave(n)).length === notes.length ||
      notes.filter(n => !hasOctave(n)).length === notes.length;

    return notes.every(n => isScientificNote(n)) && isValid;
  } catch (e) {
    return false;
  }
};

export default isScientificNoteArray;
