// https://en.wikipedia.org/wiki/Triad_(music)

import Chord from '../constants/Chord';
import getIntervals from '../getIntervals';
import areNotes from '../areNotes';
import { Chord as TChord } from '../types/Chord';

const isTriad = (chord: TChord) => {
  if (!areNotes(chord)) return false;

  const intervals = [0, ...getIntervals(chord, { fromRoot: true })];

  const triads = [Chord.MAJOR, Chord.MINOR, Chord.DIMINISHED, Chord.AUGMENTED];
  return triads.some(t => t.join(',') === intervals.join(','));
};

export default isTriad;
