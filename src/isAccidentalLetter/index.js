// @flow

import { LETTER } from '../constants/Accidental';

import noteToObject from '../noteToObject';

const isAccidentalLetter = (scientificNote: ScientificNote) =>
  noteToObject(scientificNote).accidentalType === LETTER;

export default isAccidentalLetter;
