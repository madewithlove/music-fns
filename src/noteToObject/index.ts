import SCIENTIFIC_NOTE from '../constants/Regex/SCIENTIFIC_NOTE';
import isNote from '../isNote';
import { Accidental } from '../types/Accidental';
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
import { ScientificNote } from '../types/ScientificNote';
import { NoteObject } from '../types/NoteObject';
import { AccidentalType } from '../types/AccidentalType';

const isFlat = (accidental: Accidental) => [FLAT_LETTER, FLAT_SYMBOL].includes(accidental);
const isSharp = (accidental: Accidental) => [SHARP_LETTER, SHARP_SYMBOL].includes(accidental);

const isSymbol = (accidental: Accidental) => [FLAT_SYMBOL, SHARP_SYMBOL].includes(accidental);
const isLetter = (accidental: Accidental) => [FLAT_LETTER, SHARP_LETTER].includes(accidental);

const getAccidental = (accidental: Accidental): Accidental => {
  if (isSharp(accidental)) return SHARP;
  else if (isFlat(accidental)) return FLAT;
  return undefined;
};

const getAccidentalType = (accidental: Accidental): AccidentalType => {
  if (isSymbol(accidental)) return SYMBOL;
  else if (isLetter(accidental)) return LETTER;
  return '';
};

const parseAccidental = (accidental: Accidental): { accidental: Accidental, accidentalType: AccidentalType } => ({
  accidental: getAccidental(accidental),
  accidentalType: getAccidentalType(accidental)
});

const noteToObject = (scientificNote: ScientificNote): NoteObject => {
  if (!isNote(scientificNote)) {
    throw new Error(`"${scientificNote}" is not a valid scientific note.`);
  }

  const arr = SCIENTIFIC_NOTE.exec(scientificNote || '');
  if (arr !== null) {
    const [, root, accidental, octave] = arr;

    return {
      root: root.toUpperCase(),
      ...parseAccidental(accidental as Accidental),
      octave: typeof octave !== 'undefined' ? Number(octave) : undefined
    };
  } else {
    throw new Error(`"${scientificNote}" is not a valid scientific note.`);
  }
};

export default noteToObject;
