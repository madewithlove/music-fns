# Roadmap

## types

- scientificNote = string
- frequency = number
- interval = number

## Constants

- [ ] notes
- [ ] scales
- [ ] modes
- [ ] intervals

## Functions

- [ ] noteToFrequency(scientificNote: scientificNote): frequency

- [ ] frequencyToNote(frequency: frequency): scientificNote

- [ ] createScale(scientificNote: scientificNote, type: string): Array<scientificNote>

- [ ] createChord(scientificNote: scientificNote, type: string): Array<scientificNote>

- [ ] flatToSharp(scientificNote: scientificNote): scientificNote
- [ ] sharpToFlat(scientificNote: scientificNote): scientificNote

- [ ] getInterval(from: scientificNote, to: scientificNote): interval

- [ ] isOctave(from: scientificNote, to: scientificNote): boolean
- [ ] isTriad(from: scientificNote, to: scientificNote): boolean

- [ ] getTiming(BPM: number, dotteNoteValue: number): number