// @flow

import {
  FLAT_SYMBOL,
  FLAT_LETTER,
  SHARP_SYMBOL,
  SHARP_LETTER
} from '../constants/Accidental';

import noteToObject from '../noteToObject';
import objectToNote from '../objectToNote';

const accidentalToSymbol = (scientificNote: ScientificNote): ScientificNote => {
  const noteObject = noteToObject(scientificNote);
  const { accidental } = noteObject;

  if (accidental === FLAT_LETTER) noteObject.accidental = FLAT_SYMBOL;
  else if (accidental === SHARP_LETTER) noteObject.accidental = SHARP_SYMBOL;

  return objectToNote(noteObject);
};

export default accidentalToSymbol;
