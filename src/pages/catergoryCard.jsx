import React, { useContext } from "react";
import { AppContext } from "../context/appContext";

const CatergoryCard = ({ name, id }) => {
  const {category, setCatergory} = useContext(AppContext);


    return (
        <div
            className={`category-card ${
                category === id && "category-card-selected"
            }`}
            onClick={() => setCatergory(id)}
        >
            {name}
        </div>
    );
};

export default CatergoryCard;
