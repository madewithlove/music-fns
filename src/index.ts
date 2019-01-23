import getChromaticCPosition from './getChromaticCPosition';
import IntervalConstants from './constants/Interval';

import transferStyle from './transferStyle';
import getOctave from './getOctave';
import isNote from './isNote';
import noteToObject from './noteToObject';
import NOTES from './constants/NOTES';
import objectToNote from './objectToNote';
import { ScientificNote } from './types/ScientificNote';
import Interval from './constants/Interval';

const normalizePosition = (position: number): number =>
  position >= 0 ? position : NOTES.length - Math.abs(position % NOTES.length);

const transpose = (
  note: ScientificNote,
  interval: Interval,
  reference: ScientificNote = ''
): ScientificNote => {
  if (!isNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  if (typeof interval !== 'number') {
    throw new Error(`Interval must be a number`);
  }

  if (reference && !isNote(reference)) {
    throw new Error(`"${reference}" is not a valid note.`);
  }

  const oldChromaticCPosition = getChromaticCPosition(note);
  const oldOctave = getOctave(note);

  const oldPosition =
    (typeof oldOctave === 'undefined' ? 0 : oldOctave * NOTES.length) +
    oldChromaticCPosition;

  const newPosition = normalizePosition(oldPosition + interval);

  return transferStyle(
    objectToNote({
      ...noteToObject(NOTES[newPosition % NOTES.length][0]),
      octave:
        typeof oldOctave === 'undefined'
          ? undefined
          : Math.floor(newPosition / NOTES.length)
    }),
    reference || note
  );
};

export default transpose;
