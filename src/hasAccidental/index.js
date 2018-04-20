// @flow

import noteToObject from '../noteToObject';
import isValidNote from '../isValidNote';

const hasAccidental = (note: ScientificNote) => {
  if (!isValidNote(note)) {
    return false;
  }

  return typeof noteToObject(note).accidental !== 'undefined';
};

export default hasAccidental;
