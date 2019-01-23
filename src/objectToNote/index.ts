import isNote from '../isNote';

import {
  FLAT,
  SHARP,
  LETTER,
  FLAT_SYMBOL,
  FLAT_LETTER,
  SHARP_SYMBOL,
  SHARP_LETTER
} from '../constants/Accidental';
import { Accidental } from '../types/Accidental';
import { AccidentalType } from '../types/AccidentalType';
import { NoteObject } from '../types/NoteObject';
import { ScientificNote } from '../types/ScientificNote';

const getAccidental = (
  accidental: Accidental,
  accidentalType: AccidentalType
): Accidental => {
  if (accidental === undefined) {
    if (accidentalType === undefined) {
      throw new Error(`${accidental} is not a valid accidental, and ${accidentalType} is not a valid accidental type.`)
    } else {
      throw new Error(`${accidental} is not a valid accidental.`);
    }
  } else if (accidentalType === undefined) {
    throw new Error(`${accidentalType} is not a valid accidental type.`);
  } else {
    if (accidental.toUpperCase() === FLAT) {
      if (accidentalType.toUpperCase() === LETTER) return FLAT_LETTER;
      return FLAT_SYMBOL;
    } else if (accidental.toUpperCase() === SHARP) {
      if (accidentalType.toUpperCase() === LETTER) return SHARP_LETTER;
      return SHARP_SYMBOL;
    }
  }

  return '';
};

const objectToNote = (noteObject: NoteObject): ScientificNote => {
  const {
    root = '',
    accidental = '',
    accidentalType = '',
    octave = ''
  } = noteObject;

  const scientificNote: ScientificNote = `${root.toUpperCase()}${getAccidental(
    accidental,
    accidentalType
  )}${octave}`;

  if (!isNote(scientificNote)) {
    throw new Error(
      `"${JSON.stringify(noteObject)}" is not a valid note object.`
    );
  }

  return scientificNote;
};

export default objectToNote;
