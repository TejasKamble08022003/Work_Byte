import mongoose from "mongoose";

const jobSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Please provide job title"],
        minLength: [3, "Job title must contain atleast 3 characters"],
        maxLength: [50,"Job title should be less than 50 characters"],
    },
    description:{
        type:String,
        required:[true, "Please provide job description"],
        minLength: [50, "Job description must contain atleast 50 characters"],
        maxLength: [350,"Job description should be less than 350 characters"],
    },
    category:{
        type:String,
        required:[true, "Please provide job category"],
    },
    country:{
        type:String,
        required:[true, "Please provide job country"],
    },
    city:{
        type: String,
        required: [true, "Please provide job city"],
    },
    location:{
        type:String,
        required: [true, "Please provide exact job location"],
        minLength: [50, "Job location must contain atleast 50 characters"],
    },
    fixedSalary:{
        type: Number,
        minLength:[4, "Fixed Salary must contain atleast 4 digits"],
        maxLength: [9, "Fixed Salary cannot exceed 9 digits"],
    },
    salaryFrom:{
        type: Number,
        minLength:[4, "Salary From must contain atleast 4 digits"],
        maxLength: [9, "Salary From cannot exceed 9 digits"],
    },
    salaryTo:{
        type: Number,
        minLength:[4, "Salary To must contain atleast 4 digits"],
        maxLength: [9, "Salary To cannot exceed 9 digits"],
    },
    expired:{
        type: Boolean,
        default: false,
    },
    jobPostedOn:{
        type: Date,
        default: Date.now(),
    },
    jobPostedBy:{
        type:mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
});

export const Job=mongoose.model("Job", jobSchema);