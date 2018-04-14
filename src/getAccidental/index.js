// @flow

import isFlat from '../isFlat';
import isSharp from '../isSharp';

import {
  FLAT_SYMBOL,
  FLAT_LETTER,
  SHARP_SYMBOL,
  SHARP_LETTER
} from '../constants/Accidental';

import hasAccidental from '../hasAccidental';
import hasAccidentalLetter from '../hasAccidentalLetter';

const getAccidental = (scientificNote: ScientificNote) => {
  if (!hasAccidental(scientificNote)) return undefined;

  if (isFlat(scientificNote)) {
    if (hasAccidentalLetter(scientificNote)) return FLAT_LETTER;
    return FLAT_SYMBOL;
  } else if (isSharp(scientificNote)) {
    if (hasAccidentalLetter(scientificNote)) return SHARP_LETTER;
    return SHARP_SYMBOL;
  }
};
export default getAccidental;
