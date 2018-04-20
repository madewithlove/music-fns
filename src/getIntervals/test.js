import getIntervals from './';

describe('getIntervals', () => {
  it('should return the correct interval between "A" and "B"', () => {
    const note = 'A';
    const note2 = 'B';
    expect(getIntervals([note, note2])).toEqual([2]);
  });

  it('should return the correct interval between "D" and "C"', () => {
    const note = 'D';
    const note2 = 'C';
    expect(getIntervals([note, note2])).toEqual([10]);
  });

  it('should return the correct interval between "D" and "C"', () => {
    const note = 'D';
    const note2 = 'C';
    expect(getIntervals([note, note2], { direction: -1 })).toEqual([-2]);
  });

  it('should return the correct interval between "D1" and "D2"', () => {
    const note = 'D1';
    const note2 = 'D2';
    expect(getIntervals([note, note2])).toEqual([12]);
  });

  it('should return the correct interval between "D3" and "D1"', () => {
    const note = 'D3';
    const note2 = 'D1';
    expect(getIntervals([note, note2])).toEqual([-24]);
  });

  it('should return the correct interval between "D1" and "C#3"', () => {
    const note = 'D1';
    const note2 = 'C#3';
    expect(getIntervals([note, note2])).toEqual([23]);
  });

  it('should return the correct interval between "A6" and "A6"', () => {
    const note = 'A6';
    const note2 = 'A6';
    expect(getIntervals([note, note2])).toEqual([0]);
  });

  it('should return the correct interval between "D1" and "C#2"', () => {
    const note = 'D1';
    const note2 = 'C#2';
    expect(getIntervals([note, note2])).toEqual([11]);
  });

  it('should return the correct intervals between "C", "E" and "G"', () => {
    expect(getIntervals(['C', 'E', 'G'])).toEqual([4, 3]);
  });

  it('should return the correct intervals between ["D", "B", "A"] backwards', () => {
    expect(getIntervals(['D', 'B', 'A'], { direction: -1 })).toEqual([-3, -2]);
  });

  it('should return the correct intervals between "D", "B" and "A" backwards', () => {
    expect(getIntervals(['D', 'B', 'A'], { direction: -1 })).toEqual([-3, -2]);
  });

  it('should return the correct intervals between "C", "E" and "G" with fromRoot option', () => {
    expect(getIntervals(['C', 'E', 'G'], { fromRoot: true })).toEqual([4, 7]);
  });

  it('should throw when comparing a note with octave and one without octave scientific', () => {
    const note = 'A';
    const note2 = 'B1';
    expect(() => getIntervals([note, note2])).toThrow(
      'You can only calculate intervals for a uniform array (minimum size 2) of notes with or without octave'
    );
  });

  it('should throw when passing in incorrect notes array', () => {
    expect(() => getIntervals(true)).toThrow(
      'You can only calculate intervals for a uniform array (minimum size 2) of notes with or without octave'
    );
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    const note2 = 'G#2';
    expect(() => getIntervals([note, note2])).toThrow(
      'You can only calculate intervals for a uniform array (minimum size 2) of notes with or without octave'
    );
  });

  it('should throw on invalid amount of notes', () => {
    const note = 'G#2';
    expect(() => getIntervals([note])).toThrow(
      'You can only calculate intervals for a uniform array (minimum size 2) of notes with or without octave'
    );
  });

  it('should throw on invalid direction', () => {
    const note = 'A2';
    const note2 = 'G#2';
    expect(() => getIntervals([note, note2], { direction: 0 })).toThrow(
      'Direction should be 1 (up) or -1 (down)'
    );
  });

  it('should throw on invalid scientific note', () => {
    const note = 'G#2';
    const note2 = 'Fr';
    expect(() => getIntervals([note, note2])).toThrow(
      'You can only calculate intervals for a uniform array (minimum size 2) of notes with or without octave'
    );
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    const note2 = 'Fr';
    expect(() => getIntervals([note, note2])).toThrow();
  });
});
