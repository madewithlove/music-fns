// @flow

import hasAccidental from '../hasAccidental';
import isScientificNote from '../isScientificNote';

const isNatural = (note: ScientificNote) => {
  if (!isScientificNote(note)) {
    return false;
  }
  return !hasAccidental(note);
};

export default isNatural;
