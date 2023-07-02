import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { quizRouter } from "./routes/quizRoute.js";
import cors from 'cors'
import { subjectRouter } from "./routes/subjectRoute.js";

dotenv.config();

const app = express();

app.use(cors())

app.use(express.json())

app.use('/api/question',quizRouter)
app.use('/api/subject',subjectRouter)


mongoose
  .connect(process.env.DATABASE_URI)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`server is up running on ${process.env.PORT}`)
    )
  )
  .catch((err) => console.log(err));
