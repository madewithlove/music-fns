import getChromaticCPosition from './';

describe('getChromaticCPosition', () => {
  it('should return 0 on "C3"', () => {
    const note = 'C3';
    expect(getChromaticCPosition(note)).toBe(0);
  });

  it('should return 0 on "B#"', () => {
    const note = 'B#';
    expect(getChromaticCPosition(note)).toBe(0);
  });

  it('should return 1 on "C#1"', () => {
    const note = 'C#1';
    expect(getChromaticCPosition(note)).toBe(1);
  });

  it('should return 1 on "D♭1"', () => {
    const note = 'D♭1';
    expect(getChromaticCPosition(note)).toBe(1);
  });

  it('should return 2 on "D3"', () => {
    const note = 'D3';
    expect(getChromaticCPosition(note)).toBe(2);
  });

  it('should return 3 on "D#6"', () => {
    const note = 'D#6';
    expect(getChromaticCPosition(note)).toBe(3);
  });

  it('should return 3 on "Eb2"', () => {
    const note = 'Eb2';
    expect(getChromaticCPosition(note)).toBe(3);
  });

  it('should return 4 on "E3"', () => {
    const note = 'E3';
    expect(getChromaticCPosition(note)).toBe(4);
  });

  it('should return 4 on "Fb3"', () => {
    const note = 'Fb3';
    expect(getChromaticCPosition(note)).toBe(4);
  });

  it('should return 5 on "F8"', () => {
    const note = 'F3';
    expect(getChromaticCPosition(note)).toBe(5);
  });

  it('should return 5 on "E♯8"', () => {
    const note = 'E♯3';
    expect(getChromaticCPosition(note)).toBe(5);
  });

  it('should return 6 on "F#1"', () => {
    const note = 'F#1';
    expect(getChromaticCPosition(note)).toBe(6);
  });

  it('should return 6 on "Gb5"', () => {
    const note = 'Gb5';
    expect(getChromaticCPosition(note)).toBe(6);
  });

  it('should return 7 on "G4"', () => {
    const note = 'G4';
    expect(getChromaticCPosition(note)).toBe(7);
  });

  it('should return 8 on "G#5"', () => {
    const note = 'G#5';
    expect(getChromaticCPosition(note)).toBe(8);
  });

  it('should return 8 on "Ab9"', () => {
    const note = 'Ab9';
    expect(getChromaticCPosition(note)).toBe(8);
  });

  it('should return 9 on "A1"', () => {
    const note = 'A1';
    expect(getChromaticCPosition(note)).toBe(9);
  });

  it('should return 10 on "A#"', () => {
    const note = 'A#';
    expect(getChromaticCPosition(note)).toBe(10);
  });

  it('should return 10 on "Bb"', () => {
    const note = 'Bb';
    expect(getChromaticCPosition(note)).toBe(10);
  });

  it('should return 11 on "B8"', () => {
    const note = 'b8';
    expect(getChromaticCPosition(note)).toBe(11);
  });

  it('should return 11 on "Cb12"', () => {
    const note = 'Cb12';
    expect(getChromaticCPosition(note)).toBe(11);
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => getChromaticCPosition(note)).toThrow();
  });
});
