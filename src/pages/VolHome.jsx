import React, { useState } from "react";
import PatientCard from "../Components/PatientCard";
import { useEffect } from "react";
import { getRequest } from "../Firebase/firebaseInit";
import { useContext } from "react";
import { AppContext } from "../context/appContext";

const VolHome = () => {
    const { userData, requestData, setRequestData, patientData } =
        useContext(AppContext);

    useEffect(() => {
        const readRequests = () => {
            console.log("hello...");
            getRequest(userData.uid).then((res) => {
                if (res) {
                    setRequestData(res);
                    clearInterval(intervalId);
                }
            });
        };

        const intervalId = setInterval(readRequests, 8000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <div>{requestData && <PatientCard name={patientData?.name} />}</div>;
};

export default VolHome;
