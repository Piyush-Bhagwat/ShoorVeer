import { Component } from "react";
import React from "react";
import Volunteers from "../Components/Volunteers";

function HomePage() {
    return (
        <div className="home-page">
            <div className="title-box">
                <h3>Welcome,</h3>
                <h1 className="user-name">Piyush Bhagwat</h1>
            </div>

            <div className="location">
                <i className="fa-solid fa-location-dot"></i>
                Bajaj Nagar, Nagpur
            </div>

            <Volunteers name="Dev Mulkarwar" />
        </div>
    );
}

export default HomePage;
