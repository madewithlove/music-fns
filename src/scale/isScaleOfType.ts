import { Scale } from "src";
import { isScale } from "./isScale";

const scaleTypeValidators = {
  heptatonic: (scale: Scale) => scale.length === 7,
  pentatonic: (scale: Scale) => scale.length === 5,
  chromatic: (scale: Scale) => scale.length === 12,
};

type ScaleType = keyof typeof scaleTypeValidators;

export function isScaleOfType(scale: Scale, type: ScaleType) {
  if (!isScale(scale)) {
    throw new Error("provided input is not a scale");
  }

  const validator = scaleTypeValidators[type];
  if (!validator) {
    throw new Error(`scale type: ${type} is unknown`);
  }

  return validator(scale);
}
