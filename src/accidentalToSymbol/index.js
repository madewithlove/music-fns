// @flow

import { LETTER, SYMBOL } from '../constants/Accidental';

import noteToObject from '../noteToObject';
import objectToNote from '../objectToNote';
import isValidNote from '../isValidNote';

const accidentalToSymbol = (note: ScientificNote): ScientificNote => {
  if (!isValidNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  const noteObject = noteToObject(note);
  const { accidentalType } = noteObject;

  if (accidentalType !== LETTER) return note;

  noteObject.accidentalType = SYMBOL;
  return objectToNote(noteObject);
};

export default accidentalToSymbol;
