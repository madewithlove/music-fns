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
  hasSharp: false,
  hasFlat: false,
}));

export const notesWithOctaveAndWithAccidental = [
  {
    note: "C#4",
    root: "C",
    octave: 4,
    accidental: "#",
    hasAccidental: true,
    hasSharp: true,
    hasFlat: false,
  },
  {
    note: "Eb5",
    root: "E",
    octave: 5,
    accidental: "b",
    hasAccidental: true,
    hasSharp: false,
    hasFlat: true,
  },
  {
    note: "Gb6",
    root: "G",
    octave: 6,
    accidental: "b",
    hasAccidental: true,
    hasSharp: false,
    hasFlat: true,
  },
  {
    note: "Ab6",
    root: "A",
    octave: 6,
    accidental: "b",
    hasAccidental: true,
    hasSharp: false,
    hasFlat: true,
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
  hasSharp: false,
  hasFlat: false,
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
  hasSharp: false,
  hasFlat: true,
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
  hasSharp: true,
  hasFlat: false,
  hasOctave: false,
}));

export const notesWithoutOctaveWithAccidental = [
  ...notesWithoutOctaveWithFlat,
  ...notesWithoutOctaveWithSharp,
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
  "",
  [],
  {},
  null,
  undefined,
  NaN,
  Infinity,
  -Infinity,
  true,
  false,
  function () {},
  new Date(),
  new Error(),
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
