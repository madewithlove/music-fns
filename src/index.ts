// Functions related to frequency

export * from "./frequency/toFrequency";

// Functions related to intervals

export * from "./interval/getChromaticCPosition";
export * from "./interval/getIntervals";

// Functions related to MIDI

export * from "./midi/toMidi";

// Functions related to handling notes

export * from "./note/getAccidental";
export * from "./note/getOctave";
export * from "./note/getRoot";

export * from "./note/hasAccidental";
export * from "./note/hasFlat";
export * from "./note/hasOctave";
export * from "./note/hasSharp";

export * from "./note/isAccidental";
export * from "./note/isNote";
export * from "./note/isNoteObject";
export * from "./note/isOctave";
export * from "./note/isRoot";

export * from "./note/toNote";
export * from "./note/toObject";

// Types

export type Flat = "b";
export type Sharp = "#";
export type Accidental = Flat | Sharp;
export type Octave = number;
export type Root = "C" | "D" | "E" | "F" | "G" | "A" | "B";
export type Frequency = number;
export type Interval = number;
export type Scale = Interval[];
export type MidiNote = number;
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
