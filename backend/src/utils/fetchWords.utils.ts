import axios from "axios";
import { apiUrl, numOfRequests } from "../constants/env.constants";
import { WordFrequencies } from "../types/types";
import { getRandomColor } from "./colors.utils";

export const fetchWords = async (): Promise<WordFrequencies> => {
  const wordFrequencyMap: WordFrequencies = {};

  for (let i = 0; i < numOfRequests; i++) {
    try {
      const response = await axios.get(apiUrl);
      const [word] = response.data as string[];

      wordFrequencyMap[word] = {
        value: (wordFrequencyMap[word]?.value || 0) + 1,
        color: getRandomColor(word),
      };
    } catch (error) {
      console.error("Error fetching word:", error);
    }
  }

  return wordFrequencyMap;
};
