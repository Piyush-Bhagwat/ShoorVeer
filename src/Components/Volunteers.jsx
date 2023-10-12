import React from 'react'
import docimg from '../images/Doctor+Preview.avif'
function Volunteers({name}) {
  return (
    <div className='volunteers-card'>
      <h3>{name}</h3>
      <img src={docimg}></img>
    </div>
  )
}

export default Volunteers
