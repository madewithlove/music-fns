// @flow

import NOTE_REGEX from '../constants/Regex/Note';

const isValidNote = (note: string) => NOTE_REGEX.test(note);

export default isValidNote;
