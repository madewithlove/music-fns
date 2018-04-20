import isValidScale from './';

describe('isValidScale', () => {
  it('should return true on a valid scale', () => {
    const scale = ['A'];
    expect(isValidScale(scale)).toBe(true);
  });

  it('should return true on a valid scale', () => {
    const scale = ['A#3', 'B7'];
    expect(isValidScale(scale)).toBe(true);
  });

  it('should return true on a valid scale', () => {
    const scale = ['A', 'B'];
    expect(isValidScale(scale)).toBe(true);
  });

  it('should return false on an invalid scale', () => {
    const scale = ['A', 'B2'];
    expect(isValidScale(scale)).toBe(false);
  });

  it('should return false on invalid scale', () => {
    const scale = ['A', 'Fr'];
    expect(isValidScale(scale)).toBe(false);
  });
});
