import noteToObject from '../noteToObject';
import isNote from '../isNote';
import { FLAT } from '../constants/Accidental';
import { ScientificNote } from '../types/ScientificNote';

const isFlat = (note: ScientificNote) => {
  if (!isNote(note)) {
    return false;
  }

  return noteToObject(note).accidental === FLAT;
};

export default isFlat;
