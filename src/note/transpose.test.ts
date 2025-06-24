import { describe, it, expect } from "vitest";
import { transpose } from "./transpose";

describe("transpose", () => {
  describe("transposing up (preferring sharps)", () => {
    it("should transpose C4 up by 2 semitones to D4", () => {
      expect(transpose("C4", 2)).toBe("D4");
    });

    it("should transpose C up by 2 semitones to D", () => {
      expect(transpose("C", 2)).toBe("D");
    });

    it("should transpose F#3 up by 4 semitones to A3", () => {
      expect(transpose("F#3", 4)).toBe("A#3");
    });

    it("should transpose G4 up by 1 semitone to G#4", () => {
      expect(transpose("G4", 1)).toBe("G#4");
    });

    it("should handle octave changes when transposing up", () => {
      expect(transpose("B4", 2)).toBe("C#5");
    });
  });

  describe("transposing down (preferring flats)", () => {
    it("should transpose Bb4 down by 2 semitones to Ab4", () => {
      expect(transpose("Bb4", -2)).toBe("Ab4");
    });

    it("should transpose C4 down by 1 semitone to B3", () => {
      expect(transpose("C4", -1)).toBe("B3");
    });

    it("should transpose F#3 down by 2 semitones to E3", () => {
      expect(transpose("F#3", -2)).toBe("E3");
    });

    it("should transpose G4 down by 1 semitone to Gb4", () => {
      expect(transpose("G4", -1)).toBe("Gb4");
    });

    it("should handle octave changes when transposing down", () => {
      expect(transpose("C4", -2)).toBe("Bb3");
    });
  });

  describe("edge cases", () => {
    it("should handle transposing by 0 semitones", () => {
      expect(transpose("C4", 0)).toBe("C4");
    });

    it("should handle transposing by 12 semitones (octave)", () => {
      expect(transpose("C4", 12)).toBe("C5");
    });

    it("should handle transposing by -12 semitones (octave)", () => {
      expect(transpose("C4", -12)).toBe("C3");
    });

    it("should handle transposing by multiple octaves", () => {
      expect(transpose("C4", 24)).toBe("C6");
      expect(transpose("C4", -24)).toBe("C2");
    });

    it("should preserve note without octave when transposing", () => {
      expect(transpose("C", 2)).toBe("D");
      expect(transpose("F#", -2)).toBe("E");
    });
  });
});
