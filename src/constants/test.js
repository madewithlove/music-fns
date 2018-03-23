import NOTES from './NOTES';
import { FLAT, SHARP } from './Accidental';

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
    expect(FLAT).toEqual('♭');
  });
  it('should return correct flat', () => {
    expect(SHARP).toEqual('♯');
  });
});
