import React from "react";
import docimg from "../images/Doctor+Preview.avif";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
function Volunteers({ name, id, likes }) {
    const { volunteerSelected, setVolunteerSelected } = useContext(AppContext);

    return (
        <div
            className={`volunteers-card ${
                volunteerSelected === id && "selected"
            }`}
            onClick={() => setVolunteerSelected(id)}
        >
            <img src={docimg}></img>
            <div className="right-side">
                <h3>{name}</h3>
                <div className="hearticon">
                    <div>
                        <i class="fa-solid fa-heart"></i>
                        {likes}
                    </div>
                    <i class="fa-solid fa-bookmark"></i>
                </div>
            </div>
        </div>
    );
}

export default Volunteers;
