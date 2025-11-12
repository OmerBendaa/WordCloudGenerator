const colorMap: Record<string, string> = {};

export const getRandomColor = (word: string) => {
  if (!colorMap[word]) {
    colorMap[word] = `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")}`;
  }
  return colorMap[word];
};
