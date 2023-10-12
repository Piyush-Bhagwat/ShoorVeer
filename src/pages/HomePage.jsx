import { Component } from "react";
import React from "react";
import Volunteers from "../Components/Volunteers";
import CatergoryCard from "./catergoryCard";
import Button from "../Components/Button";

function HomePage() {
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
                <CatergoryCard name="CareTaker" isSelected={true} />
                <CatergoryCard name="Driver" isSelected={false} />
                <CatergoryCard name="Cook" isSelected={false} />
                <CatergoryCard name="More >" isSelected={false} />
            </div>

            <div className="volunteer-collection">
                <Volunteers name="Dev Mulkarwar" />
            </div>

            <div className="req-btn-cont">
                <Button title="Request" cls="req-btn" />
            </div>
        </div>
    );
}

export default HomePage;
