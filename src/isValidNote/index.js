// @flow

import SCIENTIFIC_NOTE from '../constants/Regex/SCIENTIFIC_NOTE';

const isValidNote = (scientificNote: ScientificNote) =>
  SCIENTIFIC_NOTE.test(scientificNote);

export default isValidNote;
