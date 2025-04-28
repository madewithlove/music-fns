import { describe, it, expect } from "vitest";
import {
  notesWithOctaveWithoutAccidental,
  notesWithOctaveAndWithAccidental,
  notesWithoutOctaveAndWithoutAccidental,
  notesWithoutOctaveWithAccidental,
  invalidNotes,
} from "../testData";
import { throwIfInvalidNote } from "./throwIfInvalidNote";

const validNotes = [
  ...notesWithOctaveWithoutAccidental,
  ...notesWithOctaveAndWithAccidental,
  ...notesWithoutOctaveAndWithoutAccidental,
  ...notesWithoutOctaveWithAccidental,
];

describe("throwIfInvalidNote", () => {
  it.each(validNotes)("should not throw for valid note", ({ note }) => {
    expect(() => throwIfInvalidNote(note)).not.toThrow();
  });

  it.each(invalidNotes)("should throw for invalid note: %s", (note) => {
    // @ts-expect-error checking if note is valid
    expect(() => throwIfInvalidNote(note)).toThrow();
  });
});
