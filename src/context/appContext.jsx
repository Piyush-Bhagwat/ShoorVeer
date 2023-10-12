import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = (props) => {
    const [isLogged, setLogged] = useState(false);
    const [mode, setMode] = useState("Pet");
    const [userData, setUserData] = useState({ name: "", email: "", uid: "" });

    useEffect(()=>{console.log("userData: ", userData)}, [userData]);

    const contextValue = {
        isLogged,
        mode,
        userData,
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
