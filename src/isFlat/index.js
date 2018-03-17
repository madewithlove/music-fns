// @flow

import noteToObject from '../noteToObject';
import normalizeAccidental from '../normalizeAccidental';
import { flat } from '../constants/Accidental';

const isFlat = (scientificNote: ScientificNote) => {
  const { accidental = '' } = noteToObject(normalizeAccidental(scientificNote));
  return accidental === flat;
};

export default isFlat;
