// @flow

declare type NoteObject = {
  note: Note,
  accidental?: Accidental,
  octave?: Octave
};

declare type Note = string;
declare type Accidental = '#' | '♭' | '♯' | 'b';
declare type Octave = number;

declare type ScientificNote = string;
declare type Interval = number;

declare type Scale = Array<Interval>;
declare type Chord = Array<Interval>;
