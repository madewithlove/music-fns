// @flow

import sharpToFlat from '../sharpToFlat';
import flatToSharp from '../flatToSharp';

import noteToObject from '../noteToObject';
import isNote from '../isNote';
import hasAccidental from '../hasAccidental';

import { FLAT } from '../constants/Accidental';

const transferAccidental = (
  note: ScientificNote,
  referenceNote: ScientificNote
): ScientificNote => {
  if (!isNote(referenceNote)) {
    throw new Error(`"${referenceNote}" is not a valid reference note.`);
  }

  if (!isNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  if (!hasAccidental(referenceNote)) return note;

  const { accidental: rAccidental } = noteToObject(referenceNote);
  const { accidental: iAccidental } = noteToObject(note);

  if (rAccidental === iAccidental) return note;

  if (rAccidental === FLAT) return sharpToFlat(note);
  return flatToSharp(note);
};

export default transferAccidental;
