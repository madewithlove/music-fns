import createPattern from './';

describe('createPattern', () => {
  it('should create a pattern', () => {
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const positions = [0, 2, 4, 2];

    const pattern = ['C', 'E', 'G', 'E'];

    expect(createPattern(notes, positions)).toEqual(pattern);
  });

  it('should create a correct pattern', () => {
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const positions = [0, 0, 0, 2];

    const pattern = ['C', 'C', 'C', 'E'];

    expect(createPattern(notes, positions)).toEqual(pattern);
  });

  it('should create a correct pattern', () => {
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const positions = [0, 7, 0, 3];

    expect(() => createPattern(notes, positions)).toThrowError(
      `Please provide a pattern array with note positions`
    );
  });

  it('should create a correct pattern', () => {
    const notes = ['C', 'Fr', 'E', 'F', 'G', 'A', 'B'];
    const positions = [0, 2, 0, 2];

    expect(() => createPattern(notes, positions)).toThrowError(
      `Please provide an array of scientific notes`
    );
  });
});
