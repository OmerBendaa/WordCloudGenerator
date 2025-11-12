import { useQuery } from "@tanstack/react-query";
import { fetchWordsFrequency } from "../queries/words.queries";

export const useWordsFrequency = () => {
  return useQuery({
    queryKey: ["wordsFrequency"],
    queryFn: fetchWordsFrequency,
  });
};
