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
import sharpToFlat from './';

describe('sharpToFlat', () => {
  it('convert "C" to "C"', () => {
    const note = 'C';
    expect(sharpToFlat(note)).toBe('C');
  });

  it('convert "C♯3" to "D♭3"', () => {
    const note = 'C♯3';
    expect(sharpToFlat(note)).toBe('D♭3');
  });

  it('convert "Db6" to "Db6"', () => {
    const note = 'Db6';
    expect(sharpToFlat(note)).toBe('Db6');
  });

  it('convert "G♯3" to "A♭3"', () => {
    const note = 'G♯3';
    expect(sharpToFlat(note)).toBe('A♭3');
  });

  it('convert "Cb3" to "Cb3"', () => {
    const note = 'Cb3';
    expect(sharpToFlat(note)).toBe('Cb3');
  });

  it('convert "E#3" to "E#3"', () => {
    const note = 'E#3';
    expect(sharpToFlat(note)).toBe('E#3');
  });

  it('convert "D♯7" to "E♭7"', () => {
    const note = 'D♯7';
    expect(sharpToFlat(note)).toBe('E♭7');
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => sharpToFlat(note)).toThrow();
  });
});
