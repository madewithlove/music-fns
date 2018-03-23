// @flow

import stripOctave from '../stripOctave';
import normalizeAccidental from '../normalizeAccidental';
import Notes from '../constants/Notes';

const getChromaticCPosition = (scientificNote: ScientificNote) => {
  const noteWithoutOctave = stripOctave(normalizeAccidental(scientificNote));
  return Notes.findIndex(n => n.some(nn => nn === noteWithoutOctave));
};

export default getChromaticCPosition;
