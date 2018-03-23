// @flow

import stripOctave from '../stripOctave';
import accidentalToSymbol from '../accidentalToSymbol';
import NOTES from '../constants/NOTES';

const getChromaticCPosition = (scientificNote: ScientificNote) => {
  const noteWithoutOctave = stripOctave(accidentalToSymbol(scientificNote));
  return NOTES.findIndex(n => n.some(nn => nn === noteWithoutOctave));
};

export default getChromaticCPosition;
