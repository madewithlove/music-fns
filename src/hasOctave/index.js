// @flow

import noteToObject from '../noteToObject';

const hasOctave = (scientificNote: ScientificNote) => {
  const { octave } = noteToObject(scientificNote);
  return octave !== undefined;
};

export default hasOctave;
