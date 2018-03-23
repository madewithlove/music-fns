// @flow

import { LETTER, SYMBOL } from '../constants/Accidental';

import noteToObject from '../noteToObject';
import objectToNote from '../objectToNote';

const accidentalToLetter = (scientificNote: ScientificNote): ScientificNote => {
  const noteObject = noteToObject(scientificNote);
  const { accidentalType } = noteObject;

  if (accidentalType !== SYMBOL) return scientificNote;

  noteObject.accidentalType = LETTER;
  return objectToNote(noteObject);
};

export default accidentalToLetter;
