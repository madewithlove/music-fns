import noteToMidi from './index';

describe('noteToMidi', () => {
  it('should convert "C3" to its correct midi number', () => {
    const note = 'C3';
    expect(noteToMidi(note)).toEqual(48);
  });

  it('should convert "C4" to its correct midi number', () => {
    const note = 'C4';
    expect(noteToMidi(note)).toEqual(60);
  });

  it('should convert "C3" to its correct midi number', () => {
    const note = 'C3';
    expect(noteToMidi(note, { standard: 'C3' })).toEqual(60);
  });

  it('should convert "C0" to its correct midi number', () => {
    const note = 'C0';
    expect(noteToMidi(note)).toEqual(12);
  });

  it('should convert "G8" to its correct midi number', () => {
    const note = 'G8';
    expect(noteToMidi(note)).toEqual(115);
  });

  it('should convert "G7" to its correct midi number', () => {
    const note = 'G7';
    expect(noteToMidi(note)).toEqual(103);
  });

  it('should convert "A#6" to its correct midi number', () => {
    const note = 'A#6';
    expect(noteToMidi(note)).toEqual(94);
  });

  it('should convert "Bb6" to its correct midi number', () => {
    const note = 'Bb6';
    expect(noteToMidi(note)).toEqual(94);
  });

  it('should throw error on invalid note', () => {
    const note = 'Fr';
    expect(() => noteToMidi(note)).toThrow();
  });

  it('should throw error on invalid note', () => {
    const note = 'C#';
    expect(() => noteToMidi(note)).toThrow();
  });

  it('should throw error on invalid midi note standard', () => {
    const note = 'C4';
    expect(() => noteToMidi(note, { standard: 4 as unknown as string })).toThrow();
  });
});
