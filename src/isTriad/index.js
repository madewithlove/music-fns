// @flow

// https://en.wikipedia.org/wiki/Triad_(music)

import { MAJOR, MINOR, DIMINISHED, AUGMENTED } from '../constants/Chord';

const isTriad = (chord: Chord) => {
  if (chord.length !== 3) return false;
  const triads = [MAJOR, MINOR, DIMINISHED, AUGMENTED];
  return triads.some(t => t.join(',') === chord.join(','));
};

export default isTriad;
