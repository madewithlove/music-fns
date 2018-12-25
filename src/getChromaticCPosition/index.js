// @flow

import getNote from '../getNote';
import isNote from '../isNote';

import NOTES from '../constants/NOTES';
import accidentalToLetter from '../accidentalToLetter';

const getChromaticCPosition = (note: ScientificNote) => {
  if (!isNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  const rNote = getNote(accidentalToLetter(note));
  return NOTES.findIndex(n => n.some(nn => nn === rNote));
};

export default getChromaticCPosition;
