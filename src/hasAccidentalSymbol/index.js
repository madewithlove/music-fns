// @flow

import { FLAT_SYMBOL, SHARP_SYMBOL } from '../constants/Accidental';

import noteToObject from '../noteToObject';

const isAccidentalSymbol = (scientificNote: ScientificNote) => {
  const { accidental } = noteToObject(scientificNote);
  return accidental === FLAT_SYMBOL || accidental === SHARP_SYMBOL;
};

export default isAccidentalSymbol;
