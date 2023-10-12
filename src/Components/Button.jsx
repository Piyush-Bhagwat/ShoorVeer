import React from "react";

const Button = ({ title, cls, func }) => {
    return (
        <button className={`btn ${cls}`} onClick={func}>
            {title}
        </button>
    );
};

export default Button;
