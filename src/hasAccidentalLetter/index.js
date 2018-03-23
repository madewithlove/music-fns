// @flow

import { LETTER } from '../constants/Accidental';

import noteToObject from '../noteToObject';

const hasAccidentalLetter = (scientificNote: ScientificNote) =>
  noteToObject(scientificNote).accidentalType === LETTER;

export default hasAccidentalLetter;
