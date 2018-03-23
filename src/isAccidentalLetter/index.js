// @flow

import { FLAT_LETTER, SHARP_LETTER } from '../constants/Accidental';

import noteToObject from '../noteToObject';

const isAccidentalSymbol = (scientificNote: ScientificNote) => {
  const { accidental } = noteToObject(scientificNote);
  return accidental === FLAT_LETTER || accidental === SHARP_LETTER;
};

export default isAccidentalSymbol;
