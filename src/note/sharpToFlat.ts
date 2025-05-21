import { Note } from "../";
import {
  ChromaticCScale,
  getChromaticCPosition,
} from "../interval/getChromaticCPosition";
import { isSharp } from "./isSharp";
/**
 * Convert a sharp note to a flat note
 *
 * @param note - The note to convert
 * @returns The flat note or the natural note if it doesn't have a sharp
 * @throws {Error} If the note is invalid, or if the note is not sharp
 *
 * @example
 * ```ts
 * sharpToFlat("C#") // "Db"
 * sharpToFlat("D#") // "Eb"
 * sharpToFlat("F#") // "Gb"
 * ```
 */
export function sharpToFlat(note: Note): Note {
  if (!isSharp(note)) {
    throw new Error("note is not sharp");
  }
  const chromaticCPosition = getChromaticCPosition(note);
  const [_, flat] = ChromaticCScale[chromaticCPosition];
  return flat as Note;
}
