// @flow

import NOTE_REGEX from '../constants/Regex/Note';

const isValidNote = (scientificNote: scientificNote) => NOTE_REGEX.test(scientificNote);

export default isValidNote;
