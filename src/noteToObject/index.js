// @flow

import SCIENTIFIC_NOTE from '../constants/Regex/SCIENTIFIC_NOTE';
import isValidNote from '../isValidNote';

const noteToObject = (scientificNote: scientificNote): Note => {
  if (!isValidNote(scientificNote)) {
    throw new Error(
      `"${scientificNote}" is not a valid scientific note.`
    );
  }

  const [, note, accidental, octave] = SCIENTIFIC_NOTE.exec(scientificNote);

  return {
    note: note.toUpperCase(),
    accidental,
    octave: octave ? Number(octave) : undefined
  };
};

export default noteToObject;
