import express from "express";

import { createSubject, getSubject } from "../controllers/subjectController.js";

const router = express.Router();

router.route("/").get(getSubject).post(createSubject);

router.route("/:id").get().patch().delete();

export { router as subjectRouter };