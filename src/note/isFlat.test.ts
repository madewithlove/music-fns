import { describe, it, expect } from "vitest";
import { isFlat } from "./isFlat";

import {
  notesWithOctaveAndWithAccidental,
  notesWithOctaveWithoutAccidental,
  notesWithoutOctaveAndWithoutAccidental,
  notesWithoutOctaveWithAccidental,
} from "../testData";

const notesWithFlat = [
  ...notesWithoutOctaveWithAccidental,
  ...notesWithOctaveAndWithAccidental,
].filter((note) => note.isFlat);

const notesWithoutFlat = [
  ...notesWithoutOctaveAndWithoutAccidental,
  ...notesWithOctaveWithoutAccidental,
  ...notesWithOctaveAndWithAccidental.filter((note) => !note.isFlat),
];

describe("isFlat", () => {
  it.each(notesWithFlat)(
    "should return true for a note with flat (b)",
    ({ note }) => {
      expect(isFlat(note)).toBe(true);
    },
  );

  it.each(notesWithoutFlat)(
    "should return false for a note without flat (b)",
    ({ note }) => {
      expect(isFlat(note)).toBe(false);
    },
  );
});
