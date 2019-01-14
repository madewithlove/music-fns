export default function chordCompiler(names, intervals) {
  return names.reduce((object, name) => ({ ...object, [name]: intervals }), {});
}
