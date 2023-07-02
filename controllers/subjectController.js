import { Subjectmodel } from "../models/Subject.js";

//get all subjects
export const getSubject = async(req,res)=>{
    const subjects = await Subjectmodel.find()
    
    if (!subjects.length){
        return res.status(400).json({message:"Subjects not found"})
    }
    
    res.json(subjects)
}

//create subject
export const createSubject = async(req,res)=>{
    const {subject} = req.body
    
    if (!subject){
        return res.status(400).json({message:"Subject is not valid"})
    }

    try{
        const subjects = await Subjectmodel.create({subject})
        res.json(subjects)
    }
    catch(err){
        console.log(err)
        res.status(400).json({msg:err})
    }
    
}

//get a subject

//update a subject

//delete a subject

