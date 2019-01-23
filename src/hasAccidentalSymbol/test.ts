import hasAccidentalSymbol from './index';

describe('hasAccidentalSymbol', () => {
  it('return true on "B♯"', () => {
    const note = 'B♯';
    expect(hasAccidentalSymbol(note)).toBe(true);
  });

  it('return true on "A♭3"', () => {
    const note = 'A♭3';
    expect(hasAccidentalSymbol(note)).toBe(true);
  });

  it('return false on "B#"', () => {
    const note = 'B#';
    expect(hasAccidentalSymbol(note)).toBe(false);
  });

  it('return false on "Ab3"', () => {
    const note = 'Ab3';
    expect(hasAccidentalSymbol(note)).toBe(false);
  });

  it('return false on "F"', () => {
    const note = 'F';
    expect(hasAccidentalSymbol(note)).toBe(false);
  });

  it('return false on invalid scientific note', () => {
    const note = 'Fr';
    expect(hasAccidentalSymbol(note)).toBe(false);
  });
});
