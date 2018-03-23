// @flow

import noteToObject from '../noteToObject';
import normalizeAccidental from '../normalizeAccidental';
import { FLAT } from '../constants/Accidental';

const isFlat = (scientificNote: ScientificNote) => {
  const { accidental = '' } = noteToObject(normalizeAccidental(scientificNote));
  return accidental === FLAT;
};

export default isFlat;
