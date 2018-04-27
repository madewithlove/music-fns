import isNatural from './';

describe('isNatural', () => {
  it('should return true on "A"', () => {
    const note = 'A';
    expect(isNatural(note)).toBe(true);
  });

  it('should return true on "F3"', () => {
    const note = 'F3';
    expect(isNatural(note)).toBe(true);
  });

  it('should return false on "B#"', () => {
    const note = 'B#';
    expect(isNatural(note)).toBe(false);
  });

  it('should return false on "G♯"', () => {
    const note = 'G♯';
    expect(isNatural(note)).toBe(false);
  });

  it('should return false on "Ab3"', () => {
    const note = 'Ab3';
    expect(isNatural(note)).toBe(false);
  });

  it('should return false on "C♭"', () => {
    const note = 'C♭';
    expect(isNatural(note)).toBe(false);
  });

  it('should return false on invalid scientific note', () => {
    const note = 'Fr';
    expect(isNatural(note)).toBe(false);
  });
});
