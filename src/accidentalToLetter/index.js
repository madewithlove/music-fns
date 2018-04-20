// @flow

import { LETTER, SYMBOL } from '../constants/Accidental';

import noteToObject from '../noteToObject';
import objectToNote from '../objectToNote';
import isValidNote from '../isValidNote';

const accidentalToLetter = (note: ScientificNote): ScientificNote => {
  if (!isValidNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  const noteObject = noteToObject(note);
  const { accidentalType } = noteObject;

  if (accidentalType !== SYMBOL) return note;

  noteObject.accidentalType = LETTER;
  return objectToNote(noteObject);
};

export default accidentalToLetter;
