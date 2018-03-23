// @flow

import noteToObject from '../noteToObject';
import accidentalToSymbol from '../accidentalToSymbol';
import { SHARP_SYMBOL } from '../constants/Accidental';

const isSharp = (scientificNote: ScientificNote) => {
  const { accidental = '' } = noteToObject(accidentalToSymbol(scientificNote));
  return accidental === SHARP_SYMBOL;
};

export default isSharp;
