// @flow

import noteToObject from '../noteToObject';

const hasAccidental = (scientificNote: ScientificNote) =>
  typeof noteToObject(scientificNote).accidental !== 'undefined';

export default hasAccidental;
