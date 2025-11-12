import { fetchWords } from "../utils/fetchWords.utils";
import { WordFrequencies } from "../types/types";

const getWordFrequencies = async (): Promise<WordFrequencies> => {
  try {
    const frequencies = await fetchWords();
    return frequencies;
  } catch (error) {
    console.error("Error in word service:", error);
    throw new Error("Failed to calculate word frequencies");
  }
};
export default {
  getWordFrequencies,
};
