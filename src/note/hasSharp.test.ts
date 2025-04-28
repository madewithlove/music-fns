import { describe, it, expect } from "vitest";
import { hasSharp } from "./hasSharp";

import {
  notesWithOctaveAndWithAccidental,
  notesWithOctaveWithoutAccidental,
  notesWithoutOctaveAndWithoutAccidental,
  notesWithoutOctaveWithAccidental,
} from "../testData";

const notesWithSharp = [
  ...notesWithoutOctaveWithAccidental,
  ...notesWithOctaveAndWithAccidental,
].filter((note) => note.hasSharp);

const notesWithoutSharp = [
  ...notesWithoutOctaveAndWithoutAccidental,
  ...notesWithOctaveWithoutAccidental,
  ...notesWithOctaveAndWithAccidental.filter((note) => !note.hasSharp),
];

describe("hasSharp", () => {
  it.each(notesWithSharp)(
    "should return true for a note with sharp (#)",
    ({ note }) => {
      expect(hasSharp(note)).toBe(true);
    },
  );

  it.each(notesWithoutSharp)(
    "should return false for a note without sharp (#)",
    ({ note }) => {
      expect(hasSharp(note)).toBe(false);
    },
  );
});
