import changeOctave from './';

describe('changeOctave', () => {
  it('change "B#" to "B#1"', () => {
    const note = 'B#';
    expect(changeOctave(note, 1)).toBe('B#1');
  });

  it('change "B#1" to "B#"', () => {
    const note = 'B#1';
    expect(changeOctave(note)).toBe('B#');
  });

  it('change "C3" to "C7"', () => {
    const note = 'C3';
    expect(changeOctave(note, 7)).toBe('C7');
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => changeOctave(note)).toThrow();
  });
});
