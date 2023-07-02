import express from "express";
import { createQuestion, getQuestions } from "../controllers/quizController.js";

const router = express.Router();

router.route("/").get(getQuestions).post(createQuestion);

router.route("/:id").get().patch().delete();

export { router as quizRouter };
