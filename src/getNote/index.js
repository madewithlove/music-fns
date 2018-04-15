// @flow

import getRoot from '../getRoot';
import getAccidental from '../getAccidental';

const getNote = (scientificNote: ScientificNote) => {
  const root = getRoot(scientificNote);
  const accidental = getAccidental(scientificNote);
  return `${root}${accidental || ''}`;
};

export default getNote;
