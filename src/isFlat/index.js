// @flow

import noteToObject from '../noteToObject';
import isValidNote from '../isValidNote';
import { FLAT } from '../constants/Accidental';

const isFlat = (note: ScientificNote) => {
  if (!isValidNote(note)) {
    return false;
  }

  return noteToObject(note).accidental === FLAT;
};

export default isFlat;
