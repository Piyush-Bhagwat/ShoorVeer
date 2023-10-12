import React from "react";

const CatergoryCard = ({ name, isSelected }) => {
    return (
        <div
            className={`category-card ${
                isSelected && "category-card-selected"
            }`}
        >
            {name}
        </div>
    );
};

export default CatergoryCard;
