// @flow

import noteToObject from '../noteToObject';

const hasAccidental = (scientificNote: ScientificNote) => {
  const { accidental } = noteToObject(scientificNote);
  return typeof accidental !== 'undefined';
};

export default hasAccidental;
