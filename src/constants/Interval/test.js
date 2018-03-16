import AugmentedDiminished from './AugmentedDiminished';
import MinorMajor from './MinorMajor';
import Short from './Short';
import Names from './Names';

describe('should return correct intervals for Short naming', () => {
  const data = {
    R: 0,
    S: 1,
    T: 2,
    TT: 6,
    O: 12
  };

  it(`should contain correct interval data`, () => {
    expect(Short).toEqual(data);
  });
});

describe('should return correct intervals for normal naming', () => {
  const data = {
    ROOT: 0,
    SEMITONE: 1,
    TONE: 2,
    TRITONE: 6,
    OCTAVE: 12
  };

  it(`should contain correct interval data`, () => {
    expect(Names).toEqual(data);
  });
});

describe('should return correct intervals for Augmented and Diminished', () => {
  const data = {
    DIMINISHED_SECOND: 0,
    d2: 0,
    AUGMENTED_UNISON: 1,
    A1: 1,
    DIMISHED_THIRD: 2,
    d3: 2,
    AUGMENTED_SECOND: 3,
    A2: 3,
    DIMINISHED_FOURTH: 4,
    d4: 4,
    AUGMENTED_THIRD: 5,
    A3: 5,
    DIMINISHED_FIFTH: 6,
    d5: 6,
    AUGMENTED_FOURTH: 6,
    A4: 6,
    DIMINISHED_SIXTH: 7,
    d6: 7,
    AUGMENTED_FIFTH: 8,
    A5: 8,
    DIMINISHED_SEVENTH: 9,
    d7: 9,
    AUGMENTED_SIXTH: 10,
    A6: 10,
    DIMINISHED_OCTAVE: 11,
    DIMINISHED_EIGHTH: 11,
    d8: 11,
    AUGMENTED_SEVENTH: 12,
    A7: 12
  };

  it(`should contain correct interval data`, () => {
    expect(AugmentedDiminished).toEqual(data);
  });
});

describe('should return correct intervals for Minor and Major', () => {
  const data = {
    PERFECT_UNISON: 0,
    P1: 0,
    MINOR_SECOND: 1,
    m2: 1,
    MAJOR_SECOND: 2,
    M2: 2,
    MINOR_THIRD: 3,
    m3: 3,
    MAJOR_THIRD: 4,
    M3: 4,
    PERFECT_FOURTH: 5,
    P4: 5,
    PERFECT_FIFTH: 7,
    P5: 7,
    MINOR_SIXTH: 8,
    m6: 8,
    MAJOR_SIXTH: 9,
    M6: 9,
    MINOR_SEVENTH: 10,
    m7: 10,
    MAJOR_SEVENTH: 11,
    M7: 11,
    PERFECT_OCTAVE: 12,
    P8: 12
  };

  it(`should contain correct interval data`, () => {
    expect(MinorMajor).toEqual(data);
  });
});
