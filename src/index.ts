import { isNote } from "./isNote";

declare const __brand: unique symbol;
type Brand<T, B> = T & { [__brand]: B };

type Flat = "b";
type Sharp = "#";
type Accidental = Flat | Sharp;
type Octave = Brand<number, "Octave">;
type Root = "C" | "D" | "E" | "F" | "G" | "A" | "B";

type ImpossibleNotes = `${"E" | "B"}${Sharp}` | `${"F" | "C"}${Flat}`;
type NoteWithoutOctave = Exclude<`${Root}${Accidental}`, ImpossibleNotes>;
type NoteWithOctave = `${NoteWithoutOctave}${Octave}`;
type Note = NoteWithoutOctave | NoteWithOctave;
type Frequency = Brand<number, "Frequency">;

type NoteObject = {
  accidental: Accidental;
  octave: Octave;
  root: Root;
};

export { isNote };

export type {
  Note,
  Accidental,
  Octave,
  Root,
  NoteObject,
  NoteWithoutOctave,
  NoteWithOctave,
  Frequency,
};
