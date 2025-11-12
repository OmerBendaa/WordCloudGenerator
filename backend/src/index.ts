import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import wordsRouter from "./routes/wordRoutes";
import { port } from "./constants/env.constants";

dotenv.config();
const app = express();

app.use(cors());
app.use("/", wordsRouter);

const PORT = port;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
