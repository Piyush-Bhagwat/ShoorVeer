import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLogin } from "../Firebase/firebaseInit";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () =>{
    const data = {email, pass};
    getLogin(data);
  }

  useEffect(()=>{console.log(email)}, [email]);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="mb-4">Login</h2>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={(e) => setPass(e.target.value)}
                                    value={pass}
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button className="btn btn-primary btn-block mb-3 mt-3" onClick={handleLogin}>
                                Login
                            </button>
                            <Link
                                to="/signup"
                                className="btn btn-primary btn-block mb-3 mt-3"
                                style={{ marginLeft: "2vw" }}
                            >
                                Signup
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
