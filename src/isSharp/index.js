// @flow

import noteToObject from '../noteToObject';
import isScientificNote from '../isScientificNote';
import { SHARP } from '../constants/Accidental';

const isSharp = (note: ScientificNote) => {
  if (!isScientificNote(note)) {
    return false;
  }

  return noteToObject(note).accidental === SHARP;
};

export default isSharp;
