// @flow

import getChromaticCPosition from '../getChromaticCPosition';
import accidentalToSymbol from '../accidentalToSymbol';
import noteToObject from '../noteToObject';
import objectToNote from '../objectToNote';
import isScientificNote from '../isScientificNote';

import NOTES from '../constants/NOTES';

import isSharp from '../isSharp';
import { FLAT } from '../constants/Accidental';

const sharpToFlat = (note: ScientificNote): ScientificNote => {
  if (!isScientificNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  if (!isSharp(note)) return note;

  const { octave, accidentalType } = noteToObject(note);
  const normalizedNote = accidentalToSymbol(note);
  const chromaCPosition = getChromaticCPosition(normalizedNote);

  const convertedNote = NOTES[chromaCPosition]
    .map(noteToObject)
    .find(n => n.accidental === FLAT);

  if (!convertedNote) return note;

  return objectToNote({
    ...convertedNote,
    accidentalType,
    octave
  });
};

export default sharpToFlat;
