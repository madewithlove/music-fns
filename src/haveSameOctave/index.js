// @flow

import noteToObject from '../noteToObject';
import isScientificNoteArray from '../isScientificNoteArray';

const uniq = arr => arr.filter((e, i, a) => a.indexOf(e) === i);

const haveSameOctave = (notes: ScientificNotes = []) => {
  if (!isScientificNoteArray(notes) || notes.length < 2) return false;
  return uniq(notes.map(noteToObject).map(o => o.octave)).length === 1;
};

export default haveSameOctave;
