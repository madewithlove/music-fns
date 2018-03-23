// @flow

import SCIENTIFIC_NOTE from '../constants/Regex/SCIENTIFIC_NOTE';
import isValidNote from '../isValidNote';

import {
  FLAT_LETTER,
  FLAT_SYMBOL,
  SHARP_LETTER,
  SHARP_SYMBOL,
  FLAT,
  SHARP,
  LETTER,
  SYMBOL
} from '../constants/Accidental';

const isFlat = accidental => [FLAT_LETTER, FLAT_SYMBOL].includes(accidental);
const isSharp = accidental => [SHARP_LETTER, SHARP_SYMBOL].includes(accidental);

const isSymbol = accidental => [FLAT_SYMBOL, SHARP_SYMBOL].includes(accidental);
const isLetter = accidental => [FLAT_LETTER, SHARP_LETTER].includes(accidental);

const getAccidental = accidental => {
  if (isSharp(accidental)) return SHARP;
  else if (isFlat(accidental)) return FLAT;
  return undefined;
};

const getAccidentalType = accidental => {
  if (isSymbol(accidental)) return SYMBOL;
  else if (isLetter(accidental)) return LETTER;
  return undefined;
};

const parseAccidental = acc => ({
  accidental: getAccidental(acc),
  accidentalType: getAccidentalType(acc)
});

const noteToObject = (scientificNote: ScientificNote): NoteObject => {
  if (!isValidNote(scientificNote)) {
    throw new Error(`"${scientificNote}" is not a valid scientific note.`);
  }

  const [, note, accidental, octave] = SCIENTIFIC_NOTE.exec(scientificNote);

  return {
    note: note.toUpperCase(),
    ...parseAccidental(accidental),
    octave: octave ? Number(octave) : undefined
  };
};

export default noteToObject;
