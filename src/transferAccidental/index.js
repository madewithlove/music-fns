// @flow

import sharpToFlat from '../sharpToFlat';
import flatToSharp from '../flatToSharp';

import noteToObject from '../noteToObject';
import isScientificNote from '../isScientificNote';
import hasAccidental from '../hasAccidental';

import { FLAT } from '../constants/Accidental';

const transferAccidental = (
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

  const { accidental: rAccidental } = noteToObject(reference);
  const { accidental: iAccidental } = noteToObject(note);

  if (rAccidental === iAccidental) return note;

  if (rAccidental === FLAT) return sharpToFlat(note);
  return flatToSharp(note);
};

export default transferAccidental;
