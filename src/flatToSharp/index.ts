import getChromaticCPosition from '../getChromaticCPosition';
import accidentalToSymbol from '../accidentalToSymbol';
import noteToObject from '../noteToObject';
import objectToNote from '../objectToNote';
import isNote from '../isNote';

import NOTES from '../constants/NOTES';

import isFlat from '../isFlat';
import { SHARP } from '../constants/Accidental';
import { ScientificNote } from '../types/ScientificNote';

const flatToSharp = (note: ScientificNote): ScientificNote => {
  if (!isNote(note)) {
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
