import getDirection from './index';

describe('getDirection', () => {
  it('should return undefined on "A3"', () => {
    const direction = 0;
    expect(getDirection(direction)).toThrow();
  });

  it('should return 1 on 0.1', () => {
    const direction = 0.1;
    expect(getDirection(direction)).toEqual(1);
  });

  it('should return -1 on -0.1', () => {
    const direction = -0.1;
    expect(getDirection(direction)).toBe(-1);
  });

  it('should return 1 on 1000', () => {
    const direction = 1000;
    expect(getDirection(direction)).toBe(1);
  });

  it('should return -1 on -1000', () => {
    const direction = -1000;
    expect(getDirection(direction)).toBe(-1);
  });

  it('should throw on invalid input', () => {
    const direction = 'Fr';
    expect(() => getDirection(direction as unknown as number)).toThrow();
  });
});
