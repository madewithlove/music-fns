// https://en.wikipedia.org/wiki/Mode_(music)

import isMode from './';

describe('isMode', () => {
  // C -> C (White keys)
  it('should return true on Ionian Mode / Major Scale', () => {
    const mode = [2, 2, 1, 2, 2, 2, 1];
    expect(isMode(mode)).toBe(true);
  });

  // D -> D (White keys)
  it('should return true on Dorian Mode', () => {
    const mode = [2, 1, 2, 2, 2, 1, 2];
    expect(isMode(mode)).toBe(true);
  });

  // E -> E (White keys)
  it('should return true on Phrygian Mode', () => {
    const mode = [1, 2, 2, 2, 1, 2, 2];
    expect(isMode(mode)).toBe(true);
  });

  // F -> F (White keys)
  it('should return true on Lydian Mode', () => {
    const mode = [2, 2, 2, 1, 2, 2, 1];
    expect(isMode(mode)).toBe(true);
  });

  // G -> G (White keys)
  it('should return true on Mixolydian Mode', () => {
    const mode = [2, 2, 1, 2, 2, 1, 2];
    expect(isMode(mode)).toBe(true);
  });

  // A -> A (White keys)
  it('should return true on Aeolian Mode / Natural Minor', () => {
    const mode = [2, 1, 2, 2, 1, 2, 2];
    expect(isMode(mode)).toBe(true);
  });

  // B -> B (White keys)
  it('should return true on Locrian Mode', () => {
    const mode = [1, 2, 2, 1, 2, 2, 2];
    expect(isMode(mode)).toBe(true);
  });

  it('should return false when input is not a mode', () => {
    const scale = [2, 1, 2, 1, 2, 2, 2];
    expect(isMode(scale)).toBe(false);
  });

  it('should return false when input is not a mode', () => {
    const scale = [2, 1, 2, 1, 3, 2, 2];
    expect(isMode(scale)).toBe(false);
  });

  it('should return false when input is not a mode', () => {
    const scale = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(isMode(scale)).toBe(false);
  });
});
