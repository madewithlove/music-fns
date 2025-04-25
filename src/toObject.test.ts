import { describe, it, expect } from "vitest";
import { toObject } from "./toObject";

describe("toObject", () => {
  it("should correctly parse valid notes without accidentals", () => {
    expect(toObject("C4")).toEqual({
      root: "C",
      octave: 4,
    });
    expect(toObject("D5")).toEqual({
      root: "D",
      octave: 5,
    });
    expect(toObject("E3")).toEqual({
      root: "E",
      octave: 3,
    });
  });

  it("should correctly parse valid notes with accidentals", () => {
    expect(toObject("C#4")).toEqual({
      root: "C",
      octave: 4,
      accidental: "#",
    });
    expect(toObject("F#")).toEqual({
      root: "F",
      accidental: "#",
    });
    expect(toObject("G#3")).toEqual({
      root: "G",
      octave: 3,
      accidental: "#",
    });
    expect(toObject("Bb4")).toEqual({
      root: "B",
      octave: 4,
      accidental: "b",
    });
    expect(toObject("Eb5")).toEqual({
      root: "E",
      octave: 5,
      accidental: "b",
    });
    expect(toObject("Ab3")).toEqual({
      root: "A",
      octave: 3,
      accidental: "b",
    });
  });

  it("should throw error for invalid note formats", () => {
    expect(() => toObject("H4")).toThrow("Invalid note");
    expect(() => toObject("")).toThrow("Invalid note");
  });

  it("should throw error for invalid accidentals", () => {
    expect(() => toObject("B#4")).toThrow("Invalid note");
    expect(() => toObject("E#4")).toThrow("Invalid note");
    expect(() => toObject("Cb4")).toThrow("Invalid note");
    expect(() => toObject("Fb4")).toThrow("Invalid note");
  });

  it("should throw error for non-string inputs", () => {
    // @ts-expect-error Testing invalid input
    expect(() => toObject(null)).toThrow("Invalid note");
    // @ts-expect-error Testing invalid input
    expect(() => toObject(undefined)).toThrow("Invalid note");
    // @ts-expect-error Testing invalid input
    expect(() => toObject(123)).toThrow("Invalid note");
  });
});
