import React from 'react'

const PatientSignup = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="mb-4">Registration</h2>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="form-group mt-3">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter your password" />
              </div>
              <div className="form-group mt-3">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Confirm your password" />
              </div>
              <div className="form-group mt-3">
                <label>Address</label>
                <input type="text" className="form-control" placeholder="Enter your address" />
              </div>
              <div className="form-group mt-3">
                <label>Mobile Number</label>
                <input type="tel" className="form-control" placeholder="Enter your mobile number" />
              </div>
              <div className="form-group mt-3">
                <label>Age</label>
                <input type="number" className="form-control" placeholder="Enter your age" />
              </div>
              <button className="btn btn-primary btn-block mb-3 mt-3">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientSignup
