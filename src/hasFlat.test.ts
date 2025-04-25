import { describe, it, expect } from "vitest";
import { hasFlat } from "./hasFlat";

import {
  notesWithOctaveAndWithAccidental,
  notesWithOctaveWithoutAccidental,
  notesWithoutOctaveAndWithoutAccidental,
  notesWithoutOctaveWithAccidental,
} from "./testData";

const notesWithFlat = [
  ...notesWithoutOctaveWithAccidental,
  ...notesWithOctaveAndWithAccidental,
].filter((note) => note.hasFlat);

const notesWithoutFlat = [
  ...notesWithoutOctaveAndWithoutAccidental,
  ...notesWithOctaveWithoutAccidental,
  ...notesWithOctaveAndWithAccidental.filter((note) => !note.hasFlat),
];

describe("hasFlat", () => {
  it.each(notesWithFlat)(
    "should return true for a note with flat (b)",
    ({ note }) => {
      expect(hasFlat(note)).toBe(true);
    },
  );

  it.each(notesWithoutFlat)(
    "should return false for a note without flat (b)",
    ({ note }) => {
      expect(hasFlat(note)).toBe(false);
    },
  );
});
