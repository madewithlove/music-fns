import Notes from './Notes';
import { flat, sharp } from './Accidental';

describe('Notes', () => {
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

    expect(Notes).toEqual(notes);
  });
});

describe('Accidental', () => {
  it('should return correct flat', () => {
    expect(flat).toEqual('♭');
  });
  it('should return correct flat', () => {
    expect(sharp).toEqual('♯');
  });
});
