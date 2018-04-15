// @flow

import getNote from '../getNote';
import accidentalToSymbol from '../accidentalToSymbol';
import NOTES from '../constants/NOTES';

const getChromaticCPosition = (scientificNote: ScientificNote) => {
  const note = getNote(accidentalToSymbol(scientificNote));
  return NOTES.findIndex(n => n.some(nn => nn === note));
};

export default getChromaticCPosition;
