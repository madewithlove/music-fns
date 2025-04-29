import { getNoteWithoutOctave } from "../note/getNoteWithoutOctave";
import type { Note, NoteWithoutOctave } from "../";

export const ChromaticCScale: NoteWithoutOctave[][] = [
  ["C"],
  ["C#", "Db"],
  ["D"],
  ["D#", "Eb"],
  ["E"],
  ["F"],
  ["F#", "Gb"],
  ["G"],
  ["G#", "Ab"],
  ["A"],
  ["A#", "Bb"],
  ["B"],
];

/**
 * Get the position of a note in the chromatic C scale
 *
 * @param note - The note to get the position of in the chromatic C scale
 * @returns The position of the note in the chromatic C scale
 * @throws {Error} If the note is invalid
 *
 * @example
 * ```ts
 * getChromaticCPosition("C"); // 0
 * getChromaticCPosition("C#"); // 1
 * getChromaticCPosition("A"); // 9
 * getChromaticCPosition("E"); // 4
 * ```
 */
export function getChromaticCPosition(note: Note): number {
  const noteWithoutOctave = getNoteWithoutOctave(note);

  return ChromaticCScale.findIndex((n) =>
    n.some((nn) => nn === noteWithoutOctave),
  );
}
