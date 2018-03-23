// @flow

import noteToObject from '../noteToObject';
import accidentalToSymbol from '../accidentalToSymbol';
import { FLAT_SYMBOL } from '../constants/Accidental';

const isFlat = (scientificNote: ScientificNote) => {
  const { accidental = '' } = noteToObject(accidentalToSymbol(scientificNote));
  return accidental === FLAT_SYMBOL;
};

export default isFlat;
