// @flow

import sharpToFlat from '../sharpToFlat';
import flatToSharp from '../flatToSharp';

import noteToObject from '../noteToObject';
import hasAccidental from '../hasAccidental';

import { FLAT } from '../constants/Accidental';

const transferAccidental = (
  reference: ScientificNote,
  scientificNote: ScientificNote
): ScientificNote => {
  if (!hasAccidental(reference)) return scientificNote;

  const { accidental: rAccidental } = noteToObject(reference);
  const { accidental: iAccidental } = noteToObject(scientificNote);

  if (rAccidental === iAccidental) return scientificNote;

  if (rAccidental === FLAT) return sharpToFlat(scientificNote);
  return flatToSharp(scientificNote);
};

export default transferAccidental;
