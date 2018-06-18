import createChord from './';
import Chord from '../constants/Chord';

describe('createChord', () => {
  it('should create a correct C Major chord', () => {
    const root = 'C';
    const chord = ['C', 'E', 'G'];

    expect(createChord(root, Chord.MAJOR)).toEqual(chord);
  });

  it('should create a correct Eb Minor chord', () => {
    const root = 'Eb';
    const chord = ['Eb', 'Gb', 'Bb'];

    expect(createChord(root, Chord.MINOR)).toEqual(chord);
  });

  it('should create a correct A♭3 Seventh chord', () => {
    const root = 'A♭3';
    const chord = ['A♭3', 'C4', 'E♭4', 'G♭4'];

    expect(createChord(root, Chord.SEVENTH)).toEqual(chord);
  });

  it('should create a correct F#2 Augmented chord', () => {
    const root = 'F♯2';
    const chord = ['F♯2', 'A♯2', 'D3'];

    expect(createChord(root, Chord.AUGMENTED)).toEqual(chord);
  });

  it('should throw on invalid scientific note', () => {
    const root = 'Fr';
    expect(() => createChord(root, Chord.MAJOR)).toThrow();
  });

  it('should throw an error on incorrect chord interval array', () => {
    const root = 'A♭3';
    expect(() => createChord(root, [])).toThrow(
      'Provide a valid collection of chord intervals ex: [0, 1, 3]'
    );
  });

  it('should throw an error on incorrect chord interval array', () => {
    const root = 'A♭3';
    expect(() => createChord(root, 'test')).toThrow(
      'Provide a valid collection of chord intervals ex: [0, 1, 3]'
    );
  });

  it('should throw an error on incorrect chord interval array', () => {
    const root = 'A♭3';
    expect(() => createChord(root, [0, 2, 'ok'])).toThrow(
      'Provide a valid collection of chord intervals ex: [0, 1, 3]'
    );
  });

  it('should throw an error on incorrect chord interval array', () => {
    const root = 'A♭3';
    expect(() => createChord(root, [1, 2])).toThrow(
      'First interval of chord should be 0 (Root)'
    );
  });
});
