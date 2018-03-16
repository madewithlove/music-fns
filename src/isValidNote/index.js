// @flow

import NOTE_REGEX from '../constants/Regex/Note';

const isValidNote = (note: string) => {
  return NOTE_REGEX.test(note);
};

export default isValidNote;
