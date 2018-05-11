// @flow

import { LETTER } from '../constants/Accidental';

import noteToObject from '../noteToObject';
import isScientificNote from '../isScientificNote';

const hasAccidentalLetter = (note: ScientificNote) => {
  if (!isScientificNote(note)) {
    return false;
  }

  return noteToObject(note).accidentalType === LETTER;
};

export default hasAccidentalLetter;
