import noteToObject from '../noteToObject';
import isNote from '../isNote';
import { ScientificNote } from '../types/ScientificNote';

const hasAccidental = (note: ScientificNote) => {
  if (!isNote(note)) {
    return false;
  }

  return typeof noteToObject(note).accidental !== 'undefined';
};

export default hasAccidental;
