// @flow

import NOTE_REGEX from '../constants/Regex/Note';

import isValidNote from '../isValidNote';

const noteToObject = (note: string) => {
  if (!isValidNote(note)) {
    return false;
  }

  const result = NOTE_REGEX.exec(note);

  return {
    note: result[1] ? result[1].toUpperCase() : undefined,
    accidental: result[2],
    octave: result[3],
    octave: Number(result[3]),
  };
};

export default noteToObject;
