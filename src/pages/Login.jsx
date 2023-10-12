import React from 'react'

const Login = () => {
  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="mb-4">Login</h2>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter your password" />
            </div>
            <button className="btn btn-primary btn-block mb-3 mt-3">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
