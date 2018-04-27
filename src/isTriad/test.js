// https://en.wikipedia.org/wiki/Triad_(music)

import isTriad from './';

describe('isTriad', () => {
  it('should return true on Major Triad', () => {
    const chord = ['C', 'E', 'G'];
    expect(isTriad(chord)).toBe(true);
  });

  it('should return true on Major Triad', () => {
    const chord = ['F', 'A', 'C'];
    expect(isTriad(chord)).toBe(true);
  });

  it('should return true on Major Triad', () => {
    const chord = ['F2', 'A2', 'C3'];
    expect(isTriad(chord)).toBe(true);
  });

  it('should return true on Major Triad', () => {
    const chord = ['C2', 'E2', 'G2'];
    expect(isTriad(chord)).toBe(true);
  });

  it('should return true on Minor Triad', () => {
    const chord = ['C', 'Eb', 'G'];
    expect(isTriad(chord)).toBe(true);
  });

  it('should return true on Diminished Triad', () => {
    const chord = ['C', 'D#', 'F#'];
    expect(isTriad(chord)).toBe(true);
  });

  it('should return true on Augmented Triad', () => {
    const chord = ['C', 'E', 'G#'];
    expect(isTriad(chord)).toBe(true);
  });

  it('should return false when input is not a triad', () => {
    const chord = [0, 3, 8];
    expect(isTriad(chord)).toBe(false);
  });

  it('should return false when input is not a triad', () => {
    const chord = [0, 3, 7, 3];
    expect(isTriad(chord)).toBe(false);
  });
});
