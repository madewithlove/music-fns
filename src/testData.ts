export const accidentals = ["#", "b"];
export const octaves = [1, 10, 9290872134, 8999, 1233, -30, -40];

export const notesWithOctaveWithoutAccidental = [
  {
    note: "C4",
    root: "C",
    octave: 4,
  },
  {
    note: "F5",
    root: "F",
    octave: 5,
  },
  {
    note: "A6",
    root: "A",
    octave: 6,
  },
].map((note) => ({
  ...note,
  accidental: undefined,
  hasAccidental: false,
  isSharp: false,
  isFlat: false,
}));

export const notesWithOctaveAndWithAccidental = [
  {
    note: "C#4",
    root: "C",
    octave: 4,
    accidental: "#",
    hasAccidental: true,
    isSharp: true,
    isFlat: false,
  },
  {
    note: "Eb5",
    root: "E",
    octave: 5,
    accidental: "b",
    hasAccidental: true,
    isSharp: false,
    isFlat: true,
  },
  {
    note: "Gb6",
    root: "G",
    octave: 6,
    accidental: "b",
    hasAccidental: true,
    isSharp: false,
    isFlat: true,
  },
  {
    note: "Ab6",
    root: "A",
    octave: 6,
    accidental: "b",
    hasAccidental: true,
    isSharp: false,
    isFlat: true,
  },
];

export const notesWithoutOctaveAndWithoutAccidental = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
].map((note) => ({
  note,
  root: note,
  octave: undefined,
  accidental: undefined,
  hasAccidental: false,
  isSharp: false,
  isFlat: false,
  hasOctave: false,
}));

export const notesWithoutOctaveWithFlat = [
  { note: "Bb", root: "B", accidental: "b" },
  { note: "Db", root: "D", accidental: "b" },
  { note: "Eb", root: "E", accidental: "b" },
  { note: "Gb", root: "G", accidental: "b" },
  { note: "Ab", root: "A", accidental: "b" },
].map((note) => ({
  ...note,
  hasAccidental: true,
  octave: undefined,
  isSharp: false,
  isFlat: true,
  hasOctave: false,
}));

export const notesWithoutOctaveWithSharp = [
  { note: "A#", root: "A", accidental: "#" },
  { note: "C#", root: "C", accidental: "#" },
  { note: "D#", root: "D", accidental: "#" },
  { note: "F#", root: "F", accidental: "#" },
  { note: "G#", root: "G", accidental: "#" },
].map((note) => ({
  ...note,
  hasAccidental: true,
  octave: undefined,
  isSharp: true,
  isFlat: false,
  hasOctave: false,
}));

export const notesWithoutOctaveWithAccidental = [
  ...notesWithoutOctaveWithFlat,
  ...notesWithoutOctaveWithSharp,
];

export const junkData = [
  "",
  [],
  {},
  null,
  undefined,
  true,
  false,
  new Date(),
  function () {},
];

export const invalidNotes = [
  "B#",
  "B#99",
  "Cb3",
  "Cb",
  "E#",
  "E#3",
  "Fb2",
  "Fb",
  "H4",
  "I",
  "Q#",
  "Jb",
  ...junkData,
];

export const invalidNoteObjects = [
  { accidental: "x", octave: 4, root: "C" },
  { accidental: "#", octave: "4", root: "C" },
  { accidental: "#", octave: 4, root: 1 },
  { accidental: "#", octave: 4 },
  { accidental: "#", root: 1 },
  { octave: 4 },
  { accidental: "#" },
  { root: 1 },
  { root: "C", accidental: 2 },
  { octave: [], root: "B" },
];
