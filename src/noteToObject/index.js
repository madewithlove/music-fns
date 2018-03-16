// @flow

import NOTE_REGEX from '../constants/Regex/Note';
import isValidNote from '../isValidNote';

const noteToObject = (note: string) : Note => {
  if (!isValidNote(note)) {
    throw new Error(
      'The note you are trying to convert to an object is not valid.'
    );
  }

  const result = NOTE_REGEX.exec(note);

  return {
    note: result[1] ? result[1].toUpperCase() : undefined,
    accidental: result[2],
    octave: result[3] ? Number(result[3]) : undefined
  };
};

export default noteToObject;
