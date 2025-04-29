import { describe, it, expect } from "vitest";
import { isSharp } from "./isSharp";

import {
  notesWithOctaveAndWithAccidental,
  notesWithOctaveWithoutAccidental,
  notesWithoutOctaveAndWithoutAccidental,
  notesWithoutOctaveWithAccidental,
} from "../testData";

const notesWithSharp = [
  ...notesWithoutOctaveWithAccidental,
  ...notesWithOctaveAndWithAccidental,
].filter((note) => note.isSharp);

const notesWithoutSharp = [
  ...notesWithoutOctaveAndWithoutAccidental,
  ...notesWithOctaveWithoutAccidental,
  ...notesWithOctaveAndWithAccidental.filter((note) => !note.isSharp),
];

describe("isSharp", () => {
  it.each(notesWithSharp)(
    "should return true for a note with sharp (#)",
    ({ note }) => {
      expect(isSharp(note)).toBe(true);
    },
  );

  it.each(notesWithoutSharp)(
    "should return false for a note without sharp (#)",
    ({ note }) => {
      expect(isSharp(note)).toBe(false);
    },
  );
});
