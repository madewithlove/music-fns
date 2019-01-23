import isFlat from '../isFlat';
import isSharp from '../isSharp';
import isNote from '../isNote';

import {
  FLAT_SYMBOL,
  FLAT_LETTER,
  SHARP_SYMBOL,
  SHARP_LETTER
} from '../constants/Accidental';

import hasAccidental from '../hasAccidental';
import hasAccidentalLetter from '../hasAccidentalLetter';
import { ScientificNote } from '../types/ScientificNote';

const getAccidental = (note: ScientificNote) => {
  if (!isNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  if (!hasAccidental(note)) return undefined;

  if (isFlat(note)) {
    if (hasAccidentalLetter(note)) return FLAT_LETTER;
    return FLAT_SYMBOL;
  } else if (isSharp(note)) {
    if (hasAccidentalLetter(note)) return SHARP_LETTER;
    return SHARP_SYMBOL;
  }

  return note;
};
export default getAccidental;
