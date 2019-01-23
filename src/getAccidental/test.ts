import getAccidental from './index';

describe('getAccidental', () => {
  it('should return undefined on "A3"', () => {
    const note = 'A3';
    expect(getAccidental(note)).toBe(undefined);
  });

  it('should return "#" on "B#"', () => {
    const note = 'B#';
    expect(getAccidental(note)).toBe('#');
  });

  it('should return "♯" on "F♯7"', () => {
    const note = 'F♯7';
    expect(getAccidental(note)).toBe('♯');
  });

  it('should return "♭" on "C♭3"', () => {
    const note = 'C♭3';
    expect(getAccidental(note)).toBe('♭');
  });

  it('should return "b" on "Gb"', () => {
    const note = 'Gb';
    expect(getAccidental(note)).toBe('b');
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => getAccidental(note)).toThrow();
  });
});
