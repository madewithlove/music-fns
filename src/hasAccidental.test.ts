import { describe, it, expect } from "vitest";
import { hasAccidental } from "./hasAccidental";

import {
  notesWithOctaveAndWithAccidental,
  notesWithOctaveWithoutAccidental,
  notesWithoutOctaveAndWithoutAccidental,
  notesWithoutOctaveWithAccidental,
} from "./testData";

const notesWithAccidental = [
  ...notesWithoutOctaveWithAccidental,
  ...notesWithOctaveAndWithAccidental,
];

const notesWithoutAccidental = [
  ...notesWithoutOctaveAndWithoutAccidental,
  ...notesWithOctaveWithoutAccidental,
];

describe("hasAccidental", () => {
  it.each(notesWithAccidental)(
    "should return true for a note with accidental (# or b)",
    ({ note }) => {
      expect(hasAccidental(note)).toBe(true);
    },
  );

  it.each(notesWithoutAccidental)(
    "should return false for a note without accidental (# or b)",
    ({ note }) => {
      expect(hasAccidental(note)).toBe(false);
    },
  );
});
