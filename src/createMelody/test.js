import createMelody from './';

describe('createMelody', () => {
  it('should create a pattern', () => {
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const positions = [0, 2, 4, 2];

    const pattern = ['C', 'E', 'G', 'E'];

    expect(createMelody(notes, positions)).toEqual(pattern);
  });

  it('should create a correct pattern', () => {
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const positions = [0, 0, 0, 2];

    const pattern = ['C', 'C', 'C', 'E'];

    expect(createMelody(notes, positions)).toEqual(pattern);
  });

  it('should create a correct pattern', () => {
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const positions = [0, 7, 0, 3];

    expect(() => createMelody(notes, positions)).toThrow(
      `Please provide an array with note positions (max position: 6)`
    );
  });

  it('should create a correct pattern', () => {
    const notes = ['C', 'Fr', 'E', 'F', 'G', 'A', 'B'];
    const positions = [0, 2, 0, 2];

    expect(() => createMelody(notes, positions)).toThrow(
      `Please provide an array of scientific notes`
    );
  });
});
