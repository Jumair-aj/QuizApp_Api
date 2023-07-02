import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    question:{
        type:'String',
        required:true
    },
    answers:[{
        answer:{
            type:'String',
            required:true
        },
        rightAnswer:{
            type:'Boolean'
            
        }
}],
    subject:{
        type:'String',
        required:true
    },
    tags:[{
        type:'String',
        // required:true
    }]
})

export const Quizmodel = mongoose.model("question",quizSchema)