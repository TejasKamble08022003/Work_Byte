import mongoose from "mongoose";

export const dbConnection =()=>{
    mongoose.connect(process.env.MONGODB_URI,{
        dbName:"MERN_STACK_JOB_APP",
    }).then(()=>{
        console.log("Connected to MongoDB");
    }).catch((err)=>{
        console.log("Some error occured while connecting to database:",err);
    });
};
