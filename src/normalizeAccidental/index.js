// @flow

import noteToObject from '../noteToObject';
import objectToNote from '../objectToNote';

import {
  FLAT_SYMBOL,
  FLAT_LETTER,
  SHARP_SYMBOL,
  SHARP_LETTER
} from '../constants/Accidental';

const normalize = a => {
  if (a === FLAT_LETTER) return FLAT_SYMBOL;
  if (a === SHARP_LETTER) return SHARP_SYMBOL;
  return a;
};

const normalizeAccidental = (
  scientificNote: ScientificNote
): ScientificNote => {
  const noteObject = noteToObject(scientificNote);

  const normalizedNote = {
    ...noteObject,
    accidental: normalize(noteObject.accidental)
  };

  return objectToNote(normalizedNote);
};

export default normalizeAccidental;
