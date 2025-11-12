import type { WordsFrequency } from "../types/api.types";

// export const fetchWordsFrequencyMock = async (): Promise<WordsFrequency> => {

//   await new Promise((resolve) => setTimeout(resolve, 500));

//   return {
//     car: { value: 4, color: "#f94144" },
//     bus: { value: 8, color: "#f3722c" },
//     train: { value: 2, color: "#f8961e" },
//     bike: { value: 5, color: "#43aa8b" },
//     airplane: { value: 1, color: "#577590" },
//     scooter: { value: 3, color: "#b5179e" },
//     cloud: { value: 3, color: "#277da1" },
//   };
// };

export const fetchWordsFrequency = async (): Promise<WordsFrequency> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/`);
  if (!response.ok) {
    throw new Error("Failed to fetch words frequency");
  }
  return response.json();
};
