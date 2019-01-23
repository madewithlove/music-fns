import { LETTER } from '../constants/Accidental';

import noteToObject from '../noteToObject';
import isNote from '../isNote';
import { ScientificNote } from '../types/ScientificNote';

const hasAccidentalLetter = (note: ScientificNote) => {
  if (!isNote(note)) {
    return false;
  }

  return noteToObject(note).accidentalType === LETTER;
};

export default hasAccidentalLetter;
