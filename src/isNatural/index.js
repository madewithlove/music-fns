// @flow

import hasAccidental from '../hasAccidental';
import isNote from '../isNote';

const isNatural = (note: ScientificNote) => {
  if (!isNote(note)) {
    return false;
  }
  return !hasAccidental(note);
};

export default isNatural;
