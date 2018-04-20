// @flow

import getChromaticCPosition from '../getChromaticCPosition';
import getOctave from '../getOctave';
import isValidNoteArray from '../isValidNoteArray';

const areSameNotes = (notes: ScientificNotes) => {
  if (!isValidNoteArray(notes)) {
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
