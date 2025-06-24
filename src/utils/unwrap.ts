export function unwrap<T>(array: T[]): T {
  if (array.length !== 1) {
    throw new Error("Array must contain exactly one item");
  }
  return array[0];
}
