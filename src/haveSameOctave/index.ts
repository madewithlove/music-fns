import noteToObject from '../noteToObject';
import areNotes from '../areNotes';
import { ScientificNotes } from '../types/ScientificNotes';

const uniq = (arr: any[]) => arr.filter((e, i, a) => a.indexOf(e) === i);

const haveSameOctave = (notes: ScientificNotes = []) => {
  if (!areNotes(notes) || notes.length < 2) return false;
  return uniq(notes.map(noteToObject).map(o => o.octave)).length === 1;
};

export default haveSameOctave;
