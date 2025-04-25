import { describe, it, expect } from "vitest";
import { isNote } from "./isNote";
import {
  notesWithOctaveWithoutAccidental,
  notesWithOctaveAndWithAccidental,
  notesWithoutOctaveAndWithoutAccidental,
  notesWithoutOctaveWithAccidental,
  invalidNotes,
} from "./testData";

describe("isNote", () => {
  it.each(notesWithOctaveWithoutAccidental.map((note) => note.note))(
    "should validate natural note: %s",
    (note) => {
      expect(isNote(note)).toBe(true);
    },
  );

  it.each(notesWithOctaveAndWithAccidental.map((note) => note.note))(
    "should validate note with octave and accidental: %s",
    (note) => {
      expect(isNote(note)).toBe(true);
    },
  );

  it.each(notesWithoutOctaveAndWithoutAccidental.map((note) => note.note))(
    "should validate note with no octave and no accidental: %s",
    
    (note) => {
      expect(isNote(note)).toBe(true);
    },
  );

  it.each(notesWithoutOctaveWithAccidental.map((note) => note.note))(
    "should validate note with no octave and accidental: %s",
    (note) => {
      expect(isNote(note)).toBe(true);
    },
  );

  // invalid notes
  it.each(invalidNotes)("should validate invalid note: %s", (note) => {
    // @ts-expect-error checking if note is valid
    expect(isNote(note)).toBe(false);
  });
});
