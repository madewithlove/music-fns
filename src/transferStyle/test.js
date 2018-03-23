import transferStyle from './';

/*

export default [
  ['C', 'B♯'],
  ['C♯', 'D♭'],
  ['D'],
  ['D♯', 'E♭'],
  ['E', 'F♭'],
  ['F', 'E♯'],
  ['F♯', 'G♭'],
  ['G'],
  ['G♯', 'A♭'],
  ['A'],
  ['A♯', 'B♭'],
  ['B', 'C♭']
];

*/

describe('transferStyle', () => {
  it('convert "Eb" to "D#" with reference "B#"', () => {
    const reference = 'B#';
    const note = 'Eb';
    expect(transferStyle(reference, note)).toBe('D#');
  });

  it('convert "F♭" to "F♭" with reference "G♯"', () => {
    const reference = 'G♯';
    const note = 'F♭';
    expect(transferStyle(reference, note)).toBe('F♭');
  });

  it('convert "G#7" to "A♭7" with reference "B♭9"', () => {
    const reference = 'B♭9';
    const note = 'G#7';
    expect(transferStyle(reference, note)).toBe('A♭7');
  });

  it('convert "Ab3" to "Ab3" with reference "B"', () => {
    const reference = 'B';
    const note = 'Ab3';
    expect(transferStyle(reference, note)).toBe('Ab3');
  });

  it('convert "A♭3" to "A♭3" with reference "B"', () => {
    const reference = 'B';
    const note = 'A♭3';
    expect(transferStyle(reference, note)).toBe('A♭3');
  });

  it('should throw on invalid reference or note', () => {
    const reference = 'Fr';
    const note = 'Fr';
    expect(() => transferStyle(reference, note)).toThrow();
  });

  it('should throw on invalid reference or note', () => {
    const reference = 'Fr';
    const note = 'Fr';
    expect(() => transferStyle(reference, note)).toThrow();
  });
});
