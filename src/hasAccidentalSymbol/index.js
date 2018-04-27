// @flow

import { SYMBOL } from '../constants/Accidental';

import noteToObject from '../noteToObject';
import isScientificNote from '../isScientificNote';

const hasAccidentalSymbol = (note: ScientificNote) => {
  if (!isScientificNote(note)) {
    return false;
  }

  return noteToObject(note).accidentalType === SYMBOL;
};

export default hasAccidentalSymbol;
