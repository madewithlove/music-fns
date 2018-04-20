import getChromaticCPosition from '../getChromaticCPosition';
import accidentalToSymbol from '../accidentalToSymbol';
import noteToObject from '../noteToObject';
import objectToNote from '../objectToNote';
import isValidNote from '../isValidNote';

import NOTES from '../constants/NOTES';

import isFlat from '../isFlat';
import { SHARP } from '../constants/Accidental';

// @flow

const flatToSharp = (note: ScientificNote): ScientificNote => {
  if (!isValidNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  if (!isFlat(note)) return note;

  const { octave, accidentalType } = noteToObject(note);
  const normalizedNote = accidentalToSymbol(note);
  const chromaCPosition = getChromaticCPosition(normalizedNote);

  const convertedNote = NOTES[chromaCPosition]
    .map(noteToObject)
    .find(n => n.accidental === SHARP);

  if (!convertedNote) return note;

  return objectToNote({
    ...convertedNote,
    accidentalType,
    octave
  });
};

export default flatToSharp;
