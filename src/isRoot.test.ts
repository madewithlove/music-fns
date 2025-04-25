import { describe, it, expect } from "vitest";
import { isRoot } from "./isRoot";
import {
  junkData,
  notesWithOctaveAndWithAccidental,
  notesWithOctaveWithoutAccidental,
  notesWithoutOctaveAndWithoutAccidental,
} from "./testData";

describe("isRoot", () => {
  it.each(notesWithoutOctaveAndWithoutAccidental)(
    "should validate valid root",
    ({ note }) => {
      expect(isRoot(note)).toBe(true);
    },
  );

  it.each([
    ...junkData,
    -10,
    30,
    "x",
    "y",
    "z",
    ...notesWithOctaveAndWithAccidental,
    ...notesWithOctaveWithoutAccidental,
  ])("should validate invalid root", (root) => {
    expect(isRoot(root)).toBe(false);
  });
});
