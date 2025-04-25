import { describe, it, expect } from "vitest";
import { isNote } from "./isNote";

describe("isNote", () => {
  // Valid notes with natural notes
  it.each([
    ["C4", true],
    ["D4", true],
    ["E4", true],
    ["F4", true],
    ["G4", true],
    ["A4", true],
    ["B4", true],
  ])("should validate natural note %s", (note, expected) => {
    expect(isNote(note)).toBe(expected);
  });

  // Valid notes with sharp accidentals
  it.each([
    ["C#4", true],
    ["D#4", true],
    ["F#4", true],
    ["G#4", true],
    ["A#4", true],
    // Invalid sharp notes
    ["B#4", false],
    ["E#4", false],
  ])("should validate sharp note %s", (note, expected) => {
    expect(isNote(note)).toBe(expected);
  });

  // Valid notes with flat accidentals
  it.each([
    ["Db4", true],
    ["Eb4", true],
    ["Gb4", true],
    ["Ab4", true],
    ["Bb4", true],
    // Invalid flat notes
    ["Cb4", false],
    ["Fb4", false],
  ])("should validate flat note %s", (note, expected) => {
    expect(isNote(note)).toBe(expected);
  });

  // Test octave ranges
  it.each([
    ["C0", true],
    ["C9", true],
    ["C10", true],
    ["C99", true],
    ["C-1", false], // Negative octaves not allowed
    ["Ca", false], // Non-numeric octave
  ])("should validate note %s with different octaves", (note, expected) => {
    expect(isNote(note)).toBe(expected);
  });

  // Accidentals without octaves
  it.each([
    ["C#", true],
    ["F#", true],
    ["G#", true],
    ["A#", true],
    ["B#", false],
    ["E#", false],
  ])("should validate note %s", (note, expected) => {
    expect(isNote(note)).toBe(expected);
  });

  // Invalid formats
  it.each([
    ["", false], // Empty string
    ["H4", false], // Invalid note letter
    ["c4", false], // Lowercase note
    ["C##4", false], // Multiple accidentals
    ["C4#", false], // Accidental after octave
    ["4C", false], // Wrong order
    ["C.4", false], // Invalid character
    ["C 4", false], // Space in note
    ["X#4", false], // Invalid note letter with accidental
  ])("should reject invalid note format %s", (note, expected) => {
    expect(isNote(note)).toBe(expected);
  });
});
