// @flow

import { LETTER } from '../constants/Accidental';

import noteToObject from '../noteToObject';
import isValidNote from '../isValidNote';

const hasAccidentalLetter = (note: ScientificNote) => {
  if (!isValidNote(note)) {
    return false;
  }

  return noteToObject(note).accidentalType === LETTER;
};

export default hasAccidentalLetter;
