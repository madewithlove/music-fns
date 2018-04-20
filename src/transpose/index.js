import getChromaticCPosition from '../getChromaticCPosition';
import NOTES from '../constants/NOTES';
import Interval from '../constants/Interval';

import noteToObject from '../noteToObject';
import objectToNote from '../objectToNote';
import transferStyle from '../transferStyle';
import isValidNote from '../isValidNote';

// @flow

const getNormalizedPosition = (position: number, interval: number): number => {
  const normalizedPosition = (position + interval) % NOTES.length;
  if (normalizedPosition >= 0) return normalizedPosition;
  return NOTES.length - Math.abs(normalizedPosition);
};

const transpose = (
  note: ScientificNote,
  interval: Interval,
  reference?: ScientificNote = null
): ScientificNote => {
  if (!isValidNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  if (typeof interval !== 'number') {
    throw new Error(`Interval must be a number`);
  }

  if (reference && !isValidNote(reference)) {
    throw new Error(`"${reference}" is not a valid note.`);
  }

  const position = getChromaticCPosition(note);

  const oldNoteObject = noteToObject(note);

  const calculatedPosition = position + interval;
  const normalizedPosition = getNormalizedPosition(position, interval);

  const octave = Math.floor(calculatedPosition / NOTES.length);
  const newNote = NOTES[normalizedPosition][0];

  const newNoteObject = noteToObject(newNote);

  if (oldNoteObject.octave) {
    newNoteObject.octave = oldNoteObject.octave + octave;
  }

  const parsedNewNote = objectToNote(newNoteObject);

  return transferStyle(reference || note, parsedNewNote);
};

export default transpose;
