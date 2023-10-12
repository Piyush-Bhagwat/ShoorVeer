import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const AppContext = createContext(null);

const AppContextProvider = (props) => {
    const [isLogged, setLogged] = useState(false);
    const [mode, setMode] = useState("Pet");
    const [userData, setUserData] = useState({ name: "", email: "", uid: "" });
    const [location, setLocation] = useState({ lat: "", lon: "" });
    const [volunteerSelected, setVolunteerSelected] = useState(false);
    const [category, setCatergory] = useState("care-taker");
    const [volunteerList, setVolunteerList] = useState([]);

    useEffect(() => {
        console.log("userData: ", userData);
    }, [userData]);

    const getDeviceCurrentLocation = async () => {
        const locData = await axios.get("https://ipapi.co/json");
        setLocation({ lat: locData.data.latitude, log: locData.data.longitude });
    };

    useEffect(()=>{console.log("VounteerList: ", volunteerList)}, [volunteerList]);

    const contextValue = {
        isLogged,
        mode,
        userData,
        volunteerList,
        setVolunteerList,
        location,
        getDeviceCurrentLocation,
        setLogged,
        setMode,
        category,
        setCatergory,
        volunteerSelected,
        setVolunteerSelected,
        setUserData,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
