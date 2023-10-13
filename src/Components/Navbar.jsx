import React from "react";

function navbar() {
    const logoutHandler = () => {
        localStorage.removeItem("userInfo");
        window.location.href='/';
        window.location.reload();
    }

    return (
        <div className="nav-bar">
            <div className="logo-text"><span className="highlight">CARE</span>connect</div>

            <button className="user-icon"
                onClick={logoutHandler}
            >
                
                    <i class="fa-solid fa-user"></i>
            </button>
        </div>
    );
}

export default navbar;
