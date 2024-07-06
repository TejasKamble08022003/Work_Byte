import express from "express";
import {deleteJob, getAllJobs, getMyJobs, getSingleJob, postJobs, updateJobs} from "../controllers/jobController.js";
import { isAuthorized } from "../middlewares/auth.js";

const router=express.Router();

router.get("/getall",getAllJobs);
router.post("/post",isAuthorized,postJobs);
router.get("/getmyjobs",isAuthorized,getMyJobs);
router.put("/update/:id",isAuthorized,updateJobs);
router.delete("/delete/:id",isAuthorized,deleteJob);
router.get("/:id",isAuthorized,getSingleJob);

export default router;