// @flow

declare type NoteObject = {
  note: Note,
  accidental?: Accidental,
  accidentalType?: AccidentalType,
  octave?: Octave
};

declare type Note = string;
declare type Accidental = 'SHARP' | 'FLAT';
declare type AccidentalType = 'LETTER' | 'SYMBOL';
declare type Octave = number;

declare type ScientificNote = string;
declare type Interval = number;

declare type Scale = Array<Interval>;
declare type Chord = Array<Interval>;
declare type ScientificNotes = Array<ScientificNote>;
