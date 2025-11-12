import type { RotateValue } from "@isoterik/react-word-cloud";

export const resolveRotate: RotateValue = () => {
  const rotationWeights = [0, 0, 90, 270];
  return rotationWeights[Math.floor(Math.random() * rotationWeights.length)];
};

export const resolveFill = ({ color }: { color: string }): string => {
  return color;
};
