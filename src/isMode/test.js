// https://en.wikipedia.org/wiki/Mode_(music)

import isMode from './';

describe('isMode', () => {
  // C -> C (White keys)
  it('should return true on Ionian Mode / Major Scale', () => {
    const mode = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(isMode(mode)).toBe(true);
  });

  it('should return true on Ionian Mode / Major Scale', () => {
    const mode = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
    expect(isMode(mode)).toBe(true);
  });

  // D -> D (White keys)
  it('should return true on Dorian Mode', () => {
    const mode = ['D', 'E', 'F', 'G', 'A', 'B', 'C'];
    expect(isMode(mode)).toBe(true);
  });
  it('should return true on Dorian Mode', () => {
    const mode = ['D', 'E', 'F', 'G', 'A', 'B', 'C', 'D'];
    expect(isMode(mode)).toBe(true);
  });

  // E -> E (White keys)
  it('should return true on Phrygian Mode', () => {
    const mode = ['E', 'F', 'G', 'A', 'B', 'C', 'D'];
    expect(isMode(mode)).toBe(true);
  });
  it('should return true on Phrygian Mode', () => {
    const mode = ['E', 'F', 'G', 'A', 'B', 'C', 'D', 'E'];
    expect(isMode(mode)).toBe(true);
  });

  // F -> F (White keys)
  it('should return true on Lydian Mode', () => {
    const mode = ['F', 'G', 'A', 'B', 'C', 'D', 'E'];
    expect(isMode(mode)).toBe(true);
  });
  it('should return true on Lydian Mode', () => {
    const mode = ['F', 'G', 'A', 'B', 'C', 'D', 'E', 'F'];
    expect(isMode(mode)).toBe(true);
  });

  // G -> G (White keys)
  it('should return true on Mixolydian Mode', () => {
    const mode = ['G', 'A', 'B', 'C', 'D', 'E', 'F'];
    expect(isMode(mode)).toBe(true);
  });
  it('should return true on Mixolydian Mode', () => {
    const mode = ['G', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
    expect(isMode(mode)).toBe(true);
  });

  // A -> A (White keys)
  it('should return true on Aeolian Mode / Natural Minor', () => {
    const mode = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    expect(isMode(mode)).toBe(true);
  });
  it('should return true on Aeolian Mode / Natural Minor', () => {
    const mode = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A'];
    expect(isMode(mode)).toBe(true);
  });

  // B -> B (White keys)
  it('should return true on Locrian Mode', () => {
    const mode = ['B', 'C', 'D', 'E', 'F', 'G', 'A'];
    expect(isMode(mode)).toBe(true);
  });
  it('should return true on Locrian Mode', () => {
    const mode = ['B', 'C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(isMode(mode)).toBe(true);
  });

  it('should return false when input is not a mode', () => {
    const scale = [2, 1, 2, 1, 2, 2, 2];
    expect(isMode(scale)).toBe(false);
  });

  it('should return false when input is not a mode', () => {
    const scale = ['B', 'C', 'D', 'E', 'F', 'G', 'A', 'C'];
    expect(isMode(scale)).toBe(false);
  });

  it('should return false when input is not a mode', () => {
    const scale = ['G', 'C', 'D', 'E', 'F', 'G', 'A', 'C'];
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
