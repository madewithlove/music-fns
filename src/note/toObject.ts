import { Accidental, Note, NoteObject, Octave, Root } from "../";
import { throwIfInvalidNote } from "./throwIfInvalidNote";

const accidentalRegex = /[#b]/;
const rootRegex = /^[A-G]/;
const octaveRegex = /\d+$/;

function getAccidental(note: Note): Accidental | undefined {
  const accidentalMatch = note.match(accidentalRegex);
  return accidentalMatch?.[0] as Accidental | undefined;
}

function getRoot(note: Note): Root {
  const rootMatch = note.match(rootRegex);
  return rootMatch?.[0] as Root;
}

function getOctave(note: Note): Octave | undefined {
  const octaveMatch = note.match(octaveRegex);
  return octaveMatch ? (parseInt(octaveMatch[0]) as Octave) : undefined;
}

/**
 * Converts a note string into a NoteObject.
 *
 * @param note - The note string to convert.
 * @returns A NoteObject containing the root note, octave, and accidental (if any).
 * @throws {Error} If the note string is invalid or contains impossible combinations.
 *
 * @example
 * toObject("E") // { root: "E" }
 * toObject("C4") // { root: "C", octave: 4 }
 * toObject("F#5") // { root: "F", octave: 5, accidental: "#" }
 * toObject("C#") // { root: "C", accidental: "#" }
 */
export function toObject(note: string): NoteObject {
  const validNote = throwIfInvalidNote(note);

  const root = getRoot(validNote);
  const accidental = getAccidental(validNote);
  const octave = getOctave(validNote);

  return {
    root,
    ...(accidental && { accidental }),
    ...(octave && { octave }),
  };
}
