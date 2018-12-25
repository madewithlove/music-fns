// @flow

import noteToObject from '../noteToObject';
import isNote from '../isNote';
import { SHARP } from '../constants/Accidental';

const isSharp = (note: ScientificNote) => {
  if (!isNote(note)) {
    return false;
  }

  return noteToObject(note).accidental === SHARP;
};

export default isSharp;
