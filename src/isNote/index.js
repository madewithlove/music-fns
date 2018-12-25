// @flow

import SCIENTIFIC_NOTE from '../constants/Regex/SCIENTIFIC_NOTE';

const isNote = (scientificNote: ScientificNote) =>
  SCIENTIFIC_NOTE.test(scientificNote);

export default isNote;
