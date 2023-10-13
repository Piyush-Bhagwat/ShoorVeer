import React from "react";
import profilePic from "../images/profilePic1.jpg";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../context/appContext";

const PatientCard = ({ name }) => {
    const { requestData, userData } = useContext(AppContext);
    const coor = { lat: 21.1458, log: 79.088155 };

    return (
        <div className="patient-card">
            <img src={profilePic} alt="User Image" />

            <div className="name">{name}</div>

            <div className="buttons">
                <button className="btn accept">
                    <a
                        href={`https://www.google.com/maps/dir/?api=1&origin=${userData.location}&destination=136,Unnamed Road, Opp. YCCE, Wanadongri Ct, Wanadongri,Maharashtra 441110&travelmode=driving`}
                    >
                        Accept
                    </a>
                </button>
                <button className="btn reject">Reject</button>
            </div>
        </div>
    );
};

export default PatientCard;
