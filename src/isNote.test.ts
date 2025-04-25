import { describe, it, expect } from "vitest";
import { isNote } from "./isNote";
import {
  notesWithOctaveWithoutAccidental,
  notesWithOctaveAndWithAccidental,
  notesWithoutOctaveAndWithoutAccidental,
  notesWithoutOctaveWithAccidental,
  invalidNotes,
} from "./testData";

const validNotes = [
  ...notesWithOctaveWithoutAccidental,
  ...notesWithOctaveAndWithAccidental,
  ...notesWithoutOctaveAndWithoutAccidental,
  ...notesWithoutOctaveWithAccidental,
];

describe("isNote", () => {
  it.each(validNotes)("should validate valid note", ({ note }) => {
    expect(isNote(note)).toBe(true);
  });

  // invalid notes
  it.each(invalidNotes)("should validate invalid note: %s", (note) => {
    expect(isNote(note)).toBe(false);
  });
});
