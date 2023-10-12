import React from 'react'

const Signup = () => {
  return (
    <div className="container mt-5 d-flex align-items-center justify-content-center">
    <div className="row flex-column">
      <div className="col-md-4 mb-4">
        <button className="btn btn-primary btn-lg btn-block" style={{width:"60vw"}}>Signup as Patient</button>
      </div>
      <div className="col-md-4 mb-4">
        <button className="btn btn-success btn-lg btn-block" style={{width:"60vw"}}>Signup as Volunteer</button>
      </div>
    </div>
  </div>
  

  )
}

export default Signup
