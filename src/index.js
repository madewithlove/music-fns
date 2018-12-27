import path from 'path';
import fs from 'fs';

import Chord from './constants/Chord';
import Interval from './constants/Interval';
import Mode from './constants/Mode';
import Scale from './constants/Scale';
import NOTES from './constants/NOTES';

const normalizedPath = path.join(__dirname, './');
const ignoredFiles = ['constants', 'index.js'];

const musicFunctions = {};

fs
  .readdirSync(normalizedPath)
  .filter(file => !ignoredFiles.includes(file))
  .forEach(func => {
    musicFunctions[func] = require(`./${func}`);
  });

export default {
  Chord,
  Interval,
  Mode,
  Scale,
  NOTES,
  ...musicFunctions
};
