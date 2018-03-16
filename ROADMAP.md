# Roadmap

## types

- scientificNote = string
- frequency = number
- interval = number

## Constants

- [x] Notes
- [x] Scale
- [x] Mode
- [x] Interval
- [x] Chord

## Functions

- [ ] noteToFrequency(scientificNote: scientificNote): frequency
- [ ] frequencyToNote(frequency: frequency): scientificNote

- [ ] createScale(scientificNote: scientificNote, type: string): Array<scientificNote>
- [ ] createChord(scientificNote: scientificNote, type: string): Array<scientificNote>

- [ ] getInterval(from: scientificNote, to: scientificNote): interval

- [ ] isOctave(from: scientificNote, to: scientificNote): boolean

- [x] isTriad(from: scientificNote, to: scientificNote): boolean

- [ ] getTiming(BPM: number, dotteNoteValue: number): number

- [ ] hasAccidental(from: scientificNote): boolean
- [ ] isNatural(from: scientificNote): boolean
- [ ] flatToSharp(scientificNote: scientificNote): scientificNote
- [ ] sharpToFlat(scientificNote: scientificNote): scientificNote
- [ ] transpose(notes: Array<scientificNote>, key: scientificNote): Array<scientificNote>