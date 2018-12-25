// @flow

import { LETTER } from '../constants/Accidental';

import noteToObject from '../noteToObject';
import isNote from '../isNote';

const hasAccidentalLetter = (note: ScientificNote) => {
  if (!isNote(note)) {
    return false;
  }

  return noteToObject(note).accidentalType === LETTER;
};

export default hasAccidentalLetter;
