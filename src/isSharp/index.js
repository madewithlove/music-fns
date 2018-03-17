// @flow

import noteToObject from '../noteToObject';
import normalizeAccidental from '../normalizeAccidental';
import { sharp } from '../constants/Accidental';

const isSharp = (scientificNote: ScientificNote) => {
  const { accidental = '' } = noteToObject(normalizeAccidental(scientificNote));
  return accidental === sharp;
};

export default isSharp;
