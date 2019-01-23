import getOctave from './index';

describe('getOctave', () => {
  it('should return undefined on "B#"', () => {
    const note = 'B#';
    expect(getOctave(note)).toBe(undefined);
  });

  it('should return 1 on "A#1"', () => {
    const note = 'A#1';
    expect(getOctave(note)).toBe(1);
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => getOctave(note)).toThrow();
  });
});
