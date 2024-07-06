import {catchAsyncError} from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import {Job} from "../models/jobSchema.js";

export const getAllJobs=catchAsyncError(async(req,res,next)=>{
    const jobs=await Job.find({expired:false});
    res.status(200).json({
        success:true,
        jobs,
    });
});

export const postJobs=catchAsyncError(async(req,res,next)=>{
    const {role}=req.user;
    if(role === "Job Seeker"){
        return next(new ErrorHandler("Job Seeker is not authorized to post a job",400));
    }

    const {title,description,category,country,city,location,fixedSalary,salaryFrom,salaryTo}=req.body;

    if(!title || !description || !category || !country || !city || !location){
        return next(new ErrorHandler("Please provide all job details",400));
    }

    if((!salaryFrom || !salaryTo) && !fixedSalary){
        return next(new ErrorHandler("Please provide either the fixed salary or a ranged salary",400));
    }

    if(salaryFrom && salaryTo && fixedSalary){
        return next(new ErrorHandler("Cannot enter both the fixed salary and the ranged salary",400));
    }

    const postedBy=req.user._id;
    const job=await Job.create({
        title:title,
        description:description,
        category:category,
        country:country,
        city:city,
        location:location,
        fixedSalary:fixedSalary,
        salaryFrom:salaryFrom,
        salaryTo:salaryTo,
        jobPostedBy:postedBy,
    });

    res.status(200).json({
        success:true,
        message:"Job posted successfully",
        job,
    });
});

export const getMyJobs = catchAsyncError(async(req,res,next)=>{
    const {role}=req.user;
    if(role === "Job Seeker"){
        return next(new ErrorHandler("Job Seeker is not authorized to use this function",400));
    }

    const myJobs=await Job.find({jobPostedBy:req.user._id});
    res.status(200).json({
        success:true,
        myJobs,
    });
});

export const updateJobs= catchAsyncError(async(req,res,next)=>{
    const {role}=req.user;
    if(role === "Job Seeker"){
        return next(new ErrorHandler("Job Seeker is not authorized to use this function",400));
    }

    const {id}=req.params;
    let job=await Job.findById(id);
    if(!job){
        return next(new ErrorHandler("Oops, Job not found!",404));
    }

    job=await Job.findByIdAndUpdate(id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success:true,
        message:"Job updated successfully",
        job,
    });
});

export const deleteJob=catchAsyncError(async(req,res,next)=>{
    const {role}=req.user;
    if(role === "Job Seeker"){
        return next(new ErrorHandler("Job Seeker is not authorized to use this function",400));
    }

    const {id}=req.params;
    let job=await Job.findById(id);
    if(!job){
        return next(new ErrorHandler("Oops, Job not found!",404));
    }

    await job.deleteOne();
    res.status(200).json({
        success:true,
        message:"Job deleted successfully!",
    });

});

export const getSingleJob=catchAsyncError(async(req,res,next)=>{
    const {id}=req.params;
    try {
        const job=await Job.findById(id);
        if(!job){
            return next(new ErrorHandler("Oops, Job not found!",404));
        }
        
        res.status(200).json({
            success:true,
            job
        });
    } catch (error) {
        return next(new ErrorHandler("Invalid ID/Cast Error",400));
    }
});