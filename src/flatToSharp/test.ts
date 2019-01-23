import flatToSharp from './index';

describe('flatToSharp', () => {
  it('convert "C" to "C"', () => {
    const note = 'C';
    expect(flatToSharp(note)).toBe('C');
  });

  it('convert "C#" to C#"', () => {
    const note = 'C#';
    expect(flatToSharp(note)).toBe('C#');
  });

  it('convert "Db6" to "C#6"', () => {
    const note = 'Db6';
    expect(flatToSharp(note)).toBe('C#6');
  });

  it('convert "A♭3" to "G♯3"', () => {
    const note = 'A♭3';
    expect(flatToSharp(note)).toBe('G♯3');
  });

  it('convert "Cb3" to "Cb3"', () => {
    const note = 'Cb3';
    expect(flatToSharp(note)).toBe('Cb3');
  });

  it('convert "B♭9" to "A♯9"', () => {
    const note = 'B♭9';
    expect(flatToSharp(note)).toBe('A♯9');
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => flatToSharp(note)).toThrow();
  });
});
