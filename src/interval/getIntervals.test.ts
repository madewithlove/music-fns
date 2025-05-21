import { getIntervals } from "./getIntervals";
import { describe, it, expect } from "vitest";

describe("getIntervals", () => {
  it("should return the intervals between a series of notes", () => {
    expect(getIntervals(["C", "D", "E"])).toEqual([2, 2]);
  });

  it("should return the intervals between a series of notes", () => {
    expect(getIntervals(["C", "C#"])).toEqual([1]);
  });

  it("should return the intervals between a series of notes", () => {
    expect(getIntervals(["E1", "D1"])).toEqual([-2]);
  });

  it("should return the intervals between a series of notes with octaves", () => {
    expect(getIntervals(["C3", "C4", "B5", "C5"])).toEqual([12, 11, 1]);
  });
  it("should return the intervals between a series of notes with octaves", () => {
    expect(getIntervals(["C4", "B5"])).toEqual([11]);
  });
  it("should return the intervals between a series of notes with octaves", () => {
    expect(getIntervals(["C4", "C4"])).toEqual([0]);
  });
  it("should return the intervals between a series of notes with octaves", () => {
    expect(getIntervals(["C4", "C5"])).toEqual([12]);
  });
  it("should return the intervals between a series of notes with octaves", () => {
    expect(getIntervals(["C5", "C4"])).toEqual([-12]);
  });

  it("should return the intervals between a series of notes with octaves", () => {
    expect(getIntervals(["C5", "A#3"])).toEqual([-14]);
  });

  it("should return the intervals between a series of notes with octaves", () => {
    expect(getIntervals(["C", "B"])).toEqual([11]);
  });
  it("should return the intervals between a series of notes with octaves", () => {
    expect(getIntervals(["C4", "A5"])).toEqual([9]);
  });

  it("should return the intervals between a series of notes from the root", () => {
    expect(getIntervals(["C", "D", "E"], { fromRoot: true })).toEqual([2, 4]);
  });

  it("should return the intervals between a series of notes from the root", () => {
    expect(getIntervals(["A4", "A#4"])).toEqual([1]);
  });

  it("should throw an error if the notes are not uniform", () => {
    expect(() => getIntervals(["C2", "Db", "E"])).toThrow();
  });

  it("should throw an error if there are less than 2 notes", () => {
    expect(() => getIntervals(["C2"])).toThrow();
  });
});
