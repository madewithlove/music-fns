// @flow

import noteToObject from '../noteToObject';
import isScientificNote from '../isScientificNote';
import { FLAT } from '../constants/Accidental';

const isFlat = (note: ScientificNote) => {
  if (!isScientificNote(note)) {
    return false;
  }

  return noteToObject(note).accidental === FLAT;
};

export default isFlat;
