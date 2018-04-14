// @flow

import noteToObject from '../noteToObject';

import {
  FLAT,
  SHARP,
  LETTER,
  FLAT_SYMBOL,
  FLAT_LETTER,
  SHARP_SYMBOL,
  SHARP_LETTER
} from '../constants/Accidental';

const getAccidental = (scientificNote: ScientificNote) => {
  const { accidental, accidentalType } = noteToObject(scientificNote);
  if (
    typeof accidental === 'undefined' ||
    typeof accidentalType === 'undefined'
  )
    return undefined;

  if (accidental.toUpperCase() === FLAT) {
    if (accidentalType.toUpperCase() === LETTER) return FLAT_LETTER;
    return FLAT_SYMBOL;
  } else if (accidental.toUpperCase() === SHARP) {
    if (accidentalType.toUpperCase() === LETTER) return SHARP_LETTER;
    return SHARP_SYMBOL;
  }
};
export default getAccidental;
