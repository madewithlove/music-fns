import transpose from './';
import Interval from '../constants/Interval';

describe('transpose', () => {
  it('should return "C#2" when transposing "C#1" a full octave up', () => {
    const note = 'C#1';
    const interval = Interval.O;
    expect(transpose(note, interval)).toBe('C#2');
  });

  it('should return "F♯3" when transposing "A3" 3 semitones down', () => {
    const note = 'A3';
    const interval = -Interval.S * 3;
    expect(transpose(note, interval)).toBe('F♯3');
  });

  it('should return "A♭2" when transposing "A♭2" 0 semitones', () => {
    const note = 'A♭2';
    const interval = 0;
    expect(transpose(note, interval)).toBe('A♭2');
  });

  it('should return "Gb4" when transposing "Eb4" 3 semitones up', () => {
    const note = 'Eb4';
    const interval = Interval.S * 3;
    expect(transpose(note, interval)).toBe('Gb4');
  });

  it('should return "A♭4" when transposing "E♭4" 5 semitones up', () => {
    const note = 'E♭4';
    const interval = Interval.S * 5;
    expect(transpose(note, interval)).toBe('A♭4');
  });

  it('should return "A1" when transposing "A2" a full octave down', () => {
    const note = 'A2';
    const interval = -Interval.O;
    expect(transpose(note, interval)).toBe('A1');
  });

  it('should return "C9" when transposing "F10" a 5 semitones and an octave down', () => {
    const note = 'F10';
    const interval = -(Interval.S * 5 + Interval.O);
    expect(transpose(note, interval)).toBe('C9');
  });

  it('should return "B2" when transposing "D6" a 3 octaves and 3 semitones down', () => {
    const note = 'D6';
    const interval = -Interval.O * 3 - 3 * Interval.S;
    expect(transpose(note, interval)).toBe('B2');
  });

  it('should return "C2" when transposing "A1" 3 semitones up', () => {
    const note = 'A1';
    const interval = Interval.S * 3;
    expect(transpose(note, interval)).toBe('C2');
  });

  it('should return "F4" when transposing "E4" 1 semitones up', () => {
    const note = 'E4';
    const interval = Interval.S;
    expect(transpose(note, interval)).toBe('F4');
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    const interval = 6;
    expect(() => transpose(note, interval)).toThrow();
  });
});
