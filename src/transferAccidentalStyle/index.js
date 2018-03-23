// @flow

import accidentalToLetter from '../accidentalToLetter';
import accidentalToSymbol from '../accidentalToSymbol';
import noteToObject from '../noteToObject';

import { LETTER } from '../constants/Accidental';

const transferAccidentalStyle = (
  reference: ScientificNote,
  scientificNote: ScientificNote
): ScientificNote => {
  const { accidentalType: rAccidentalType } = noteToObject(reference);
  const { accidentalType: iAccidentalType } = noteToObject(scientificNote);

  if (rAccidentalType === iAccidentalType) return scientificNote;
  else if (rAccidentalType === LETTER)
    return accidentalToLetter(scientificNote);

  return accidentalToSymbol(scientificNote);
};

export default transferAccidentalStyle;
