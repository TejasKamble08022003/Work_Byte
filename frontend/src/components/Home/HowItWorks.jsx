import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import {IoMdSend} from "react-icons/io";

const HowItWorks=()=>{
    return (
        <div className="howitworks">
            <div className="container">
                <h3>How WorkByte Works</h3>
                <div className="banner">
                    <div className="card">
                        <FaUserPlus />
                        <p>Create Account</p>
                        <p>Fill in your details, choose your role, and submit—you'll be ready to explore opportunities in minutes!</p>
                    </div>
                    <div className="card">
                        <MdFindInPage />
                        <p>Find a Job/Post a Job</p>
                        <p>Discover job listings matching your skills, interests, or post job openings to connect with top talent swiftly!</p>
                    </div>
                    <div className="card">
                        <IoMdSend />
                        <p>Apply For Job/Recruit Suitable Candidates</p>
                        <p>Apply for jobs that match your skills or recruit suitable candidates effortlessly</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HowItWorks;