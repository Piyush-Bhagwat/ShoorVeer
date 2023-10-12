import React from 'react'
import { Link } from 'react-router-dom'

const MainSignup = () => {
  return (
    <div className="container mt-5 d-flex align-items-center justify-content-center">
    <div className="row flex-column">
      <div className="col-md-4 mb-4">
        <Link to="/patientsignup" className="btn btn-primary btn-lg btn-block" style={{width:"60vw"}}>Signup as Patient</Link>
      </div>
      <div className="col-md-4 mb-4">
        <Link to="/volunteersignup" className="btn btn-success btn-lg btn-block" style={{width:"60vw"}}>Signup as Volunteer</Link>
      </div>
    </div>
  </div>
  

  )
}

export default MainSignup
