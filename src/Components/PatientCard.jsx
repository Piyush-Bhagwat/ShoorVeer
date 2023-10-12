import React from "react";
import profilePic from "../images/profilePic1.jpg";

const PatientCard = () => {
    return (
        <div className="patient-card">
            <img src={profilePic} alt="User Image" />

            <div className="name">Piyush Ji</div>

            <div className="buttons">
                <button className="btn accept">Accept</button>
                <button className="btn reject">Reject</button>
            </div>
        </div>
    );
};

export default PatientCard;
