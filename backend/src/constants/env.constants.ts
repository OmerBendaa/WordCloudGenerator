import dotenv from "dotenv";

dotenv.config();

export const apiUrl = process.env.API_URL
  ? process.env.API_URL
  : "https://random-word-api.vercel.app/api?words=1";
export const numOfRequests = process.env.NUM_OF_REQUESTS
  ? parseInt(process.env.NUM_OF_REQUESTS)
  : 500;
export const port = process.env.PORT ? parseInt(process.env.PORT) : 4000;
