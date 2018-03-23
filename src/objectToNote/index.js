// @flow

import isValidNote from '../isValidNote';

const objectToNote = (noteObject: NoteObject): ScientificNote => {
  const { note = '', accidental = '', octave = '' } = noteObject;
  const scientificNote: ScientificNote = `${note.toUpperCase()}${accidental}${octave}`;

  if (!isValidNote(scientificNote)) {
    throw new Error(
      `"${JSON.stringify(noteObject)}" is not a valid note object.`
    );
  }

  return scientificNote;
};

export default objectToNote;
