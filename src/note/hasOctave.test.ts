import { describe, it, expect } from "vitest";
import { hasOctave } from "./hasOctave";

import {
  notesWithOctaveAndWithAccidental,
  notesWithOctaveWithoutAccidental,
  notesWithoutOctaveAndWithoutAccidental,
  notesWithoutOctaveWithAccidental,
} from "../testData";

const notesWithOctave = [
  ...notesWithOctaveAndWithAccidental,
  ...notesWithOctaveWithoutAccidental,
];

const notesWithoutOctave = [
  ...notesWithoutOctaveAndWithoutAccidental,
  ...notesWithoutOctaveWithAccidental,
];

describe("hasOctave", () => {
  it.each(notesWithOctave)(
    "should return true for a note with octave",
    ({ note }) => {
      expect(hasOctave(note)).toBe(true);
    },
  );

  it.each(notesWithoutOctave)(
    "should return false for a note without octave",
    ({ note }) => {
      expect(hasOctave(note)).toBe(false);
    },
  );
});
