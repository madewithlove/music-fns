// @flow

import hasOctave from '../hasOctave';
import isValidNote from '../isValidNote';

const isValidNoteArray = (notes: ScientificNotes) => {
  if (!Array.isArray(notes)) return false;

  try {
    const isValid =
      notes.filter(n => hasOctave(n)).length === notes.length ||
      notes.filter(n => !hasOctave(n)).length === notes.length;

    return notes.every(n => isValidNote(n)) && isValid;
  } catch (e) {
    return false;
  }
};

export default isValidNoteArray;
