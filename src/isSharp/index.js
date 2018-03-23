// @flow

import noteToObject from '../noteToObject';
import normalizeAccidental from '../normalizeAccidental';
import { SHARP } from '../constants/Accidental';

const isSharp = (scientificNote: ScientificNote) => {
  const { accidental = '' } = noteToObject(normalizeAccidental(scientificNote));
  return accidental === SHARP;
};

export default isSharp;
