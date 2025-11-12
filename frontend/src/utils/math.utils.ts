export const getMinMax = (values: number[]) => {
  let min = values[0];
  let max = values[0];

  for (let i = 1; i < values.length; i++) {
    if (values[i] < min) min = values[i];
    if (values[i] > max) max = values[i];
  }

  return [min, max];
};
