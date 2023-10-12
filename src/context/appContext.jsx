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

    useEffect(() => {
        console.log("userData: ", userData);
    }, [userData]);

    const getDeviceCurrentLocation = async () => {
        const locData = await axios.get("https://ipapi.co/json");
        setLocation({ lat: locData.data.latitude, log: locData.data.longitude });
    };

    const contextValue = {
        isLogged,
        mode,
        userData,
        location,
        getDeviceCurrentLocation,
        setLogged,
        setMode,
        setUserData,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
