declare const __brand: unique symbol;
type Brand<T, B> = T & { [__brand]: B };

export * from "./isNote";
export * from "./throwIfInvalidNote";
export * from "./toObject";
export * from "./getRoot";
export * from "./getOctave";
export * from "./getAccidental";
export * from "./hasAccidental";
export * from "./hasSharp";
export * from "./hasFlat";
export * from "./hasOctave";

export type Flat = "b";
export type Sharp = "#";
export type Accidental = Flat | Sharp;
export type Octave = Brand<number, "Octave">;
export type Root = "C" | "D" | "E" | "F" | "G" | "A" | "B";
export type Frequency = Brand<number, "Frequency">;
export type ImpossibleNotes = `${"E" | "B"}${Sharp}` | `${"F" | "C"}${Flat}`;
export type NoteWithoutOctave =
  | Root
  | Exclude<`${Root}${Accidental}`, ImpossibleNotes>;
export type NoteWithOctave = `${NoteWithoutOctave}${Octave}`;
export type Note = NoteWithoutOctave | NoteWithOctave;

export type NoteObject = {
  root: Root;
  octave?: Octave;
  accidental?: Accidental;
};
