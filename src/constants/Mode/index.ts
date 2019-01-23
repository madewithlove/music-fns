// https://en.wikipedia.org/wiki/Mode_(music)

// formed by natural notes, also called "white-notes"
// as they can be played using the white keys of a piano keyboard

import Interval from '../Interval';

import { IONIAN } from './IONIAN'; // C -> C (white keys)
import { DORIAN } from './DORIAN'; // D -> D (white keys)
import { PHRYGIAN } from './PHRYGIAN'; // E -> E (white keys)
import { LYDIAN } from './LYDIAN'; // F -> F (white keys)
import { MIXOLYDIAN } from './MIXOLYDIAN'; // G -> G (white keys)
import { AEOLIAN } from './AEOLIAN'; // A -> A (white keys)
import { LOCRIAN } from './LOCRIAN'; // B -> B (white keys)

export interface IMode {
  IONIAN: Array<Interval>;
  DORIAN: Array<Interval>;
  PHRYGIAN: Array<Interval>;
  LYDIAN: Array<Interval>;
  MIXOLYDIAN: Array<Interval>;
  AEOLIAN: Array<Interval>;
  LOCRIAN: Array<Interval>;
}

const Mode: IMode = {
  IONIAN,
  DORIAN,
  PHRYGIAN,
  LYDIAN,
  MIXOLYDIAN,
  AEOLIAN,
  LOCRIAN
};

export default Mode;
