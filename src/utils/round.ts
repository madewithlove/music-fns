export function round(value: number, decimals = 2): number {
  return Math.round(value * 10 ** decimals) / 10 ** decimals;
}
