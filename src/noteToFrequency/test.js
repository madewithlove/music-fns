import noteToFrequency from './';

describe('noteToFrequency', () => {
  it('should convert "A4" to its correct frequency', () => {
    const note = 'A4';
    expect(noteToFrequency(note)).toEqual(440);
  });

  it('should convert "C0" to its correct frequency', () => {
    const note = 'C0';
    expect(Math.round(noteToFrequency(note) * 100) / 100).toEqual(16.35);
  });

  it('should convert "G7" to its correct frequency', () => {
    const note = 'G7';
    expect(Math.round(noteToFrequency(note) * 100) / 100).toEqual(3135.96);
  });

  it('should convert "A#6" to its correct frequency', () => {
    const note = 'A#6';
    expect(Math.round(noteToFrequency(note) * 100) / 100).toEqual(1864.66);
  });

  it('should convert "Bb6" to its correct frequency', () => {
    const note = 'Bb6';
    expect(Math.round(noteToFrequency(note) * 100) / 100).toEqual(1864.66);
  });

  it('should convert "A4" to its correct frequency with different standard', () => {
    const note = 'A4';
    expect(noteToFrequency(note, { standard: 442 })).toEqual(442);
  });

  it('should throw error on invalid note', () => {
    const note = 'Fr';
    expect(() => noteToFrequency(note)).toThrow();
  });

  it('should throw error on invalid note', () => {
    const note = 'C#';
    expect(() => noteToFrequency(note)).toThrow(' ');
  });
});
