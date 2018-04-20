// @flow

import { SYMBOL } from '../constants/Accidental';

import noteToObject from '../noteToObject';
import isValidNote from '../isValidNote';

const hasAccidentalSymbol = (note: ScientificNote) => {
  if (!isValidNote(note)) {
    return false;
  }

  return noteToObject(note).accidentalType === SYMBOL;
};

export default hasAccidentalSymbol;
