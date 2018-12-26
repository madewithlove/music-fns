# music-fns [![npm version](https://badge.fury.io/js/music-fns.svg)](https://badge.fury.io/js/music-fns)

music-fns is a JavaScript music utility library that contains small music notation related functions.

## Installation

```shell
npm install music-fns
```

or

```shell
yarn add music-fns
```

## Usage

All methods are available as named exports.

_example:_

```js
import { noteToFrequency } from 'music-fns';

console.log(noteToFrequency('A4'));
// > 440
```

## API

This is an overview of all methods & constants.

`music-fns` uses **scientific pitch notation**, you can use symbols (♭, ♯) or letters (b, #) as accidentals. The functions preserve your style (flat/sharp, letter/symbol).

Documentation is still WIP, PRs welcome.

### 🎵 Notes

#### CONSTANTS

#### + `NOTES`

An nested array that contains a chromatic C scale with its possible note variations.

```js
import { NOTES } from 'music-fns';

console.log(NOTES);
/* >
  [
    [ 'C', 'B#' ],
    [ 'C#', 'Db' ],
    [ 'D' ],
    [ 'D#', 'Eb' ],
    [ 'E', 'Fb' ],
    [ 'F', 'E#' ],
    [ 'F#', 'Gb' ],
    [ 'G' ],
    [ 'G#', 'Ab' ],
    [ 'A' ],
    [ 'A#', 'Bb' ],
    [ 'B', 'Cb' ]
  ]
*/
```

#### METHODS

#### + `getRoot(note):note`

Returns the root (only note, no accidental) from a note.

```js
import { getRoot } from 'music-fns';

console.log(getRoot('A#4'));
// > 'A'
```

#### + `getNote(note):note`

Returns the full note (note + accidental) from a note.

```js
import { getNote } from 'music-fns';

console.log(getNote('A#4'));
// > 'A#'
```

#### + `getOctave(note):?octave`

Returns the octave information (or `undefined`) from a note.

```js
import { getOctave } from 'music-fns';

console.log(getOctave('A#4'));
// > 4

console.log(getOctave('A#'));
// > undefined
```

#### + `getAccidental(note):?accidental`

Returns the accidental (or `undefined`) from a note.

```js
import { getAccidental } from 'music-fns';

console.log(getAccidental('A#4'));
// > '#'

console.log(getAccidental('A4'));
// > undefined
```

#### + `hasOctave(note):boolean`

Returns `true` if the note has octave information.

```js
import { hasOctave } from 'music-fns';

console.log(hasOctave('A♯4'));
// > true

console.log(hasOctave('Db'));
// > false
```

#### + `hasAccidental(note):boolean`

Returns `true` if the note has an accidental.

```js
import { hasAccidental } from 'music-fns';

console.log(hasAccidental('A♯4'));
// > true

console.log(hasAccidental('D'));
// > false
```

#### + `hasAccidentalLetter(note):boolean`

Returns `true` if the note has an accidental as a letter (b, #).

```js
import { hasAccidentalLetter } from 'music-fns';

console.log(hasAccidentalLetter('A#4'));
// > true

console.log(hasAccidentalLetter('A♯4'));
// > false
```

#### + `hasAccidentalSymbol(note):boolean`

Returns `true` if the note has an accidental as a symbol (♭, ♯).

```js
import { hasAccidentalSymbol } from 'music-fns';

console.log(hasAccidentalSymbol('A♯4'));
// > true

console.log(hasAccidentalSymbol('A#4'));
// > false
```

#### + `isFlat(note):boolean`

Returns `true` if the note is flat (b, ♭).

```js
import { isFlat } from 'music-fns';

console.log(isFlat('Gb3'));
// > true

console.log(isFlat('E♭'));
// > true

console.log(isFlat('F#3'));
// > false
```

#### + `isSharp(note):boolean`

Returns `true` if the note is sharp (#, ♯).

```js
import { isSharp } from 'music-fns';

console.log(isSharp('F#3'));
// > true

console.log(isSharp('A♯'));
// > true

console.log(isSharp('Gb3'));
// > false
```

#### + `isNatural(note):boolean`

Returns `true` if the note is natural (no accidental).

```js
import { isNatural } from 'music-fns';

console.log(isNatural('F3'));
// > true

console.log(isNatural('Gb3'));
// > false
```

#### + `flatToSharp(note):note`

Converts a flat to its sharp equivalent, this function preserves the accidental style (letter or symbol). If no flat is found the function returns the unmodified input.

```js
import { flatToSharp } from 'music-fns';

console.log(flatToSharp('Gb3'));
// > 'F#3'
```

#### + `sharpToFlat(note):note`

Converts a sharp to its flat equivalent, this function preserves the accidental style (letter or symbol). If no sharp is found the function returns the unmodified input.

```js
import { sharpToFlat } from 'music-fns';

console.log(sharpToFlat('F#3'));
// > 'Gb3'
```

#### + `areEqual(notes):boolean`

Returns `true` if the provided notes are the same notes.

```js
import { areEqual } from 'music-fns';

// same notes in flat & sharp, symbol and letter
console.log(areEqual(['F#3', 'Gb3', 'G♭3', 'F♯3']));
// > true

console.log(areEqual(['A3', 'F3']));
// > false
```

#### + `getChromaticCPosition(note):position`

Returns the (0-indexed) position of the specific root within a chromatic C scale (equals the `NOTES` constant).

```js
import { getChromaticCPosition } from 'music-fns';

console.log(getChromaticCPosition('D3'));
// > 2

console.log(getChromaticCPosition('G♯1'));
// > 8
```

#### + `haveSameOctave(notes):boolean`

Returns `true` if all notes share the same octave information.

```js
import { haveSameOctave } from 'music-fns';

console.log(haveSameOctave(['A3', 'D3', 'G3']));
// > true

console.log(haveSameOctave(['A#1', 'D3', 'G3']));
// > false
```

#### + `noteToFrequency(note, [options]):frequency`

Converts a note to a frequency (in Hz). You can use a different base frequency for A4 via `standard`.

```js
import { noteToFrequency } from 'music-fns';

console.log(noteToFrequency('A4'));
// > 440

console.log(noteToFrequency('C#3'));
// > 138.59131548843604

console.log(noteToFrequency('A4', { standard: 442 }));
// > 442
```

#### + `noteToMidi(note, [options]):midiNumber`

Converts a note to its MIDI number. C4 = 60 in our implementation. You can provide a different middle C via `standard`.

```js
import { noteToMidi } from 'music-fns';

console.log(noteToMidi('C4'));
// > 60

console.log(noteToMidi('A4'));
// > 81

console.log(noteToMidi('C3', { standard: 'C3' }));
// > 60
```

#### + `noteToObject(note):noteObject`

Converts a note to an object describing the note.

The object can contain the following keys:

* **root:** a root note (`C`, `D`, `E`, `F`, `G`, `A`, `B`)
* **[accidental]:** `SHARP`, `FLAT`
* **[accidentalType]:** `SYMBOL`, `LETTER`
* **[octave]:** number

```js
import { noteToObject } from 'music-fns';

console.log(noteToObject('A4'));
/* > {
  root: 'A',
  octave: 4
} */

console.log(noteToObject('G♯1'));
/* > {
  root: 'G',
  accidental: 'SHARP',
  accidentalType: 'SYMBOL',
  octave: 1
} */

console.log(noteToObject('Ab4'));

/* > {
  root: 'A',
  accidental: 'FLAT',
  accidentalType: 'LETTER',
  octave: 4
} */
```

#### + `objectToNote(noteObject):note`

Converts an object describing the note to a note.

The object can contain following keys:

* **root:** a root note (`C`, `D`, `E`, `F`, `G`, `A`, `B`)
* **[accidental]:** `SHARP` / `FLAT`
* **[accidentalType]:** `SYMBOL` / `LETTER`
* **[octave]:** number

```js
import { objectToNote } from 'music-fns';

console.log(
  objectToNote({
    root: 'A',
    octave: 4
  })
);

// > 'A4'

console.log(
  objectToNote({
    root: 'G',
    accidental: 'SHARP',
    accidentalType: 'SYMBOL',
    octave: 1
  })
);

// > 'G♯1'
```

#### + `isNote(value):boolean`

Returns `true` if the provided value is a valid note in scientific pitch notation.

```js
import { isNote } from 'music-fns';

console.log(isNote('A#5'));
// > true;

console.log(isNote('Q2'));
// > false;
```

#### + `accidentalToLetter(note):note`

Converts a note which has an accidental as a symbol (♭, ♯) to a note with the accidental as a letter (b, #).

```js
import { accidentalToLetter } from 'music-fns';

console.log(accidentalToLetter('A♯4'));
// > 'A#4'
```

#### + `accidentalToSymbol(note):note`

Converts a note which has an accidental as a letter (b, #) to a note with the accidental as a symbol (♭, ♯).

```js
import { accidentalToSymbol } from 'music-fns';

console.log(accidentalToSymbol('A#4'));
// > 'A♯4'
```

#### + `transferAccidental(note, referenceNote):note`

Transfer the accidental type (flat or sharp) from a provided reference note

In this example, we've converted `F♯3` to `Gb3` because the reference note is `Bb4` (a flat instead of sharp).

```js
import { transferAccidental } from 'music-fns';

console.log(transferAccidental('F#3', 'Bb4'));
// > 'Gb3';
// = same as 'F#3', different style of notation
```

#### + `transferAccidentalStyle(note, referenceNote):note`

Transfer the accidental notation style (letter or symbol) from the provided reference note

In this example, we've converted `F♯3` to `F♯3` because the reference note is `B♭4` (a symbol instead of a letter).

```js
import { transferAccidentalStyle } from 'music-fns';

console.log(transferAccidentalStyle('F#3', 'B♭4'));
// > 'F♯3';
// = same as 'F#3', different style of notation
```

#### + `transferStyle(note, referenceNote):note`

Combination of `transferAccidental` and `transferAccidentalStyle`.

In this example, we've converted `F#3` to `G♭3` because the reference note is `B♭4` (a flat symbol instead of a sharp letter).

```js
import { transferStyle } from 'music-fns';

console.log(transferStyle('F#3', 'B♭4'));
// > 'G♭3';
// = same as 'F#3', different style of notation
```

### 🎹 Intervals

#### CONSTANTS

#### + `Interval`

An object that contains different interval constants. **Feel free to open a PR to add more interval constants.**

_(interval amount between the brackets ())_

short:

* `(0)` **ROOT** / **R**
* `(1)` **SEMITONE** / **S**
* `(2)` **TONE** / **T**
* `(6)` **TRITONE** / **TT**
* `(12)` **OCTAVE** / **O**

minor / major:

* `(0)` **PERFECT_UNISON** / **P1**
* `(1)` **MINOR_SECOND** / **m2**
* `(2)` **MAJOR_SECOND** / **M2**
* `(3)` **MINOR_THIRD** / **m3**
* `(4)` **MAJOR_THIRD** / **M3**
* `(5)` **PERFECT_FOURTH** / **P4**
* `(7)` **PERFECT_FIFTH** / **P5**
* `(8)` **MINOR_SIXTH** / **m6**
* `(9)` **MAJOR_SIXTH** / **M6**
* `(10)` **MINOR_SEVENTH** / **m7**
* `(11)` **MAJOR_SEVENTH** / **M7**
* `(12)` **PERFECT_OCTAVE** / **P8**

augmented / diminished:

* `(0)` **DIMINISHED_SECOND** / **d2**
* `(1)` **AUGMENTED_UNISON** / **A1**
* `(2)` **DIMINISHED_THIRD** / **d3**
* `(3)` **AUGMENTED_SECOND** / **A2**
* `(4)` **DIMINISHED_FOURTH** / **d4**
* `(5)` **AUGMENTED_THIRD** / **A3**
* `(6)` **DIMINISHED_FIFTH** / **d5**
* `(6)` **AUGMENTED_FOURTH** / **A4**
* `(7)` **DIMINISHED_SIXTH** / **d6**
* `(8)` **AUGMENTED_FIFTH** / **A5**
* `(9)` **DIMINISHED_SEVENTH** / **d7**
* `(10)` **AUGMENTED_SIXTH** / **A6**
* `(11)` **DIMINISHED_EIGHTH** / **d8**
* `(11)` **DIMINISHED_OCTAVE**
* `(12)` **AUGMENTED_SEVENTH** / **A7**

```js
import { Interval } from 'music-fns';

console.log(Interval.PERFECT_FOURTH);
// > 5

console.log(Interval.A6);
// > 10

console.log(Interval.MAJOR_THIRD);
// > 4

console.log(Interval.S);
// > 1

console.log(Interval.OCTAVE);
// > 12
```

#### METHODS

#### + `transpose(note, interval):note`

Transpose a note by a specific interval (use the `Interval` constant). An interval can also be negative.

```js
import { transpose, Interval } from 'music-fns';

console.log(transpose('C♯3', Interval.MAJOR_SIXTH));
// > 'A♯3'

console.log(transpose('C♯3', -Interval.O));
// > 'C♯2'
```

#### + `getIntervals(notes, [options]):intervals`

Returns one or more intervals between the provided notes. You can pass `fromRoot` to calculate the interval from the first note (= root).

```js
import { getIntervals } from 'music-fns';

console.log(getIntervals(['C♯3', 'A♯3']));
// > [ 9 ]

// interval 'C♯3' -> 'A♯3' and 'A♯3' -> 'B3'
console.log(getIntervals(['C♯3', 'A♯3', 'B3']));
// > [ 9, 1 ]

// interval 'C♯3' -> 'A♯3' and 'C♯3' -> 'B3'
console.log(getIntervals(['C♯3', 'A♯3', 'B3'], { fromRoot: true }));
// > [ 9, 10 ]
```

#### + `isSemitone(interval):boolean`

Returns `true` if the interval is a semitone `(1)`.

```js
import { getIntervals, isSemitone } from 'music-fns';

console.log(isSemitone(getIntervals(['C♯3', 'D3'])[0]));
// > true;
```

#### + `isTone(interval):boolean`

Returns `true` if the interval is a tone `(2)`.

```js
import { getIntervals, isTone } from 'music-fns';

console.log(isTone(getIntervals(['C3', 'D3'])[0]));
// > true;
```

#### + `isThird(interval):boolean`

Returns `true` if the interval is a third (diminished, minor, major or augmented) `(2, 3, 4, 5)`.

```js
import { getIntervals, isThird } from 'music-fns';

console.log(isThird(getIntervals(['C4', 'E4'])[0]));
// > true;

console.log(isThird(getIntervals(['A4', 'C4'])[0]));
// > true;

console.log(isThird(getIntervals(['C4', 'E#4'])[0]));
// > true;
```

#### + `isFifth(interval):boolean`

Returns `true` if the interval is a fifth (diminished, perfect or augmented) `(6, 7, 8)`.

```js
import { getIntervals, isFifth } from 'music-fns';

console.log(isFifth(getIntervals(['C4', 'G4'])[0]));
// > true;

console.log(isFifth(getIntervals(['C4', 'Gb4'])[0]));
// > true;

console.log(isFifth(getIntervals(['C4', 'G#4'])[0]));
// > true;
```

#### + `isOctave(number):boolean`

Returns `true` if the interval is an octave `(12)`.

```js
import { getIntervals, isOctave } from 'music-fns';

console.log(isOctave(getIntervals(['C3', 'C4'])[0]));
// > true;
```

### 🎹 Scales & Modes

#### CONSTANTS

#### + `Scale`

An object containing scale constants (array of intervals).
**Feel free to open PRs to add more scales.**

* **ALGERIAN**: `[ 2, 1, 2, 1, 1, 1, 3, 1 ]`
* **ALTERED**: `[ 1, 2, 1, 2, 2, 2, 2 ]`
* **ARABIC**: `[ 1, 3, 1, 2, 1, 3, 1 ]`
* **AUGMENTED**: `[ 3, 1, 3, 1, 3, 1 ]`
* **BALINESE**: `[ 1, 2, 4, 1, 4 ]`
* **BLUES**: `[ 3, 2, 1, 1, 3, 2 ]`
* **BYZANTINE**: `[ 1, 3, 1, 2, 1, 3, 1 ]`
* **CHINESE**: `[ 4, 2, 1, 4, 1 ]`
* **CHROMATIC**: `[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]`
* **DOUBLE_HARMONIC**: `[ 1, 3, 1, 2, 1, 3, 1 ]`
* **ENIGMATIC**: `[ 1, 3, 2, 2, 2, 1, 1 ]`
* **GYPSY_MAJOR**: `[ 1, 3, 1, 2, 1, 3, 1 ]`
* **HARMONIC_MINOR**: `[ 2, 1, 2, 2, 1, 3, 1 ]`
* **HIRAJOSHI**: `[ 1, 4, 1, 4, 2 ]`
* **IN_SEN**: `[ 1, 4, 2, 3, 2 ]`
* **JAPANESE**: `[ 1, 4, 2, 3, 2 ]`
* **MAJOR_PENTATONIC**: `[ 2, 2, 3, 2, 3 ]`
* **MAJOR**: `[ 2, 2, 1, 2, 2, 2, 1 ]`
* **MELODIC_MINOR**: `[ 2, 1, 2, 2, 2, 2, 1 ]`
* **MINOR_PENTATONIC**: `[ 3, 2, 2, 3, 2 ]`
* **MONGOLIAN**: `[ 2, 2, 3, 2, 3 ]`
* **NATURAL_MINOR**: `[ 2, 1, 2, 2, 1, 2, 2 ]`
* **PELOG**: `[ 1, 2, 4, 1, 4 ]`
* **PROMETHEUS**: `[ 2, 2, 2, 3, 1, 2 ]`
* **WHOLE_TONE**: `[ 2, 2, 2, 2, 2, 2 ]`
* **YO**: `[ 2, 3, 2, 2, 3 ]`

```js
import { Scale } from 'music-fns';

console.log(Scale.ALGERIAN);
// > [ 2, 1, 2, 1, 1, 1, 3, 1 ]

console.log(Scale.PELOG);
// > [ 1, 2, 4, 1, 4 ]

console.log(Scale.CHROMATIC);
// > [ 1, 2, 4, 1, 4 ]
```

#### + `Mode`

An object containing mode constants (array of intervals).
White keys on a piano from note -> note an octave up.

* **IONIAN**: (C - C) `[ 2, 2, 1, 2, 2, 2, 1 ]`
* **DORIAN**: (D - D) `[ 2, 1, 2, 2, 2, 1, 2 ]`
* **PHRYGIAN**: (E - E) `[ 1, 2, 2, 2, 1, 2, 2 ]`
* **LYDIAN**: (F - F) `[ 2, 2, 2, 1, 2, 2, 1 ]`
* **MIXOLYDIAN**: (G - G) `[ 2, 2, 1, 2, 2, 1, 2 ]`
* **AEOLIAN**: (A - A) `[ 2, 1, 2, 2, 1, 2, 2 ]`
* **LOCRIAN**: (B - B) `[ 1, 2, 2, 1, 2, 2, 2 ]`

```js
import { Mode } from 'music-fns';

console.log(Mode.IONIAN);
// > [ 2, 2, 1, 2, 2, 2, 1 ]

console.log(Mode.MIXOLYDIAN);
// > [ 2, 2, 1, 2, 2, 2, 1 ]
```

#### METHODS

#### + `createScale(root, intervals, [options]):scale`

Creates a scale (or mode) by providing a root note and an intervals (use the `Scale` or `Mode` constant). You can provide `includeRootEnd` to also include the root note transposed an octave up.

```js
import { Scale, Mode, createScale } from 'music-fns';

console.log(createScale('C2', Scale.ARABIC));
// > [ 'C2', 'C#2', 'E2', 'F2', 'G2', 'G#2', 'B2' ]

console.log(createScale('G', Mode.MIXOLYDIAN));
// > [ 'G', 'A', 'B', 'C', 'D', 'E', 'F' ]

console.log(createScale('F2', Scale.BLUES, { includeRootEnd: true }));
// > [ 'F2', 'G#2', 'A#2', 'B2', 'C3', 'D#3', 'F3' ]
```

#### + `isScale(notes, [options]):boolean`

Returns `true` when the array of notes is a scale.

```js
import { isScale } from 'music-fns';

console.log(isScale(['C2', 'C#2', 'E2', 'F2', 'G2', 'G#2', 'B2']));
// > true

console.log(isScale(['C2', 'C#2', 'E4', 'F2', 'G2', 'G#2', 'C5']));
// > false
```

#### + `isMode(notes, [options]):boolean`

Returns `true` when the provided array of notes is a mode (Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian or Locrian).

```js
import { isMode } from 'music-fns';

console.log(isMode(['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5']));
// > true

console.log(isMode(['C2', 'C#2', 'E2', 'F2', 'G2', 'G#2', 'B2']));
// > false
```

#### + `isAscending(scale, [options]):boolean`

Returns `true` if the scale is ascending.

```js
import { isAscending } from 'music-fns';

console.log(isAscending(['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C2']));
// > true

console.log(isAscending(['C2', 'B1', 'A1', 'G1', 'F1', 'E1', 'D1']));
// > false
```

#### + `isDescending(scale, [options]):boolean`

Returns `true` if the scale is descending.

```js
import { isDescending } from 'music-fns';

console.log(isDescending(['C2', 'B1', 'A1', 'G1', 'F1', 'E1', 'D1']));
// > true

console.log(isDescending(['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C2']));
// > false
```

#### + `hasIntervalAmount(scale, intervalAmount, [options]):boolean`

Returns `true` if a scale has the provided interval amount.

```js
import { hasIntervalAmount } from 'music-fns';

console.log(hasIntervalAmount(['C2', 'C#2', 'E2', 'F2', 'G2', 'G#2', 'B2'], 7));
// > true

console.log(
  hasIntervalAmount(['C2', 'C#2', 'E2', 'F2', 'G2', 'G#2', 'B2', 'C3'], 7)
);
// > true

console.log(hasIntervalAmount(['C2', 'C#2', 'E2', 'F2', 'G2', 'G#2'], 7));
// > false
```

#### + `isPentatonic(scale, [options]):boolean`

Returns `true` if the scale is pentatonic (5 notes per octave).

```js
import { isPentatonic } from 'music-fns';

console.log(isPentatonic(['C', 'D', 'E', 'G', 'A']));
// > true

console.log(isPentatonic(['C', 'D', 'E', 'G', 'A', 'C']));
// > true

console.log(isPentatonic(['C', 'D', 'E', 'G']));
// > false
```

#### + `isHexatonic(scale, [options]):boolean`

Returns `true` if the scale is hexatonic (6 notes per octave).

```js
import { isHexatonic } from 'music-fns';

console.log(isHexatonic(['C', 'D', 'E', 'F♯', 'G♯', 'A♯']));
// > true

console.log(isHexatonic(['C', 'D', 'E', 'F♯', 'G♯', 'A♯', 'C']));
// > true

console.log(isHexatonic(['C', 'D', 'E', 'F♯', 'G♯']));
// > false
```

#### + `isHeptatonic(scale, [options]):boolean`

Returns `true` if the scale is heptatonic (7 notes per octave).

```js
import { isHeptatonic } from 'music-fns';

console.log(isHeptatonic(['C', 'D', 'E', 'F', 'G', 'A', 'B']));
// > true

console.log(isHeptatonic(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']));
// > true

console.log(isHeptatonic(['C', 'D', 'E', 'F', 'G', 'A']));
// > false
```

#### + `isOctatonic(scale, [options]):boolean`

Returns `true` if the scale is octatonic (8 notes per octave).

```js
import { isOctatonic } from 'music-fns';

console.log(isOctatonic(['D', 'E', 'F', 'G', 'A♭', 'B♭', 'B', 'C♯']));
// > true

console.log(isOctatonic(['D', 'E', 'F', 'G', 'A♭', 'B♭', 'B', 'C♯', 'D']));
// > true

console.log(isOctatonic(['D', 'E', 'F', 'G', 'A♭', 'B♭']));
// > false
```

#### + `isDiatonic(scale, [options]):boolean`

Returns `true` if the scale is diatonic (5 tones & 2 semitones, where the semitones are separated at least 2 steps from each other).

```js
import { isDiatonic } from 'music-fns';

console.log(isDiatonic(['C', 'D', 'E', 'F', 'G', 'A', 'B']));
// > true

console.log(isDiatonic(['C', 'D', 'E', 'F#', 'G#', 'A#', 'B']));
// > false
```

#### + `isHemitonic(scale, [options]):boolean`

Returns `true` if the scale is hemitonic (contains 1 or more semitones).

```js
import { isHemitonic } from 'music-fns';

console.log(isHemitonic(['C', 'D', 'E', 'F', 'G', 'A', 'B']));
// > true

console.log(isHemitonic(['C', 'D', 'E', 'F#', 'G#', 'A#']));
// > false
```

#### + `isAnhemitonic(scale, [options]):boolean`

Returns `true` if the scale is anhemitonic (does not contain semitones).

```js
import { isAnhemitonic } from 'music-fns';

console.log(isAnhemitonic(['C', 'D', 'E', 'F#', 'G#', 'A#']));
// > true

console.log(isAnhemitonic(['C', 'D', 'E', 'F', 'G', 'A', 'B']));
// > false
```

#### + `isCohemitonic(scale, [options]):boolean`

Returns `true` if the scale is cohemitonic (contains 2 or more semitones that appear consecutively in scale order).

```js
import { isCohemitonic } from 'music-fns';

// semitones between F# - G and G - Ab
console.log(isCohemitonic(['C', 'D', 'Eb', 'F#', 'G', 'Ab', 'B', 'C']));
// > true

console.log(isCohemitonic(['C1', 'C#1', 'D#1', 'G1', 'G#1']));
// > false
```

#### + `getNoteOnDegree(scale, degree, [options]):note`

Returns the note on the provided scale degree.

```js
import { getNoteOnDegree } from 'music-fns';

console.log(getNoteOnDegree(['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'], 3));
// > E1

console.log(getNoteOnDegree(['C', 'D', 'E', 'F', 'G', 'A', 'B'], 8));
// > C
```

#### + `getTonic(diatonicScale), [options]:note`

Returns the note on scale degree `1` in a diatonic scale.

```js
import { getTonic } from 'music-fns';

console.log(getTonic(['C', 'D', 'E', 'F', 'G', 'A', 'B']));
// > C
```

#### + `getSupertonic(diatonicScale, [options]):note`

Returns the note on scale degree `2` in a diatonic scale.

```js
import { getSupertonic } from 'music-fns';

console.log(getSupertonic(['C', 'D', 'E', 'F', 'G', 'A', 'B']));
// > D
```

#### + `getMediant(diatonicScale, [options]):note`

Returns the note on scale degree `3` in a diatonic scale.

```js
import { getMediant } from 'music-fns';

console.log(getMediant(['C', 'D', 'E', 'F', 'G', 'A', 'B']));
// > E
```

#### + `getSubdominant(diatonicScale, [options]):note`

Returns the note on scale degree `4` in a diatonic scale.

```js
import { getSubdominant } from 'music-fns';

console.log(getSubdominant(['C', 'D', 'E', 'F', 'G', 'A', 'B']));
// > F
```

#### + `getDominant(diatonicScale, [options]):note`

Returns the note on scale degree `5` in a diatonic scale.

```js
import { getDominant } from 'music-fns';

console.log(getDominant(['C', 'D', 'E', 'F', 'G', 'A', 'B']));
// > G
```

#### + `getSubmediant(diatonicScale, [options]):note`

Returns the note on scale degree `6` in a diatonic scale.

```js
import { getLeadingTone } from 'music-fns';

console.log(getLeadingTone(['C', 'D', 'E', 'F', 'G', 'A', 'B']));
// > A
```

#### + `getLeadingTone(diatonicScale, [options]):note`

Returns the note on scale degree `7` in a diatonic scale.

```js
import { getLeadingTone } from 'music-fns';

console.log(getLeadingTone(['C', 'D', 'E', 'F', 'G', 'A', 'B']));
// > B
```

#### + `normalize(scale, [options]): scale`

Normalize a scale by making sure it's ascending & has a root end.

```js
import { normalize } from 'music-fns';

console.log(normalize(['C2', 'G1', 'F1', 'E1', 'D1']));
// > ['C1', 'D1', 'E1', 'F1', 'G1', 'C2']

console.log(normalize(['C1', 'D1', 'E1', 'F1', 'G1']));
// > ['C1', 'D1', 'E1', 'F1', 'G1', 'C2']
```

### 🎹 Chords

#### CONSTANTS

#### + `Chord`

An object containing chord constants (array of intervals from root, root included). **Feel free to open PRs to add more chords.**

* **AUGMENTED**: `[ 0, 4, 8 ]`
* **DIMINISHED**: `[ 0, 3, 6 ]`
* **MAJOR_SEVENTH**: `[ 0, 4, 7, 11 ]`
* **MAJOR**: `[ 0, 4, 7 ]`
* **MINOR_MAJOR_SEVENTH**: `[ 0, 3, 7, 11 ]`
* **MINOR_SEVENTH**: `[ 0, 3, 7, 10 ]`
* **MINOR**: `[ 0, 3, 7 ]`
* **SEVENTH**: `[ 0, 4, 7, 10 ]`

```js
import { Chord } from 'music-fns';

console.log(Chord.MAJOR);
// > [ 0, 4, 7 ]

console.log(Chord.MINOR_MAJOR_SEVENTH);
// > [ 0, 3, 7, 11 ]
```

#### METHODS

#### + `createChord(root, intervals):chord`

Creates a chord by providing a root note and intervals (use the `Chord` constant).

```js
import { Chord, createChord } from 'music-fns';

console.log(createChord('C2', Chord.MAJOR));
// > [ 'C2', 'E2', 'G2' ]

console.log(createChord('D#3', Chord.MAJOR_SEVENTH));
// > [ 'D#3', 'G3', 'A#3', 'D4' ]
```

#### + `isTriad(chord):boolean`

Returns `true` if the chord is a triad (a set of three notes that can be stacked in thirds).

```js
import { isTriad } from 'music-fns';

console.log(isTriad(['F2', 'A2', 'C3']));
// > true

console.log(isTriad(['F2', 'A2', 'C3', 'D4']));
// > false
```

### Melody

#### METHODS

#### + `createMelody(notes, pattern):notes`

Creates a melody using a provided array of notes and a pattern.

```js
import { Chord, createMelody } from 'music-fns';

console.log(createMelody(createScale('C2', Scale.MAJOR), [0, 2, 0, 1, 0, 3]));
// > [ 'C2', 'E2', 'C2', 'D2', 'C2', 'F2' ]
```

## Thanks.

Thanks to our employer [madewithlove](https://madewithlove.be/) for letting us work on this during our weekly [Friyays](https://madewithlove.be/company-benefits-in-2019-at-madewithlove/).
