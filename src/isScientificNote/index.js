// @flow

import SCIENTIFIC_NOTE from '../constants/Regex/SCIENTIFIC_NOTE';

const isScientificNote = (scientificNote: ScientificNote) =>
  SCIENTIFIC_NOTE.test(scientificNote);

export default isScientificNote;
