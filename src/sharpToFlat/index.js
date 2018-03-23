import getChromaticCPosition from '../getChromaticCPosition';
import accidentalToSymbol from '../accidentalToSymbol';
import noteToObject from '../noteToObject';
import objectToNote from '../objectToNote';

import NOTES from '../constants/NOTES';

import isSharp from '../isSharp';
import { FLAT } from '../constants/Accidental';

// @flow

const sharpToFlat = (scientificNote: ScientificNote): ScientificNote => {
  if (!isSharp(scientificNote)) return scientificNote;

  const { octave, accidentalType } = noteToObject(scientificNote);
  const normalizedNote = accidentalToSymbol(scientificNote);
  const chromaCPosition = getChromaticCPosition(normalizedNote);

  const convertedNote = NOTES[chromaCPosition]
    .map(noteToObject)
    .find(n => n.accidental === FLAT);

  if (!convertedNote) return scientificNote;

  return objectToNote({
    ...convertedNote,
    accidentalType,
    octave
  });
};

export default sharpToFlat;
