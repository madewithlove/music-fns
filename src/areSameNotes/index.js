// @flow

import getChromaticCPosition from '../getChromaticCPosition';
import getOctave from '../getOctave';

const isSameNote = (notes: ScientificNotes) =>
  notes.map(getChromaticCPosition).every((v, _, arr) => v === arr[0]) &&
  notes.map(getOctave).every((v, _, arr) => v === arr[0]);

export default isSameNote;
