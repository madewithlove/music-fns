// @flow

import noteToObject from '../noteToObject';
import normalizeAccidental from '../normalizeAccidental';
import { SHARP_SYMBOL } from '../constants/Accidental';

const isSharp = (scientificNote: ScientificNote) => {
  const { accidental = '' } = noteToObject(normalizeAccidental(scientificNote));
  return accidental === SHARP_SYMBOL;
};

export default isSharp;
