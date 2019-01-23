import { SYMBOL } from '../constants/Accidental';

import noteToObject from '../noteToObject';
import isNote from '../isNote';
import { ScientificNote } from '../types/ScientificNote';

const hasAccidentalSymbol = (note: ScientificNote) => {
  if (!isNote(note)) {
    return false;
  }

  return noteToObject(note).accidentalType === SYMBOL;
};

export default hasAccidentalSymbol;
