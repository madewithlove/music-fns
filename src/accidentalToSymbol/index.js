// @flow

import { LETTER, SYMBOL } from '../constants/Accidental';

import noteToObject from '../noteToObject';
import objectToNote from '../objectToNote';

const accidentalToSymbol = (scientificNote: ScientificNote): ScientificNote => {
  const noteObject = noteToObject(scientificNote);
  const { accidentalType } = noteObject;

  if (accidentalType !== LETTER) return scientificNote;

  noteObject.accidentalType = SYMBOL;
  return objectToNote(noteObject);
};

export default accidentalToSymbol;
