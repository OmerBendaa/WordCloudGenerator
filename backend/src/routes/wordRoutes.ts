import { Router } from "express";
import wordController from "../controllers/wordController";

const router = Router();

router.get("/", wordController.getWordFrequencies);

export default router;
