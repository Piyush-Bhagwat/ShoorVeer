import React from 'react'

const Success = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <h2 className="mb-4">Request Confirmed!</h2>
              <p className="text-success">Your request has been confirmed successfully.</p>
              <p>You will receive the service from our healthcare provider soon.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success
