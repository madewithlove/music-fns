import getChromaticCPosition from '../getChromaticCPosition';
import NOTES from '../constants/NOTES';
import Interval from '../constants/Interval';

import noteToObject from '../noteToObject';
import objectToNote from '../objectToNote';
import transferStyle from '../transferStyle';

// @flow

const getNormalizedPosition = (position: number, interval: number): number => {
  const normalizedPosition = (position + interval) % NOTES.length;
  if (normalizedPosition >= 0) return normalizedPosition;
  return NOTES.length - Math.abs(normalizedPosition);
};

const transpose = (
  scientificNote: ScientificNote,
  interval: Interval,
  reference: ScientificNote = null
): ScientificNote => {
  const position = getChromaticCPosition(scientificNote);

  const oldNoteObject = noteToObject(scientificNote);

  const calculatedPosition = position + interval;
  const normalizedPosition = getNormalizedPosition(position, interval);

  const octave = Math.floor(calculatedPosition / NOTES.length);
  const newNote = NOTES[normalizedPosition][0];

  const newNoteObject = noteToObject(newNote);

  if (oldNoteObject.octave) {
    newNoteObject.octave = oldNoteObject.octave + octave;
  }

  const parsedNewNote = objectToNote(newNoteObject);

  return transferStyle(reference || scientificNote, parsedNewNote);
};

export default transpose;
