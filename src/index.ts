// Functions related to chords

export * from "./chords/createChord";

// Functions related to frequency

export * from "./frequency/toFrequency";

// Functions related to intervals

export * from "./interval/getChromaticCPosition";
export * from "./interval/getIntervals";

// Functions related to MIDI

export * from "./midi/toMidi";

// Functions related to handling notes

export * from "./note/flatToSharp";
export * from "./note/getAccidental";
export * from "./note/getNoteWithoutOctave";
export * from "./note/getOctave";
export * from "./note/getRoot";
export * from "./note/hasAccidental";
export * from "./note/hasOctave";
export * from "./note/isFlat";
export * from "./note/isNatural";
export * from "./note/isNote";
export * from "./note/isNoteObject";
export * from "./note/isSharp";
export * from "./note/sharpToFlat";
export * from "./note/toNote";
export * from "./note/toObject";
export * from "./note/transpose";

// Functions related to handling scales

export * from "./scale/createScale";
export * from "./scale/isScale";
export * from "./scale/isScaleOfType";

// Types

export type Flat = "b";
export type Sharp = "#";
export type Accidental = Flat | Sharp;
export type Octave = number;
export type Root = "C" | "D" | "E" | "F" | "G" | "A" | "B";
export type Frequency = number;
export type Interval = number;
export type Intervals = Interval[];
export type Scale = Note[];
export type MidiNote = number;
export type FlatNote = Exclude<`${Root}${Flat}`, `${"F" | "C"}${Flat}`>;
export type SharpNote = Exclude<`${Root}${Sharp}`, `${"E" | "B"}${Sharp}`>;
export type NoteWithAccidental = FlatNote | SharpNote;
export type NoteWithoutOctave = Root | NoteWithAccidental;
export type NoteWithOctave = `${NoteWithoutOctave}${Octave}`;
export type Note = NoteWithoutOctave | NoteWithOctave;
export type Chord = Note[];

export type NoteObject = {
  root: Root;
  octave?: Octave;
  accidental?: Accidental;
};
