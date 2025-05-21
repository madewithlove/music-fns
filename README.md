# music-fns [![npm version](https://badge.fury.io/js/music-fns.svg)](https://badge.fury.io/js/music-fns)

music-fns is music utility library that contains small music notation related functions.

## Installation

```shell
pnpm i music-fns
```

## Status

- [x] getRoot
- [x] getOctave
- [x] getAccidental
- [x] ~getNote~ -> getNoteWithoutOctave
- [x] hasOctave
- [x] hasAccidental
- [x] isFlat
- [x] isSharp
- [x] isNatural
- [x] flatToSharp
- [x] sharpToFlat
- [x] getChromaticCPosition
- [x] ~noteToFrequency~ -> toFrequency
- [x] ~noteToMidi~ -> toMidi
- [x] ~noteToObject~ -> toObject
- [x] ~objectToNote~ -> toNote
- [x] isNote
- [x] isNoteObject (NEW)
- [x] transpose
- [x] getIntervals
- [x] createScale
- [x] isScale
- [x] createChord
- [x] ~isHeptatonic~ -> isScaleOfType
- [x] ~isPentatonic~ -> isScaleOfType
- [ ] ~isHexatonic~ -> isScaleOfType
- [ ] ~isOctactonic~ -> isScaleOfType
- [ ] ~isDiatonic~ -> isScaleOfType
- [ ] ~isHemitonic~ -> isScaleOfType
- [ ] ~isAnhemitonic~ -> isScaleOfType
- [ ] ~isCohemetonic~ -> isScaleOfType
- [ ] areEqual
- [ ] ~isSemitone~ -> isIntervalOfType
- [ ] ~isTone~ -> isIntervalOfType
- [ ] ~isThird~ -> isIntervalOfType
- [ ] ~isFifth~ -> isIntervalOfType
- [ ] ~isOctave~ -> isIntervalOfType
- [ ] isMode
- [ ] hasIntervalAmount
- [ ] ~getLeadingTone~ -> getNoteOnScale
- [ ] ~getNoteOnDegree~ -> getNoteOnScale
- [ ] ~getTonic~ -> getNoteOnScale
- [ ] ~getSuperTonic~ -> getNoteOnScale
- [ ] ~getMediant~ -> getNoteOnScale
- [ ] ~getSubdominant~ -> getNoteOnScale
- [ ] ~getDominant~ -> getNoteOnScale
- [ ] ~getSubmediant~ -> getNoteOnScale
- [ ] ~isTriad~ -> isChordOfType
- [ ] createMelody

#### unsure

- [ ] isAscending (??)
- [ ] isDescending (??)
- [ ] normalize (??)

#### removed

- accidentalToLetter (no different accidental styles anymore)
- accidentalToSymbol (no different accidental styles anymore)
- transferAccidental (no different accidental styles anymore)
- transferAccidentalStyle (no different accidental styles anymore)
- transferStyle (no different accidental styles anymore)
- hasAccidentalLetter (no accidental styles)
- hasAccidentalSymbol (no accidental styles)
- haveSameOctave (user can easily implement this)

## Thanks.

Thanks to our employer [madewithlove](https://madewithlove.com/?rel=music-fns) for letting us work on this during our weekly [Friyays](https://madewithlove.com/blog/this-is-madewithlove/company-benefits-in-2019-at-madewithlove/).
