// @flow

import isFlat from '../isFlat';
import isSharp from '../isSharp';
import hasAccidentalLetter from '../hasAccidentalLetter';
import hasAccidentalSymbol from '../hasAccidentalSymbol';

const getAccidentalInfo = (scientificNote: ScientificNote) => {
  if (isFlat(scientificNote)) return 'FLAT';
  else if (isSharp(scientificNote)) return 'SHARP';
  return undefined;
};

const getAccidentalStyleInfo = (scientificNote: ScientificNote) => {
  if (hasAccidentalSymbol(scientificNote)) return 'SYMBOL';
  else if (hasAccidentalLetter(scientificNote)) return 'LETTER';
  return undefined;
};

const getNoteStyle = (scientificNote: ScientificNote) => {
  const accidental = getAccidentalInfo(scientificNote);

  return {
    accidental,
    accidentalStyle: accidental
      ? getAccidentalStyleInfo(scientificNote)
      : undefined
  };
};

export default getNoteStyle;
