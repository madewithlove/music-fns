import { Accidental } from "./Accidental";
import { AccidentalType } from "./AccidentalType";
import { Note } from "./Note";
import { Octave } from "./Octave";

export interface NoteObject {
	root: Note,
	accidental?: Accidental,
	accidentalType?: AccidentalType,
	octave?: Octave
};