// @flow

import noteToObject from '../noteToObject';

const uniq = arr => arr.filter((e, i, a) => a.indexOf(e) === i);

const haveSameOctave = (scientificNotes: ScientificNotes = []) => {
  if (scientificNotes.length < 2) {
    throw new Error('Provide 2 or more scientific notes.');
  }
  const diffOctaves = uniq(
    scientificNotes.map(noteToObject).map(o => o.octave)
  );
  return diffOctaves.length === 1;
};

export default haveSameOctave;
