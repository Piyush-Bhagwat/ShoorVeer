import React from "react";
import Volunteers from "../Components/Volunteers";
import PatientCard from "../Components/PatientCard";
import { useEffect } from "react";
import { getRequest } from "../Firebase/firebaseInit";
import { useContext } from "react";
import { AppContext } from "../context/appContext";

const VolHome = () => {
    const { userData,requestData, setRequestData,patientData } = useContext(AppContext);

    const readRequests = () => {
        getRequest(userData.uid).then((res) => {
            if (res) {
                setRequestData(res);
                clearInterval(intervalID);
            }
        });
    };

    let intervalID = setInterval(async () => {
        //Waiting for request
        readRequests();
    }, 4000);

    return (
        <div>
            {requestData && <PatientCard name={patientData?.name}/>}
        </div>
    );
};

export default VolHome;
