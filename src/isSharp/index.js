// @flow

import noteToObject from '../noteToObject';

const isSharp = (scientificNote: ScientificNote) => {
  const { accidental = '' } = noteToObject(scientificNote);
  return accidental === '#' || accidental === '♯';
};

export default isSharp;
