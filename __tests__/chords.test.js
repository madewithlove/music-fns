import createChord from '../src/createChord';
import Chord from '../src/constants/Chord';
import transpose from '../src/transpose';
import getIntervals from '../src/getIntervals';
import objectToNote from '../src/objectToNote';
import normalizeScale from '../src/normalizeScale';
import { OCTAVE } from '../src/constants/Interval/Names';
import sharpToFlat from '../src/sharpToFlat';
import accidentalToLetter from '../src/accidentalToLetter';

const createChordsForOctave = octave => {
  const root = objectToNote({
    root: 'C',
    octave
  });

  const rootScale = createChord(root, Chord.MAJOR);

  const sequence = [...Array(OCTAVE).keys()];

  const sharpScales = sequence.map(interval =>
    rootScale.map(note => transpose(note, interval))
  );

  const flatScales = sharpScales.map(scale => scale.map(sharpToFlat));

  const symbolScales = [...sharpScales, ...flatScales];
  const letterScales = symbolScales.map(scale => scale.map(accidentalToLetter));

  return [...symbolScales, ...letterScales];
};

const flatten = arr =>
  arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

describe('chords', () => {
  it('should create correct major chords for all notes across 8 octaves', () => {
    const octaves = [...Array(8).keys()];

    const chords = octaves
      .map(createChordsForOctave)
      .reduce((acc, v) => [...acc, ...v], []);

    const intervals = chords.map(s => [
      0,
      ...getIntervals(s, { fromRoot: true })
    ]);

    expect(
      intervals.every(interval => Chord.MAJOR.join(',') === interval.join(','))
    ).toBe(true);
  });
});
