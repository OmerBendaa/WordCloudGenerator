import { Request, Response } from "express";
import wordService from "../services/wordService";
import { WordFrequencies } from "../types/types";

export const getWordFrequencies = async (
  req: Request,
  res: Response
): Promise<Response<WordFrequencies>> => {
  try {
    const frequencies: WordFrequencies = await wordService.getWordFrequencies();

    return res.json(frequencies);
  } catch (error) {
    console.error("Error fetching word frequencies:", error);
    return res.status(500).json({ error: "Failed to fetch word frequencies" });
  }
};
export default {
  getWordFrequencies,
};
