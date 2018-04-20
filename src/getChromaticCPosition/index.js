// @flow

import getNote from '../getNote';
import isValidNote from '../isValidNote';

import accidentalToSymbol from '../accidentalToSymbol';
import NOTES from '../constants/NOTES';

const getChromaticCPosition = (note: ScientificNote) => {
  if (!isValidNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  const rNote = getNote(accidentalToSymbol(note));
  return NOTES.findIndex(n => n.some(nn => nn === rNote));
};

export default getChromaticCPosition;
