import { direction } from "../types/direction";

const getDirection = (num: number): direction => {
  if (typeof num !== 'number' || num === 0) {
    throw new Error(`"${num}" is not a valid direction.`);
  }

  if (num > 0) {
    return 1;
  } else {
    return -1;
  }
};
export default getDirection;
