import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    subject:{
        type:'String',
        required:true
    }
})

export const Subjectmodel = mongoose.model("subject",subjectSchema)