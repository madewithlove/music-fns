// @flow

import noteToObject from '../noteToObject';
import normalizeAccidental from '../normalizeAccidental';
import { FLAT_SYMBOL } from '../constants/Accidental';

const isFlat = (scientificNote: ScientificNote) => {
  const { accidental = '' } = noteToObject(normalizeAccidental(scientificNote));
  return accidental === FLAT_SYMBOL;
};

export default isFlat;
