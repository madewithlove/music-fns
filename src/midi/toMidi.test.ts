import { describe, it, expect } from "vitest";
import { toMidi } from "./toMidi";

const notes = [
  ["A4", 69],
  ["A#4", 70],
  ["C5", 72],
  ["F2", 41],
  ["Gb3", 54],
] as const;

describe("toMidi", () => {
  it.each(notes)(
    "should convert a note to a MIDI note number",
    (note, midi) => {
      expect(toMidi(note)).toBe(midi);
    },
  );

  it("should throw an error if the note is invalid", () => {
    expect(() => toMidi("A")).toThrow();
  });
});
