import hasOctave from '../hasOctave';
import isNote from '../isNote';

import { ScientificNotes } from '../types/ScientificNotes';

const areNotes = (notes: ScientificNotes) => {
  if (!Array.isArray(notes)) return false;

  try {
    const isValid =
      notes.filter(n => hasOctave(n)).length === notes.length ||
      notes.filter(n => !hasOctave(n)).length === notes.length;

    return notes.every(n => isNote(n)) && isValid;
  } catch (e) {
    return false;
  }
};

export default areNotes;
