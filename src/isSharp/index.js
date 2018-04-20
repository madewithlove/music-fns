// @flow

import noteToObject from '../noteToObject';
import isValidNote from '../isValidNote';
import { SHARP } from '../constants/Accidental';

const isSharp = (note: ScientificNote) => {
  if (!isValidNote(note)) {
    return false;
  }

  return noteToObject(note).accidental === SHARP;
};

export default isSharp;
