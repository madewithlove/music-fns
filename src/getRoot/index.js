// @flow

import noteToObject from '../noteToObject';

const getRoot = (scientificNote: ScientificNote) =>
  noteToObject(scientificNote).root;

export default getRoot;
