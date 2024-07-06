import React from "react";
import { FaApple, FaFacebook, FaMicrosoft } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import {SiTesla} from "react-icons/si";

const PopularCompanies=()=>{
    const companies = [
        {
          id: 1,
          title: "Microsoft",
          openPositions: 10,
          icon: <FaMicrosoft />,
        },
        {
          id: 2,
          title: "Tesla",
          openPositions: 5,
          icon: <SiTesla />,
        },
        {
          id: 3,
          title: "Apple",
          openPositions: 20,
          icon: <FaApple />,
        },
        {
            id: 4,
            title: "Google",
            openPositions: 10,
            icon: <FaGoogle />,
        },
        {
            id: 4,
            title: "Facebook",
            openPositions: 15,
            icon: <FaFacebook />,
        },
      ];

    return (
        <>
            <div className="companies">
                <div className="container">
                    <div className="soham">
                        <h3>POPULAR COMPANIES</h3>
                    </div>
                    <div className="banner">
                        {
                            companies.map(element=>{
                                return (
                                    <div className="card" key={element.id}>
                                        <div className="content">
                                            <div className="icons">{element.icon}</div>
                                            <div className="text">
                                                <p>{element.title}</p>
                                                <p>Open Positions:{element.openPositions}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularCompanies;