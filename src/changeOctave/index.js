// @flow

import noteToObject from '../noteToObject';
import objectToNote from '../objectToNote';

const changeOctave = (
  scientificNote: ScientificNote,
  octave: Octave = undefined
): ScientificNote => {
  const noteObject = noteToObject(scientificNote);
  noteObject.octave = octave;
  return objectToNote(noteObject);
};

export default changeOctave;
