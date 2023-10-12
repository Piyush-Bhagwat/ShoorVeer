import React from 'react';
import image from '../assets/Profile.jpeg';
import "../styles/Card.css"

const Card = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
           <div className='card-item'>
           <img
              src={image} // Replace 'profile-image.jpg' with the actual image URL
              className="card-img-top card-profile"
              alt="Profile"
            />
            <div className='card-item2'>
            <h5 className="card-title">John Doe</h5>
              {/* <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus ut ligula
                suscipit, vel consectetur urna fermentum.
              </p> */}
            </div>
           </div>
            <div className="card-body">
             
              <div className="d-flex justify-content-end align-items-center">
                <button className="btn btn-success" style={{marginRight:"2vw"}}>Accept</button>
                <button className="btn btn-danger">Reject</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
