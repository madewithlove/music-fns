// @flow

import getNote from '../getNote';
import getAccidental from '../getAccidental';

const getFullNote = (scientificNote: ScientificNote) => {
  const note = getNote(scientificNote);
  const accidental = getAccidental(scientificNote);
  return `${note}${accidental || ''}`;
};

export default getFullNote;
