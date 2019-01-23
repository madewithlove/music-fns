import { Accidental } from "../types/Accidental";
import { AccidentalType } from "../types/AccidentalType";

export const FLAT_SYMBOL: Accidental = '♭';
export const FLAT_LETTER: Accidental = 'b';

export const SHARP_SYMBOL: Accidental = '♯';
export const SHARP_LETTER: Accidental = '#';

export const LETTER: AccidentalType = 'LETTER';
export const SYMBOL: AccidentalType = 'SYMBOL';

export const SHARP: Accidental = 'SHARP';
export const FLAT: Accidental = 'FLAT';

export interface IAccidental {
  FLAT_SYMBOL: Accidental;
  FLAT_LETTER: Accidental;

  SHARP_SYMBOL: Accidental;
  SHARP_LETTER: Accidental;

  FLAT: Accidental;
  SHARP: Accidental;
  LETTER: AccidentalType;
  SYMBOL: AccidentalType;
}

const Acc: IAccidental = {
  FLAT_SYMBOL,
  FLAT_LETTER,

  SHARP_SYMBOL,
  SHARP_LETTER,

  FLAT,
  SHARP,
  LETTER,
  SYMBOL
};

export default Acc