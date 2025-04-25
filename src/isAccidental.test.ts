import { describe, it, expect } from "vitest";
import { isAccidental } from "./isAccidental";
import { junkData, accidentals } from "./testData";

describe("isAccidental", () => {
  it.each(accidentals)("should validate valid accidental: %s", (accidental) => {
    expect(isAccidental(accidental)).toBe(true);
  });

  // invalid notes
  it.each([...junkData, 0, 3, -10])(
    "should validate invalid accidental: %s",
    (accidental) => {
      expect(isAccidental(accidental)).toBe(false);
    },
  );
});
