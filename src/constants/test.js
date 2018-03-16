import Notes from './Notes';

describe('Notes', () => {
  it('should return correct serie of notes', () => {
    const notes = [
      'C',
      'C#',
      'D',
      'D#',
      'E',
      'F',
      'F#',
      'G',
      'G#',
      'A',
      'A#',
      'B'
    ];

    expect(Notes).toEqual(notes);
  });
});
