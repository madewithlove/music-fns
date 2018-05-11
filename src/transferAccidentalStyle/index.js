// @flow

import accidentalToLetter from '../accidentalToLetter';
import accidentalToSymbol from '../accidentalToSymbol';

import noteToObject from '../noteToObject';
import hasAccidental from '../hasAccidental';
import isScientificNote from '../isScientificNote';

import { LETTER } from '../constants/Accidental';

const transferAccidentalStyle = (
  reference: ScientificNote,
  note: ScientificNote
): ScientificNote => {
  if (!isScientificNote(reference)) {
    throw new Error(`"${reference}" is not a valid note.`);
  }

  if (!isScientificNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  if (!hasAccidental(reference)) return note;

  const { accidentalType: rAccidentalType } = noteToObject(reference);
  const { accidentalType: iAccidentalType } = noteToObject(note);

  if (rAccidentalType === iAccidentalType) return note;

  if (rAccidentalType === LETTER) return accidentalToLetter(note);
  return accidentalToSymbol(note);
};

export default transferAccidentalStyle;
