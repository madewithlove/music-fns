import transferStyle from './';

describe('transferStyle', () => {
  it('convert "Eb" to "D#" with reference "B#"', () => {
    const reference = 'B#';
    const note = 'Eb';
    expect(transferStyle(note, reference)).toBe('D#');
  });

  it('convert "F♭" to "F♭" with reference "G♯"', () => {
    const reference = 'G♯';
    const note = 'F♭';
    expect(transferStyle(note, reference)).toBe('F♭');
  });

  it('convert "G#7" to "A♭7" with reference "B♭9"', () => {
    const reference = 'B♭9';
    const note = 'G#7';
    expect(transferStyle(note, reference)).toBe('A♭7');
  });

  it('convert "Ab3" to "Ab3" with reference "B"', () => {
    const reference = 'B';
    const note = 'Ab3';
    expect(transferStyle(note, reference)).toBe('Ab3');
  });

  it('convert "A♭3" to "A♭3" with reference "B"', () => {
    const reference = 'B';
    const note = 'A♭3';
    expect(transferStyle(note, reference)).toBe('A♭3');
  });

  it('should throw on invalid reference or note', () => {
    const reference = 'Fr';
    const note = 'Ab4';
    expect(() => transferStyle(note, reference)).toThrow();
  });

  it('should throw on invalid reference or note', () => {
    const reference = 'G#4';
    const note = 'Fr';
    expect(() => transferStyle(note, reference)).toThrow();
  });
});
