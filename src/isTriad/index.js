// @flow

// https://en.wikipedia.org/wiki/Triad_(music)

import { MAJOR, MINOR, DIMINISHED, AUGMENTED } from '../constants/Chord';
import getIntervals from '../getIntervals';
import isValidNoteArray from '../isValidNoteArray';

const isTriad = (chord: Chord) => {
  if (!isValidNoteArray(chord)) return false;

  const intervals = [0, ...getIntervals(chord, { fromRoot: true })];

  const triads = [MAJOR, MINOR, DIMINISHED, AUGMENTED];
  return triads.some(t => t.join(',') === intervals.join(','));
};

export default isTriad;
