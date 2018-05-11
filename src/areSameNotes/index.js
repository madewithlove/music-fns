// @flow

import getChromaticCPosition from '../getChromaticCPosition';
import getOctave from '../getOctave';
import isScientificNoteArray from '../isScientificNoteArray';

const areSameNotes = (notes: ScientificNotes) => {
  if (!isScientificNoteArray(notes)) {
    return false;
  }

  try {
    return (
      notes.map(getChromaticCPosition).every((v, _, arr) => v === arr[0]) &&
      notes.map(getOctave).every((v, _, arr) => v === arr[0])
    );
  } catch (e) {
    return false;
  }
};

export default areSameNotes;
