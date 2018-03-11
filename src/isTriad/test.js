// https://en.wikipedia.org/wiki/Triad_(music)

import isTriad from './';

describe('isTriad', () => {
  it('should return true on Major Triad', () => {
    const pitches = [0, 4, 7];
    expect(isTriad(pitches)).toBe(true);
  });

  it('should return true on Minor Triad', () => {
    const pitches = [0, 3, 7];
    expect(isTriad(pitches)).toBe(true);
  });

  it('should return true on Diminished Triad', () => {
    const pitches = [0, 3, 6];
    expect(isTriad(pitches)).toBe(true);
  });

  it('should return true on Augmented Triad', () => {
    const pitches = [0, 4, 8];
    expect(isTriad(pitches)).toBe(true);
  });

  it('should return false when input is not a triad', () => {
    const pitches = [0, 3, 8];
    expect(isTriad(pitches)).toBe(false);
  });

  it('should return false when input is not a triad', () => {
    const pitches = [0, 3, 7, 3];
    expect(isTriad(pitches)).toBe(false);
  });
});
