import { describe, it, expect } from "vitest";
import { getOctave } from "./getOctave";

import {
  notesWithOctaveAndWithAccidental,
  notesWithOctaveWithoutAccidental,
  notesWithoutOctaveAndWithoutAccidental,
  notesWithoutOctaveWithAccidental,
} from "./testData";

const notesWithOctave = [
  ...notesWithOctaveAndWithAccidental,
  ...notesWithOctaveWithoutAccidental,
];

const notesWithoutOctave = [
  ...notesWithoutOctaveAndWithoutAccidental,
  ...notesWithoutOctaveWithAccidental,
];

describe("getOctave", () => {
  it.each(notesWithOctave)(
    "should return the octave for a note",
    ({ note, octave }) => {
      expect(getOctave(note)).toBe(octave);
    },
  );

  it.each(notesWithoutOctave)(
    "should return undefined for a note without octave",
    ({ note }) => {
      expect(getOctave(note)).toBeUndefined();
    },
  );
});
