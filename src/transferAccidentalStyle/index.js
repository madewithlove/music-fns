// @flow

import accidentalToLetter from '../accidentalToLetter';
import accidentalToSymbol from '../accidentalToSymbol';

import noteToObject from '../noteToObject';
import hasAccidental from '../hasAccidental';

import { LETTER } from '../constants/Accidental';

const transferAccidentalStyle = (
  reference: ScientificNote,
  scientificNote: ScientificNote
): ScientificNote => {
  if (!hasAccidental(reference)) return scientificNote;

  const { accidentalType: rAccidentalType } = noteToObject(reference);
  const { accidentalType: iAccidentalType } = noteToObject(scientificNote);

  if (rAccidentalType === iAccidentalType) return scientificNote;

  if (rAccidentalType === LETTER) return accidentalToLetter(scientificNote);
  return accidentalToSymbol(scientificNote);
};

export default transferAccidentalStyle;
