import NOTES from './NOTES';
import {
  FLAT_SYMBOL,
  FLAT_LETTER,
  SHARP_SYMBOL,
  SHARP_LETTER
} from './Accidental';

describe('NOTES', () => {
  it('should return correct serie of notes', () => {
    const notes = [
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

    expect(NOTES).toEqual(notes);
  });
});

describe('Accidental', () => {
  it('should return correct flat', () => {
    expect(FLAT_SYMBOL).toEqual('♭');
    expect(FLAT_LETTER).toEqual('b');
  });
  it('should return correct sharp', () => {
    expect(SHARP_SYMBOL).toEqual('♯');
    expect(SHARP_LETTER).toEqual('#');
  });
});
