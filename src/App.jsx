import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainSignup from "./pages/MainSignup";
import PatientSignup from "./pages/PatientSignup";
import VolunteerSignup from "./pages/VolunteerSignup";
import HomePage from "./pages/HomePage";
import CatergoryCard from "./pages/catergoryCard";
import { getVolunteers } from "./Firebase/firebaseInit";
import { useContext } from "react";
import { AppContext } from "./context/appContext";
import { useEffect } from "react";
import VolHome from "./pages/VolHome";
import LocationApp from "./Components/location";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentMode from "./pages/PaymentMode";
import Success from "./pages/Success";

function App() {
    const {
        setUserData,
        getDeviceCurrentLocation,
        isLogged,
        setVolunteerList,
        mode,
        setLogged,
        category,
        setMode,
    } = useContext(AppContext);

    useEffect(() => {
        const lsUserData = JSON.parse(localStorage.getItem("userInfo"));
        if (lsUserData) {
            setUserData(lsUserData);
            setLogged(true);
            setMode(lsUserData.type);
            getDeviceCurrentLocation();
            getVolunteers(category).then((dat) => {
                setVolunteerList(dat);
            });
        }
    }, []);

    useEffect(()=>{
        if(mode === "pet"){
            getVolunteers(category).then((dat) => {
                setVolunteerList(dat);
            });
        }
    }, [category]);


    return (
        <div className="App">
            <Navbar />
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            isLogged ? (
                                mode == "pet" ? (
                                    <HomePage />
                                ) : (
                                    <VolHome />
                                )
                            ) : (
                                <Login />
                            )
                        }
                    />

                    <Route path="/signup" element={<MainSignup />} />
                    <Route path="/patientsignup" element={<PatientSignup />} />
                    <Route
                        path="/volunteersignup"
                        element={<VolunteerSignup />}
                    />
                     <Route
                        path="/success"
                        element={<Success />}
                    />
                </Routes>
            </Router>
            {/* 
            <LocationApp /> */}
            <ToastContainer />
           
        </div>
    );
}

export default App;
