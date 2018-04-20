import hasAccidentalLetter from './';

describe('hasAccidentalLetter', () => {
  it('return false on "B♯"', () => {
    const note = 'B♯';
    expect(hasAccidentalLetter(note)).toBe(false);
  });

  it('return false on "A♭3"', () => {
    const note = 'A♭3';
    expect(hasAccidentalLetter(note)).toBe(false);
  });

  it('return true on "B#"', () => {
    const note = 'B#';
    expect(hasAccidentalLetter(note)).toBe(true);
  });

  it('return true on "Ab3"', () => {
    const note = 'Ab3';
    expect(hasAccidentalLetter(note)).toBe(true);
  });

  it('return false on "F"', () => {
    const note = 'F';
    expect(hasAccidentalLetter(note)).toBe(false);
  });

  it('return false on invalid scientific note', () => {
    const note = 'Fr';
    expect(hasAccidentalLetter(note)).toBe(false);
  });
});
