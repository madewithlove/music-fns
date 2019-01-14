import AUGMENTED from './AUGMENTED';
import DIMINISHED from './DIMINISHED';
import MAJOR_SEVENTH from './MAJOR_SEVENTH';
import MAJOR from './MAJOR';
import MINOR_MAJOR_SEVENTH from './MINOR_MAJOR_SEVENTH';
import MINOR_SEVENTH from './MINOR_SEVENTH';
import MINOR from './MINOR';
import SEVENTH from './SEVENTH';

function chordCompiler({ names, intervals }) {
  return names.reduce((object, name) => ({ ...object, [name]: intervals }), {});
}

export default {
  ...chordCompiler(AUGMENTED),
  ...chordCompiler(DIMINISHED),
  ...chordCompiler(MAJOR_SEVENTH),
  ...chordCompiler(MAJOR),
  ...chordCompiler(MINOR_MAJOR_SEVENTH),
  ...chordCompiler(MINOR_SEVENTH),
  ...chordCompiler(MINOR),
  ...chordCompiler(SEVENTH)
};
