import React from "react";
import { Link } from "react-router-dom";

function navbar() {
    return (
        <div className="nav-bar">
            <div className="logo-text">CareConnect</div>

            <button className="user-icon">
                <a href="#">
                    <i class="fa-solid fa-user"></i>
                </a>
            </button>
        </div>
    );
}

export default navbar;
