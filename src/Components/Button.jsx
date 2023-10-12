import React from 'react'

const Button = ({title, cls, func}) => {
  return (
    <div className={`btn ${cls}`}>
        <button onClick={func}>{title}</button>
    </div>
  )
}

export default Button