import { isNote } from "./isNote";
import { throwIfInvalidNote } from "./throwIfInvalidNote";
import { toObject } from "./toObject";
import { getRoot } from "./getRoot";
import { getOctave } from "./getOctave";
import { getAccidental } from "./getAccidental";
import { hasAccidental } from "./hasAccidental";
import { hasSharp } from "./hasSharp";
import { hasFlat } from "./hasFlat";
import { hasOctave } from "./hasOctave";

declare const __brand: unique symbol;
type Brand<T, B> = T & { [__brand]: B };

type Flat = "b";
type Sharp = "#";
type Accidental = Flat | Sharp;
type Octave = Brand<number, "Octave">;
type Root = "C" | "D" | "E" | "F" | "G" | "A" | "B";
type Frequency = Brand<number, "Frequency">;
type ImpossibleNotes = `${"E" | "B"}${Sharp}` | `${"F" | "C"}${Flat}`;
type NoteWithoutOctave =
  | Root
  | Exclude<`${Root}${Accidental}`, ImpossibleNotes>;
type NoteWithOctave = `${NoteWithoutOctave}${Octave}`;
type Note = NoteWithoutOctave | NoteWithOctave;

type NoteObject = {
  root: Root;
  octave?: Octave;
  accidental?: Accidental;
};

export {
  isNote,
  throwIfInvalidNote,
  toObject,
  getRoot,
  getOctave,
  getAccidental,
  hasAccidental,
  hasSharp,
  hasFlat,
  hasOctave,
};

export type {
  Sharp,
  Flat,
  Note,
  Accidental,
  Octave,
  Root,
  NoteObject,
  NoteWithoutOctave,
  NoteWithOctave,
  Frequency,
};
