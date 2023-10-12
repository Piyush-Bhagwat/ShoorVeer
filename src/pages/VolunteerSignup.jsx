import React, { useState } from "react";
import { setNewVolunteer } from "../Firebase/firebaseInit";
import { useContext } from "react";
import { AppContext } from "../context/appContext";

const VolunteerSignup = () => {
    const {setUserData, setLogged} = useContext(AppContext);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        number: "",
        age: "",
        service: "",
        likes: Math.floor(Math.random()*100)
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSumbit = () => {
        let userData;
        setNewVolunteer(formData)

        setFormData({
            name: "",
            email: "",
            password: "",
            address: "",
            number: "",
            age: "",
            service: "",
            likes: Math.floor(Math.random()*100)
        });
        console.log(formData);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="mb-4">Registration</h2>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    name="name"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    name="password"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your address"
                                    name="address"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Mobile Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Enter your mobile number"
                                    name="number"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Age</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter your age"
                                    name="age"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Service</label>
                                <select
                                    className="form-control"
                                    name="service"
                                    onChange={handleChange}
                                >
                                    <option value="null">Select Service</option>
                                    <option value="cook">Cook</option>
                                    <option value="driver">Driver</option>
                                    <option value="care-taker">
                                        Caretaker
                                    </option>
                                </select>
                            </div>
                            <button
                                className="btn btn-primary btn-block mb-3 mt-3"
                                onClick={handleSumbit}
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerSignup;
