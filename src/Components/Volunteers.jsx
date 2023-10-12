import React from 'react'
import docimg from '../images/Doctor+Preview.avif'
function Volunteers({ name }) {
    return (
        <div className='volunteers-card'>
            <img src={docimg}></img>
            <div className="right-side">
                <h3>{name}</h3>
                <div className='hearticon'>
                    <div>
                        <i class="fa-solid fa-heart"></i>
                        4</div>
                    <i class="fa-solid fa-bookmark"></i>
                </div>
            </div>

        </div>
    )
}

export default Volunteers
