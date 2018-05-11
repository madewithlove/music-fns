// @flow

import noteToObject from '../noteToObject';
import isScientificNote from '../isScientificNote';

const hasAccidental = (note: ScientificNote) => {
  if (!isScientificNote(note)) {
    return false;
  }

  return typeof noteToObject(note).accidental !== 'undefined';
};

export default hasAccidental;
