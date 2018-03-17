// @flow

import noteToObject from '../noteToObject';
import objectToNote from '../objectToNote';

const normalize = a => {
  if (a === '#') return '♯';
  if (a === 'b') return '♭';
  return a;
};

const normalizeAccidental = (
  scientificNote: ScientificNote
): ScientificNote => {
  const noteObject = noteToObject(scientificNote);

  const normalizedNote = {
    ...noteObject,
    accidental: normalize(noteObject.accidental)
  };

  return objectToNote(normalizedNote);
};

export default normalizeAccidental;
