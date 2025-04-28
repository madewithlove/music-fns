import { describe, it, expect } from "vitest";
import { toFrequency } from "./toFrequency";

const notes = [
  ["A4", 440],
  ["A#4", 466.16],
  ["B4", 493.88],
  ["C5", 523.25],
  ["C#5", 554.37],
  ["D5", 587.33],
  ["D#5", 622.25],
  ["E5", 659.26],
  ["F5", 698.46],
  ["F#5", 739.99],
  ["G5", 783.99],
  ["G#5", 830.61],
  ["A5", 880],
] as const;

describe("toFrequency", () => {
  it.each(notes)(
    "should return the correct frequency for a note",
    (note, frequency) => {
      expect(toFrequency(note)).toBe(frequency);
    },
  );

  it("should throw an error if no octave is provided", () => {
    expect(() => toFrequency("A#")).toThrow();
  });
});
