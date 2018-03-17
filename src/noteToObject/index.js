// @flow

import NOTE_REGEX from '../constants/Regex/Note';
import isValidNote from '../isValidNote';

const noteToObject = (scientificNote: string): Note => {
  if (!isValidNote(scientificNote)) {
    throw new Error(
      `"${scientificNote}" is not a valid scientific note`
    );
  }

  const [, note, accidental, octave] = NOTE_REGEX.exec(scientificNote);

  return {
    note: note.toUpperCase(),
    accidental,
    octave: octave ? Number(octave) : undefined
  };
};

export default noteToObject;
