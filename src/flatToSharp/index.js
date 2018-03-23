import getChromaticCPosition from '../getChromaticCPosition';
import accidentalToSymbol from '../accidentalToSymbol';
import noteToObject from '../noteToObject';
import objectToNote from '../objectToNote';

import NOTES from '../constants/NOTES';

import isFlat from '../isFlat';
import { SHARP } from '../constants/Accidental';

// @flow

const flatToSharp = (scientificNote: ScientificNote): ScientificNote => {
  if (!isFlat(scientificNote)) return scientificNote;

  const { octave, accidentalType } = noteToObject(scientificNote);
  const normalizedNote = accidentalToSymbol(scientificNote);
  const chromaCPosition = getChromaticCPosition(normalizedNote);

  const convertedNote = NOTES[chromaCPosition]
    .map(noteToObject)
    .find(n => n.accidental === SHARP);

  if (!convertedNote) return scientificNote;

  return objectToNote({
    ...convertedNote,
    accidentalType,
    octave
  });
};

export default flatToSharp;
