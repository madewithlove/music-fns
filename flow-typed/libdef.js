// @flow

declare type NoteObject = {
  root: Note,
  accidental?: Accidental,
  accidentalType?: AccidentalType,
  octave?: Octave
};

declare type direction = 1 | -1;

declare type Note = string;
declare type Accidental = 'SHARP' | 'FLAT' | '';
declare type AccidentalType = 'LETTER' | 'SYMBOL' | '';
declare type Octave = number;

declare type ScientificNote = string;
declare type Interval = number;
declare type Intervals = Array<Interval>;

declare type Scale = Array<Note>;
declare type Chord = Array<Note>;
declare type ScientificNotes = Array<ScientificNote>;
