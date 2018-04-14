// @flow

import noteToObject from '../noteToObject';

const getNote = (scientificNote: ScientificNote) =>
  noteToObject(scientificNote).note;

export default getNote;
