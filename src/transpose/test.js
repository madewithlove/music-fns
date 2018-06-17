import transpose from './';
import Interval from '../constants/Interval';

describe('transpose', () => {
  it('should return "C#2" when transposing "C#1" a full octave up', () => {
    const note = 'C#1';
    const interval = Interval.O;
    expect(transpose(note, interval)).toBe('C#2');
  });

  it('should return "F#3" when transposing "A3" 3 semitones down', () => {
    const note = 'A3';
    const interval = -Interval.S * 3;
    expect(transpose(note, interval)).toBe('F#3');
  });

  it('should return "D0" when transposing "C0" 2 semitones up', () => {
    const note = 'C0';
    const interval = Interval.S * 2;
    expect(transpose(note, interval)).toBe('D0');
  });

  it('should return "A♯2" when transposing "E♭3" 5 semitones down', () => {
    const note = 'E♭3';
    const interval = -Interval.S * 5;
    expect(transpose(note, interval)).toBe('B♭2');
  });

  it('should return "A♯2" when transposing "E♯3" 7 semitones down', () => {
    const note = 'E♯3';
    const interval = -Interval.S * 7;
    expect(transpose(note, interval)).toBe('A♯2');
  });

  it('should return "E2" when transposing "E♯4" 2 octaves & 1 semitone down', () => {
    const note = 'E♯4';
    const interval = -Interval.O * 2 - Interval.S;
    expect(transpose(note, interval)).toBe('E2');
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

  it('should return "A1" when transposing "A2" 1 octave down', () => {
    const note = 'A2';
    const interval = -Interval.O;
    expect(transpose(note, interval)).toBe('A1');
  });

  it('should return "C9" when transposing "F10" 5 semitones & 1 octave down', () => {
    const note = 'F10';
    const interval = -(Interval.S * 5 + Interval.O);
    expect(transpose(note, interval)).toBe('C9');
  });

  it('should return "B2" when transposing "D6" 3 octaves & 3 semitones down', () => {
    const note = 'D6';
    const interval = -Interval.O * 3 - 3 * Interval.S;
    expect(transpose(note, interval)).toBe('B2');
  });

  it('should return "C2" when transposing "A1" 3 semitones up', () => {
    const note = 'A1';
    const interval = Interval.S * 3;
    expect(transpose(note, interval)).toBe('C2');
  });

  it('should return "E3" when transposing "G♭5" 2 octaves and 2 semitones down', () => {
    const note = 'G♭5';
    const interval = -Interval.O * 2 - 2 * Interval.S;
    expect(transpose(note, interval)).toBe('E3');
  });

  it('should return "E3" when transposing "G♯3" 4 semitones down', () => {
    const note = 'G♯3';
    const interval = -Interval.S * 4;
    expect(transpose(note, interval)).toBe('E3');
  });

  it('should return "F4" when transposing "E4" 1 semitone up', () => {
    const note = 'E4';
    const interval = Interval.S;
    expect(transpose(note, interval)).toBe('F4');
  });

  it('should return "F" when transposing "E" 1 semitone up', () => {
    const note = 'E';
    const interval = Interval.S;
    expect(transpose(note, interval)).toBe('F');
  });

  it('should return "C" when transposing "B" 1 semitone down', () => {
    const note = 'C';
    const interval = -Interval.S;
    expect(transpose(note, interval)).toBe('B');
  });

  it('should return "G#" when transposing "B" 3 semitones down', () => {
    const note = 'B';
    const interval = -3 * Interval.S;
    expect(transpose(note, interval)).toBe('G#');
  });

  it('should return "G" when transposing "G" 2 octaves down', () => {
    const note = 'G';
    const interval = -2 * Interval.O;
    expect(transpose(note, interval)).toBe('G');
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    const interval = 6;
    expect(() => transpose(note, interval)).toThrow();
  });

  it('should throw on invalid reference note', () => {
    const note = 'G';
    const interval = 6;
    const reference = 'Fr';
    expect(() => transpose(note, interval, reference)).toThrow();
  });

  it('should throw an error on invalid interval', () => {
    const note = 'G';
    const interval = 'ok';
    expect(() => transpose(note, interval)).toThrowError(
      'Interval must be a number'
    );
  });
});
