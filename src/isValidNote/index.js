// @flow

import SCIENTIFIC_NOTE from '../constants/Regex/SCIENTIFIC_NOTE';

const isValidNote = (scientificNote: scientificNote) => SCIENTIFIC_NOTE.test(scientificNote);

export default isValidNote;
