import { isFlat, Note } from "../";
import {
  ChromaticCScale,
  getChromaticCPosition,
} from "../interval/getChromaticCPosition";

/**
 * Convert a flat note to a sharp note
 *
 * @param note - The note to convert
 * @returns The sharp note or the natural note if it doesn't have a flat
 * @throws {Error} If the note is invalid, or if the note is not flat
 *
 * @example
 * ```ts
 * flatToSharp("Db") // "C#"
 * flatToSharp("Eb") // "D#"
 * flatToSharp("Gb") // "F#"
 * ```
 */
export function flatToSharp(note: Note): Note {
  if (!isFlat(note)) {
    throw new Error("note is not flat");
  }
  const chromaticCPosition = getChromaticCPosition(note);
  const [sharp] = ChromaticCScale[chromaticCPosition];
  return sharp as Note;
}
