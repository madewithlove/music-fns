// @flow

import getNote from '../getNote';
import accidentalToSymbol from '../accidentalToSymbol';
import NOTES from '../constants/NOTES';

const getChromaticCPosition = (scientificNote: ScientificNote) => {
  const noteWithoutOctave = getNote(accidentalToSymbol(scientificNote));
  return NOTES.findIndex(n => n.some(nn => nn === noteWithoutOctave));
};

export default getChromaticCPosition;
