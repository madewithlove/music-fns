// @flow

import { SYMBOL } from '../constants/Accidental';

import noteToObject from '../noteToObject';

const hasAccidentalSymbol = (scientificNote: ScientificNote) =>
  noteToObject(scientificNote).accidentalType === SYMBOL;

export default hasAccidentalSymbol;
