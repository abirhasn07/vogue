import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Notfound.css'
const Notfound = () => {
  return (
    <div className='not-found'>
        <h1>Opps !</h1>
        <p>404 - Page Not found</p>
        <NavLink className={"not-found-btn"} to={"/"}>Go To Home</NavLink>
    </div>
  )
}

export default Notfound