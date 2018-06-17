import createScale from './';
import Scale from '../constants/Scale';
import Mode from '../constants/Mode';

describe('createScale', () => {
  it('should create a correct C Major scale', () => {
    const root = 'C';
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

    expect(createScale(root, Scale.MAJOR)).toEqual(scale);
  });

  it('should create a correct F# Harmonic Minor scale', () => {
    const root = 'F#';
    const scale = ['F#', 'G#', 'A', 'B', 'C#', 'D', 'F'];

    expect(createScale(root, Scale.HARMONIC_MINOR)).toEqual(scale);
  });

  it('should create a correct F# Harmonic Minor scale with root end', () => {
    const root = 'F#';
    const scale = ['F#', 'G#', 'A', 'B', 'C#', 'D', 'F', 'F#'];

    expect(
      createScale(root, Scale.HARMONIC_MINOR, { includeRootEnd: true })
    ).toEqual(scale);
  });

  it('should create a correct A5 Prometheus scale', () => {
    const root = 'A5';
    const scale = ['A5', 'B5', 'C#6', 'D#6', 'F#6', 'G6'];

    expect(createScale(root, Scale.PROMETHEUS)).toEqual(scale);
  });

  it('should create a correct D Major scale', () => {
    const root = 'D2';
    const scale = ['D2', 'E2', 'F#2', 'G2', 'A2', 'B2', 'C#3'];

    expect(createScale(root, Scale.MAJOR)).toEqual(scale);
  });

  it('should create a correct A Aeolian mode', () => {
    const root = 'A2';
    const scale = ['A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G3'];

    expect(createScale(root, Mode.AEOLIAN)).toEqual(scale);
  });

  it('should create a correct B Locrian mode', () => {
    const root = 'B2';
    const scale = ['B2', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3'];

    expect(createScale(root, Mode.LOCRIAN)).toEqual(scale);
  });

  it('should throw on invalid scientific note', () => {
    const root = 'Fr';
    expect(() => createScale(root, Mode.LOCRIAN)).toThrow();
  });

  it('should throw an error on incorrect scale interval array', () => {
    const root = 'A♭3';
    expect(() => createScale(root, [])).toThrowError(
      `Provide a valid collection of scale intervals ex: [1, 2, 1, 2, 1]`
    );
  });

  it('should throw an error on incorrect scale interval array', () => {
    const root = 'A♭3';
    expect(() => createScale(root, [1, 2, 'ok'])).toThrowError(
      `Provide a valid collection of scale intervals ex: [1, 2, 1, 2, 1]`
    );
  });

  it('should throw an error on incorrect scale interval array', () => {
    const root = 'A♭3';
    expect(() => createScale(root, 'test')).toThrowError(
      `Provide a valid collection of scale intervals ex: [1, 2, 1, 2, 1]`
    );
  });
});
