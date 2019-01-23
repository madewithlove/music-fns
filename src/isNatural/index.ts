import hasAccidental from '../hasAccidental';
import isNote from '../isNote';
import { ScientificNote } from '../types/ScientificNote';

const isNatural = (note: ScientificNote) => {
  if (!isNote(note)) {
    return false;
  }
  return !hasAccidental(note);
};

export default isNatural;
