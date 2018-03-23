// @flow

import noteToObject from '../noteToObject';

const hasOctave = (scientificNote: ScientificNote) =>
  typeof noteToObject(scientificNote).octave !== 'undefined';

export default hasOctave;
