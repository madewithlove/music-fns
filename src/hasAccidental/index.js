// @flow

import noteToObject from '../noteToObject';

const hasAccidental = (scientificNote: ScientificNote) => {
  const { accidental } = noteToObject(scientificNote);
  return accidental !== undefined;
};

export default hasAccidental;
