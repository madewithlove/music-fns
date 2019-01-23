import areEqual from './index';

describe('areEqual', () => {
  it('should return true when comparing "C" and "B♯"', () => {
    const note = 'C';
    const note2 = 'B♯';
    expect(areEqual([note, note2])).toEqual(true);
  });

  it('should return false when comparing "C" and "D"', () => {
    const note = 'C';
    const note2 = 'D';
    expect(areEqual([note, note2])).toEqual(false);
  });

  it('should return true when comparing "G#2" and "Ab2"', () => {
    const note = 'G#2';
    const note2 = 'Ab2';
    expect(areEqual([note, note2])).toEqual(true);
  });

  it('should return false when comparing "Eb7" and "A♯7"', () => {
    const note = 'Eb7';
    const note2 = 'A♯7';
    expect(areEqual([note, note2])).toEqual(false);
  });

  it('should return true when comparing "F♯3" and "Gb3"', () => {
    const note = 'F♯3';
    const note2 = 'Gb3';
    expect(areEqual([note, note2])).toEqual(true);
  });

  it('should return false when comparing invalid scientific notes', () => {
    const note = 'Fr';
    const note2 = 'G#2';
    expect(areEqual([note, note2])).toEqual(false);
  });

  it('should return false when comparing invalid scientific notes', () => {
    const note = 'G#2';
    const note2 = 'Fr';
    expect(areEqual([note, note2])).toEqual(false);
  });

  it('should return false when comparing invalid scientific notes', () => {
    const note = 'Fr';
    const note2 = 'Fr';
    expect(areEqual([note, note2])).toEqual(false);
  });
});
