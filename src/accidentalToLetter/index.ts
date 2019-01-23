import { LETTER, SYMBOL } from '../constants/Accidental';

import noteToObject from '../noteToObject';
import objectToNote from '../objectToNote';
import isNote from '../isNote';

import { ScientificNote } from '../types/ScientificNote';

const accidentalToLetter = (note: ScientificNote): ScientificNote => {
  if (!isNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  const noteObject = noteToObject(note);
  if (noteObject !== undefined) {
    const { accidentalType } = noteObject;

    if (accidentalType !== SYMBOL) return note;

    noteObject.accidentalType = LETTER;
    return objectToNote(noteObject);
  } else {
    throw new Error(`"${note}" is not a valid note.`);
  }
};

export default accidentalToLetter;
