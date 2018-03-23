// @flow

import {
  FLAT_SYMBOL,
  FLAT_LETTER,
  SHARP_SYMBOL,
  SHARP_LETTER
} from '../constants/Accidental';

import noteToObject from '../noteToObject';
import objectToNote from '../objectToNote';

const accidentalToLetter = (scientificNote: ScientificNote) => {
  const noteObject = noteToObject(scientificNote);
  const { accidental } = noteObject;

  if (accidental === FLAT_SYMBOL) noteObject.accidental = FLAT_LETTER;
  else if (accidental === SHARP_SYMBOL) noteObject.accidental = SHARP_LETTER;

  return objectToNote(noteObject);
};

export default accidentalToLetter;
