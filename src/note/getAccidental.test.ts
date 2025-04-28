import { describe, it, expect } from "vitest";
import { getAccidental } from "./getAccidental";
import {
  notesWithOctaveAndWithAccidental,
  notesWithOctaveWithoutAccidental,
  notesWithoutOctaveAndWithoutAccidental,
  notesWithoutOctaveWithAccidental,
} from "../testData";

const notesWithAccidental = [
  ...notesWithOctaveAndWithAccidental,
  ...notesWithoutOctaveWithAccidental,
];

const notesWithoutAccidental = [
  ...notesWithOctaveWithoutAccidental,
  ...notesWithoutOctaveAndWithoutAccidental,
];

describe("getAccidental", () => {
  it.each(notesWithAccidental)(
    "should return the accidental for a note",
    ({ note, accidental }) => {
      expect(getAccidental(note)).toBe(accidental);
    },
  );

  it.each(notesWithoutAccidental)(
    "should return undefined for a note without accidental",
    ({ note }) => {
      expect(getAccidental(note)).toBeUndefined();
    },
  );
});
