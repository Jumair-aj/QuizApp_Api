import { Quizmodel } from "../models/Quiz.js";

//get all questions
export const getQuestions = async(req,res)=>{
    const questions = await Quizmodel.find()
    
    if (!questions.length){
        return res.status(400).json({message:"Questions not found"})
    }
    
    res.json(questions)
}

//create question
export const createQuestion = async(req,res)=>{
    const {question,answers,subject,tags} = req.body
    
    if (!question || !answers.length || !subject || !tags.length){
        return res.status(400).json({message:"Questions are not valid"})
    }

    try{
        const questions = await Quizmodel.create({question,answers,subject,tags})
        res.json(questions)
    }
    catch(err){
        console.log(err)
        res.status(400).json({msg:err})
    }
    
}

//get a question

//update a question

//delete a question


