import { Component } from "react";
import React from "react";
import Volunteers from "../Components/Volunteers";
import CatergoryCard from "./catergoryCard";
import Button from "../Components/Button";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { makeRequest } from "../Firebase/firebaseInit";

function HomePage() {
    const { location,volunteerSelected, volunteerList, userData } = useContext(AppContext);

    const handleSendRequest = () => {
        const reqData = {
            loc: location,
            uid: userData.uid,
            isAccepted: false,
            vid: volunteerSelected,
            status: "sent",
        };

        makeRequest(reqData);

        toast.success("Request Sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    const renderVolunteerList = () => {
        return (
            <div className="volunteer-collection">
                {volunteerList.map((obj) => {
                    return (
                        <Volunteers
                            name={obj[0].name}
                            likes={obj[0].likes}
                            id={obj[1]}
                        />
                    );
                })}
            </div>
        );
    };

    return (
        <div className="home-page">
            <div className="heading">
                <div className="title-box">
                    <h3>Welcome,</h3>
                    <h1 className="user-name">Piyush Bhagwat</h1>
                </div>

                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    Bajaj Nagar, Nagpur
                </div>
            </div>

            <div className="catergory-collection">
                <CatergoryCard name="CareTaker" id="care-taker" />
                <CatergoryCard name="Driver" id="driver" />
                <CatergoryCard name="Cook" id="cook" />
                <CatergoryCard name="More >" id="null" />
            </div>

            {renderVolunteerList()}

            <div className="req-btn-cont">
                <Button
                    title="Request"
                    cls="req-btn"
                    func={handleSendRequest}
                />
            </div>
        </div>
    );
}

export default HomePage;
